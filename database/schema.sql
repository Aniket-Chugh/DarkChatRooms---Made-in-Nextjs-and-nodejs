-- users table
CREATE TABLE `users` (
  `user_id` char(36) NOT NULL DEFAULT (uuid()),
  `user_num` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `account_name` varchar(100) NOT NULL,
  `email` varchar(254) NOT NULL,
  `user_pass` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_num` (`user_num`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
)



-- user_profile table
CREATE TABLE user_profile (
    user_id INT PRIMARY KEY,
    bio VARCHAR(255) DEFAULT 'darkchatrooms user',
    profile_pic VARCHAR(500),

    FOREIGN KEY (user_id) REFERENCES users(user_id)
    ON DELETE CASCADE
);

-- refresh token table to get regresh token
