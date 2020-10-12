/*
 Navicat MySQL Data Transfer

 Source Server         : 本机@localhost
 Source Server Type    : MySQL
 Source Server Version : 50731
 Source Host           : localhost:3306
 Source Schema         : sys_acl

 Target Server Type    : MySQL
 Target Server Version : 50731
 File Encoding         : 65001

 Date: 12/10/2020 19:00:20
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_i18n_language
-- ----------------------------
DROP TABLE IF EXISTS `sys_i18n_language`;
CREATE TABLE `sys_i18n_language`  (
  `id` bigint(20) NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '区域语言编码',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '区域语言名称',
  `display_priority` int(11) NULL DEFAULT NULL COMMENT '显示优先级(值越大优先级越高.最大值:9999)',
  `creator_id` bigint(20) NULL DEFAULT 0 COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `editor_id` bigint(20) NULL DEFAULT 0 COMMENT '编辑人',
  `edit_time` datetime(0) NULL DEFAULT NULL COMMENT '编辑时间',
  `invalid` tinyint(4) NULL DEFAULT 1 COMMENT '是否作废. 1.未作废 0.已作废',
  `invalid_operator_id` bigint(20) NULL DEFAULT 0 COMMENT '废弃操作人id',
  `invalid_time` datetime(0) NULL DEFAULT NULL COMMENT '废弃时间',
  `invalid_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '执行作废操作的操作人姓名',
  `creator_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建人姓名',
  `editor_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '编辑人姓名',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_code`(`code`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '区域语言' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_i18n_language
-- ----------------------------
INSERT INTO `sys_i18n_language` VALUES (1, 'zh-CN', '中文', 1, 0, NULL, 0, NULL, 1, 0, NULL, '', '', '');
INSERT INTO `sys_i18n_language` VALUES (1314389299764006912, 'bb', 'aa', 0, 0, '2020-10-09 10:16:44', 0, '2020-10-09 10:16:44', 1, 0, NULL, '', '', '');
INSERT INTO `sys_i18n_language` VALUES (1314445264748154880, 'cc', 'cccc', 0, 0, '2020-10-09 13:59:07', 0, '2020-10-09 13:59:07', 1, 0, NULL, '', '', '');
INSERT INTO `sys_i18n_language` VALUES (1314445668122759168, 'dd', 'dd', 0, 0, '2020-10-09 14:00:43', 0, '2020-10-09 14:00:43', 1, 0, NULL, '', '', '');
INSERT INTO `sys_i18n_language` VALUES (1315073179898744832, 'aa', 'aa', 1, 0, '2020-10-11 07:34:14', 0, '2020-10-11 07:34:14', 1, 0, NULL, '', '', '');
INSERT INTO `sys_i18n_language` VALUES (1315552148142034944, 'ww', '外委', 1, 0, '2020-10-12 15:17:29', 0, '2020-10-12 15:17:29', 1, 0, NULL, '', '', '');

-- ----------------------------
-- Table structure for sys_i18n_resource_code
-- ----------------------------
DROP TABLE IF EXISTS `sys_i18n_resource_code`;
CREATE TABLE `sys_i18n_resource_code`  (
  `id` bigint(20) NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '资源编码',
  `creator_id` bigint(20) NULL DEFAULT 0 COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `editor_id` bigint(20) NULL DEFAULT 0 COMMENT '编辑人',
  `edit_time` datetime(0) NULL DEFAULT NULL COMMENT '编辑时间',
  `creator_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建人姓名',
  `editor_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '编辑人姓名',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_code`(`code`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '国际化资源编码' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_i18n_resource_code
-- ----------------------------
INSERT INTO `sys_i18n_resource_code` VALUES (1, 'language.displayPriority.error', 0, NULL, 0, NULL, '', '');

-- ----------------------------
-- Table structure for sys_i18n_resource_value
-- ----------------------------
DROP TABLE IF EXISTS `sys_i18n_resource_value`;
CREATE TABLE `sys_i18n_resource_value`  (
  `language_id` bigint(20) NOT NULL,
  `resource_id` bigint(20) NOT NULL,
  `resource_text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '资源值',
  PRIMARY KEY (`language_id`, `resource_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '国际化资源值' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_i18n_resource_value
-- ----------------------------
INSERT INTO `sys_i18n_resource_value` VALUES (1, 1, '请指定显示优先级');

-- ----------------------------
-- Table structure for sys_login_log
-- ----------------------------
DROP TABLE IF EXISTS `sys_login_log`;
CREATE TABLE `sys_login_log`  (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NULL DEFAULT NULL COMMENT '用户id',
  `login_time` datetime(0) NULL DEFAULT NULL COMMENT '登录时间',
  `client_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '登录ip',
  `client_operating_system` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '客户端操作系统名称和版本',
  `client_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '客户端名称和版本(如:chorme 64, IE 10)',
  `login_result` tinyint(4) NULL DEFAULT NULL COMMENT '登录结果 1.登录成功 2.登录失败',
  `exception_info` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '异常信息',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_login_time`(`login_time`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '登录日志' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_login_log
-- ----------------------------

-- ----------------------------
-- Table structure for sys_menu_button
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu_button`;
CREATE TABLE `sys_menu_button`  (
  `id` bigint(20) NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '唯一编码',
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '当前节点的所有先辈节点,多个使用英文逗号分隔(最左为根id,最右为本身id,根节点的path值为本身的id)',
  `pid` bigint(20) NULL DEFAULT 0 COMMENT '上级菜单',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '菜单名称',
  `type` tinyint(4) NULL DEFAULT NULL COMMENT '类型. 1.菜单 2.按钮',
  `i18n` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '国际化编码',
  `creator_id` bigint(20) NULL DEFAULT 0 COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `editor_id` bigint(20) NULL DEFAULT 0 COMMENT '编辑人',
  `edit_time` datetime(0) NULL DEFAULT NULL COMMENT '编辑时间',
  `creator_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '创建人姓名',
  `invalid_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '执行作废操作的操作人姓名',
  `editor_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '编辑人姓名',
  `invalid` tinyint(4) NULL DEFAULT 1 COMMENT '是否作废. 1.未作废 0.已作废',
  `invalid_operator_id` bigint(20) NULL DEFAULT 0 COMMENT '废弃操作人id',
  `invalid_time` datetime(0) NULL DEFAULT NULL COMMENT '废弃时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_code`(`code`) USING BTREE COMMENT '编码唯一索引',
  INDEX `idx_pid`(`pid`) USING BTREE COMMENT 'pid索引',
  INDEX `idx_path`(`path`) USING BTREE COMMENT 'path索引'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '菜单/按钮(根必须为菜单,按钮pid只能是菜单)[最大只允许4级]' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_menu_button
-- ----------------------------

-- ----------------------------
-- Table structure for sys_online_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_online_user`;
CREATE TABLE `sys_online_user`  (
  `id` int(11) NOT NULL,
  `user_id` bigint(20) NULL DEFAULT NULL COMMENT '用户id',
  `session_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '会话id',
  `login_time` datetime(0) NULL DEFAULT NULL COMMENT '登录时间',
  `client_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '登录ip',
  `client_operating_system` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '客户端操作系统名称和版本',
  `client_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '客户端名称和版本(如:chorme 64, IE 10)',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '在线用户' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_online_user
-- ----------------------------

-- ----------------------------
-- Table structure for sys_operate_log
-- ----------------------------
DROP TABLE IF EXISTS `sys_operate_log`;
CREATE TABLE `sys_operate_log`  (
  `id` bigint(20) NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '操作标识',
  `operator_id` bigint(20) NULL DEFAULT NULL COMMENT '操作人id',
  `operate_time` datetime(0) NULL DEFAULT NULL COMMENT '操作时间',
  `use_time` int(11) NULL DEFAULT NULL COMMENT '操作用时(单位:毫秒)',
  `operate_suc` tinyint(4) NOT NULL DEFAULT 1 COMMENT '操作是否成功. 1.成功 2.异常',
  `exception_info` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '异常信息',
  `client_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '登录ip',
  `client_operating_system` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '客户端操作系统名称和版本',
  `client_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '客户端名称和版本(如:chorme 64, IE 10)',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_code`(`code`, `operate_suc`) USING BTREE,
  INDEX `idx_operator_id`(`operator_id`, `operate_suc`) USING BTREE,
  INDEX `idx_operate_time`(`operate_time`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '操作日志' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_operate_log
-- ----------------------------

-- ----------------------------
-- Table structure for sys_permission
-- ----------------------------
DROP TABLE IF EXISTS `sys_permission`;
CREATE TABLE `sys_permission`  (
  `principal_type` tinyint(4) NOT NULL COMMENT '主体类型: 1.角色 2.用户',
  `princiipal_id` bigint(20) NOT NULL COMMENT '主体id(如:角色id, 用户id)',
  `resource_type` tinyint(4) NOT NULL COMMENT '资源类型: 1.菜单',
  `resource_id` bigint(20) NOT NULL COMMENT '资源id(如:菜单id)',
  PRIMARY KEY (`principal_type`, `princiipal_id`, `resource_type`, `resource_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '授权主体资源权限' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_permission
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `id` bigint(20) NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '唯一编码',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色名称',
  `creator_id` bigint(20) NULL DEFAULT 0 COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `editor_id` bigint(20) NULL DEFAULT 0 COMMENT '编辑人',
  `edit_time` datetime(0) NULL DEFAULT NULL COMMENT '编辑时间',
  `invalid` tinyint(4) NULL DEFAULT 1 COMMENT '是否作废. 1.未作废 0.已作废',
  `invalid_operator_id` bigint(20) NULL DEFAULT 0 COMMENT '废弃操作人id',
  `invalid_time` datetime(0) NULL DEFAULT NULL COMMENT '废弃时间',
  `creator_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建人姓名',
  `editor_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '更新人姓名',
  `invalid_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '执行作废操作的操作人姓名',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_code`(`code`) USING BTREE COMMENT '角色编码唯一索引'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_role
-- ----------------------------

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `id` bigint(20) NOT NULL COMMENT '主键',
  `email` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `password` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '密码',
  `creator_id` bigint(20) NULL DEFAULT 0 COMMENT '创建人',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `editor_id` bigint(20) NULL DEFAULT 0 COMMENT '编辑人',
  `edit_time` datetime(0) NULL DEFAULT NULL COMMENT '编辑时间',
  `invalid_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '执行作废操作的操作人姓名',
  `editor_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '编辑人姓名',
  `creator_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '创建人姓名',
  `invalid` tinyint(4) NULL DEFAULT 1 COMMENT '是否作废. 1.未作废 0.已作废',
  `invalid_operator_id` bigint(20) NULL DEFAULT 0 COMMENT '废弃操作人id',
  `invalid_time` datetime(0) NULL DEFAULT NULL COMMENT '废弃时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `uk_email`(`email`) USING BTREE COMMENT '邮箱唯一索引'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user
-- ----------------------------

-- ----------------------------
-- Table structure for sys_user_roles
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_roles`;
CREATE TABLE `sys_user_roles`  (
  `user_id` bigint(20) NOT NULL COMMENT '用户id',
  `role_id` bigint(20) NOT NULL COMMENT '角色id',
  PRIMARY KEY (`user_id`, `role_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户角色' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user_roles
-- ----------------------------

-- ----------------------------
-- Table structure for test
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'ÐÕÃû',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '²âÊÔ' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of test
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
