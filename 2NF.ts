//Second Normal Form (2NF)

// Second Normal Form (2NF) is the second level of normalization in database design. It builds on the requirements of First Normal Form (1NF) and adds an additional requirement that all non-key attributes in a table must be fully functionally dependent on the primary key. This means that there should be no partial dependencies, where a non-key attribute depends on only part of the primary key.

// To achieve 2NF, you need to identify any partial dependencies in your tables and eliminate them by creating new tables. This typically involves breaking down a table into smaller tables and establishing relationships between them using foreign keys.

// For example, if you have a table called "OrderProducts" that contains a composite primary key consisting of "OrderID" and "ProductID", and it also contains a non-key attribute called "ProductName" that depends only on "ProductID", then you have a partial dependency. To eliminate this, you would create a new table called "Products" that contains the "ProductID" as the primary key and "ProductName" as a non-key attribute. The "OrderProducts" table would then reference the "Products" table using a foreign key.

// By ensuring that your database is in 2NF, you can further reduce data redundancy and improve data integrity, making it easier to maintain and query the data effectively.