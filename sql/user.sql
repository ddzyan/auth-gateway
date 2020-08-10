CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `uuid` int(10) unsigned DEFAULT NULL COMMENT '第三方ID',
  `provider` varchar(20) DEFAULT NULL COMMENT '第三方账号提供方',
  `name` varchar(20) NOT NULL COMMENT '用户名称',
  `nickname` varchar(20) DEFAULT NULL COMMENT '用户昵称',
  `avatar_url` varchar(200) DEFAULT NULL COMMENT '头像地址',
  `role_id` int(10) unsigned DEFAULT NULL COMMENT '角色',
  `password` varchar(40) DEFAULT NULL COMMENT '用户密码',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;