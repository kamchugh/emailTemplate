-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema emailTemplate
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema emailTemplate
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `emailTemplate` ;
USE `emailTemplate` ;

-- -----------------------------------------------------
-- Table `emailTemplate`.`sections`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emailTemplate`.`sections` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productName` VARCHAR(100) NULL,
  `productDescription` VARCHAR(300) NULL,
  `productImage` VARCHAR(400) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
