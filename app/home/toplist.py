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




