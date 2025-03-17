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
  },
];

export default questions;
