# _*_ coding: utf-8 _*_
from . import home
from app import db
from app.home.forms import LoginForm,RegisterForm,SuggetionForm
from app.models import User ,Artist,Song,Collect
from flask import render_template, url_for, redirect, flash, session, request,jsonify
from werkzeug.security import generate_password_hash
from functools import wraps

def admin_login(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session['username'] != 'Lotus' :
            return redirect(url_for("home.index"))
        return f(*args, **kwargs)
    return decorated_function

def user_login(f):
    """
    登录装饰器
    """
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if "user_id" not in session:
            return "<script>alert('请先登录');history.go(-1)</script>"
        return f(*args, **kwargs)

    return decorated_function


@home.route("/contentFrame")
def contentFrame():
    """
    主页面
    """
    hot_artist = Artist.query.filter_by(isHot=1).limit(12).all()                              # 获取歌手数据
    hot_song = Song.query.order_by(Song.hits.desc()).limit(10).all()                          # 获取歌曲数据
    return render_template('home/contentFrame.html',hot_artist=hot_artist,hot_song=hot_song) # 渲染模板

@home.route("/")
def index():
    """
    首页
    """
    return render_template('home/index.html') # 渲染模板

@home.route("/login/", methods=["GET", "POST"])
def login():
    """
    登录
    """
    if request.method == 'POST':
        username = request.form.get("username")
        pwd =  request.form.get("pwd")
        user = User.query.filter_by(username=username).first()    # 获取用户信息
        res = {}
        # 检测用户名
        if not user :
            res['status'] = -1
            res['message'] = '用户名不存在'
            return jsonify(res)
        # 检测密码
        if not user.check_pwd(pwd):     # 调用check_pwd()方法，检测用户名密码是否匹配
            res['status'] = -2
            res['message'] = '用户名和密码不匹配'
            return jsonify(res)
        # 用户名和密码正确，写入session
        session["user_id"] = user.id  # 将user_id写入session, 后面用户判断用户是否登录
        session["username"] = user.username  # 将user_id写入session, 后面用户判断用户是否登录
        res['status'] = 1
        res['message'] = '登录成功'
        return jsonify(res)
    return render_template("home/login.html")

@home.route("/register/", methods=["GET","POST"])
def register():
    """
    注册功能
    """
    if request.method == "POST":   # 提交注册表单
        username = request.form.get("username")
        pwd =  request.form.get("pwd")
        # 判断用户名是否存在
        user = User.query.filter_by(username=username).first()  # 获取用户信息
        if user:
            res = {}
            res['status'] = -2
            res['message'] = '该用户已存在'
            return jsonify(res)
        # 写入到user表
        try:
            # 为User类属性赋值
            user = User(
                username = username,  # 用户名
                pwd = generate_password_hash(pwd),# 对密码加密
            )
            db.session.add(user) # 添加数据
            db.session.commit()  # 提交数据
            res = {}
            res['status'] = 1
            res['message'] = '注册成功'
        except:
            res = {}
            res['status'] = -1
            res['message'] = '注册失败'
        return jsonify(res)
    return render_template("home/register.html")

@home.route("/logout/")
def logout():
    """
    退出登录
    """
    # 重定向到home模块下的登录。
    session.pop("user_id", None)
    session.pop("username", None)
    return redirect(url_for('home.index'))


@home.route("/artist/<int:id>")
def artist(id=None):
    """
    歌手页
    """
    song = Song.query.join(Artist,Song.singer==Artist.artistName).filter(Artist.id==id).all()
    hot_artist = Artist.query.limit(6).all()
    return render_template('home/artist.html',song=song,hot_artist=hot_artist) # 渲染模板

@home.route("/toplist")
def toplist():
    top_song = Song.query.order_by(Song.hits.desc()).limit(30).all()
    hot_artist = Artist.query.limit(6).all()
    return render_template('home/toplist.html', top_song=top_song, hot_artist=hot_artist)  # 渲染模板

@home.route('/style_list')
def styleList():
    """
    曲风
    """
    type = request.args.get('type',0,type=int)
    page = request.args.get('page',type=int)  # 获取page参数值
    if type:
        page_data = Song.query.filter_by(style=type).order_by(Song.hits.desc()).paginate(page=page, per_page=10)
    else:
        page_data = Song.query.order_by(Song.hits.desc()).paginate(page=page, per_page=10)
    return render_template('home/styleList.html', page_data=page_data,type=type)  # 渲染模板

@home.route('/artist_list')
def artistList():
    '''
    歌手列表
    '''
    type = request.args.get('type',0,type=int)
    page = request.args.get('page',type=int)  # 获取page参数值
    if type:
        page_data = Artist.query.filter_by(style=type).paginate(page=page, per_page=10)
    else:
        page_data = Artist.query.paginate(page=page, per_page=10)
    return render_template('home/artistList.html', page_data=page_data,type=type)  # 渲染模板

# 发现音乐
@home.route('/search')
def search():
    keyword = request.args.get('keyword')  # 获取关键字
    page = request.args.get('page', type=int)  # 获取page参数值
    if keyword:
        keyword = keyword.strip()
        page_data = Song.query.filter(Song.songName.like('%'+keyword+'%')).order_by(Song.hits.desc()).paginate(page=page, per_page=10)
    else:
        page_data = Song.query.order_by(Song.hits.desc()).paginate(page=page, per_page=10)
    return render_template('home/search.html',keyword=keyword,page_data=page_data)


@home.route('/modify_password',methods=['GET','POST'])
def modifyPassword():
    if request.method == 'POST':
        old_pwd =  request.form.get("old_pwd")
        new_pwd =  request.form.get("new_pwd")
        # 检查原始密码是否正确
        user = User.query.filter_by(id=session['user_id']).first()  # 获取用户信息
        res = {}
        if not user.check_pwd(old_pwd):
            res['status'] = -1
            res['message'] = '原始密码错误'
            return jsonify(res)
        # 更改密码
        try:
            user.pwd = generate_password_hash(new_pwd) # 对新密码加密
            db.session.add(user)
            db.session.commit()
            res['status'] = 1
            res['message'] = '密码修改成功'
            return jsonify(res)
        except:
            res['status'] = -2
            res['message'] = '密码修改错误'
            return jsonify(res)
    return render_template("home/modifyPassword.html")


@home.route("/collect")
@user_login
def collect():
    """
    收藏歌曲
    """
    song_id = request.args.get("id", "")            # 接收传递的参数歌曲ID
    user_id   = session['user_id']                  # 获取当前用户的ID
    collect = Collect.query.filter_by(              # 根据用户ID和景区ID判断是否该收藏
        user_id =int(user_id),
        song_id=int(song_id)
    ).count()
    res = {}
    # 已收藏
    if collect == 1:
        res['status'] = 0
        res['message'] = '已经收藏'
    # 未收藏进行收藏
    if collect == 0:
        collect = Collect(
            user_id =int(user_id),
            song_id=int(song_id)
        )
        db.session.add(collect)  # 添加数据
        db.session.commit()      # 提交数据
        res['status'] = 1
        res['message'] = '收藏成功'
    return jsonify(res)     # 返回json数据

@home.route("/collect_list")
@user_login
def collectList():
    page = request.args.get('page',type=int)  # 获取page参数值
    page_data = Collect.query.paginate(page=page, per_page=10)
    return render_template('home/collectList.html',page_data=page_data)


@home.route("/manage_artist_list")
@admin_login
def manageArtist():
    '''
    后台管理
    '''
    page = request.args.get('page',type=int)  # 获取page参数值
    page_data = Artist.query.paginate(page=page, per_page=10)
    return render_template('home/manageArtist.html', page_data=page_data)


@home.route("/manage_artist_add", methods=["GET","POST"])
@admin_login
def manageArtistAdd():
    '''
    新增歌手
    '''
    if request.method == "POST":   # 提交注册表单
        artistName = request.form.get("artistName")
        style =  request.form.get("style")
        imgURL =  request.form.get("imgURL")
        isHot =  request.form.get("isHot")
        # 判断歌手是否存在
        artist = Artist.query.filter_by(artistName=artistName).first()  # 获取用户信息
        if artist:
            res = {}
            res['status'] = -2
            res['message'] = '该歌手已存在'
            return jsonify(res)
        # 写入到Artist表
        try:
            # 为Artist类属性赋值
            artist = Artist(
                artistName = artistName,
                style  = int(style),
                imgURL = imgURL,
                isHot  = int(isHot)
            )
            db.session.add(artist) # 添加数据
            db.session.commit()    # 提交数据
            res = {}
            res['status'] = 1
            res['message'] = '添加成功'
        except:
            res = {}
            res['status'] = -1
            res['message'] = '添加失败'
        return jsonify(res)
    return render_template('home/manageArtistAdd.html')

@home.route("/manage_artist_edit", methods=["GET","POST"])
@admin_login
def manageArtistEdit():
    '''
    编辑歌手
    '''
    id = request.values['id']      # POST和GET提交都可以获取ID
    artist = Artist.query.filter_by(id=id).first()  # 获取用户信息
    if request.method == "POST":   # 提交注册表单
        # 更改Artist表
        artistName = request.form.get("artistName")
        style = request.form.get("style")
        imgURL = request.form.get("imgURL")
        isHot = request.form.get("isHot")
        try:
            artist.artistName = artistName
            artist.style = int(style)
            artist.imgURL = imgURL
            artist.isHot = int(isHot)
            db.session.add(artist) # 添加数据
            db.session.commit()    # 提交数据
            res = {}
            res['status'] = 1
            res['message'] = '保存成功'
        except :
            res = {}
            res['status'] = -1
            res['message'] = '保存失败'
        return jsonify(res)
    return render_template('home/manageArtistEdit.html',artist=artist)

@home.route("/manage_artist_del")
@admin_login
def manageArtistDel():
    '''

    删除歌手

    '''

    id = request.args.get('id')      # 获取ID
    try:
        artist = Artist.query.get_or_404(int(id))
        db.session.delete(artist)
        db.session.commit()
        res = {}
        res['status'] = 1
        res['message'] = '删除成功'
    except:
        res = {}
        res['status'] = -1
        res['message'] = '删除失败'
    return jsonify(res)

@home.route("/manage_song_list")
@admin_login
def manageSong():
    '''
    歌曲管理
    '''
    page = request.args.get('page',type=int)  # 获取page参数值
    page_data = Song.query.paginate(page=page, per_page=10)
    return render_template('home/manageSong.html', page_data=page_data)

@home.route("/manage_song_add", methods=["GET","POST"])
@admin_login
def manageSongAdd():
    '''
    新增歌曲
    '''
    if request.method == "POST":   # 提交注册表单
        songName = request.form.get("songName")
        singer = request.form.get("singer")
        style =  request.form.get("style")
        fileURL =  request.form.get("fileURL")
        # 判断歌手是否存在
        song = Song.query.filter_by(songName=songName).first()  # 获取歌曲信息
        if song:
            res = {}
            res['status'] = -2
            res['message'] = '该歌曲已存在'
            return jsonify(res)
        # 写入到Song表
        # 为Song类属性赋值
        try:
            # 为Song类属性赋值
            song = Song(
                songName = songName,  # 歌曲名称
                singer = singer,      # 歌手
                style  = 1,  # 歌曲类型
                fileURL = fileURL     # 文件路径
            )
            db.session.add(song) # 添加数据
            db.session.commit()    # 提交数据
            res = {}
            res['status'] = 1
            res['message'] = '添加成功'
        except :
            res = {}
            res['status'] = -1
            res['message'] = '添加失败'
        return jsonify(res)
    return render_template('home/manageSongAdd.html')

@home.route("/manage_song_edit", methods=["GET","POST"])
@admin_login
def manageSongEdit():
    '''
    编辑歌曲
    '''
    id = request.values['id']      # POST和GET提交都可以获取ID
    song = Song.query.filter_by(id=id).first()  # 获取用户信息
    if request.method == "POST":   # 提交注册表单
        # 更改Song表
        songName = request.form.get("songName")
        singer = request.form.get("singer")
        style = request.form.get("style")
        fileURL = request.form.get("fileURL")
        try:
            song.songName = songName
            song.singer = singer
            song.style = int(style)
            song.fileURL = fileURL
            db.session.add(song)   # 添加数据
            db.session.commit()    # 提交数据
            res = {}
            res['status'] = 1
            res['message'] = '保存成功'
        except :
            res = {}
            res['status'] = -1
            res['message'] = '保存失败'
        return jsonify(res)
    return render_template('home/manageSongEdit.html',song=song)

@home.route("/manage_song_del")
@admin_login
def manageSongDel():
    '''
    删除歌曲
    '''
    id = request.args.get('id')      # 获取ID
    try:
        song = Song.query.get_or_404(int(id))
        db.session.delete(song)
        db.session.commit()
        res = {}
        res['status'] = 1
        res['message'] = '删除成功'
    except:
        res = {}
        res['status'] = -1
        res['message'] = '删除失败'
    return jsonify(res)


@home.route('/addHit')
def addHit():
    '''
    点击量加1
    '''
    id = request.args.get('id')
    song = Song.query.get_or_404(int(id))
    if not song:
        res = {}
        res['status'] = -1
        res['message'] = '歌曲不存在'
    # 更改点击量
    else:
        song.hits += 1
        db.session.add(song)
        db.session.commit()
        res = {}
        res['status'] = 1
        res['message'] = '播放次数加1'
    return jsonify(res)


