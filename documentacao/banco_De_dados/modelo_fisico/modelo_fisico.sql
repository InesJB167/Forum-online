-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: forum_online
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `idCategoria` int(11) NOT NULL AUTO_INCREMENT,
  `nomeCategoria` varchar(100) NOT NULL,
  `descricao` text NOT NULL,
  `dataCriacao` datetime DEFAULT current_timestamp(),
  `idUser` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCategoria`),
  UNIQUE KEY `nomeCategoria` (`nomeCategoria`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `categoria_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `utilizador` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `imagem`
--

DROP TABLE IF EXISTS `imagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagem` (
  `idImagem` int(11) NOT NULL AUTO_INCREMENT,
  `caminhoImagem` varchar(100) NOT NULL,
  `formato` varchar(45) DEFAULT NULL,
  `idUser` int(11) NOT NULL,
  `idpostagem` int(11) NOT NULL,
  `dataUpload` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`idImagem`),
  KEY `idUser` (`idUser`),
  KEY `idpostagem` (`idpostagem`),
  CONSTRAINT `imagem_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `utilizador` (`idUser`),
  CONSTRAINT `imagem_ibfk_2` FOREIGN KEY (`idpostagem`) REFERENCES `postagem` (`idPostagem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `perfil`
--

DROP TABLE IF EXISTS `perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfil` (
  `idPerfil` int(11) NOT NULL AUTO_INCREMENT,
  `nome` enum('ADMIN','UTILIZADOR') DEFAULT 'UTILIZADOR',
  PRIMARY KEY (`idPerfil`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `perfil_user`
--

DROP TABLE IF EXISTS `perfil_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfil_user` (
  `idUser` int(11) NOT NULL,
  `idPerfil` int(11) NOT NULL,
  PRIMARY KEY (`idUser`,`idPerfil`),
  KEY `idPerfil` (`idPerfil`),
  CONSTRAINT `perfil_user_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `utilizador` (`idUser`),
  CONSTRAINT `perfil_user_ibfk_2` FOREIGN KEY (`idPerfil`) REFERENCES `perfil` (`idPerfil`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `postagem`
--

DROP TABLE IF EXISTS `postagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postagem` (
  `idPostagem` int(11) NOT NULL AUTO_INCREMENT,
  `texto` text NOT NULL,
  `numeroReacoes` int(11) DEFAULT NULL,
  `numeroDeLikes` int(11) DEFAULT NULL,
  `numeroDislkes` int(11) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL,
  `idTopico` int(11) NOT NULL,
  `data_post` datetime DEFAULT current_timestamp(),
  `data_edicao` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`idPostagem`),
  KEY `fk_user_post` (`idUser`),
  KEY `fk_topico_post` (`idTopico`),
  CONSTRAINT `fk_topico_post` FOREIGN KEY (`idTopico`) REFERENCES `topico` (`idTopico`),
  CONSTRAINT `fk_user_post` FOREIGN KEY (`idUser`) REFERENCES `utilizador` (`idUser`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `topico`
--

DROP TABLE IF EXISTS `topico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topico` (
  `idTopico` int(11) NOT NULL AUTO_INCREMENT,
  `desgnacao` varchar(100) NOT NULL,
  `descricao` text NOT NULL,
  `dataCriacao` datetime DEFAULT current_timestamp(),
  `estado` enum('Aberto','Fechado') DEFAULT 'Aberto',
  `idUser` int(11) NOT NULL,
  `idCategoria` int(11) NOT NULL,
  PRIMARY KEY (`idTopico`),
  KEY `idUser` (`idUser`),
  KEY `idCategoria` (`idCategoria`),
  CONSTRAINT `topico_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `utilizador` (`idUser`),
  CONSTRAINT `topico_ibfk_2` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `utilizador`
--

DROP TABLE IF EXISTS `utilizador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilizador` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `genero` enum('Masculino','Feminino') DEFAULT 'Masculino',
  `estado` enum('Ativo','Suspenso','Banido') DEFAULT 'Ativo',
  `email` varchar(100) NOT NULL,
  `senhaHash` varchar(255) NOT NULL,
  `dataRegistro` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-01-30 18:03:04
