//Third Normal Form (3NF)

// Third Normal Form (3NF) is the third level of normalization in database design. It builds on the requirements of Second Normal Form (2NF) and adds an additional requirement that there be no transitive dependencies, where a non-key attribute depends on another non-key attribute. In 3NF, all attributes should depend only on the primary key.

// To achieve 3NF, you need to identify any transitive dependencies in your tables and eliminate them by creating new tables. This typically involves breaking down a table into smaller tables and establishing relationships between them using foreign keys.

// For example, if you have a table called "Employees" that contains a primary key called "EmployeeID" and two non-key attributes called "DepartmentID" and "DepartmentName", where "DepartmentName" depends on "DepartmentID", then you have a transitive dependency. To eliminate this, you would create a new table called "Departments" that contains the "DepartmentID" as the primary key and "DepartmentName" as a non-key attribute. The "Employees" table would then reference the "Departments" table using a foreign key.

// By ensuring that your database is in 3NF, you can further reduce data redundancy and improve data integrity, making it easier to maintain and query the data effectively.