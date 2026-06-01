// Normalization

// Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves breaking down a database into smaller, more manageable tables and defining relationships between them. The main goal of normalization is to eliminate data anomalies and ensure that the database is efficient and easy to maintain.

// The normalization process typically involves several normal forms, each with specific rules and requirements. The most common normal forms are:

// 1. First Normal Form (1NF): This form requires that all columns in a table contain atomic values, meaning that each column should contain only one value and not a set of values. It also requires that each row in the table be unique.

// 2. Second Normal Form (2NF): This form builds on 1NF and requires that all non-key attributes in a table be fully functionally dependent on the primary key. This means that there should be no partial dependencies, where a non-key attribute depends on only part of the primary key.

// 3. Third Normal Form (3NF): This form builds on 2NF and requires that there be no transitive dependencies, where a non-key attribute depends on another non-key attribute. In 3NF, all attributes should depend only on the primary key.

// Higher normal forms, such as Boyce-Codd Normal Form (BCNF) and Fourth Normal Form (4NF), address more complex scenarios and further reduce redundancy and anomalies in the database.

// By applying normalization techniques, database designers can create a well-structured database that minimizes data redundancy, improves data integrity, and makes it easier to maintain and query the data effectively.