-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 17, 2014 at 11:00 AM
-- Server version: 5.5.37-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `backbone_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_detail`
--

CREATE TABLE IF NOT EXISTS `contact_detail` (
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `tel` int(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `type` int(20) NOT NULL,
  `image` varchar(2000) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=30 ;

--
-- Dumping data for table `contact_detail`
--

INSERT INTO `contact_detail` (`name`, `address`, `tel`, `email`, `type`, `image`, `id`) VALUES
('aaaaaa', 'aaaaaaamfg', 11111111, 'raj_khanal@gail.com', 1, 'images/b1625744d44e1d9c1edba9468bc7303c.jpg', 12),
('aaaaaaa', 'aaa', 123333, 'raj_khanal77@yahoo.com', 1, 'images/9625da057a3906841a44ed4ab33379b2.jpg', 28),
('rajakumar', 'koteshwor', 123456676, 'raj_khanal77@yahoo.com', 2, 'images/d0c528e8699563d8ae6c4c2eb628ab16.jpg', 29);

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE IF NOT EXISTS `type` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `type_detail` varchar(245) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`id`, `type_detail`) VALUES
(1, 'family'),
(2, 'school'),
(3, 'college');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
