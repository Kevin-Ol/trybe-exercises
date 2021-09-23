CREATE DATABASE IF NOT EXISTS animais;
USE animais;

CREATE TABLE localizacoes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    localizacao VARCHAR(200) NOT NULL
);

CREATE TABLE especies (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE sexos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    sexo VARCHAR(10) NOT NULL
);

CREATE TABLE gerentes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE cuidadores (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerentes(id)
);

CREATE TABLE animais(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especie_id INT NOT NULL,
    sexo_id INT NOT NULL,
    idade INT NOT NULL,
    localizacao_id INT NOT NULL,
	FOREIGN KEY (especie_id) REFERENCES especies(id),
    FOREIGN KEY (sexo_id) REFERENCES sexos(id),
	FOREIGN KEY (localizacao_id) REFERENCES localizacoes(id)
);

CREATE TABLE animais_cuidadores (
    animal_id INT NOT NULL,
	cuidador_id INT NOT NULL,
    FOREIGN KEY (animal_id) REFERENCES animais(id),
    FOREIGN KEY(cuidador_id) REFERENCES cuidadores(id),
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id)
);
