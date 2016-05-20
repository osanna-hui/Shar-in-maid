-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: May 20, 2016 at 09:00 PM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shar_n`
--
CREATE DATABASE IF NOT EXISTS `shar_n` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `shar_n`;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comm_id` int(11) NOT NULL,
  `text` varchar(300) NOT NULL,
  `serv_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comm_id`, `text`, `serv_id`, `user_id`) VALUES
(1, 'good', 14, 1),
(2, 'good', 13, 1),
(3, 'good', 12, 1),
(4, 'good', 14, 1),
(5, 'good', 13, 1),
(6, 'good', 12, 1),
(7, 'good', 12, 1),
(8, 'good', 14, 1),
(9, 'good', 13, 1),
(10, 'good', 12, 1),
(11, 'good', 12, 1),
(12, 'good', 7, 1),
(13, 'hello', 15, 1),
(14, 'stop!', 14, 1),
(15, 'stop', 7, 1),
(17, 'this is awesome', 16, 6),
(19, 'hey', 10, 1);

-- --------------------------------------------------------

--
-- Table structure for table `favourites`
--

CREATE TABLE `favourites` (
  `user_id` int(11) NOT NULL,
  `serv_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `favourites`
--

INSERT INTO `favourites` (`user_id`, `serv_id`) VALUES
(1, 8),
(1, 12),
(1, 13),
(1, 15),
(1, 17),
(3, 7),
(6, 10);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `serv_id` int(11) NOT NULL,
  `serv_type` varchar(200) NOT NULL,
  `serv_desc` varchar(500) NOT NULL,
  `serv_price` int(11) NOT NULL,
  `serv_area` varchar(300) NOT NULL,
  `serv_img` varchar(300) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`serv_id`, `serv_type`, `serv_desc`, `serv_price`, `serv_area`, `serv_img`, `user_id`) VALUES
(7, 'Two Bedrooms', 'best service in town', 500, 'Burnaby', '1/duck.png', 1),
(8, 'STUDIO', 'I clean', 100, 'Burnaby Vancouver', '', 1),
(9, 'STUDIO', 'hire me', 50, 'Vancouver', '', 1),
(10, 'one bed', 'lskdjf', 0, 'kljsdf', '', 1),
(11, 'ONE BEDROOM APARTMENT', 'lksdfj', 100, 'lskjdflj', '', 1),
(12, 'DETACHED HOME', 'fast', 300, 'van', '', 1),
(13, 'STUDIO', 'SUPER FAST', 1000, 'RICHMOND', '', 3),
(14, 'TWO OR MORE BEDROOMS APARTMENT', 'fast', 1, 'metro', '', 2),
(15, 'DETACHED HOME', '123', 123, '123', '1/mtc-color-logo2.jpg', 1),
(16, 'STUDIO', 'hahaha', 50, 'home', '6/mtc-color-logo2.jpg', 6),
(17, 'ONE BEDROOM TOWN HOUSE', 'lsdkjf', 0, 'slkdfj', '6/mtc-color-logo2.jpg', 6),
(18, 'DETACHED HOME', 'i clean', 5000, 'haha', '1/duck.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL,
  `firstname` varchar(300) NOT NULL,
  `lastname` varchar(300) NOT NULL,
  `email` varchar(300) NOT NULL,
  `address` varchar(500) NOT NULL,
  `city` varchar(300) NOT NULL,
  `profileimg` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `firstname`, `lastname`, `email`, `address`, `city`, `profileimg`) VALUES
(1, 'hehe', 'haha', 'o', 'hui', '123@123.com', 'van', 'bby', '1/duck.png'),
(2, 'stop', 'hahaha', 'why', 'are', 'you@laughing.com', 'ksdjf', 'lkjsdf', '2/duck.png'),
(3, 'ohui', 'happy', 'osanna', 'hui', 'ksjdfl@.skdfjskdf', 'lksdjflk', 'lskdjf', ''),
(4, '1', '1', '1', '1', '1', '1', '1', '../images/profile_placeholder.png'),
(5, '2', '2', '2', '2', '2', '2', '2', '../images/profile_placeholder.png'),
(6, '3', '3', '3', '3', '3', '3', '3', '6/duck.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comm_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `serv_id` (`serv_id`),
  ADD KEY `user_id_2` (`user_id`);

--
-- Indexes for table `favourites`
--
ALTER TABLE `favourites`
  ADD UNIQUE KEY `serv_id` (`serv_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`serv_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comm_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `serv_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`serv_id`) REFERENCES `services` (`serv_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `favourites`
--
ALTER TABLE `favourites`
  ADD CONSTRAINT `favourites_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_2` FOREIGN KEY (`serv_id`) REFERENCES `services` (`serv_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
