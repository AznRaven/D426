const questions = [
  {
    question: "What is a database application?",
    options: [
      "Software that helps business users interact with database systems",
      "A tool used only by database administrators",
      "A programming language for creating databases",
      "An interface for hardware monitoring",
    ],
    answer: "Software that helps business users interact with database systems",
    explanation:
      "A database application is software that helps business users interact with database systems, providing an interface between users and the database.",
  },
  {
    question:
      "Which role is responsible for securing the database system against unauthorized users?",
    options: [
      "Database administrator",
      "Query processor",
      "Storage manager",
      "Transaction manager",
    ],
    answer: "Database administrator",
    explanation:
      "A database administrator is responsible for securing the database system against unauthorized users and enforcing procedures for user access and database system availability.",
  },
  {
    question:
      "What ensures that when a course number appears in a student registration record, the course must exist in the course catalog?",
    options: [
      "Database rules",
      "Authorization policies",
      "Storage management",
      "Transaction processing",
    ],
    answer: "Database rules",
    explanation:
      "Database systems ensure data is consistent with structural and business rules, such as requiring that referenced entities (like courses) must exist.",
  },
  {
    question: "What SQL command is used to retrieve data from a table?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    answer: "SELECT",
    explanation:
      "The SELECT command is used to retrieve data from a table in a relational database.",
  },
  {
    question:
      "What does the query processor perform to ensure the most efficient instructions are executed?",
    options: [
      "Query optimization",
      "Data authorization",
      "Data synchronization",
      "Transaction locking",
    ],
    answer: "Query optimization",
    explanation:
      "Query optimization is performed by the query processor to ensure the most efficient instructions are executed on the data.",
  },
  {
    question: "What does the storage manager use to quickly locate data?",
    options: ["Indexes", "Queries", "Authorizations", "Transactions"],
    answer: "Indexes",
    explanation:
      "The storage manager uses indexes to quickly locate data, especially important when dealing with large databases.",
  },
  {
    question:
      "Which component prevents conflicts between concurrent transactions?",
    options: [
      "Transaction manager",
      "Query processor",
      "Storage manager",
      "Database administrator",
    ],
    answer: "Transaction manager",
    explanation:
      "The transaction manager ensures transactions are properly executed and prevents conflicts between concurrent transactions.",
  },
  {
    question: "What SQL command is used to modify data in a table?",
    options: ["UPDATE", "INSERT", "SELECT", "DELETE"],
    answer: "UPDATE",
    explanation:
      "The UPDATE command is used to modify existing data in a table.",
  },
  {
    question: "MongoDB is categorized as what type of database?",
    options: ["NoSQL", "Relational", "Hierarchical", "Network"],
    answer: "NoSQL",
    explanation:
      "MongoDB is categorized as a NoSQL database, which means it doesn't use the traditional table-based relational database structure.",
  },
  {
    question: "What SQL command is used to add new rows to a table?",
    options: ["INSERT", "SELECT", "UPDATE", "DELETE"],
    answer: "INSERT",
    explanation:
      "The INSERT command is used to add new rows to a table in a relational database.",
  },
  {
    question: "Which SQL data type stores integer values?",
    options: ["DECIMAL", "VARCHAR", "INT", "DATE"],
    answer: "INT",
    explanation: "INT is used to store integer values in SQL.",
  },
  {
    question: "Which SQL data type is used for textual values?",
    options: ["VARCHAR", "DECIMAL", "DATE", "INT"],
    answer: "VARCHAR",
    explanation: "VARCHAR stores variable-length textual values.",
  },
  {
    question: "What is the first phase of database design?",
    options: [
      "Logical design",
      "Physical design",
      "Analysis",
      "Implementation",
    ],
    answer: "Analysis",
    explanation:
      "The analysis phase specifies database requirements before implementation.",
  },
  {
    question:
      "Which phase converts entities and attributes into tables and columns?",
    options: ["Logical design", "Physical design", "Analysis", "Normalization"],
    answer: "Logical design",
    explanation:
      "Logical design converts entities, relationships, and attributes into tables, keys, and columns.",
  },
  {
    question:
      "Which SQL interface is included in MySQL Server for command-line interactions?",
    options: [
      "MySQL Workbench",
      "MySQL CLI",
      "MySQL Command-Line Client",
      "phpMyAdmin",
    ],
    answer: "MySQL Command-Line Client",
    explanation:
      "The MySQL Command-Line Client allows users to interact with MySQL Server using text commands.",
  },
  {
    question: "What is the purpose of the SQL CREATE TABLE statement?",
    options: [
      "To delete a table from the database",
      "To create a new table with specified columns and data types",
      "To retrieve data from a table",
      "To update existing table records",
    ],
    answer: "To create a new table with specified columns and data types",
    explanation:
      "The SQL CREATE TABLE statement creates a new table by specifying the table name and column names, each assigned a data type like INT, DECIMAL, VARCHAR, or DATE to define the format of column values.",
  },
  {
    question: "Which SQL data type is used to store textual values?",
    options: ["INT", "DECIMAL", "VARCHAR", "DATE"],
    answer: "VARCHAR",
    explanation:
      "VARCHAR is a data type in SQL that stores textual values, unlike INT (integers), DECIMAL (fractional numbers), or DATE (year, month, and day).",
  },
  {
    question: "What does the analysis phase of database design specify?",
    options: [
      "Indexes and storage organization",
      "Database requirements as entities, relationships, and attributes",
      "Tables, keys, and columns in a specific database system",
      "Query processing speed",
    ],
    answer: "Database requirements as entities, relationships, and attributes",
    explanation:
      "The analysis phase defines database requirements without regard to a specific system, representing them as entities (e.g., person, place), relationships (links between entities), and attributes (descriptive properties).",
  },
  {
    question:
      "What happens during the logical design phase for a relational database?",
    options: [
      "Indexes are added to improve query speed",
      "Entities, relationships, and attributes are converted into tables, keys, and columns",
      "Storage media organization is specified",
      "Error codes are generated for incorrect SQL statements",
    ],
    answer:
      "Entities, relationships, and attributes are converted into tables, keys, and columns",
    explanation:
      "In the logical design phase, the conceptual requirements from the analysis phase are implemented in a specific database system, such as converting entities into tables for a relational database.",
  },
  {
    question: "What is the main focus of the physical design phase?",
    options: [
      "Defining entities and relationships",
      "Adding indexes and specifying table organization on storage media",
      "Converting requirements into tables and columns",
      "Retrieving data from the database",
    ],
    answer: "Adding indexes and specifying table organization on storage media",
    explanation:
      "The physical design phase enhances performance by adding indexes and organizing tables on storage media, affecting query speed but not the query results, per the principle of data independence.",
  },
  {
    question: "What does the principle of data independence ensure?",
    options: [
      "Physical design affects both query speed and results",
      "Logical design is independent of the database system",
      "Physical design affects query speed but not query results",
      "Analysis phase defines storage organization",
    ],
    answer: "Physical design affects query speed but not query results",
    explanation:
      "Data independence means that changes in physical design, like adding indexes, impact query processing speed but do not alter the data retrieved by queries.",
  },
  {
    question:
      "What is the purpose of an application programming interface (API) in database programs?",
    options: [
      "To define entities and relationships",
      "To simplify the use of SQL with general-purpose languages",
      "To organize tables on storage media",
      "To generate error codes for SQL statements",
    ],
    answer: "To simplify the use of SQL with general-purpose languages",
    explanation:
      "An API provides a standardized way for database programs to interact with SQL, making it easier to integrate with general-purpose programming languages.",
  },
  {
    question:
      "What does the MySQL Command-Line Client return when an SQL statement fails?",
    options: [
      "A new table",
      "An error code and description",
      "A query result",
      "A list of indexes",
    ],
    answer: "An error code and description",
    explanation:
      "The MySQL Command-Line Client, a text interface in MySQL Server, returns an error code and description when an SQL statement is syntactically incorrect or cannot be executed.",
  },
  {
    question: "What is a tuple in the context of a relational database?",
    options: [
      "An unordered collection of elements",
      "An ordered collection of elements enclosed in parentheses",
      "A set of tables",
      "A type of data storage device",
    ],
    answer: "An ordered collection of elements enclosed in parentheses",
    explanation:
      "A tuple is an ordered collection of elements enclosed in parentheses, such as (a, b, c), where the order matters, making (a, b, c) different from (c, b, a).",
  },
  {
    question: "How are rows organized in a relational database table?",
    options: [
      "In a fixed order based on insertion",
      "As an unordered set with no inherent order",
      "In alphabetical order by default",
      "As a sequence of named values",
    ],
    answer: "As an unordered set with no inherent order",
    explanation:
      "Since a table is a set of rows in a relational database, the rows have no inherent order, unlike tuples which are ordered.",
  },
  {
    question: "Which of the following is a synonym for 'row' in a relational database?",
    options: ["Table", "Field", "Record", "Relation"],
    answer: "Record",
    explanation:
      "In a relational database, 'row' is synonymous with 'record' or 'tuple,' while 'table' refers to the entire structure and 'field' refers to a column.",
  },
  {
    question: "What must a literal string value be surrounded by in SQL?",
    options: [
      "Parentheses",
      "Single quotes or double quotes",
      "Square brackets",
      "No surrounding characters",
    ],
    answer: "Single quotes or double quotes",
    explanation:
      "Literal string values in SQL, such as 'String' or \"String\", must be enclosed in single or double quotes to distinguish them from other types of data.",
  },
  {
    question: "Which SQL sublanguage is responsible for retrieving data from the database?",
    options: [
      "Data Definition Language (DDL)",
      "Data Query Language (DQL)",
      "Data Manipulation Language (DML)",
      "Data Control Language (DCL)",
    ],
    answer: "Data Query Language (DQL)",
    explanation:
      "DQL is the SQL sublanguage used to retrieve data from the database, typically involving commands like SELECT.",
  },
  {
    question: "What does the CREATE TABLE statement specify when defining a new table?",
    options: [
      "User access permissions",
      "Table name, column names, and column data types",
      "Transaction management rules",
      "Query performance settings",
    ],
    answer: "Table name, column names, and column data types",
    explanation:
      "The CREATE TABLE statement creates a new table by specifying its name, column names, and data types like INT, VARCHAR(N), DATE, or DECIMAL(M, D).",
  },
  {
    question: "What does Rule 7, known as data independence, allow database administrators to do?",
    options: [
      "Change the order of rows in a table",
      "Improve query performance by altering data organization without affecting results",
      "Modify query results without changing the data",
      "Restrict user access to the database",
    ],
    answer: "Improve query performance by altering data organization without affecting results",
    explanation:
      "Data independence (Rule 7) allows administrators to change how data is organized on storage devices to improve query performance, without impacting the query results.",
  },
  {
    question: "What is the purpose of the DROP TABLE statement in SQL?",
    options: [
      "To retrieve data from a table",
      "To delete an existing table from the database",
      "To create a new table",
      "To modify a table's structure",
    ],
    answer: "To delete an existing table from the database",
    explanation:
      "The DROP TABLE statement is used in SQL to remove an existing table and its data from the database entirely.",
  },
  {
    question: "What does the SQL ALTER TABLE statement do?",
    options: [
      "Deletes a table and its rows",
      "Adds, deletes, or modifies columns on an existing table",
      "Creates a new table",
      "Updates rows in a table",
    ],
    answer: "Adds, deletes, or modifies columns on an existing table",
    explanation:
      "The ALTER TABLE statement is used to modify the structure of an existing table by adding, deleting, or modifying columns.",
  },
  {
    question: "Which integer data type uses 4 bytes of storage?",
    options: ["TINYINT", "SMALLINT", "MEDIUMINT", "INTEGER"],
    answer: "INTEGER",
    explanation:
      "The INTEGER (or INT) data type uses 4 bytes of storage, with a signed range of -2,147,483,648 to 2,147,483,647.",
  },
  {
    question: "What is the result of the arithmetic operation 5 % 2?",
    options: ["2.5", "1", "0", "10"],
    answer: "1",
    explanation:
      "The modulo operator (%) divides one number by another and returns the integer remainder, so 5 % 2 equals 1.",
  },
  {
    question: "What happens if the WHERE clause is omitted from an UPDATE statement?",
    options: [
      "Only one row is updated",
      "No rows are updated",
      "All rows in the table are updated",
      "The statement fails",
    ],
    answer: "All rows in the table are updated",
    explanation:
      "Omitting the WHERE clause in an UPDATE statement results in all rows being modified according to the SET clause.",
  },
  {
    question: "What does the DELETE statement do in SQL?",
    options: [
      "Deletes existing rows in a table",
      "Creates a new table",
      "Modifies existing rows in a table",
      "Retrieves data from a table",
    ],
    answer: "Deletes existing rows in a table",
    explanation:
      "The DELETE statement deletes existing rows in a table. The FROM keyword is followed by the table name whose rows are to be deleted. An optional WHERE clause specifies which rows should be deleted. Omitting the WHERE clause results in all rows in the table being deleted.",
  },
  {
    question: "What does the TRUNCATE statement do in SQL?",
    options: [
      "Deletes specific rows",
      "Deletes all rows from a table",
      "Modifies column structure",
      "Creates a new table",
    ],
    answer: "Deletes all rows from a table",
    explanation:
      "The TRUNCATE statement deletes all rows from a table and is nearly identical to DELETE without a WHERE clause, except for minor system-dependent differences.",
  },
  {
    question: "What is the purpose of the MERGE statement in SQL?",
    options: [
      "To delete rows from a table",
      "To update rows in a table",
      "To select data from one table and insert it into another",
      "To create a new table",
    ],
    answer: "To select data from one table and insert it into another",
    explanation:
      "The MERGE statement selects data from one table, called the source, and inserts the data into another table, called the target.",
  },
  {
    question: "What is a primary key in a database?",
    options: [
      "A column used to store text data",
      "A column or group of columns used to identify a row",
      "A column that can have duplicate values",
      "A column used to store binary data",
    ],
    answer: "A column or group of columns used to identify a row",
    explanation:
      "A primary key is a column, or group of columns, used to uniquely identify each row in a table.",
  },
  {
    question: "What is an auto-increment column?",
    options: [
      "A column that stores text data",
      "A column that is assigned an automatically incrementing value when a new row is inserted",
      "A column that can have duplicate values",
      "A column that stores binary data",
    ],
    answer: "A column that is assigned an automatically incrementing value when a new row is inserted",
    explanation:
      "An auto-increment column is a numeric column that is assigned an automatically incrementing value when a new row is inserted.",
  },
  {
    question: "What is a foreign key in a database?",
    options: [
      "A column that stores text data",
      "A column that refers to a primary key",
      "A column that can have duplicate values",
      "A column that stores binary data",
    ],
    answer: "A column that refers to a primary key",
    explanation:
      "A foreign key is a column, or group of columns, that refer to a primary key. The data types of the foreign and primary keys must be the same, but the names may be different.",
  },
  {
    question: "What does the FOREIGN KEY constraint do?",
    options: [
      "Ensures data is unique",
      "Ensures referential integrity by rejecting insert, update, and delete statements that violate it",
      "Allows duplicate values",
      "Stores binary data",
    ],
    answer: "Ensures referential integrity by rejecting insert, update, and delete statements that violate it",
    explanation:
      "A foreign key constraint ensures referential integrity by rejecting insert, update, and delete statements that violate it.",
  },
  {
    question: "What does the RESTRICT referential integrity action do?",
    options: [
      "Sets invalid foreign keys to NULL",
      "Sets invalid foreign keys to the default value",
      "Rejects an insert, update, or delete that violates referential integrity",
      "Propagates primary key changes to foreign keys",
    ],
    answer: "Rejects an insert, update, or delete that violates referential integrity",
    explanation:
      "The RESTRICT action rejects any insert, update, or delete operation that would violate referential integrity.",
  },
  {
    question: "What is a constraint in a database?",
    options: [
      "A rule that governs allowable values in a database",
      "A column that stores text data",
      "A column that can have duplicate values",
      "A column that stores binary data",
    ],
    answer: "A rule that governs allowable values in a database",
    explanation:
      "A constraint is a rule that governs allowable values in a database, based on relational and business rules, and implemented with special keywords in a CREATE TABLE statement.",
  },
  {
    question: "How are constraints added or dropped in SQL?",
    options: [
      "Using the CREATE TABLE statement",
      "Using the ALTER TABLE statement with ADD, DROP, or CHANGE clause",
      "Using the SELECT statement",
      "Using the INSERT statement",
    ],
    answer: "Using the ALTER TABLE statement with ADD, DROP, or CHANGE clause",
    explanation:
      "Constraints are added and dropped with the ALTER TABLE statement followed by an ADD, DROP, or CHANGE clause.",
  },
];

export default questions;