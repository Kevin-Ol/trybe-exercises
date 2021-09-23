--  Na tabela film, de qual linguagem (language_id) é o filme com o maior custo para substituir 
-- (replacement_cost)?
SELECT 
    language_id, MAX(replacement_cost)
FROM
    sakila.film
GROUP BY language_id;

-- Ainda em film, qual classificação (rating) de filmes é aquela que tem a maior soma de custo para 
-- substituir (replacement_cost)?
SELECT 
    rating, SUM(replacement_cost) AS 'soma'
FROM
    sakila.film
GROUP BY rating
ORDER BY soma DESC
LIMIT 1;

-- Na tabela rental, qual cliente (customer_id) devolve (return_date, rental_date) filmes mais rápido, 
-- considerando a média de tempo de aluguel por cliente?
SELECT 
    customer_id,
    AVG(HOUR(TIMEDIFF(return_date, rental_date))) AS 'duração'
FROM
    sakila.rental
GROUP BY customer_id
ORDER BY duração
LIMIT 1;