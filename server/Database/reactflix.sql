-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2023 at 02:52 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactflix`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `admin_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `admin_privileges` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `contact_info` varchar(255) DEFAULT NULL,
  `registration_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`admin_id`, `username`, `email`, `password_hash`, `admin_privileges`, `name`, `contact_info`, `registration_date`) VALUES
(1, 'JoseEnso', 'joseensothethird2@gmail.com', 'babyonatis19', NULL, 'jose enso', '09365203997', '2023-10-28 02:29:24');

--
-- Triggers `admins`
--
DELIMITER $$
CREATE TRIGGER `log_admin_login` AFTER INSERT ON `admins` FOR EACH ROW BEGIN
    INSERT INTO admin_logs (admin_id, activity_description)
    VALUES (NEW.admin_id, 'Admin logged in');
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `admin_logs`
--

CREATE TABLE `admin_logs` (
  `log_id` int(11) NOT NULL,
  `admin_id` int(11) DEFAULT NULL,
  `activity_description` text DEFAULT NULL,
  `activity_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`) VALUES
(8, '', 'JoseEnso', 'babyonatis19'),
(10, 'joseensothethird3@gmail.com', 'JoseEnso', '$2b$10$TuUO9C84nQkrXlN4D.apz.ecyrCw6Qc.OHTtgYH9rKLtZlq4vOUnO'),
(11, 'joseensothethird2@gmail.com', 'JoseEnsoIII', '$2b$10$SkAhiRUq9q03feshGIQxC.0AhYksvzfrIpnyi7Ho66t9M4MIlsG6u'),
(12, 'sasa@gmail.com', 'JoseEnso', '$2b$10$CEmQoAxNuJIbLYL3clXHF.Zp5cgXL9lsRvd44W5Mks11WNoQqCGni'),
(14, 'joseensothethird4@gmail.com', 'JoseEnso1', '$2b$10$TVz4wLhUQobiMQN8Bt9eGup2d6FFI/LMjVl7YyLK9xJRBENJkBuUG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `admin_logs`
--
ALTER TABLE `admin_logs`
  ADD PRIMARY KEY (`log_id`),
  ADD KEY `admin_id` (`admin_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `admin_logs`
--
ALTER TABLE `admin_logs`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin_logs`
--
ALTER TABLE `admin_logs`
  ADD CONSTRAINT `admin_logs_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admins` (`admin_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
