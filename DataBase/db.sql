-- MariaDB dump 10.19  Distrib 10.11.4-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	10.11.4-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clase`
--

DROP TABLE IF EXISTS `clase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clase` (
  `idclase` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(224) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_finalizacion` date DEFAULT NULL,
  `profesor_idprofesor` int(11) NOT NULL,
  `tipo_codtipo` varchar(10) NOT NULL,
  `nivel_codnivel` varchar(10) NOT NULL,
  PRIMARY KEY (`idclase`),
  UNIQUE KEY `idclase_UNIQUE` (`idclase`),
  KEY `fk_clase_profesor1_idx` (`profesor_idprofesor`),
  KEY `fk_clase_tipo1_idx` (`tipo_codtipo`),
  KEY `fk_clase_nivel1_idx` (`nivel_codnivel`),
  CONSTRAINT `fk_clase_nivel1` FOREIGN KEY (`nivel_codnivel`) REFERENCES `nivel` (`codnivel`),
  CONSTRAINT `fk_clase_profesor1` FOREIGN KEY (`profesor_idprofesor`) REFERENCES `profesor` (`idprofesor`) ON UPDATE NO ACTION,
  CONSTRAINT `fk_clase_tipo1` FOREIGN KEY (`tipo_codtipo`) REFERENCES `tipo` (`codtipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clase`
--

LOCK TABLES `clase` WRITE;
/*!40000 ALTER TABLE `clase` DISABLE KEYS */;
/*!40000 ALTER TABLE `clase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `correo`
--

DROP TABLE IF EXISTS `correo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `correo` (
  `idcorreo` int(11) NOT NULL AUTO_INCREMENT,
  `idusuario` int(11) NOT NULL,
  `correo` varchar(120) NOT NULL,
  PRIMARY KEY (`idcorreo`),
  UNIQUE KEY `idcorreo_UNIQUE` (`idcorreo`),
  UNIQUE KEY `correo_UNIQUE` (`correo`),
  FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `correo`
--

LOCK TABLES `correo` WRITE;
/*!40000 ALTER TABLE `correo` DISABLE KEYS */;
/*!40000 ALTER TABLE `correo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estrellas`
--

DROP TABLE IF EXISTS `estrellas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estrellas` (
  `idestrellas` int(11) NOT NULL AUTO_INCREMENT,
  `estrellas` int(1) NOT NULL,
  PRIMARY KEY (`idestrellas`),
  UNIQUE KEY `idestrellas_UNIQUE` (`idestrellas`),
  UNIQUE KEY `estrellas_UNIQUE` (`estrellas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estrellas`
--

LOCK TABLES `estrellas` WRITE;
/*!40000 ALTER TABLE `estrellas` DISABLE KEYS */;
/*!40000 ALTER TABLE `estrellas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante`
--

DROP TABLE IF EXISTS `estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estudiante` (
  `idestudiante` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(45) NOT NULL DEFAULT 'estudiante',
  `usuario_idusuario` int(11) NOT NULL,
  PRIMARY KEY (`idestudiante`),
  UNIQUE KEY `idestudiante_UNIQUE` (`idestudiante`),
  KEY `fk_estudiante_usuario1_idx` (`usuario_idusuario`),
  CONSTRAINT `fk_estudiante_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante`
--

LOCK TABLES `estudiante` WRITE;
/*!40000 ALTER TABLE `estudiante` DISABLE KEYS */;
/*!40000 ALTER TABLE `estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante_has_lista`
--

DROP TABLE IF EXISTS `estudiante_has_lista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estudiante_has_lista` (
  `estudiante_idestudiante` int(11) NOT NULL,
  `lista_idlista` int(11) NOT NULL,
  PRIMARY KEY (`estudiante_idestudiante`,`lista_idlista`),
  KEY `fk_estudiante_has_lista_lista1_idx` (`lista_idlista`),
  KEY `fk_estudiante_has_lista_estudiante1_idx` (`estudiante_idestudiante`),
  CONSTRAINT `fk_estudiante_has_lista_estudiante1` FOREIGN KEY (`estudiante_idestudiante`) REFERENCES `estudiante` (`idestudiante`) ON UPDATE NO ACTION,
  CONSTRAINT `fk_estudiante_has_lista_lista1` FOREIGN KEY (`lista_idlista`) REFERENCES `lista` (`idlista`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante_has_lista`
--

LOCK TABLES `estudiante_has_lista` WRITE;
/*!40000 ALTER TABLE `estudiante_has_lista` DISABLE KEYS */;
/*!40000 ALTER TABLE `estudiante_has_lista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lista`
--

DROP TABLE IF EXISTS `lista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lista` (
  `idlista` int(11) NOT NULL AUTO_INCREMENT,
  `clase_idclase` int(11) NOT NULL,
  PRIMARY KEY (`idlista`,`clase_idclase`),
  UNIQUE KEY `idlista_UNIQUE` (`idlista`),
  KEY `fk_lista_clase1_idx` (`clase_idclase`),
  CONSTRAINT `fk_lista_clase1` FOREIGN KEY (`clase_idclase`) REFERENCES `clase` (`idclase`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista`
--

LOCK TABLES `lista` WRITE;
/*!40000 ALTER TABLE `lista` DISABLE KEYS */;
/*!40000 ALTER TABLE `lista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nivel`
--

DROP TABLE IF EXISTS `nivel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nivel` (
  `codnivel` varchar(10) NOT NULL,
  `nivnombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`codnivel`),
  UNIQUE KEY `codnombre_UNIQUE` (`nivnombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nivel`
--

LOCK TABLES `nivel` WRITE;
/*!40000 ALTER TABLE `nivel` DISABLE KEYS */;
/*!40000 ALTER TABLE `nivel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pqr`
--

DROP TABLE IF EXISTS `pqr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pqr` (
  `idpqr` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` text NOT NULL,
  `clase_idclase` int(11) NOT NULL,
  `estudiante_idestudiante` int(11) NOT NULL,
  `estrellas_idestrellas` int(11) NOT NULL,
  PRIMARY KEY (`idpqr`),
  UNIQUE KEY `idpqr_UNIQUE` (`idpqr`),
  KEY `fk_pqr_clase1_idx` (`clase_idclase`),
  KEY `fk_pqr_estudiante1_idx` (`estudiante_idestudiante`),
  KEY `fk_pqr_estrellas1_idx` (`estrellas_idestrellas`),
  CONSTRAINT `fk_pqr_clase1` FOREIGN KEY (`clase_idclase`) REFERENCES `clase` (`idclase`) ON UPDATE NO ACTION,
  CONSTRAINT `fk_pqr_estrellas1` FOREIGN KEY (`estrellas_idestrellas`) REFERENCES `estrellas` (`idestrellas`) ON UPDATE NO ACTION,
  CONSTRAINT `fk_pqr_estudiante1` FOREIGN KEY (`estudiante_idestudiante`) REFERENCES `estudiante` (`idestudiante`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pqr`
--

LOCK TABLES `pqr` WRITE;
/*!40000 ALTER TABLE `pqr` DISABLE KEYS */;
/*!40000 ALTER TABLE `pqr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pregunta`
--

DROP TABLE IF EXISTS `pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pregunta` (
  `idpregunta` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta` text NOT NULL,
  `quiz_idquiz` int(11) NOT NULL,
  PRIMARY KEY (`idpregunta`),
  UNIQUE KEY `idpregunta_UNIQUE` (`idpregunta`),
  KEY `fk_pregunta_quiz1_idx` (`quiz_idquiz`),
  CONSTRAINT `fk_pregunta_quiz1` FOREIGN KEY (`quiz_idquiz`) REFERENCES `quiz` (`idquiz`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pregunta`
--

LOCK TABLES `pregunta` WRITE;
/*!40000 ALTER TABLE `pregunta` DISABLE KEYS */;
/*!40000 ALTER TABLE `pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesor`
--

DROP TABLE IF EXISTS `profesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profesor` (
  `idprofesor` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(45) NOT NULL DEFAULT 'profesor',
  `usuario_idusuario` int(11) NOT NULL,
  PRIMARY KEY (`idprofesor`),
  UNIQUE KEY `idprofesor_UNIQUE` (`idprofesor`),
  KEY `fk_profesor_usuario_idx` (`usuario_idusuario`),
  CONSTRAINT `fk_profesor_usuario` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesor`
--

LOCK TABLES `profesor` WRITE;
/*!40000 ALTER TABLE `profesor` DISABLE KEYS */;
/*!40000 ALTER TABLE `profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicacion`
--

DROP TABLE IF EXISTS `publicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `publicacion` (
  `idpublicacion` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(224) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `imagen` varchar(300),
  `fecha_publicacion` timestamp NULL DEFAULT current_timestamp(),
  `clase_idclase` int(11) NOT NULL,
  `profesor_idprofesor` int(11) NOT NULL,
  PRIMARY KEY (`idpublicacion`),
  UNIQUE KEY `idpublicacion_UNIQUE` (`idpublicacion`),
  KEY `fk_publicacion_clase1_idx` (`clase_idclase`),
  KEY `fk_publicacion_profesor1_idx` (`profesor_idprofesor`),
  CONSTRAINT `fk_publicacion_clase1` FOREIGN KEY (`clase_idclase`) REFERENCES `clase` (`idclase`) ON UPDATE NO ACTION,
  CONSTRAINT `fk_publicacion_profesor1` FOREIGN KEY (`profesor_idprofesor`) REFERENCES `profesor` (`idprofesor`)ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacion`
--

LOCK TABLES `publicacion` WRITE;
/*!40000 ALTER TABLE `publicacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `publicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quiz` (
  `idquiz` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(224) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `profesor_idprofesor` int(11) NOT NULL,
  `clase_idclase` int(11) NOT NULL,
  `calificacion` int(3) NOT NULL,
  PRIMARY KEY (`idquiz`),
  UNIQUE KEY `idquiz_UNIQUE` (`idquiz`),
  KEY `fk_quiz_profesor1_idx` (`profesor_idprofesor`),
  KEY `fk_quiz_clase1_idx` (`clase_idclase`),
  CONSTRAINT `fk_quiz_clase1` FOREIGN KEY (`clase_idclase`) REFERENCES `clase` (`idclase`) ON UPDATE NO ACTION,
  CONSTRAINT `fk_quiz_profesor1` FOREIGN KEY (`profesor_idprofesor`) REFERENCES `profesor` (`idprofesor`)  ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reporte`
--

DROP TABLE IF EXISTS `reporte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reporte` (
  `idreporte` int(11) NOT NULL AUTO_INCREMENT,
  `estudiante_idestudiante` int(11) NOT NULL,
  `clase_idclase` int(11) NOT NULL,
  `calificaciontotal` int(3) DEFAULT NULL,
  `idquiz` int(11) NOT NULL,
  PRIMARY KEY (`idreporte`),
  UNIQUE KEY `idreporte_UNIQUE` (`idreporte`),
  KEY `fk_reporte_estudiante1_idx` (`estudiante_idestudiante`),
  KEY `fk_reporte_clase1_idx` (`clase_idclase`),
  KEY `fk_quiz_quiz1_idx` (`idquiz`),
  CONSTRAINT `fk_reporte_clase1` FOREIGN KEY (`clase_idclase`) REFERENCES `clase` (`idclase`) ON UPDATE NO ACTION,
  CONSTRAINT `fk_reporte_estudiante1` FOREIGN KEY (`estudiante_idestudiante`) REFERENCES `estudiante` (`idestudiante`) ON UPDATE NO ACTION,
  CONSTRAINT `fk_quiz_quiz1` FOREIGN KEY (`idquiz`) REFERENCES `quiz` (`idquiz`)  ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reporte`
--

LOCK TABLES `reporte` WRITE;
/*!40000 ALTER TABLE `reporte` DISABLE KEYS */;
/*!40000 ALTER TABLE `reporte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respuesta`
--

DROP TABLE IF EXISTS `respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `respuesta` (
  `idrespuesta` int(11) NOT NULL AUTO_INCREMENT,
  `respuesta` text NOT NULL,
  `calificación` varchar(224),
  `pregunta_idpregunta` int(11) NOT NULL,
  `estudiante_idestudiante` int(11) NOT NULL,
  PRIMARY KEY (`idrespuesta`),
  UNIQUE KEY `idrespuesta_UNIQUE` (`idrespuesta`),
  KEY `fk_respuesta_pregunta1_idx` (`pregunta_idpregunta`),
  KEY `fk_respuesta_estudiante1_idx` (`estudiante_idestudiante`),
  CONSTRAINT `fk_respuesta_estudiante1` FOREIGN KEY (`estudiante_idestudiante`) REFERENCES `estudiante` (`idestudiante`) ON UPDATE NO ACTION,
  CONSTRAINT `fk_respuesta_pregunta1` FOREIGN KEY (`pregunta_idpregunta`) REFERENCES `pregunta` (`idpregunta`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respuesta`
--

LOCK TABLES `respuesta` WRITE;
/*!40000 ALTER TABLE `respuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `respuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefono`
--

DROP TABLE IF EXISTS `telefono`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `telefono` (
  `idtelefono` int(11) NOT NULL AUTO_INCREMENT,
  `idusuario` int(11) NOT NULL,
  `numero` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`idtelefono`),
  UNIQUE KEY `idtelefono_UNIQUE` (`idtelefono`),
  FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefono`
--

LOCK TABLES `telefono` WRITE;
/*!40000 ALTER TABLE `telefono` DISABLE KEYS */;
/*!40000 ALTER TABLE `telefono` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo`
--

DROP TABLE IF EXISTS `tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo` (
  `codtipo` varchar(10) NOT NULL,
  `codnombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`codtipo`),
  UNIQUE KEY `codtipo_UNIQUE` (`codtipo`),
  UNIQUE KEY `codnombre_UNIQUE` (`codnombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo`
--

LOCK TABLES `tipo` WRITE;
/*!40000 ALTER TABLE `tipo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trabajos`
--

DROP TABLE IF EXISTS `trabajos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trabajos` (
  `idtrabajos` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(224) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `fecha_entrega` date DEFAULT NULL,
  `calificacion` int(3) DEFAULT NULL,
  `clase_idclase` int(11) NOT NULL,
  `profesor_idprofesor` int(11) NOT NULL,
  PRIMARY KEY (`idtrabajos`),
  UNIQUE KEY `idtrabajos_UNIQUE` (`idtrabajos`),
  KEY `fk_trabajos_clase1_idx` (`clase_idclase`),
  KEY `fk_trabajos_profesor1_idx` (`profesor_idprofesor`),
  CONSTRAINT `fk_trabajos_clase1` FOREIGN KEY (`clase_idclase`) REFERENCES `clase` (`idclase`)ON UPDATE NO ACTION,
  CONSTRAINT `fk_trabajos_profesor1` FOREIGN KEY (`profesor_idprofesor`) REFERENCES `profesor` (`idprofesor`)ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabajos`
--

LOCK TABLES `trabajos` WRITE;
/*!40000 ALTER TABLE `trabajos` DISABLE KEYS */;
/*!40000 ALTER TABLE `trabajos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `documento` int(11) NOT NULL,
  `contraseña` varchar(224) NOT NULL,
  `biografia` text DEFAULT NULL,
  `img` text DEFAULT 'https://cdn.discordapp.com/attachments/1005592732166795287/1118616744743944334/be1dff10d250e15b7acc56215184e5dd.jpg',
  PRIMARY KEY (`idusuario`),
  UNIQUE KEY `idusuario_UNIQUE` (`idusuario`),
  UNIQUE KEY `documento_UNIQUE` (`documento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-20 16:59:45
insert into tipo (codtipo,codnombre) values("A01","JAVA");
insert into tipo (codtipo, codnombre) values("A02","PHP");
insert into tipo (codtipo, codnombre) values("A03","JavaScript");
insert into tipo (codtipo,codnombre) values ("A04", "Programación");

insert into nivel (codnivel, nivnombre) values ("N1MF", "Muy Facil");
insert into nivel (codnivel, nivnombre) values ("N2F", "Facil");
insert into nivel (codnivel, nivnombre) values ("N3M", "Medio");
insert into nivel (codnivel, nivnombre) values ("N4D", "Dificil");
insert into nivel (codnivel, nivnombre) values ("N5MD", "Muy Dificil");