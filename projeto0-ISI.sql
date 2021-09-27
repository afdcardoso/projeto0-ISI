-- MySQL Script generated by MySQL Workbench
-- Fri Sep 24 15:23:19 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema projeto0
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema projeto0
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `projeto0` DEFAULT CHARACTER SET utf8 ;
USE `projeto0` ;

-- -----------------------------------------------------
-- Table `projeto0`.`disciplina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto0`.`disciplina` (
  `id_disciplina` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_disciplina`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projeto0`.`trabalho`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto0`.`trabalho` (
  `id_trabalho` INT NOT NULL,
  `nota` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(200) NULL,
  `id_disciplina` INT NOT NULL,
  PRIMARY KEY (`id_trabalho`, `id_disciplina`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projeto0`.`teste`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto0`.`teste` (
  `id_teste` INT NOT NULL,
  `nota` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(200) NULL,
  `id_disciplina` INT NOT NULL,
  PRIMARY KEY (`id_teste`, `id_disciplina`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projeto0`.`data`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projeto0`.`data` (
  `id_data` INT NOT NULL,
  `tipo` ENUM('teste', 'trabalho') NOT NULL,
  `data` DATETIME NOT NULL,
  `id_disciplina` INT NULL,
  `descricao` VARCHAR(45) NULL,
  PRIMARY KEY (`id_data`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;