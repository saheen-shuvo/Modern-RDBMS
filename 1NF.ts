//First Nomal Form (1NF)

// First Normal Form (1NF) is the first level of normalization in database design. It requires that all columns in a table contain atomic values, meaning that each column should contain only one value and not a set of values. Additionally, it requires that each row in the table be unique, which can be achieved by defining a primary key.

// To achieve 1NF, you need to ensure that there are no repeating groups or arrays in the table. This means that if you have a column that contains multiple values, you should create a separate table to store those values and establish a relationship between the two tables using a foreign key.

// For example, if you have a table called "Orders" that contains a column for "Products" which can have multiple values, you would create a separate table called "OrderProducts" to store the individual products for each order. The "OrderProducts" table would have a foreign key that references the primary key of the "Orders" table.

// By ensuring that your database is in 1NF, you can reduce data redundancy and improve data integrity, making it easier to maintain and query the data effectively.