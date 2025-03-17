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
},{
  "term": "Tuple",
  "definition": "An ordered collection of elements enclosed in parentheses, where order matters (e.g., (a, b, c) is different from (c, b, a))."
},
{
  "term": "Table",
  "definition": "A data structure in a relational database with a name, a fixed tuple of columns, and a varying set of rows; also called a file or relation."
},
{
  "term": "Column",
  "definition": "A named component of a table with a specific data type; also called a field or attribute."
},
{
  "term": "Row",
  "definition": "An unnamed tuple of values in a table, where each value corresponds to a column and matches its data type; also called a record or tuple."
},
{
  "term": "Data Type",
  "definition": "A named set of values (e.g., INT, VARCHAR, DATE) from which column values in a table are drawn."
},
{
  "term": "Cell",
  "definition": "A single column of a single row in a relational database table."
},
{
  "term": "Literals",
  "definition": "Explicit values in SQL, such as strings ('String' or \"String\"), numbers (123), or binary values (x'0fa2')."
},
{
  "term": "Keywords",
  "definition": "Words with special meaning in SQL, such as SELECT, FROM, and WHERE."
},
{
  "term": "Identifiers",
  "definition": "Names of database objects like tables or columns (e.g., City, Name, Population)."
},
{
  "term": "Comments",
  "definition": "Statements in SQL ignored by the database, intended for humans (e.g., -- single line or /* multi-line */)."
},
{
  "term": "Data Definition Language (DDL)",
  "definition": "An SQL sublanguage that defines the structure of the database (e.g., CREATE TABLE, DROP TABLE)."
},
{
  "term": "Data Query Language (DQL)",
  "definition": "An SQL sublanguage that retrieves data from the database (e.g., SELECT)."
},
{
  "term": "Data Manipulation Language (DML)",
  "definition": "An SQL sublanguage that manipulates data in the database (e.g., INSERT, UPDATE, DELETE)."
},
{
  "term": "Data Control Language (DCL)",
  "definition": "An SQL sublanguage that controls database user access (e.g., GRANT, REVOKE)."
},
{
  "term": "Data Transaction Language (DTL)",
  "definition": "An SQL sublanguage that manages database transactions (e.g., COMMIT, ROLLBACK)."
},
{
  "term": "Data Independence",
  "definition": "Rule 7 in relational databases, allowing data organization changes to improve query performance without affecting query results."
},
{
  "term": "CREATE TABLE",
  "definition": "An SQL statement that creates a new table by specifying its name, column names, and data types (e.g., INT, VARCHAR(N), DATE, DECIMAL(M, D))."
},
{
  "term": "DROP TABLE",
  "definition": "An SQL statement that deletes an existing table and its data from the database."
},{
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
];

export default questions;
