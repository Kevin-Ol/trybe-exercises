CREATE DATABASE IF NOT EXISTS albuns;
USE albuns;

CREATE TABLE estilos_musicais (
	id INT PRIMARY KEY AUTO_INCREMENT,
    estilo VARCHAR(50) NOT NULL
);

CREATE TABLE cantores (
	id INT PRIMARY KEY AUTO_INCREMENT,
    estilo VARCHAR(200) NOT NULL
);

CREATE TABLE albuns_musicais (
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    preco DOUBLE NOT NULL,
    estilo_id INT NOT NULL,
    cantor_id INT NOT NULL,
    FOREIGN KEY (estilo_id) REFERENCES estilos_musicais(id),
    FOREIGN KEY (cantor_id) REFERENCES cantores(id)
);

CREATE TABLE cancoes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    album_id INT NOT NULL,
	FOREIGN KEY (album_id) REFERENCES albuns_musicais(id)
);
