-- Crea una nueva tabla --

CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    edad INT
);

-- Inserta datos en la tabla -- 
INSERT INTO usuarios (id, nombre, edad) VALUES (1,'Juan',25);

-- Recuperar datos de una tabla --

SELECT * FROM usuarios;

-- Actualizar datos de una tabla --

UPDATE usuarios SET edad = 26 WHERE id = 1;

-- Borrar datos en una tabla --

DELETE FROM usuarios WHERE id=1;

-- Borrar por completo una tabla (Irreversible)--

DROP TABLE usuarios;

-- REGLAS DE INTEGRIDAD --
-- Integridad de entidad (clave primaria unica) --

CREATE TABLE productos(
    id INT PRIMARY KEY,
    nombre VARCHAR (50)
);

-- Integridad referencial, las claves foraneas referencian a claves primarias validas--

CREATE TABLE pedidos (
    id INT PRIMARY KEY,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Integridad de Dominio: Significa los datos deben cumplir con los tipos de restricciones definidas--

CREATE TABLE empleados (
    id INT PRIMARY KEY,
    nombre VARCHAR (50) NOT NULL,
    salario DECIMAL (10,2) CHECK (salario > 0)
);

-- Reglas de normalizacion ACID (Atomicidad, -- 
-- Organizar, reducir la redundancia y mejorar la integridad --
-- 1ª Norma - Evitar duplicidades de datos y su atomicidad


