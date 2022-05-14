# _*_ coding: utf-8 _*_
from . import home
from app import db
from app.home.forms import LoginForm,RegisterForm,SuggetionForm
from app.models import User ,Artist,Song,Collect
from flask import render_template, url_for, redirect, flash, session, request,jsonify
from werkzeug.security import generate_password_hash
from functools import wraps


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

@home.route("/artist/<int:id>")
def artist(id=None):
    """
    歌手页
    """
    song = Song.query.join(Artist,Song.singer==Artist.artistName).filter(Artist.id==id).all()
    hot_artist = Artist.query.limit(6).all()
    return render_template('home/artist.html',song=song,hot_artist=hot_artist) # 渲染模板


