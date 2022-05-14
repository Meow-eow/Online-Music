/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : music

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-07-24 11:16:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for alembic_version
-- ----------------------------
DROP TABLE IF EXISTS `alembic_version`;
CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL,
  PRIMARY KEY (`version_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of alembic_version
-- ----------------------------
INSERT INTO `alembic_version` VALUES ('7f80b932e40f');

-- ----------------------------
-- Table structure for artist
-- ----------------------------
DROP TABLE IF EXISTS `artist`;
CREATE TABLE `artist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artistName` varchar(100) DEFAULT NULL,
  `style` int(11) DEFAULT NULL,
  `imgURL` varchar(100) DEFAULT NULL,
  `isHot` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of artist
-- ----------------------------
INSERT INTO `artist` VALUES ('16', 'Eminem', '2', '4.jpg', '1');
INSERT INTO `artist` VALUES ('17', 'Avril Lavigne', '2', '5.jpg', '1');
INSERT INTO `artist` VALUES ('18', 'Westlife', '2', '6.jpg', '1');
INSERT INTO `artist` VALUES ('19', '久石譲', '3', '7.jpg', '1');
INSERT INTO `artist` VALUES ('20', '小林未郁', '3', '8.jpg', '1');
INSERT INTO `artist` VALUES ('21', 'Annabel', '3', '9.jpg', '1');
INSERT INTO `artist` VALUES ('22', 'G-Drago', '4', '10.jpg', '1');
INSERT INTO `artist` VALUES ('23', 'Gary', '4', '11.jpg', '1');
INSERT INTO `artist` VALUES ('24', '金泰妍', '4', '12.jpg', '1');
INSERT INTO `artist` VALUES ('25', '艾力·阿克苏巴', '5', '13.jpg', '1');
INSERT INTO `artist` VALUES ('26', '邓泰山', '5', '14.jpg', '1');
INSERT INTO `artist` VALUES ('27', 'Dome Pakor', '1', '15.jpg', '1');
INSERT INTO `artist` VALUES ('28', '刘德华', '1', '16.jpg', '1');
INSERT INTO `artist` VALUES ('29', '张学友', '1', '18.jpg', '0');
INSERT INTO `artist` VALUES ('30', '张信哲', '1', '张信哲.jpg', '0');

-- ----------------------------
-- Table structure for collect
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `song_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `song_id` (`song_id`),
  CONSTRAINT `collect_ibfk_1` FOREIGN KEY (`song_id`) REFERENCES `song` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collect
-- ----------------------------
INSERT INTO `collect` VALUES ('1', '19', '2');
INSERT INTO `collect` VALUES ('2', '20', '2');
INSERT INTO `collect` VALUES ('3', '21', '2');
INSERT INTO `collect` VALUES ('4', '62', '2');
INSERT INTO `collect` VALUES ('5', '35', '2');

-- ----------------------------
-- Table structure for song
-- ----------------------------
DROP TABLE IF EXISTS `song`;
CREATE TABLE `song` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `songName` varchar(100) DEFAULT NULL,
  `singer` varchar(100) DEFAULT NULL,
  `fileURL` varchar(100) DEFAULT NULL,
  `hits` int(11) DEFAULT NULL,
  `style` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of song
-- ----------------------------
INSERT INTO `song` VALUES ('19', 'Lose Yourself ', 'Eminem', '16.mp3', '132', '2');
INSERT INTO `song` VALUES ('20', 'Love the Way You Lie ', 'Eminem', '17.mp3', '8', '2');
INSERT INTO `song` VALUES ('21', 'Lighters', 'Eminem', '18.mp3', '17', '2');
INSERT INTO `song` VALUES ('22', 'Innocence', 'Avril Lavigne', '19.mp3', '3', '2');
INSERT INTO `song` VALUES ('26', 'Here To Never Growing Up', 'Avril Lavigne', '20.mp3', '1', '2');
INSERT INTO `song` VALUES ('27', 'When You re Gone', 'Avril Lavigne', '21.mp3', '1', '2');
INSERT INTO `song` VALUES ('28', 'My Love', 'Westlife', '22.mp3', '0', '2');
INSERT INTO `song` VALUES ('29', 'Seasons In The Su', 'Westlife', '23.mp3', '1', '2');
INSERT INTO `song` VALUES ('30', 'You Raise Me Up', 'Westlife', '24.mp3', '1', '2');
INSERT INTO `song` VALUES ('31', 'Beautiful In White (Demo)', 'Westlife', '25.mp3', '0', '2');
INSERT INTO `song` VALUES ('32', 'Soledad', 'Westlife', '26.mp3', '2', '2');
INSERT INTO `song` VALUES ('33', 'Summer', '久石譲', '27.mp3', '0', '3');
INSERT INTO `song` VALUES ('34', 'The Rai', '久石譲', '28.mp3', '6', '3');
INSERT INTO `song` VALUES ('35', '月光の云海', '久石譲', '29.mp3', '33', '3');
INSERT INTO `song` VALUES ('36', 'Silent Love', '久石譲', '30.mp3', '0', '3');
INSERT INTO `song` VALUES ('37', '“天空の城ラピュタ”~君をのせて', '久石譲', '31.mp3', '0', '1');
INSERT INTO `song` VALUES ('38', '太阳照常升起', '久石譲', '32.mp3', '0', '3');
INSERT INTO `song` VALUES ('39', '《七大罪》', '小林未郁', '33.mp3', '0', '3');
INSERT INTO `song` VALUES ('40', 'Through My Blood', '小林未郁', '34.mp3', '0', '3');
INSERT INTO `song` VALUES ('41', 'Song of', '小林未郁', '35.mp3', '0', '3');
INSERT INTO `song` VALUES ('42', '夜の国 ', 'Annabel', '36.mp3', '1', '3');
INSERT INTO `song` VALUES ('43', 'Above your hand', 'Annabel', '37.mp3', '1', '3');
INSERT INTO `song` VALUES ('44', 'あなたの笑顔という', 'Annabel', '38.mp3', '1', '3');
INSERT INTO `song` VALUES ('45', '&#49296;&#46385;&#54616;&#44172; ', 'G-Drago', '39.mp3', '0', '4');
INSERT INTO `song` VALUES ('46', 'Missing You', 'G-Drago', '40.mp3', '3', '4');
INSERT INTO `song` VALUES ('47', '少年啊', 'G-Drago', '41.mp3', '1', '4');
INSERT INTO `song` VALUES ('48', '我的天', 'G-Drago', '42.mp3', '1', '4');
INSERT INTO `song` VALUES ('50', '&#48148;&#46988;&#51060;&#45208; &#51328; &#50192;', 'Gary', '44.mp3', '0', '4');
INSERT INTO `song` VALUES ('51', '戏子', 'Gary', '45.mp3', '0', '4');
INSERT INTO `song` VALUES ('52', '人情味', 'Gary', '46.mp3', '0', '4');
INSERT INTO `song` VALUES ('56', '&#51228;&#51452;&#46020;', '金泰妍', '47.mp3', '1', '4');
INSERT INTO `song` VALUES ('57', '&#51082;&#50612;&#48260;&#47532;&#51648;&#47560;', '金泰妍', '48.mp3', '0', '4');
INSERT INTO `song` VALUES ('58', '&#47564;&#50557;&#50640;', '金泰妍', '49.mp3', '0', '4');
INSERT INTO `song` VALUES ('59', 'Ayaling', '艾力·阿克苏巴', '50.mp3', '0', '5');
INSERT INTO `song` VALUES ('60', 'in b Flat Minor Op. 9-1', '邓泰山', '51.mp3', '1', '5');
INSERT INTO `song` VALUES ('62', '别说我爱你', 'Dome Pakor', '52.mp3', '58', '5');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `pwd` varchar(100) DEFAULT NULL,
  `flag` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'mr', 'pbkdf2:sha256:50000$TkExX9Jm$d63477853a17dcaedcd52be4b6213ebb74b61a12456762ac19d6b7dfb559aa57', '1');
INSERT INTO `user` VALUES ('2', 'zhangsan', 'pbkdf2:sha256:50000$9rtpxnXw$ff3f07c00c1395dc2293293a2d3f98ca11f3e8c16f4adebafd4890b726c37f9b', '0');
