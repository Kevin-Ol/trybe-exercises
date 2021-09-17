use hr;
SET SQL_SAFE_UPDATES = 0;

-- Escreva uma query que exiba o maior salário da tabela.
SELECT 
    MAX(salary) AS 'maior_salario'
FROM
    employees;

-- Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT 
    MAX(salary) - MIN(salary) AS diferenca_salario
FROM
    employees;
    
-- Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT 
    JOB_ID, AVG(salary) AS 'media_salarial'
FROM
    employees
GROUP BY JOB_ID
ORDER BY media_salarial DESC;

-- Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT 
    SUM(salary) AS 'total_salarios'
FROM
    employees;
    
-- Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais. 
SELECT 
    ROUND(MAX(salary), 2) AS 'maior_salario',
    ROUND(MIN(salary), 2) AS 'menor_salario',
    ROUND(SUM(salary), 2) AS 'total_salarios',
    ROUND(AVG(salary), 2) AS 'media_salarios'
FROM
    employees;
    
-- Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT 
    JOB_ID, COUNT(*)
FROM
    employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ). 
SELECT 
    JOB_ID, SUM(salary) as 'total_salarios'
FROM
    employees
GROUP BY JOB_ID;

-- Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT 
    JOB_ID, SUM(salary) as 'total_salarios'
FROM
    employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
SELECT 
    JOB_ID, AVG(salary) AS 'media_salarios'
FROM
    employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY media_salarios DESC;

-- Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
SELECT 
    department_id,
    COUNT(*) AS 'total_employees',
    AVG(salary) AS 'media_salario'
FROM
    employees
GROUP BY department_id
HAVING total_employees > 10;

-- Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
UPDATE employees 
SET 
    PHONE_NUMBER = CONCAT('777', SUBSTRING(PHONE_NUMBER, 4))
WHERE
    PHONE_NUMBER LIKE '515%';

-- Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres. 
SELECT 
    *
FROM
    employees
WHERE
    CHAR_LENGTH(FIRST_NAME) >= 8;
    
-- Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT 
    EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) AS 'ano_contratacao'
FROM
    employees;
    
-- Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia no qual foi contratado (exiba somente o dia).
SELECT 
    EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) AS 'dia_contratacao'
FROM
    employees;

-- Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mes no qual foi contratado (exiba somente o mes).
SELECT 
    EMPLOYEE_ID, FIRST_NAME, MONTHNAME(HIRE_DATE) AS 'mes_contratacao'
FROM
    employees;

-- Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT 
    UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME)) AS 'FULLNAME'
FROM
    employees;

-- Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT 
    LAST_NAME, HIRE_DATE
FROM
    employees
WHERE
    MONTHNAME(HIRE_DATE) = 'July'
        AND YEAR(HIRE_DATE) = 1987;
        
-- Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias).
SELECT 
    FIRST_NAME,
    LAST_NAME,
    DATEDIFF(NOW(), HIRE_DATE) AS 'Tempo de empresa'
FROM
    employees;