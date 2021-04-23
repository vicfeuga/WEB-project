-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 23, 2021 at 03:05 PM
-- Server version: 8.0.23-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `WEB`
--

-- --------------------------------------------------------

--
-- Table structure for table `body`
--

CREATE TABLE `body` (
  `IMAGE` varchar(700) NOT NULL,
  `NOM` varchar(700) NOT NULL,
  `MARQUE` varchar(30) NOT NULL,
  `PRIX` int NOT NULL,
  `STOCK` int NOT NULL,
  `ID` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `body`
--

INSERT INTO `body` (`IMAGE`, `NOM`, `MARQUE`, `PRIX`, `STOCK`, `ID`) VALUES
('../image/planches/body/body1.jpg', 'PRIDE PHANTOM', 'Pride', 99, 25, 'b1'),
('../image/planches/body/body2.jpg', 'RIDE ANSWER MINI PE RECYCLÉ SURLYN', 'Pride', 210, 10, 'b2');

-- --------------------------------------------------------

--
-- Table structure for table `CARNET`
--

CREATE TABLE `CARNET` (
  `ID` int NOT NULL,
  `NOM` varchar(30) NOT NULL,
  `PRENOM` varchar(30) NOT NULL,
  `NAISSANCE` date NOT NULL,
  `VILLE` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `CARNET`
--

INSERT INTO `CARNET` (`ID`, `NOM`, `PRENOM`, `NAISSANCE`, `VILLE`) VALUES
(1, 'SMITH', 'JOHN', '1980-12-17', 'ORLEANS'),
(2, 'DURAND', 'JEAN', '1983-01-13', 'ORLEANS'),
(3, 'GUDULE', 'JEANNE', '1967-11-06', 'TOURS'),
(4, 'ZAPATA', 'EMILIO', '1956-12-01', 'ORLEANS'),
(5, 'JOURDAIN', 'NICOLAS', '2000-09-10', 'TOURS'),
(6, 'DUPUY', 'MARIE', '1986-01-11', 'BLOIS'),
(7, 'ANDREAS', 'LOU', '1861-02-12', 'ST Petersbourg'),
(9, 'Kafka', 'Franz', '1883-07-03', 'Prague'),
(11, 'Dalton', 'Joe', '2003-12-06', 'Dallas');

-- --------------------------------------------------------

--
-- Table structure for table `evo`
--

CREATE TABLE `evo` (
  `IMAGE` varchar(700) NOT NULL,
  `NOM` varchar(700) NOT NULL,
  `MARQUE` varchar(30) NOT NULL,
  `PRIX` int NOT NULL,
  `STOCK` int NOT NULL,
  `ID` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `evo`
--

INSERT INTO `evo` (`IMAGE`, `NOM`, `MARQUE`, `PRIX`, `STOCK`, `ID`) VALUES
('../image/planches/evo/evo1.jpg', 'Surf Manatee MINIBU', 'Manatee', 449, 23, 'e1'),
('../image/planches/evo/evo2.jpg', 'PLANCHE DE SURF PHIPPS ONE BAD EGG - FCSII ', 'Phipps', 699, 32, 'e2');

-- --------------------------------------------------------

--
-- Table structure for table `fish`
--

CREATE TABLE `fish` (
  `IMAGE` varchar(700) NOT NULL,
  `NOM` varchar(700) NOT NULL,
  `MARQUE` varchar(30) NOT NULL,
  `PRIX` int NOT NULL,
  `STOCK` int NOT NULL,
  `ID` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `fish`
--

INSERT INTO `fish` (`IMAGE`, `NOM`, `MARQUE`, `PRIX`, `STOCK`, `ID`) VALUES
('../image/planches/fish/fish1.jpg', 'Surf Fish Torq Pinline White/Blue 2021', 'Torq', 439, 20, 'fi1'),
('../image/planches/fish/fish2.jpg', 'PLANCHES SURF FISH BLACKWINGS PERFECT STUFF FISH CLEAR 2021', 'Blackwings', 389, 18, 'fi2');

-- --------------------------------------------------------

--
-- Table structure for table `fun`
--

CREATE TABLE `fun` (
  `IMAGE` varchar(700) NOT NULL,
  `NOM` varchar(700) NOT NULL,
  `MARQUE` varchar(30) NOT NULL,
  `PRIX` int NOT NULL,
  `STOCK` int NOT NULL,
  `ID` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `fun`
--

INSERT INTO `fun` (`IMAGE`, `NOM`, `MARQUE`, `PRIX`, `STOCK`, `ID`) VALUES
('../image/planches/fun/fun1.jpg', 'Surf Grace Demibu', 'Grace Demibu', 669, 45, 'fu1'),
('../image/planches/fun/fun2.jpg', 'Surf Torq Newclassic Fun 2021', 'Torq', 459, 4, 'fu2');

-- --------------------------------------------------------

--
-- Table structure for table `long`
--

CREATE TABLE `long` (
  `IMAGE` varchar(700) NOT NULL,
  `NOM` varchar(700) NOT NULL,
  `MARQUE` varchar(30) NOT NULL,
  `PRIX` int NOT NULL,
  `STOCK` int NOT NULL,
  `ID` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `long`
--

INSERT INTO `long` (`IMAGE`, `NOM`, `MARQUE`, `PRIX`, `STOCK`, `ID`) VALUES
('../image/planches/long/long1.jpg', 'PLANCHES SURF LONGBOARD SURF DUKE LONGBOARD PAULOWNIA 2021', 'Duke', 839, 35, 'l1'),
('../image/planches/long/long2.jpg', 'PLANCHES SURF LONGBOARD SIC MAUI NOSE RIDER 2021', 'Sic', 609, 25, 'l2');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(30) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `mdp` varchar(30) NOT NULL,
  `dateCrea` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `body`
--
ALTER TABLE `body`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `CARNET`
--
ALTER TABLE `CARNET`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `evo`
--
ALTER TABLE `evo`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `fish`
--
ALTER TABLE `fish`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `fun`
--
ALTER TABLE `fun`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `long`
--
ALTER TABLE `long`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
