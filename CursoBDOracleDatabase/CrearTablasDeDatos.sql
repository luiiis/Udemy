CREATE TABLE TB_CATEGORIA(
CODIGO_CA  INT,
DESCRIPCION_CA VARCHAR(30)
);

CREATE TABLE TB_MEDIDAS(
CODIGO_ME NUMBER(3),
ABREVIATURA_ME VARCHAR2(3),
DESCRIPCION_ME VARCHAR2(20)
);

CREATE TABLE TB_ARTICULOS(
CODIGO_AR NUMBER(5),
DESCRIPCION_AR VARCHAR2(50),
MARCA_AR VARCHAR2(30),
CODIGO_ME NUMBER(3),
CODIGO_CA NUMBER(4),
FECHA_ING DATE,
STOCK_ACTUAL DECIMAL(10)
);