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
},
{
  "term": "Tablespace",
  "definition": "A database object that maps one or more tables to a single physical file, facilitating data storage management."
},
{
  "term": "Logical Design",
  "definition": "The phase of database design that defines tables, columns, and keys, establishing the data structure independently of physical storage."
},
{
  "term": "Physical Design",
  "definition": "The phase of database design that specifies indexes, table structures, and partitions to optimize query performance without changing query results."
},
{
  "term": "Storage Engine",
  "definition": "A component that translates query processor instructions into low-level commands to access data on storage media."
},
{
  "term": "Hash Index",
  "definition": "An index structure that assigns entries to buckets using a hash function, enabling efficient lookups."
},
{
  "term": "Bitmap Index",
  "definition": "An index that uses a grid of bits (ones and zeros) to efficiently represent the presence or absence of values, often used for columns with low cardinality."
},
{
  "term": "Dense Index",
  "definition": "An index that contains an entry for every row in the table."
},
{
  "term": "Sparse Index",
  "definition": "An index that contains an entry for every table block rather than for every row."
},
{
  "term": "Heap Table",
  "definition": "A table where no order is imposed on rows, and they are stored in the order they are loaded."
},
{
  "term": "Sorted Table",
  "definition": "A table where the database designer specifies a sort column that determines the physical row order."
},
{
  "term": "Hash Table",
  "definition": "A table where rows are assigned to buckets using a hash function, and each bucket contains a block or group of blocks."
},
{
  "term": "Table Cluster",
  "definition": "A table structure that interleaves rows from multiple tables in the same storage area."
},
{
  "term": "Table Scan",
  "definition": "A database operation that reads table blocks directly without accessing an index."
},
{
  "term": "Index Scan",
  "definition": "A database operation that reads index blocks sequentially to locate the necessary table blocks."
},
{
  "term": "Hit Ratio (Filter Factor or Selectivity)",
  "definition": "The percentage of table rows selected by a query."
},
{
  "term": "Binary Search",
  "definition": "A search method that repeatedly splits the index in half until the entry containing the search value is found."
},
{
  "term": "Boyce-Codd Normal Form (BCNF)",
  "definition": "A table is in BCNF if, whenever column A depends on column B, then B must be unique. This is a stricter form of third normal form."
},
{
  "term": "Trivial Dependency",
  "definition": "A trivial dependency occurs when the columns of A are a subset of the columns of B, and A always depends on B."
},
{
  "term": "Normalization",
  "definition": "Normalization is the process of decomposing a table into multiple tables to eliminate redundancy and ensure data integrity."
},
{
  "term": "Denormalization",
  "definition": "Denormalization is the process of intentionally introducing redundancy by merging tables to improve query performance."
},
{
  "term": "Artificial Key",
  "definition": "An artificial key is a single-column primary key created by the database designer when no suitable key exists. It is typically an integer that is automatically generated by the database."
},
{
  "term": "Functional Dependence",
  "definition": "Functional dependence is the relationship where the value of one column is dependent on the value of another column."
},
{
  "term": "Redundancy",
  "definition": "Redundancy refers to the repetition of related values in a table, which can cause inefficiencies and data anomalies."
},
{
  "term": "Candidate Key",
  "definition": "A candidate key is a column or a combination of columns that uniquely identifies rows in a table. It may be simple or composite and must be minimal."
},
{
  "term": "Third Normal Form (3NF)",
  "definition": "A table is in third normal form (3NF) when every non-key column depends on a candidate key and not on other non-key columns."
},
{
  "term": "Partition of a Supertype Entity",
  "definition": "A partition of a supertype entity is a group of mutually exclusive subtype entities, which helps in categorizing entities in the entity-relationship model."
},
{
  "term": "Logical Design",
  "definition": "Logical design converts an entity-relationship model to tables, columns, and keys for a specific database system."
},
{
  "term": "Crow's Foot Notation",
  "definition": "Crow's foot notation is a convention that depicts cardinality of relationships using symbols like a circle, a short line, or three short lines."
},
{
  "term": "Intangible Entity",
  "definition": "An intangible entity is documented in the data model but not tracked with data in the database."
},
{
  "term": "Primary Key Characteristics",
  "definition": "A primary key should be stable (unchanging), simple (easy to type and store), and meaningless (not containing descriptive or volatile information)."
},
{
  "term": "Cardinality",
  "definition": "Cardinality refers to the maximum and minimum numbers of relationships and attributes in a database, helping define how entities can relate to each other."
},
{
  "term": "Relationship Maximum",
  "definition": "The relationship maximum is the greatest number of instances of one entity that can relate to a single instance of another entity."
},
{
  "term": "Relationship Minimum",
  "definition": "The relationship minimum is the least number of instances of one entity that can relate to a single instance of another entity."
},
{
  "term": "Attribute Maximum and Minimum in ER Diagrams",
  "definition": "In ER diagrams, the attribute maximum and minimum appear next to the attribute name, with the minimum shown in parentheses."
},
{
  "term": "Subtype Entity",
  "definition": "A subtype entity is a subset of another entity type, called the supertype entity, like 'Manager' being a subtype of 'Employee'."
},
{
  "term": "IsA Relationship",
  "definition": "The IsA relationship is the identifying relationship between a supertype entity and its subtype entities, indicating inheritance."
},
{
  "term": "Entity Type",
  "definition": "An entity type is a set of things, such as all employees in a company, representing a category of objects."
},
{
  "term": "Relationship Type",
  "definition": "A relationship type is a set of related things, like the Employee-Manages-Department relationship."
},
{
  "term": "Attribute Type",
  "definition": "An attribute type is a set of values, like all employee salaries, representing specific attributes of entities."
},
{
  "term": "Entity Instance",
  "definition": "An entity instance is an individual thing within an entity type, such as the employee Sam Snead."
},
{
  "term": "Relationship Instance",
  "definition": "A relationship instance is a statement about entity instances, such as 'Maria Rodriguez manages Sales.'"
},
{
  "term": "Attribute Instance",
  "definition": "An attribute instance is an individual value, like the salary $35,000, that belongs to a specific attribute."
},
{
  "term": "Analysis Step",
  "definition": "The analysis step captures data requirements and creates an entity-relationship model while ignoring implementation details."
},
{
  "term": "Logical Design Step",
  "definition": "The logical design step converts the entity-relationship model into tables, columns, and keys for a specific database system."
},
{
  "term": "Physical Design Step",
  "definition": "The physical design step adds indexes and specifies how tables are organized on storage media to optimize query performance."
},
{
  "term": "Cross-Join",
  "definition": "A cross-join combines two tables without comparing columns, resulting in all possible combinations of rows from both tables."
},
{
  "term": "Subquery",
  "definition": "A subquery is a query inside another SQL query, often used to retrieve intermediate results or filter data."
},
{
  "term": "Alias",
  "definition": "An alias is a temporary name given to a column or table, created using the AS keyword."
},
{
  "term": "Materialized View",
  "definition": "A materialized view is a view where the data is stored at all times, and it must be refreshed when the underlying table data changes."
},
{
  "term": "WITH CHECK OPTION",
  "definition": "The WITH CHECK OPTION ensures any inserts or updates that violate the view’s WHERE clause are rejected with an error."
},
{
  "term": "Entity-Relationship Model",
  "definition": "An entity-relationship model captures data requirements at a high level without concerning itself with how the data is implemented."
},
{
  "term": "Entity-Relationship Objects",
  "definition": "An entity-relationship model includes entities (things), relationships (connections between things), and attributes (descriptive properties of entities)."
},
{
  "term": "Reflexive Relationship",
  "definition": "A reflexive relationship occurs when an entity is related to itself, like an employee managing other employees."
},
{
  "term": "Entity-Relationship Diagram",
  "definition": "An ER diagram is a schematic picture that depicts entities, relationships, and attributes in a database system."
},
{
  "term": "Aggregate Function",
  "definition": "An aggregate function processes all rows that satisfy the WHERE clause condition, or all rows if no WHERE clause is present."
},
{
  "term": "HAVING Clause",
  "definition": "The HAVING clause is used with the GROUP BY clause to filter group results after aggregation."
},
{
  "term": "JOIN Clause",
  "definition": "A JOIN clause combines data from two tables by comparing columns, usually with the = operator."
},
{
  "term": "INNER JOIN",
  "definition": "An INNER JOIN selects only the rows where there is a match between the left and right tables."
},
{
  "term": "FULL JOIN",
  "definition": "A FULL JOIN selects all rows from both tables, and unmatched rows from either side are filled with NULL values."
},
{
  "term": "LEFT JOIN",
  "definition": "A LEFT JOIN selects all rows from the left table and only matching rows from the right table, with NULL for unmatched rows."
},
{
  "term": "RIGHT JOIN",
  "definition": "A RIGHT JOIN selects all rows from the right table and only matching rows from the left table, with NULL for unmatched rows."
},
{
  "term": "Outer Join",
  "definition": "An outer join includes unmatched rows, such as those found in LEFT JOIN, RIGHT JOIN, and FULL JOIN."
},
{
  "term": "UNION Keyword",
  "definition": "The UNION keyword combines the results of two SELECT queries into a single result set."
},
{
  "term": "Equijoin",
  "definition": "An equijoin compares columns from two tables using the = operator."
},
{
  "term": "Self-Join",
  "definition": "A self-join is a type of join where a table is joined with itself, often to compare rows within the same table."
},
{
  "term": "COUNT()",
  "definition": "The COUNT() function counts the number of rows in a set of data."
},
{
  "term": "MIN()",
  "definition": "The MIN() function finds the smallest value in a set of data."
},
{
  "term": "MAX()",
  "definition": "The MAX() function finds the largest value in a set of data."
},
{
  "term": "SUM()",
  "definition": "The SUM() function adds up all the values in a set of data."
},
{
  "term": "AVG()",
  "definition": "The AVG() function computes the arithmetic mean (average) of all the values in a set of data."
},
{
  "term": "LIKE operator with %",
  "definition": "The % wildcard in the LIKE operator matches any number of characters in a string."
},
{
  "term": "LIKE operator with _",
  "definition": "The _ wildcard in the LIKE operator matches exactly one character in a string."
},
{
  "term": "ORDER BY clause",
  "definition": "The ORDER BY clause is used to sort the rows returned by a query based on one or more columns in ascending or descending order."
},
{
  "term": "ABS()",
  "definition": "The ABS() function returns the absolute value of a number."
},
{
  "term": "LOWER()",
  "definition": "The LOWER() function converts all characters in a string to lowercase."
},
{
  "term": "TRIM()",
  "definition": "The TRIM() function removes any leading and trailing spaces from a string."
},
{
  "term": "HOUR()",
  "definition": "The HOUR() function extracts the hour part from a time string."
},
{
  "term": "MINUTE()",
  "definition": "The MINUTE() function extracts the minute part from a time string."
},
{
  "term": "SECOND()",
  "definition": "The SECOND() function extracts the second part from a time string."
},
{
  "term": "Foreign key constraint",
  "definition": "A foreign key constraint enforces referential integrity between two tables, ensuring that foreign key values match primary key values in another table."
},
{
  "term": "RESTRICT action",
  "definition": "The RESTRICT action prevents insert, update, or delete operations that would violate referential integrity."
},
{
  "term": "SET NULL action",
  "definition": "The SET NULL action sets foreign keys to NULL when they violate referential integrity."
},
{
  "term": "CASCADE action",
  "definition": "The CASCADE action propagates changes to the primary key to any related foreign keys, maintaining data consistency."
},
{
  "term": "BETWEEN operator",
  "definition": "The BETWEEN operator checks if a value is within a specified range, equivalent to 'value >= minValue AND value <= maxValue'."
},
{
  "term": "SET DEFAULT action",
  "definition": "The SET DEFAULT action sets invalid foreign keys to the default value of the foreign key."
},
{
  "term": "Adding constraints with ALTER TABLE",
  "definition": "Constraints can be added, dropped, or changed in an existing table using the ALTER TABLE statement with the ADD, DROP, or CHANGE clause."
},

];

export default flashcards;
