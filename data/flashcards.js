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
},
];

export default flashcards;
