//***Anomalies in Database */

// This file contains the anomalies in the database that we want to track and fix.

// Anomalies in a database refer to inconsistencies or irregularities that can occur when data is inserted, updated, or deleted. These anomalies can lead to data integrity issues and can make it difficult to maintain the database effectively. Common types of anomalies include:

// 1. Insertion Anomaly: This occurs when certain data cannot be inserted into the database without the presence of other data. For example, if you have a table for employees and a table for departments, you may not be able to insert an employee record without first inserting a department record.

// 2. Update Anomaly: This occurs when changes to data in one part of the database require changes to be made in multiple places. For example, if you have a table for customers and a table for orders, updating a customer's address may require updates to all orders associated with that customer.

// 3. Deletion Anomaly: This occurs when deleting data from the database results in unintended loss of other data. For example, if you delete a department record, you may also lose all employee records associated with that department if there is no proper foreign key constraint in place.

// To address these anomalies, it is important to design the database schema carefully and implement appropriate constraints and relationships between tables. Normalization techniques can also help to reduce the likelihood of anomalies by organizing data into well-structured tables.