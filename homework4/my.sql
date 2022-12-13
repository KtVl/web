-- Создать файл my.sql, 
-- в котором должна создаваться таблица с информацией об одногруппниках. 
-- В таблице должно быть четыре поля: 
-- id, name, age, address. 
-- Все поля в таблице обязательны для заполнения.

-- Необходимо добавить 5-10 одногруппников в данную таблицу.

-- Необходимо написать запрос на получение имен всех одногруппников 
-- (только имен, без всего остального), 
-- которые живут в Москве и их возраст находится в диапазоне [18, 30) лет.


-- create
CREATE TABLE PEOPLE (
  Id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age TEXT NOT NULL,
  adress TEXT NOT NULL
);

-- insert
INSERT INTO PEOPLE VALUES (0001, 'Екатерина', '33', 'Казань');
INSERT INTO PEOPLE VALUES (0002, 'Сергей', '30', 'Москва');
INSERT INTO PEOPLE VALUES (0003, 'Татьяна', '18', 'Москва');
INSERT INTO PEOPLE VALUES (0004, 'Анна', '25', 'Норильск');
INSERT INTO PEOPLE VALUES (0005, 'Юра', '29', 'Москва');
INSERT INTO PEOPLE VALUES (0006, 'Алексей', '56', 'Астрахань');

-- fetch 
SELECT name FROM PEOPLE WHERE age>=18 AND age<30 AND adress = 'Москва';