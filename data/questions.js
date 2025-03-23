const questions = [
  {
    question:
      "Which SQL clause is used to filter records based on a condition?",
    options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
    answer: "WHERE",
    explanation:
      "The WHERE clause is used to filter records before aggregation in SQL queries.",
  },
  {
    question: "What does ACID stand for in database transactions?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Automated, Consistent, Integrated, Durable",
      "Active, Clear, Isolated, Defined",
      "Atomic, Controlled, Isolated, Distinct",
    ],
    answer: "Atomicity, Consistency, Isolation, Durability",
    explanation:
      "ACID ensures database transactions are reliable: Atomicity (all or nothing), Consistency (data integrity), Isolation (independent transactions), and Durability (permanent changes).",
  },
  {
    question: "Which normal form ensures no transitive dependencies exist?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: "3NF",
    explanation:
      "Third Normal Form (3NF) removes transitive dependencies to ensure better data integrity.",
  },
  {
    question: "What is the role of the query processor in a database system?",
    options: [
      "Execute transactions in order",
      "Interpret queries and return results efficiently",
      "Store data in indexed files",
      "Prevent unauthorized access",
    ],
    answer: "Interpret queries and return results efficiently",
    explanation:
      "The query processor optimizes and executes SQL queries efficiently.",
  },
  {
    question:
      "Which SQL statement is used to remove a table and its structure?",
    options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
    answer: "DROP",
    explanation:
      "DROP TABLE permanently deletes a table and its structure, unlike DELETE which removes rows only.",
  },
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
  },{
    "question": "What is a tuple in the context of a relational database?",
    "options": [
        "An unordered collection of elements",
        "An ordered collection of elements enclosed in parentheses",
        "A set of tables",
        "A type of data storage device"
    ],
    "answer": "An ordered collection of elements enclosed in parentheses",
    "explanation": "A tuple is an ordered collection of elements enclosed in parentheses, such as (a, b, c), where the order matters, making (a, b, c) different from (c, b, a)."
},
{
    "question": "How are rows organized in a relational database table?",
    "options": [
        "In a fixed order based on insertion",
        "As an unordered set with no inherent order",
        "In alphabetical order by default",
        "As a sequence of named values"
    ],
    "answer": "As an unordered set with no inherent order",
    "explanation": "Since a table is a set of rows in a relational database, the rows have no inherent order, unlike tuples which are ordered."
},
{
    "question": "Which of the following is a synonym for 'row' in a relational database?",
    "options": ["Table", "Field", "Record", "Relation"],
    "answer": "Record",
    "explanation": "In a relational database, 'row' is synonymous with 'record' or 'tuple,' while 'table' refers to the entire structure and 'field' refers to a column."
},
{
    "question": "What must a literal string value be surrounded by in SQL?",
    "options": [
        "Parentheses",
        "Single quotes or double quotes",
        "Square brackets",
        "No surrounding characters"
    ],
    "answer": "Single quotes or double quotes",
    "explanation": "Literal string values in SQL, such as 'String' or \"String\", must be enclosed in single or double quotes to distinguish them from other types of data."
},
{
    "question": "Which SQL sublanguage is responsible for retrieving data from the database?",
    "options": [
        "Data Definition Language (DDL)",
        "Data Query Language (DQL)",
        "Data Manipulation Language (DML)",
        "Data Control Language (DCL)"
    ],
    "answer": "Data Query Language (DQL)",
    "explanation": "DQL is the SQL sublanguage used to retrieve data from the database, typically involving commands like SELECT."
},
{
    "question": "What does the CREATE TABLE statement specify when defining a new table?",
    "options": [
        "User access permissions",
        "Table name, column names, and column data types",
        "Transaction management rules",
        "Query performance settings"
    ],
    "answer": "Table name, column names, and column data types",
    "explanation": "The CREATE TABLE statement creates a new table by specifying its name, column names, and data types like INT, VARCHAR(N), DATE, or DECIMAL(M, D)."
},
{
    "question": "What does Rule 7, known as data independence, allow database administrators to do?",
    "options": [
        "Change the order of rows in a table",
        "Improve query performance by altering data organization without affecting results",
        "Modify query results without changing the data",
        "Restrict user access to the database"
    ],
    "answer": "Improve query performance by altering data organization without affecting results",
    "explanation": "Data independence (Rule 7) allows administrators to change how data is organized on storage devices to improve query performance, without impacting the query results."
},
{
    "question": "What is the purpose of the DROP TABLE statement in SQL?",
    "options": [
        "To retrieve data from a table",
        "To delete an existing table from the database",
        "To create a new table",
        "To modify a table's structure"
    ],
    "answer": "To delete an existing table from the database",
    "explanation": "The DROP TABLE statement is used in SQL to remove an existing table and its data from the database entirely."
},
{
  "question": "What does the ALTER TABLE statement do in SQL?",
  "options": [
      "Deletes a table and its rows",
      "Adds, deletes, or modifies columns on an existing table",
      "Creates a new table",
      "Updates rows in a table"
  ],
  "answer": "Adds, deletes, or modifies columns on an existing table",
  "explanation": "The ALTER TABLE statement is used to modify the structure of an existing table by adding, deleting, or modifying columns."
},
{
  "question": "Which integer data type uses 4 bytes of storage?",
  "options": ["TINYINT", "SMALLINT", "MEDIUMINT", "INTEGER"],
  "answer": "INTEGER",
  "explanation": "The INTEGER (or INT) data type uses 4 bytes of storage, with a signed range of -2,147,483,648 to 2,147,483,647."
},
{
  "question": "What is the result of the arithmetic operation 5 % 2?",
  "options": ["2.5", "1", "0", "10"],
  "answer": "1",
  "explanation": "The modulo operator (%) divides one number by another and returns the integer remainder, so 5 % 2 equals 1."
},
{
  "question": "What happens if the WHERE clause is omitted from an UPDATE statement?",
  "options": [
      "Only one row is updated",
      "No rows are updated",
      "All rows in the table are updated",
      "The statement fails"
  ],
  "answer": "All rows in the table are updated",
  "explanation": "Omitting the WHERE clause in an UPDATE statement results in all rows being modified according to the SET clause."
},
{
  "question": "How does the TRUNCATE statement differ from a DELETE statement with no WHERE clause?",
  "options": [
      "TRUNCATE only deletes specific rows",
      "TRUNCATE is identical to DELETE in all ways",
      "TRUNCATE has minor differences depending on the database system",
      "TRUNCATE modifies column structure"
  ],
  "answer": "TRUNCATE has minor differences depending on the database system",
  "explanation": "TRUNCATE deletes all rows from a table and is nearly identical to DELETE without a WHERE clause, except for minor system-dependent differences."
},
{
  "question": "What is the purpose of a primary key in a table?",
  "options": [
      "To store text data",
      "To identify a row uniquely",
      "To link to another database",
      "To sort rows automatically"
  ],
  "answer": "To identify a row uniquely",
  "explanation": "A primary key is a column or group of columns used to uniquely identify each row in a table."
},
{
  "question": "Which referential integrity action rejects an insert, update, or delete that violates integrity?",
  "options": ["SET NULL", "SET DEFAULT", "RESTRICT", "CASCADE"],
  "answer": "RESTRICT",
  "explanation": "The RESTRICT action rejects any insert, update, or delete operation that would violate referential integrity."
},
{
  "question": "What does the BETWEEN operator check in a WHERE clause?",
  "options": [
      "If a value matches a pattern",
      "If a value is between two other values",
      "If a value is equal to another",
      "If a value is ordered"
  ],
  "answer": "If a value is between two other values",
  "explanation": "The BETWEEN operator checks if a value lies within a range, equivalent to value >= minValue AND value <= maxValue."
},
{
  "question": "Which join type selects only matching rows from both tables?",
  "options": ["FULL JOIN", "INNER JOIN", "LEFT JOIN", "RIGHT JOIN"],
  "answer": "INNER JOIN",
  "explanation": "An INNER JOIN selects only the rows that have matching values in both the left and right tables."
},
{
  "question": "What is the purpose of the HAVING clause?",
  "options": [
      "To order rows",
      "To filter group results after a GROUP BY",
      "To join tables",
      "To define a subquery"
  ],
  "answer": "To filter group results after a GROUP BY",
  "explanation": "The HAVING clause filters grouped results after a GROUP BY clause, based on a condition."
},
{
  "question": "In entity-relationship modeling, what does cardinality refer to?",
  "options": [
      "The number of tables in a database",
      "The maxima and minima of relationships and attributes",
      "The storage size of a column",
      "The order of rows"
  ],
  "answer": "The maxima and minima of relationships and attributes",
  "explanation": "Cardinality refers to the maximum and minimum number of instances in relationships and attributes in an ER model."
},{
  "question": "Why should primary key values be stable?",
  "options": [
      "To allow frequent changes",
      "To avoid updating statements and cascading changes to foreign keys",
      "To store descriptive information",
      "To increase storage size"
  ],
  "answer": "To avoid updating statements and cascading changes to foreign keys",
  "explanation": "Primary key values should be stable because changes require updating statements that use the old value and cascading the new value to matching foreign keys."
},
{
  "question": "What is a characteristic of an artificial key?",
  "options": [
      "Contains descriptive information",
      "Is a composite key with multiple columns",
      "Is stable, simple, and meaningless",
      "Changes frequently"
  ],
  "answer": "Is stable, simple, and meaningless",
  "explanation": "An artificial key is a single-column primary key, typically an integer auto-generated by the database, designed to be stable, simple, and meaningless."
},
{
  "question": "What does it mean for a candidate key to be minimal?",
  "options": [
      "It contains the fewest rows",
      "All its columns are necessary for uniqueness",
      "It is always a single column",
      "It includes descriptive data"
  ],
  "answer": "All its columns are necessary for uniqueness",
  "explanation": "A candidate key is minimal if all its columns are essential for ensuring uniqueness; removing any column would break uniqueness."
},
{
  "question": "What condition must a table satisfy to be in Boyce-Codd Normal Form (BCNF)?",
  "options": [
      "Non-key columns must depend on a unique column",
      "Every column must depend on a non-key column",
      "All dependencies must be trivial",
      "Only composite keys are allowed"
  ],
  "answer": "Non-key columns must depend on a unique column",
  "explanation": "A table is in BCNF if, whenever column A depends on column B, B is unique, making BCNF stricter than third normal form by not limiting dependencies to non-key columns."
},
{
  "question": "What is the purpose of normalization in database design?",
  "options": [
      "To introduce redundancy",
      "To eliminate redundancy by decomposing tables",
      "To merge tables",
      "To reduce the number of columns"
  ],
  "answer": "To eliminate redundancy by decomposing tables",
  "explanation": "Normalization eliminates redundancy by breaking a table into two or more tables that conform to higher normal forms."
},
{
  "question": "Which table structure optimizes insert operations, especially for bulk loading?",
  "options": [
      "Sorted table",
      "Heap table",
      "Hash table",
      "Table cluster"
  ],
  "answer": "Heap table",
  "explanation": "A heap table imposes no order on rows, making it fast for insert operations, particularly bulk loads, as rows are stored in the order they are loaded."
},
{
  "question": "What is the difference between a table scan and an index scan?",
  "options": [
      "A table scan reads index blocks; an index scan reads table blocks",
      "A table scan reads table blocks directly; an index scan reads index blocks",
      "A table scan is faster than an index scan",
      "An index scan ignores indexes"
  ],
  "answer": "A table scan reads table blocks directly; an index scan reads index blocks",
  "explanation": "A table scan reads table blocks directly without an index, while an index scan reads index blocks sequentially to locate table blocks."
},
{
  "question": "What does a dense index contain?",
  "options": [
      "An entry for every table block",
      "An entry for every table row",
      "Only unique values",
      "A single entry per table"
  ],
  "answer": "An entry for every table row",
  "explanation": "A dense index contains an entry for every row in the table, unlike a sparse index, which has an entry per table block."
},
{
  "question": "What does the CREATE INDEX statement do?",
  "options": [
      "Creates a new table",
      "Creates an index on specified columns",
      "Deletes an index",
      "Modifies table structure"
  ],
  "answer": "Creates an index on specified columns",
  "explanation": "The CREATE INDEX statement creates an index on one or more columns to improve query performance."
},
{
  "question": "What is the purpose of a tablespace in a database?",
  "options": [
    "It maps one or more tables to a single file",
    "It defines the relationships between tables",
    "It ensures data consistency across different tables",
    "It improves query execution speed"
  ],
  "answer": "It maps one or more tables to a single file",
  "explanation": "A tablespace is a database object that organizes and stores tables within a single physical file, helping manage storage efficiently."
},
{
  "question": "What does logical design specify in a database?",
  "options": [
    "Indexes, table structures, and partitions",
    "Tables, columns, and keys",
    "Query execution plans and storage optimization",
    "Physical storage locations and access methods"
  ],
  "answer": "Tables, columns, and keys",
  "explanation": "Logical design focuses on defining the structure of the database, including tables, columns, and keys, without concern for physical storage details."
},
{
  "question": "What does physical design specify in a database?",
  "options": [
    "Tables, columns, and keys",
    "Indexes, table structures, and partitions",
    "Data relationships and constraints",
    "User roles and access permissions"
  ],
  "answer": "Indexes, table structures, and partitions",
  "explanation": "Physical design focuses on optimizing data storage and retrieval by specifying indexes, table structures, and partitions, improving query performance without affecting query results."
},
{
  "question": "What is the role of a storage engine in a database?",
  "options": [
    "It defines tables, columns, and keys",
    "It translates query processor instructions into low-level commands for accessing storage media",
    "It optimizes query execution speed by creating indexes",
    "It enforces user permissions and security policies"
  ],
  "answer": "It translates query processor instructions into low-level commands for accessing storage media",
  "explanation": "A storage engine (or storage manager) is responsible for handling how data is stored and retrieved by converting high-level queries into low-level storage operations."
},
{
  "question": "How does a hash index organize index entries?",
  "options": [
    "By storing them sequentially in a sorted order",
    "By assigning them to buckets based on a hash function",
    "By creating a tree structure for fast lookups",
    "By using a grid of bits to represent data presence"
  ],
  "answer": "By assigning them to buckets based on a hash function",
  "explanation": "A hash index uses a hash function to distribute index entries into buckets, allowing for fast lookups based on hash values."
},
{
  "question": "What does a bitmap index use to represent data?",
  "options": [
    "A tree structure",
    "A linked list",
    "A grid of bits with ones and zeros",
    "A hash table"
  ],
  "answer": "A grid of bits with ones and zeros",
  "explanation": "A bitmap index represents data using a grid of bits, where ones and zeros indicate the presence or absence of values."
},
{
  "question": "When is a bitmap index most effective?",
  "options": [
    "When indexing columns with high cardinality",
    "When indexing columns with low cardinality",
    "When storing unstructured data",
    "When performing sequential scans"
  ],
  "answer": "When indexing columns with low cardinality",
  "explanation": "Bitmap indexes are most efficient for low-cardinality columns (columns with a small number of distinct values) because they use bitmaps to represent values efficiently."
},
{
  "question": "What is the role of a storage engine in a database?",
  "options": [
    "It defines tables, columns, and keys",
    "It translates query processor instructions into low-level commands for accessing storage media",
    "It optimizes query execution speed by creating indexes",
    "It enforces user permissions and security policies"
  ],
  "answer": "It translates query processor instructions into low-level commands for accessing storage media",
  "explanation": "A storage engine (or storage manager) is responsible for handling how data is stored and retrieved by converting high-level queries into low-level storage operations."
},
{
  "question": "What does a dense index contain?",
  "options": [
    "An entry for every table row",
    "An entry for every table block",
    "An entry for every table column",
    "An entry for each unique value"
  ],
  "answer": "An entry for every table row",
  "explanation": "A dense index contains an index entry for each row in the table, making lookups more direct."
},
{
  "question": "What does a sparse index contain?",
  "options": [
    "An entry for every table row",
    "An entry for every table block",
    "An entry for each unique value",
    "An entry for each column"
  ],
  "answer": "An entry for every table block",
  "explanation": "A sparse index contains fewer entries, typically one for each block of the table, reducing storage requirements but possibly slowing down lookups."
},
{
  "question": "What is the main characteristic of a heap table?",
  "options": [
    "Rows are ordered by a sort column",
    "Rows are stored in load order with no imposed order",
    "Rows are assigned to buckets",
    "Rows are interleaved from multiple tables"
  ],
  "answer": "Rows are stored in load order with no imposed order",
  "explanation": "In a heap table, no order is imposed on rows, and they are stored in the order they are loaded."
},
{
  "question": "What is a key benefit of heap tables?",
  "options": [
    "Optimized for SELECT queries",
    "Optimized for insert operations and bulk loads",
    "Optimized for indexing",
    "Optimized for binary searches"
  ],
  "answer": "Optimized for insert operations and bulk loads",
  "explanation": "Heap tables are particularly fast for bulk load operations and inserting many rows at once, as they do not impose any specific order on the data."
},
{
  "question": "In a sorted table, how is the row order determined?",
  "options": [
    "By the database's internal algorithm",
    "By the designer specifying a sort column",
    "By the modulo function",
    "By interleaving rows from multiple tables"
  ],
  "answer": "By the designer specifying a sort column",
  "explanation": "In a sorted table, the database designer selects a sort column that determines the physical order of the rows."
},
{
  "question": "How are rows assigned in a hash table?",
  "options": [
    "Rows are stored in load order",
    "Rows are assigned to buckets using a hash function",
    "Rows are interleaved between multiple tables",
    "Rows are ordered based on a sort column"
  ],
  "answer": "Rows are assigned to buckets using a hash function",
  "explanation": "In a hash table, rows are distributed into buckets based on a hash function, and each bucket contains a block or group of blocks."
},
{
  "question": "What is a table cluster in a database?",
  "options": [
    "A table that stores rows in sorted order",
    "A table that stores rows interleaved with rows from other tables",
    "A table that stores rows in hash buckets",
    "A table that stores rows with no specific order"
  ],
  "answer": "A table that stores rows interleaved with rows from other tables",
  "explanation": "A table cluster, or multi-table, stores rows from multiple tables in the same storage area, interleaving the rows for more efficient access."
},
{
  "question": "What is a table scan?",
  "options": [
    "A database operation that reads table blocks using an index",
    "A database operation that reads table blocks directly without an index",
    "A database operation that splits an index in two",
    "A database operation that executes a binary search"
  ],
  "answer": "A database operation that reads table blocks directly without an index",
  "explanation": "A table scan reads the table blocks directly in a sequential manner without accessing an index."
},
{
  "question": "What is an index scan?",
  "options": [
    "A database operation that reads index blocks to locate table blocks",
    "A database operation that reads table blocks directly",
    "A database operation that splits a table into multiple blocks",
    "A database operation that uses a modulo function"
  ],
  "answer": "A database operation that reads index blocks to locate table blocks",
  "explanation": "An index scan reads index blocks sequentially to locate the necessary table blocks for the query."
},
{
  "question": "What does hit ratio, also known as filter factor or selectivity, measure?",
  "options": [
    "The speed of query execution",
    "The percentage of table rows selected by a query",
    "The size of the database",
    "The number of indexes used in a query"
  ],
  "answer": "The percentage of table rows selected by a query",
  "explanation": "Hit ratio, or filter factor, measures how many rows are selected by a query relative to the total number of rows in the table."
},
{
  "question": "How does a binary search operate in a database index?",
  "options": [
    "By sequentially scanning the entire index",
    "By splitting the index in half repeatedly until the search value is found",
    "By hashing index entries into buckets",
    "By sorting rows based on a specified column"
  ],
  "answer": "By splitting the index in half repeatedly until the search value is found",
  "explanation": "A binary search splits the index into two parts at each step, narrowing down the search space until the entry containing the search value is located."
},
{
  "question": "What is Boyce-Codd Normal Form (BCNF)?",
  "options": [
    "A form that eliminates all functional dependencies",
    "A form that ensures every dependency is on a candidate key",
    "A form that normalizes tables by removing redundant columns",
    "A form that only applies to composite keys"
  ],
  "answer": "A form that ensures every dependency is on a candidate key",
  "explanation": "Boyce-Codd Normal Form (BCNF) requires that every dependency in a table must be on a candidate key, making it a stricter version of third normal form."
},
{
  "question": "What is a trivial dependency?",
  "options": [
    "When one column depends on another column that is part of a composite key",
    "When columns A are a subset of columns B, and A depends on B",
    "When a column's dependency is on a primary key",
    "When columns are dependent on a foreign key"
  ],
  "answer": "When columns A are a subset of columns B, and A depends on B",
  "explanation": "Trivial dependencies occur when the columns of A are a subset of the columns of B, in which case A always depends on B."
},
{
  "question": "What is the purpose of normalization in database design?",
  "options": [
    "To remove all indexes from the database",
    "To decompose a table into multiple tables to eliminate redundancy",
    "To introduce redundancy for easier data retrieval",
    "To increase the number of columns in the database"
  ],
  "answer": "To decompose a table into multiple tables to eliminate redundancy",
  "explanation": "Normalization eliminates redundancy in a database by decomposing large tables into smaller ones that are in higher normal forms."
},
{
  "question": "What does denormalization mean in database design?",
  "options": [
    "The process of removing columns from a table",
    "The process of intentionally introducing redundancy by merging tables",
    "The process of optimizing a table for faster queries",
    "The process of splitting tables into multiple smaller tables"
  ],
  "answer": "The process of intentionally introducing redundancy by merging tables",
  "explanation": "Denormalization involves introducing redundancy back into the database, typically by merging tables to improve query performance."
},
{
  "question": "What is an artificial key?",
  "options": [
    "A key derived from a composite of two or more columns",
    "A primary key created by the database designer when no suitable key exists",
    "A key that is automatically assigned based on foreign key constraints",
    "A key used for indexing tables"
  ],
  "answer": "A primary key created by the database designer when no suitable key exists",
  "explanation": "An artificial key is a primary key created when no suitable natural key exists. It is typically a simple integer that is automatically generated by the database."
},
{
  "question": "What does functional dependence mean?",
  "options": [
    "When one column's value is dependent on another column's value",
    "When two columns contain the same data",
    "When one column acts as a foreign key",
    "When a column does not allow NULL values"
  ],
  "answer": "When one column's value is dependent on another column's value",
  "explanation": "Functional dependence refers to the situation where the value of one column depends on the value of another column."
},
{
  "question": "What is redundancy in a database?",
  "options": [
    "The elimination of all columns in a table",
    "The repetition of related values in a table",
    "The creation of foreign keys between tables",
    "The normalization of tables"
  ],
  "answer": "The repetition of related values in a table",
  "explanation": "Redundancy in a database refers to the unnecessary repetition of related values, which can lead to inefficiencies and data anomalies."
},
{
  "question": "What is a candidate key?",
  "options": [
    "A column that uniquely identifies rows in a table and is used as a primary key",
    "A column that contains unique values but may not be minimal",
    "A composite of two or more columns that uniquely identifies a row",
    "A non-key column in a table"
  ],
  "answer": "A column that uniquely identifies rows in a table and is used as a primary key",
  "explanation": "A candidate key is a column or a combination of columns that uniquely identifies rows in a table. A table can have multiple candidate keys, but only one is chosen as the primary key."
},
{
  "question": "What is the third normal form in database design?",
  "options": [
    "A form where all columns are part of a composite key",
    "A form where all non-key columns are functionally dependent on the primary key",
    "A form where every non-key column depends on a candidate key",
    "A form where non-key columns depend on other non-key columns"
  ],
  "answer": "A form where every non-key column depends on a candidate key",
  "explanation": "A table is in third normal form (3NF) when all non-key columns are dependent on candidate keys and not on other non-key columns."
},
{
  "question": "What is a partition of a supertype entity?",
  "options": [
    "A set of related attributes for an entity",
    "A group of mutually exclusive subtype entities",
    "A set of primary keys assigned to entities",
    "A relationship between two entities"
  ],
  "answer": "A group of mutually exclusive subtype entities",
  "explanation": "A partition of a supertype entity is a group of mutually exclusive subtype entities, helping in the categorization of entities in the entity-relationship model."
},
{
  "question": "What is the last step in the database analysis process?",
  "options": [
    "Determine cardinality",
    "Create supertype and subtype entities",
    "Distinguish strong and weak entities",
    "Discover entities, relationships, and attributes"
  ],
  "answer": "Create supertype and subtype entities",
  "explanation": "The last step in the analysis phase is creating supertype and subtype entities, which is crucial for understanding entity relationships."
},
{
  "question": "What does logical design do in the database design process?",
  "options": [
    "Converts entities to attributes",
    "Converts an entity-relationship model to tables, columns, and keys",
    "Analyzes the relationships between attributes",
    "Creates the data model for the database"
  ],
  "answer": "Converts an entity-relationship model to tables, columns, and keys",
  "explanation": "Logical design converts the entity-relationship model into a set of tables, columns, and keys tailored to a specific database system."
},
{
  "question": "What does crow's foot notation depict in database design?",
  "options": [
    "The cardinality of relationships",
    "The data types of attributes",
    "The primary keys of entities",
    "The normalization of a table"
  ],
  "answer": "The cardinality of relationships",
  "explanation": "Crow's foot notation uses symbols like a circle, a short line, or three short lines (resembling a bird's foot) to represent the cardinality of relationships."
},
{
  "question": "What is an intangible entity in database modeling?",
  "options": [
    "An entity with no attributes",
    "An entity documented but not tracked with data",
    "An entity with relationships but no attributes",
    "An entity with complex attributes"
  ],
  "answer": "An entity documented but not tracked with data",
  "explanation": "An intangible entity is an entity that is included in the data model for conceptual understanding but is not tracked or stored in the database."
},
{
  "question": "Which of the following is a characteristic of a primary key?",
  "options": [
    "It can change over time",
    "It is complex and large in size",
    "It should be stable, simple, and meaningless",
    "It should contain descriptive information"
  ],
  "answer": "It should be stable, simple, and meaningless",
  "explanation": "A primary key should be stable (not change), simple (easy to store), and meaningless (not contain descriptive or volatile information)."
},
{
  "question": "What does cardinality refer to in database relationships?",
  "options": [
    "The number of attributes in an entity",
    "The maximum and minimum numbers of relationships and attributes",
    "The total number of tables in a database",
    "The speed of query processing"
  ],
  "answer": "The maximum and minimum numbers of relationships and attributes",
  "explanation": "Cardinality refers to the maxima and minima of relationships and attributes, determining how entities can relate to one another."
},
{
  "question": "What does the relationship maximum in cardinality represent?",
  "options": [
    "The greatest number of instances of one entity that can relate to a single instance of another",
    "The least number of instances of one entity that can relate to a single instance of another",
    "The number of entities in the database",
    "The number of attributes in an entity"
  ],
  "answer": "The greatest number of instances of one entity that can relate to a single instance of another",
  "explanation": "The relationship maximum refers to the greatest number of instances of one entity that can relate to a single instance of another entity."
},
{
  "question": "What does the relationship minimum in cardinality represent?",
  "options": [
    "The greatest number of instances of one entity that can relate to a single instance of another",
    "The least number of instances of one entity that can relate to a single instance of another",
    "The maximum number of tables in a database",
    "The number of attributes in a relationship"
  ],
  "answer": "The least number of instances of one entity that can relate to a single instance of another",
  "explanation": "The relationship minimum represents the least number of instances of one entity that can relate to a single instance of another entity."
},
{
  "question": "Where does the attribute minimum and maximum appear in ER diagrams?",
  "options": [
    "Next to the entity name",
    "Next to the attribute name in parentheses",
    "In the relationship section",
    "At the bottom of the diagram"
  ],
  "answer": "Next to the attribute name in parentheses",
  "explanation": "In ER diagrams, the attribute maximum and minimum values follow the attribute name, with the minimum value appearing in parentheses."
},
{
  "question": "What is a subtype entity in an entity-relationship model?",
  "options": [
    "A type of relationship between two entities",
    "A subset of another entity type called the supertype entity",
    "A relationship that has no key",
    "An entity that holds multiple attributes"
  ],
  "answer": "A subset of another entity type called the supertype entity",
  "explanation": "A subtype entity is a subset of another entity type, known as the supertype entity, such as 'Manager' being a subtype of 'Employee'."
},
{
  "question": "What is the identifying relationship called between a supertype and its subtype entities?",
  "options": [
    "HasA relationship",
    "IsA relationship",
    "RelatesTo relationship",
    "Contains relationship"
  ],
  "answer": "IsA relationship",
  "explanation": "The identifying relationship between a supertype and its subtype entities is called an IsA relationship, representing inheritance in entity types."
},
{
  "question": "What is an entity type in entity-relationship modeling?",
  "options": [
    "A set of related things",
    "A set of values",
    "A set of individual things",
    "A set of things, such as all employees in a company"
  ],
  "answer": "A set of things, such as all employees in a company",
  "explanation": "An entity type is a set of things, such as all employees in a company, representing a category of objects."
},
{
  "question": "What is a relationship type in entity-relationship modeling?",
  "options": [
    "A set of related things",
    "A set of individual values",
    "A set of things representing an entity",
    "A set of foreign keys"
  ],
  "answer": "A set of related things",
  "explanation": "A relationship type is a set of related things, such as an Employee-Manages-Department relationship where the employee manages the department."
},
{
  "question": "What is an attribute type in entity-relationship modeling?",
  "options": [
    "A set of related things",
    "A set of values",
    "A set of foreign keys",
    "A set of entities"
  ],
  "answer": "A set of values",
  "explanation": "An attribute type is a set of values, such as all employee salaries, representing specific attributes of entities."
},
{
  "question": "What is an entity instance in entity-relationship modeling?",
  "options": [
    "A set of things, such as all employees in a company",
    "An individual value representing an attribute",
    "An individual thing, such as the employee Sam Snead",
    "A set of related things"
  ],
  "answer": "An individual thing, such as the employee Sam Snead",
  "explanation": "An entity instance represents an individual thing within an entity type, like the employee Sam Snead."
},
{
  "question": "What is a relationship instance in entity-relationship modeling?",
  "options": [
    "A statement about entity instances, like 'Maria Rodriguez manages Sales'",
    "An individual thing, like Sam Snead",
    "A set of related things",
    "A set of values representing attributes"
  ],
  "answer": "A statement about entity instances, like 'Maria Rodriguez manages Sales'",
  "explanation": "A relationship instance is a statement about entity instances, such as 'Maria Rodriguez manages Sales', describing how entities are related."
},
{
  "question": "What is an attribute instance in entity-relationship modeling?",
  "options": [
    "An individual thing, such as Sam Snead",
    "A statement about entity instances",
    "An individual value, such as the salary $35,000",
    "A set of values representing attributes"
  ],
  "answer": "An individual value, such as the salary $35,000",
  "explanation": "An attribute instance is an individual value, like the salary $35,000, that belongs to a specific attribute."
},
{
  "question": "What does the analysis step in entity-relationship modeling involve?",
  "options": [
    "Capturing data requirements while ignoring implementation details",
    "Converting the model into tables and columns",
    "Adding indexes and specifying storage organization",
    "Creating relationships between entities"
  ],
  "answer": "Capturing data requirements while ignoring implementation details",
  "explanation": "The analysis step focuses on capturing the data requirements and creating an entity-relationship model while ignoring implementation details."
},
{
  "question": "What does the logical design step in entity-relationship modeling involve?",
  "options": [
    "Capturing data requirements",
    "Converting the entity-relationship model into tables, columns, and keys",
    "Adding indexes and specifying how tables are organized",
    "Identifying entity types"
  ],
  "answer": "Converting the entity-relationship model into tables, columns, and keys",
  "explanation": "The logical design step converts the entity-relationship model into tables, columns, and keys for a specific database system."
},
{
  "question": "What does the physical design step in entity-relationship modeling involve?",
  "options": [
    "Capturing data requirements",
    "Converting the entity-relationship model into tables, columns, and keys",
    "Adding indexes and specifying how tables are organized on storage media",
    "Creating entity-relationship diagrams"
  ],
  "answer": "Adding indexes and specifying how tables are organized on storage media",
  "explanation": "The physical design step adds indexes and specifies how tables are organized on storage media to optimize query performance."
},
{
  "question": "What does a cross-join do in SQL?",
  "options": [
    "Combines two tables based on matching column values",
    "Combines two tables without comparing columns",
    "Combines tables using a JOIN ON clause",
    "Limits the result to only matching rows"
  ],
  "answer": "Combines two tables without comparing columns",
  "explanation": "A cross-join combines two tables without comparing columns, resulting in all possible combinations of rows from both tables."
},
{
  "question": "What is a subquery in SQL?",
  "options": [
    "A query that is run separately from the main query",
    "A query that is executed inside another query",
    "A query that updates data in a table",
    "A query that defines a new table"
  ],
  "answer": "A query that is executed inside another query",
  "explanation": "A subquery is a query inside another SQL query, often used to retrieve intermediate results or filter data."
},
{
  "question": "What is an alias in SQL?",
  "options": [
    "A permanent name for a column or table",
    "A temporary name assigned to a column or table",
    "A keyword used for defining new columns",
    "A method to join tables"
  ],
  "answer": "A temporary name assigned to a column or table",
  "explanation": "An alias is a temporary name given to a column or table, created using the AS keyword."
},
{
  "question": "What is a materialized view?",
  "options": [
    "A view that is refreshed only when the query is run",
    "A view that is stored with its data at all times",
    "A view that does not store data",
    "A view created using a nested query"
  ],
  "answer": "A view that is stored with its data at all times",
  "explanation": "A materialized view is a view where the data is stored at all times, and it must be refreshed when the underlying table data changes."
},
{
  "question": "What does the WITH CHECK OPTION do when applied to a view?",
  "options": [
    "It allows updates and inserts to ignore the WHERE clause",
    "It ensures updates and inserts satisfy the view's WHERE clause",
    "It prevents any changes to the view",
    "It creates a backup of the view"
  ],
  "answer": "It ensures updates and inserts satisfy the view's WHERE clause",
  "explanation": "When WITH CHECK OPTION is specified, any inserts or updates that violate the view’s WHERE clause are rejected with an error."
},
{
  "question": "What is an entity-relationship model?",
  "options": [
    "A high-level representation of data requirements, focusing on implementation details",
    "A high-level representation of data requirements, ignoring implementation details",
    "A diagram that shows the physical structure of data",
    "A set of queries for generating reports"
  ],
  "answer": "A high-level representation of data requirements, ignoring implementation details",
  "explanation": "An entity-relationship model captures data requirements at a high level without concerning itself with how the data is implemented."
},
{
  "question": "What are the three kinds of objects in an entity-relationship model?",
  "options": [
    "Entities, relationships, and queries",
    "Entities, attributes, and reports",
    "Entities, relationships, and attributes",
    "Attributes, tables, and indexes"
  ],
  "answer": "Entities, relationships, and attributes",
  "explanation": "An entity-relationship model includes entities (things), relationships (connections between things), and attributes (descriptive properties of entities)."
},
{
  "question": "What is a reflexive relationship in an entity-relationship model?",
  "options": [
    "A relationship between two entities of different types",
    "A relationship between two different entities of the same type",
    "A relationship between an entity and itself",
    "A relationship between multiple entities"
  ],
  "answer": "A relationship between an entity and itself",
  "explanation": "A reflexive relationship occurs when an entity is related to itself, like an employee managing other employees."
},
{
  "question": "What is an entity-relationship diagram (ER diagram)?",
  "options": [
    "A physical representation of tables and columns",
    "A diagram showing relationships, entities, and attributes",
    "A query to retrieve data from the database",
    "A representation of how data is indexed in the database"
  ],
  "answer": "A diagram showing relationships, entities, and attributes",
  "explanation": "An ER diagram is a schematic picture that depicts entities, relationships, and attributes in a database system."
},
{
  "question": "What is the purpose of an aggregate function in a SELECT statement?",
  "options": [
    "To filter rows before selection",
    "To process all rows that satisfy the WHERE clause condition",
    "To order the result set",
    "To join multiple tables"
  ],
  "answer": "To process all rows that satisfy the WHERE clause condition",
  "explanation": "Aggregate functions process all rows that satisfy the WHERE clause condition, or all rows if no WHERE clause is present."
},
{
  "question": "What is the purpose of the HAVING clause in SQL?",
  "options": [
    "To filter individual rows before aggregation",
    "To filter group results after aggregation",
    "To order results by a specific column",
    "To define column aliases"
  ],
  "answer": "To filter group results after aggregation",
  "explanation": "The HAVING clause is used with the GROUP BY clause to filter results after grouping and aggregation."
},
{
  "question": "What does a JOIN clause do in SQL?",
  "options": [
    "It combines data from two tables into one result",
    "It filters data based on specific conditions",
    "It sorts data by specified columns",
    "It aggregates data into summary results"
  ],
  "answer": "It combines data from two tables into one result",
  "explanation": "A JOIN clause combines data from two tables, usually by comparing columns, into a single result set."
},
{
  "question": "What is an INNER JOIN?",
  "options": [
    "A join that selects all matching rows from both tables",
    "A join that selects all rows from both tables",
    "A join that selects only rows from the left table",
    "A join that selects only unmatched rows"
  ],
  "answer": "A join that selects all matching rows from both tables",
  "explanation": "An INNER JOIN selects only the rows where there is a match between the left and right tables."
},
{
  "question": "What does a FULL JOIN do?",
  "options": [
    "It selects only matching rows from both tables",
    "It selects all rows from the left and right tables, regardless of a match",
    "It selects all rows from the left table",
    "It selects all rows from the right table"
  ],
  "answer": "It selects all rows from the left and right tables, regardless of a match",
  "explanation": "A FULL JOIN selects all rows from both tables, and unmatched rows from either side are filled with NULL values."
},
{
  "question": "What does a LEFT JOIN do?",
  "options": [
    "It selects all rows from the left table, but only matching rows from the right table",
    "It selects all rows from the right table, but only matching rows from the left table",
    "It selects all rows from both tables",
    "It selects only matching rows from both tables"
  ],
  "answer": "It selects all rows from the left table, but only matching rows from the right table",
  "explanation": "A LEFT JOIN selects all rows from the left table and only matching rows from the right table. Unmatched rows from the right table are filled with NULL."
},
{
  "question": "What is a RIGHT JOIN?",
  "options": [
    "It selects all rows from the left table, but only matching rows from the right table",
    "It selects all rows from the right table, but only matching rows from the left table",
    "It selects only matching rows from both tables",
    "It selects all rows from both tables"
  ],
  "answer": "It selects all rows from the right table, but only matching rows from the left table",
  "explanation": "A RIGHT JOIN selects all rows from the right table and only matching rows from the left table. Unmatched rows from the left table are filled with NULL."
},
{
  "question": "What is an outer join?",
  "options": [
    "A join that selects only matching rows from both tables",
    "A join that selects unmatched rows, including left, right, and full joins",
    "A join that only selects rows with NULL values",
    "A join that selects only rows from the left table"
  ],
  "answer": "A join that selects unmatched rows, including left, right, and full joins",
  "explanation": "An outer join is a join that includes unmatched rows, such as those found in LEFT JOIN, RIGHT JOIN, and FULL JOIN."
},
{
  "question": "What does the UNION keyword do in SQL?",
  "options": [
    "Combines two result sets into one table",
    "Filters rows based on specific conditions",
    "Joins multiple tables",
    "Selects only distinct values from a table"
  ],
  "answer": "Combines two result sets into one table",
  "explanation": "The UNION keyword is used to combine the results of two SELECT queries into a single result set."
},
{
  "question": "What is an equijoin in SQL?",
  "options": [
    "A join that compares columns using an operator other than =",
    "A join that compares columns using the = operator",
    "A join that only selects matching rows",
    "A join that creates a new table"
  ],
  "answer": "A join that compares columns using the = operator",
  "explanation": "An equijoin compares columns from two tables using the = operator, and it is the most common type of join."
},
{
  "question": "What is a self-join?",
  "options": [
    "A join between two different tables",
    "A join between a table and itself",
    "A join that does not match rows",
    "A join that filters data from one table"
  ],
  "answer": "A join between a table and itself",
  "explanation": "A self-join is a type of join where a table is joined with itself, often to compare rows within the same table."
},
{
  "question": "What does an aggregate function do in SQL?",
  "options": [
    "Processes values from a set of rows and returns a summary value",
    "Joins two tables into one result",
    "Filters data based on specific conditions",
    "Orders the result set"
  ],
  "answer": "Processes values from a set of rows and returns a summary value",
  "explanation": "An aggregate function processes values from a set of rows and returns a single summary value, such as a count, sum, or average."
},
{
  "question": "Which aggregate function counts the number of rows in a set?",
  "options": [
    "MIN()",
    "SUM()",
    "COUNT()",
    "AVG()"
  ],
  "answer": "COUNT()",
  "explanation": "The COUNT() function counts the number of rows in a set of data."
},
{
  "question": "Which aggregate function finds the minimum value in a set?",
  "options": [
    "MIN()",
    "MAX()",
    "COUNT()",
    "SUM()"
  ],
  "answer": "MIN()",
  "explanation": "The MIN() function finds the smallest value in a set of data."
},
{
  "question": "Which aggregate function finds the maximum value in a set?",
  "options": [
    "MIN()",
    "MAX()",
    "COUNT()",
    "AVG()"
  ],
  "answer": "MAX()",
  "explanation": "The MAX() function finds the largest value in a set of data."
},
{
  "question": "Which aggregate function sums all the values in a set?",
  "options": [
    "AVG()",
    "SUM()",
    "COUNT()",
    "MIN()"
  ],
  "answer": "SUM()",
  "explanation": "The SUM() function adds up all the values in a set of data."
},
{
  "question": "Which aggregate function computes the arithmetic mean of all the values in a set?",
  "options": [
    "AVG()",
    "COUNT()",
    "SUM()",
    "MAX()"
  ],
  "answer": "AVG()",
  "explanation": "The AVG() function computes the arithmetic mean (average) of all the values in a set of data."
},
{
  "question": "What wildcard character in the LIKE operator matches any number of characters?",
  "options": [
    "%",
    "_",
    "!",
    "#"
  ],
  "answer": "%",
  "explanation": "The % wildcard character in the LIKE operator matches any number of characters in a string."
},
{
  "question": "What wildcard character in the LIKE operator matches exactly one character?",
  "options": [
    "%",
    "_",
    "!",
    "#"
  ],
  "answer": "_",
  "explanation": "The _ wildcard character in the LIKE operator matches exactly one character in a string."
},
{
  "question": "What does the ORDER BY clause do in SQL?",
  "options": [
    "Orders selected rows by one or more columns",
    "Filters rows based on specific conditions",
    "Joins two tables together",
    "Groups rows into sets"
  ],
  "answer": "Orders selected rows by one or more columns",
  "explanation": "The ORDER BY clause is used to sort the rows returned by a query based on one or more columns in ascending or descending order."
},
{
  "question": "What is the result of SELECT ABS(-5) in SQL?",
  "options": [
    "0",
    "-5",
    "5",
    "Error"
  ],
  "answer": "5",
  "explanation": "The ABS() function returns the absolute value of a number, so ABS(-5) returns 5."
},
{
  "question": "What does the LOWER() function do in SQL?",
  "options": [
    "Converts a string to uppercase",
    "Trims leading and trailing spaces from a string",
    "Converts a string to lowercase",
    "Returns the length of a string"
  ],
  "answer": "Converts a string to lowercase",
  "explanation": "The LOWER() function converts all characters in a string to lowercase."
},
{
  "question": "What does the TRIM() function do in SQL?",
  "options": [
    "Converts a string to uppercase",
    "Returns the length of a string",
    "Removes leading and trailing spaces from a string",
    "Extracts a substring from a string"
  ],
  "answer": "Removes leading and trailing spaces from a string",
  "explanation": "The TRIM() function removes any leading and trailing spaces from a string."
},
{
  "question": "What is the result of SELECT HOUR('22:11:45') in SQL?",
  "options": [
    "22",
    "11",
    "45",
    "Error"
  ],
  "answer": "22",
  "explanation": "The HOUR() function extracts the hour part from a time string, so HOUR('22:11:45') returns 22."
},
{
  "question": "What is the result of SELECT MINUTE('22:11:45') in SQL?",
  "options": [
    "22",
    "11",
    "45",
    "Error"
  ],
  "answer": "11",
  "explanation": "The MINUTE() function extracts the minute part from a time string, so MINUTE('22:11:45') returns 11."
},
{
  "question": "What is the result of SELECT SECOND('22:11:45') in SQL?",
  "options": [
    "22",
    "11",
    "45",
    "Error"
  ],
  "answer": "45",
  "explanation": "The SECOND() function extracts the second part from a time string, so SECOND('22:11:45') returns 45."
},
{
  "question": "What is the purpose of a foreign key constraint in SQL?",
  "options": [
    "To enforce referential integrity between two tables",
    "To increase the speed of queries",
    "To combine multiple tables into one",
    "To add an index to a column"
  ],
  "answer": "To enforce referential integrity between two tables",
  "explanation": "A foreign key constraint ensures that the values in a foreign key column correspond to valid primary key values in another table, maintaining referential integrity."
},
{
  "question": "Which referential integrity action propagates primary key changes to foreign keys?",
  "options": [
    "RESTRICT",
    "SET NULL",
    "CASCADE",
    "SET DEFAULT"
  ],
  "answer": "CASCADE",
  "explanation": "The CASCADE action propagates changes to the primary key to any related foreign keys, ensuring consistency across tables."
},
{
  "question": "Which referential integrity action sets invalid foreign keys to NULL?",
  "options": [
    "RESTRICT",
    "SET NULL",
    "CASCADE",
    "SET DEFAULT"
  ],
  "answer": "SET NULL",
  "explanation": "The SET NULL action sets foreign keys to NULL when they violate referential integrity."
},
{
  "question": "What is the function of the BETWEEN operator in SQL?",
  "options": [
    "To find values between two columns",
    "To check if a value is within a range of two other values",
    "To join two tables together",
    "To aggregate values from multiple rows"
  ],
  "answer": "To check if a value is within a range of two other values",
  "explanation": "The BETWEEN operator allows you to check if a value is within a specific range, equivalent to writing 'value >= minValue AND value <= maxValue'."
},
{
  "question": "Which SQL constraint action rejects an insert, update, or delete that violates referential integrity?",
  "options": [
    "RESTRICT",
    "SET NULL",
    "CASCADE",
    "SET DEFAULT"
  ],
  "answer": "RESTRICT",
  "explanation": "The RESTRICT action rejects any operation that would violate referential integrity by preventing inserts, updates, or deletes."
},
{
  "question": "How do you add a constraint to an existing table in SQL?",
  "options": [
    "ALTER TABLE ADD CONSTRAINT",
    "ALTER TABLE MODIFY CONSTRAINT",
    "ALTER TABLE CREATE CONSTRAINT",
    "ALTER TABLE REMOVE CONSTRAINT"
  ],
  "answer": "ALTER TABLE ADD CONSTRAINT",
  "explanation": "Constraints can be added to an existing table using the ALTER TABLE statement with the ADD CONSTRAINT clause."
},

];

export default questions;
