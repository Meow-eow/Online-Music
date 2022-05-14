from . import db

# 用户表
class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)             # 编号
    username = db.Column(db.String(100))                     # 用户名
    pwd = db.Column(db.String(100))                          # 密码
    flag = db.Column(db.Boolean,default=0)                   # 用户标识，0：普通用户 1：管理员

    def __repr__(self):
        return '<User %r>' % self.name

    def check_pwd(self, pwd):
        """
        检测密码是否正确
        :param pwd: 密码
        :return: 返回布尔值
        """
        from werkzeug.security import check_password_hash
        return check_password_hash(self.pwd, pwd)

# 歌手表
class Artist(db.Model):
    __tablename__ =  'artist'
    id = db.Column(db.Integer, primary_key=True)             # 编号
    artistName = db.Column(db.String(100))                    # 歌手名
    style = db.Column(db.Integer)                             # 歌手类型
    imgURL = db.Column(db.String(100))                        # 头像
    isHot = db.Column(db.Boolean,default=0)                   # 是否热门

# 歌曲表
class Song(db.Model):
    __tablename__ = 'song'
    id = db.Column(db.Integer, primary_key=True)              # 编号
    songName = db.Column(db.String(100))                      # 歌曲名称
    singer = db.Column(db.String(100))                        # 歌手名称
    fileURL = db.Column(db.String(100))                       # 歌曲图片
    hits = db.Column(db.Integer,default=0)                    # 点击量
    style = db.Column(db.Integer)                             # 歌曲类型 0：全部 1:华语 2：欧美 3：日语 4：韩语 5 其他
    collect = db.relationship('Collect', backref='song')      # 收藏外键关系关联

# 歌曲收藏
class Collect(db.Model):
    __tablename__ = "collect"
    id = db.Column(db.Integer, primary_key=True)              # 编号
    song_id = db.Column(db.Integer, db.ForeignKey('song.id')) # 所属歌曲
    user_id = db.Column(db.Integer)                           # 所属用户
