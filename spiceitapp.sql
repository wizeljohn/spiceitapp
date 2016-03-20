-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2016 at 04:19 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `spiceitapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_forums`
--

CREATE TABLE IF NOT EXISTS `tbl_forums` (
  `fld_id` int(11) NOT NULL AUTO_INCREMENT,
  `fld_username` varchar(200) NOT NULL,
  `fld_image` varchar(200) NOT NULL,
  `fld_content` varchar(200) NOT NULL,
  `fld_topic` varchar(200) NOT NULL,
  PRIMARY KEY (`fld_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tbl_forums`
--

INSERT INTO `tbl_forums` (`fld_id`, `fld_username`, `fld_image`, `fld_content`, `fld_topic`) VALUES
(1, 'blue_elix', 'images/1.JPG', 'sample', 'sample'),
(2, 'blue_elix', 'images/bidlix.png', 'sasa', 'Sample');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE IF NOT EXISTS `tbl_user` (
  `fld_userId` int(11) NOT NULL AUTO_INCREMENT,
  `fld_userName` varchar(100) NOT NULL,
  `fld_userPassword` varchar(100) NOT NULL,
  `fld_userEmail` varchar(100) NOT NULL,
  PRIMARY KEY (`fld_userId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`fld_userId`, `fld_userName`, `fld_userPassword`, `fld_userEmail`) VALUES
(1, 'blue_elix', 'Eliza123', 'elizacarlos10@gmail.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
