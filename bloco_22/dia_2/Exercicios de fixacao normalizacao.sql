CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;
CREATE TABLE contatos(
	id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(15) NOT NULL
);

CREATE TABLE setores(
	id INT PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(20) NOT NULL
);

CREATE TABLE funcionarios(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
	sobrenome VARCHAR(20) NOT NULL,
    contato_id INT NOT NULL,
    data_cadastro DATE NOT NULL,
    FOREIGN KEY (contato_id) REFERENCES contatos(id)
);

CREATE TABLE funcionario_setor(
	id INT PRIMARY KEY AUTO_INCREMENT,
    funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES funcionarios(id),
    FOREIGN KEY (setor_id) REFERENCES setores(id)
);

INSERT INTO contatos (id, email, telefone) VALUES 
(12, 'jo@gmail.com', '(35)998552-1445'),
(13, 'andre1990@gmail.com', '(47)99522-4996'),
(14, 'cindy@outlook.com', '(33)99855-4669'),
(15, 'fernandamendes@yahoo.com', '	(33)99200-1556');

INSERT INTO setores (setor) VALUES 
('Administração'), ('Vendas'), ('Operacional'), ('Estratégico'), ('Marketing');

INSERT INTO funcionarios (id, nome, sobrenome, contato_id, data_cadastro) VALUES 
(12, 'Joseph', 'Rodrigues', 12, '2020-05-05'),
(13, 'André', 'Freeman', 13, '2020-05-05'),
(14, 'Cíntia', 'Duval', 14, '2020-05-05'),
(15, 'Fernanda', 'Mendes', 15, '2020-05-05');

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`normalization`.`funcionario_setor`, CONSTRAINT `funcionario_setor_ibfk_2` FOREIGN KEY (`setor_id`) REFERENCES `setores` (`id`))

INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES 
(12, 1),
(12, 2),
(13, 3),
(14, 2),
(14, 4),
(15, 5);
