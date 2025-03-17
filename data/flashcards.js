const flashcards = [
  {
    term: "Primary Key",
    definition:
      "A column or set of columns that uniquely identifies a row in a table.",
  },
  {
    term: "Foreign Key",
    definition:
      "A column in one table that refers to the primary key in another table to establish a relationship.",
  },
  {
    term: "Normalization",
    definition:
      "The process of structuring a database to reduce redundancy and improve integrity.",
  },
  {
    term: "Indexing",
    definition:
      "A database optimization technique that speeds up data retrieval by creating indexes on columns.",
  },
  {
    term: "ER Diagram",
    definition:
      "A visual representation of entities, their attributes, and relationships in a database.",
  },
  {
    term: "Database Application",
    definition:
      "Software that helps business users interact with database systems.",
  },
  {
    term: "Database Administrator",
    definition:
      "Person responsible for securing the database system against unauthorized users and enforcing procedures for user access and database system availability.",
  },
  {
    term: "Authorization",
    definition:
      "Process by which database systems allow individual users to access specific data, often limiting access to specific tables, columns, or rows.",
  },
  {
    term: "Database Rules",
    definition:
      "Constraints that ensure data is consistent with structural and business requirements, such as referential integrity and data synchronization.",
  },
  {
    term: "Query Processor",
    definition:
      "Component that interprets queries, creates execution plans, and returns query results to the application.",
  },
  {
    term: "Query Optimization",
    definition:
      "Process performed by the query processor to ensure the most efficient instructions are executed on the data.",
  },
  {
    term: "Storage Manager",
    definition:
      "Component that translates query processor instructions into low-level file-system commands that modify or retrieve data.",
  },
  {
    term: "Indexes",
    definition:
      "Data structures used by the storage manager to quickly locate data, especially in large databases.",
  },
  {
    term: "Transaction Manager",
    definition:
      "Component that ensures transactions are properly executed, prevents conflicts between concurrent transactions, and restores the database to a consistent state after failures.",
  },
  {
    term: "MongoDB",
    definition: "An open-source NoSQL database system.",
  },
  {
    term: "NoSQL",
    definition:
      "Database approach that provides a mechanism for storage and retrieval of data that is modeled differently from the tabular relations used in relational databases.",
  },
  {
    term: "INSERT",
    definition:
      "SQL command used to add new rows to a table in a relational database.",
  },
  {
    term: "SELECT",
    definition:
      "SQL command used to retrieve data from a table in a relational database.",
  },
  {
    term: "UPDATE",
    definition:
      "SQL command used to modify existing data in a table in a relational database.",
  },
  {
    term: "DELETE",
    definition:
      "SQL command used to remove rows from a table in a relational database.",
  },
  { term: "INT", definition: "Stores integer values in SQL." },
  { term: "DECIMAL", definition: "Stores fractional numeric values in SQL." },
  { term: "VARCHAR", definition: "Stores textual values in SQL." },
  { term: "DATE", definition: "Stores year, month, and day in SQL." },
  {
    term: "Analysis Phase",
    definition:
      "Specifies database requirements and defines entities, relationships, and attributes.",
  },
  {
    term: "Logical Design",
    definition:
      "Converts entities and attributes into tables and columns in a database system.",
  },
  {
    term: "Physical Design",
    definition:
      "Adds indexes and defines table storage organization for query performance.",
  },
  {
    term: "MySQL Command-Line Client",
    definition: "A text-based interface for interacting with MySQL Server.",
  },{
    "term": "CREATE TABLE",
    "definition": "SQL command used to create a new table by specifying the table name, column names, and their data types (e.g., INT, VARCHAR)."
},
{
    "term": "Data Types",
    "definition": "Categories in SQL that define the format of column values, such as INT (integers), DECIMAL (fractional numbers), VARCHAR (text), and DATE (dates)."
},
{
    "term": "Entity",
    "definition": "A person, place, activity, or thing represented in the analysis phase of database design."
},
{
    "term": "Relationship",
    "definition": "A link between entities defined during the analysis phase of database design."
},
{
    "term": "Attribute",
    "definition": "A descriptive property of an entity in the analysis phase of database design."
},
{
    "term": "Analysis Phase",
    "definition": "The database design phase that specifies requirements as entities, relationships, and attributes, independent of a specific database system."
},
{
    "term": "Logical Design",
    "definition": "The database design phase that implements requirements (entities, relationships, attributes) into a specific system, such as tables, keys, and columns in a relational database."
},
{
    "term": "Physical Design",
    "definition": "The database design phase that adds indexes and specifies table organization on storage media to optimize query processing speed."
},
{
    "term": "Data Independence",
    "definition": "The principle that physical design affects query processing speed but does not alter query results."
},
{
    "term": "API",
    "definition": "Application Programming Interface; simplifies the use of SQL with general-purpose programming languages in database programs."
},
{
    "term": "MySQL Command-Line Client",
    "definition": "A text interface included with MySQL Server that returns an error code and description for failed SQL statements."
},{
  "term": "DROP TABLE",
  "definition": "An SQL statement that deletes a table and all its rows from a database."
},
{
  "term": "ALTER TABLE",
  "definition": "An SQL statement that adds, deletes, or modifies columns on an existing table."
},
{
  "term": "Integer Data Types",
  "definition": "Data types for positive and negative integers, such as TINYINT (1 byte), SMALLINT (2 bytes), INT (4 bytes), and BIGINT (8 bytes)."
},
{
  "term": "Arithmetic Operators",
  "definition": "Operators like +, -, *, /, %, and ^ that perform mathematical operations on numeric values."
},
{
  "term": "Comparison Operators",
  "definition": "Operators like =, !=, <, <=, > that compare two values and return TRUE or FALSE."
},
{
  "term": "UPDATE Statement",
  "definition": "An SQL statement that modifies existing rows in a table using a SET clause, with an optional WHERE clause to specify rows."
},
{
  "term": "DELETE Statement",
  "definition": "An SQL statement that deletes rows from a table, with an optional WHERE clause; without it, all rows are deleted."
},
{
  "term": "TRUNCATE Statement",
  "definition": "An SQL statement that deletes all rows from a table, similar to DELETE without a WHERE clause but with minor system-dependent differences."
},
{
  "term": "MERGE Statement",
  "definition": "An SQL statement that selects data from a source table and inserts it into a target table."
},
{
  "term": "Primary Key",
  "definition": "A column or group of columns used to uniquely identify a row in a table; can be simple (one column) or composite (multiple columns)."
},
{
  "term": "Auto-increment Column",
  "definition": "A numeric column that automatically assigns an incrementing value when a new row is inserted."
},
{
  "term": "Foreign Key",
  "definition": "A column or group of columns that refer to a primary key in another table, enforcing referential integrity."
},
{
  "term": "FOREIGN KEY Constraint",
  "definition": "A constraint in a CREATE TABLE statement that uses FOREIGN KEY and REFERENCES keywords to reject operations violating referential integrity."
},
{
  "term": "Referential Integrity Actions",
  "definition": "Actions like RESTRICT, SET NULL, SET DEFAULT, and CASCADE that automatically correct or reject referential integrity violations."
},
{
  "term": "Column Constraint",
  "definition": "A rule governing allowable values for a column, implemented in a CREATE TABLE statement."
},
{
  "term": "BETWEEN Operator",
  "definition": "An operator in a WHERE clause that checks if a value is within a range (value BETWEEN min AND max)."
},
{
  "term": "LIKE Operator",
  "definition": "An operator in a WHERE clause that matches text against a pattern using wildcards % (any characters) and _ (one character)."
},
{
  "term": "ORDER BY Clause",
  "definition": "A clause that orders selected rows by one or more columns in ascending order, or descending with DESC."
},
{
  "term": "Aggregate Functions",
  "definition": "Functions like COUNT(), MIN(), MAX(), SUM(), and AVG() that process a set of rows and return a summary value."
},
{
  "term": "HAVING Clause",
  "definition": "A clause used with GROUP BY to filter group results based on a condition."
},
{
  "term": "Join",
  "definition": "A SELECT statement that combines data from two tables (left and right) by comparing columns, often with =."
},
{
  "term": "INNER JOIN",
  "definition": "A join that selects only matching rows from both tables."
},
{
  "term": "FULL JOIN",
  "definition": "A join that selects all rows from both tables, with NULLs for unmatched rows."
},
{
  "term": "Subquery",
  "definition": "A query nested within another SQL query, also called an inner or nested query."
},
{
  "term": "Entity-Relationship Model",
  "definition": "A high-level representation of data requirements with entities, relationships, and attributes, ignoring implementation details."
},
{
  "term": "Entity",
  "definition": "A person, place, product, concept, or activity in an entity-relationship model."
},
{
  "term": "Relationship",
  "definition": "A statement about two entities in an entity-relationship model, can be reflexive (same entity)."
},
{
  "term": "Attribute",
  "definition": "A descriptive property of an entity in an entity-relationship model."
},
{
  "term": "Cardinality",
  "definition": "The maxima and minima of relationships and attributes in an entity-relationship model."
},
{
  "term": "Supertype Entity",
  "definition": "An entity type that includes subtype entities (e.g., Employee includes Manager)."
},
{
  "term": "Subtype Entity",
  "definition": "A subset of a supertype entity (e.g., Manager is a subtype of Employee)."
},{
  "term": "Primary Key Stability",
  "definition": "Primary key values should not change to avoid updating statements and cascading changes to foreign keys."
},
{
  "term": "Primary Key Simplicity",
  "definition": "Primary key values should be easy to type and store, like small integers, to speed up query processing."
},
{
  "term": "Primary Key Meaninglessness",
  "definition": "Primary keys should not contain descriptive information, which may change, to remain stable."
},
{
  "term": "Artificial Key",
  "definition": "A single-column primary key, typically an auto-generated integer, created when no suitable key exists; it is stable, simple, and meaningless."
},
{
  "term": "Functional Dependence",
  "definition": "The dependence of one column on another, where the value of one determines the value of another."
},
{
  "term": "Redundancy",
  "definition": "The repetition of related values in a table, which normalization seeks to eliminate."
},
{
  "term": "Normal Forms",
  "definition": "Rules for designing tables with less redundancy, such as third normal form and Boyce-Codd normal form."
},
{
  "term": "Candidate Key",
  "definition": "A simple or composite column that is unique and minimal, from which the primary key is chosen."
},
{
  "term": "Third Normal Form (3NF)",
  "definition": "A table state where, if a non-key column A depends on column B, B is unique."
},
{
  "term": "Boyce-Codd Normal Form (BCNF)",
  "definition": "A table state where, whenever column A depends on column B, B is unique; considered the 'gold standard' for tables with frequent updates."
},
{
  "term": "Trivial Dependencies",
  "definition": "Dependencies where the columns of A are a subset of B, such as FareClass depending on (FlightCode, FareClass)."
},
{
  "term": "Normalization",
  "definition": "The process of eliminating redundancy by decomposing a table into higher normal forms."
},
{
  "term": "Denormalization",
  "definition": "Intentionally introducing redundancy by merging tables, often for performance reasons."
},
{
  "term": "Heap Table",
  "definition": "A table structure with no imposed row order, optimizing insert operations like bulk loads."
},
{
  "term": "Sorted Table",
  "definition": "A table structure where rows are physically ordered by a sort column specified by the designer."
},
{
  "term": "Hash Table",
  "definition": "A table structure where rows are assigned to buckets using a hash function, like modulo."
},
{
  "term": "Table Cluster",
  "definition": "A structure that interleaves rows of multiple tables in the same storage area; also called multi-tables."
},
{
  "term": "Table Scan",
  "definition": "A database operation that reads table blocks directly without using an index."
},
{
  "term": "Index Scan",
  "definition": "A database operation that reads index blocks sequentially to locate table blocks."
},
{
  "term": "Hit Ratio",
  "definition": "The percentage of table rows selected by a query, also called filter factor or selectivity."
},
{
  "term": "Dense Index",
  "definition": "An index containing an entry for every table row."
},
{
  "term": "Sparse Index",
  "definition": "An index containing an entry for every table block, not every row."
},
{
  "term": "Tablespace",
  "definition": "A database object that maps one or more tables to a single file."
},
{
  "term": "CREATE INDEX",
  "definition": "An SQL statement that creates an index on specified columns to improve query performance (e.g., CREATE INDEX IndexName ON TableName (Column1))."
}
];

export default flashcards;
