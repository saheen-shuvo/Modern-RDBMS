//***Keys in Database***

//In a database, keys are used to uniquely identify records and establish relationships between tables. There are several types of keys, including:

// 1. Primary Key: A primary key is a unique identifier for each record in a table. It must contain unique values and cannot be null. It is used to ensure that each record can be uniquely identified. For example, in a table of employees, the employee ID could be the primary key.

// 2. Foreign Key: A foreign key is a field in one table that refers to the primary key in another table. It is used to establish a relationship between the two tables. For example, in a table of orders, the customer ID could be a foreign key that references the primary key in the customers table.

// 3. Unique Key: A unique key is similar to a primary key in that it must contain unique values. However, unlike a primary key, it can contain null values. It is used to ensure that all values in a column are unique. For example, an email address in a users table could be a unique key.

// 4. Composite Key: A composite key is a combination of two or more columns that together uniquely identify a record. It is used when a single column is not sufficient to uniquely identify records. For example, in a table of course enrollments, the combination of student ID and course ID could serve as a composite key.

//5. Candidate Key: A candidate key is a column or a set of columns that can uniquely identify a record in a table. It is a potential primary key. A table can have multiple candidate keys, but only one can be chosen as the primary key.

//6. Alternate Key: An alternate key is a candidate key that was not selected as the primary key. It can still be used to uniquely identify records in the table. For example, if the employee ID is chosen as the primary key, the email address could be an alternate key in the employees table.

//7. Super Key: A super key is a set of one or more columns that can uniquely identify a record in a table. It may contain additional columns that are not necessary for unique identification. For example, in a table of products, the combination of product ID and product name could be a super key, even though the product ID alone is sufficient to uniquely identify records.