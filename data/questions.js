const questions = [
    {
      question: "Which SQL clause is used to filter records based on a condition?",
      options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
      answer: "WHERE",
      explanation: "The WHERE clause is used to filter records before aggregation in SQL queries."
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
      explanation: "ACID ensures database transactions are reliable: Atomicity (all or nothing), Consistency (data integrity), Isolation (independent transactions), and Durability (permanent changes)."
    },
    {
      question: "Which normal form ensures no transitive dependencies exist?",
      options: ["1NF", "2NF", "3NF", "BCNF"],
      answer: "3NF",
      explanation: "Third Normal Form (3NF) removes transitive dependencies to ensure better data integrity."
    },
    {
      question: "What is the role of the query processor in a database system?",
      options: ["Execute transactions in order", "Interpret queries and return results efficiently", "Store data in indexed files", "Prevent unauthorized access"],
      answer: "Interpret queries and return results efficiently",
      explanation: "The query processor optimizes and executes SQL queries efficiently."
    },
    {
      question: "Which SQL statement is used to remove a table and its structure?",
      options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
      answer: "DROP",
      explanation: "DROP TABLE permanently deletes a table and its structure, unlike DELETE which removes rows only."
    },
    {
        question: "What is a database application?",
        options: [
          "Software that helps business users interact with database systems",
          "A tool used only by database administrators",
          "A programming language for creating databases",
          "An interface for hardware monitoring"
        ],
        answer: "Software that helps business users interact with database systems",
        explanation: "A database application is software that helps business users interact with database systems, providing an interface between users and the database."
      },
      {
        question: "Which role is responsible for securing the database system against unauthorized users?",
        options: [
          "Database administrator",
          "Query processor",
          "Storage manager",
          "Transaction manager"
        ],
        answer: "Database administrator",
        explanation: "A database administrator is responsible for securing the database system against unauthorized users and enforcing procedures for user access and database system availability."
      },
      {
        question: "What ensures that when a course number appears in a student registration record, the course must exist in the course catalog?",
        options: [
          "Database rules",
          "Authorization policies",
          "Storage management",
          "Transaction processing"
        ],
        answer: "Database rules",
        explanation: "Database systems ensure data is consistent with structural and business rules, such as requiring that referenced entities (like courses) must exist."
      },
      {
        question: "What SQL command is used to retrieve data from a table?",
        options: [
          "SELECT",
          "INSERT",
          "UPDATE",
          "DELETE"
        ],
        answer: "SELECT",
        explanation: "The SELECT command is used to retrieve data from a table in a relational database."
      },
      {
        question: "What does the query processor perform to ensure the most efficient instructions are executed?",
        options: [
          "Query optimization",
          "Data authorization",
          "Data synchronization",
          "Transaction locking"
        ],
        answer: "Query optimization",
        explanation: "Query optimization is performed by the query processor to ensure the most efficient instructions are executed on the data."
      },
      {
        question: "What does the storage manager use to quickly locate data?",
        options: [
          "Indexes",
          "Queries",
          "Authorizations",
          "Transactions"
        ],
        answer: "Indexes",
        explanation: "The storage manager uses indexes to quickly locate data, especially important when dealing with large databases."
      },
      {
        question: "Which component prevents conflicts between concurrent transactions?",
        options: [
          "Transaction manager",
          "Query processor",
          "Storage manager",
          "Database administrator"
        ],
        answer: "Transaction manager",
        explanation: "The transaction manager ensures transactions are properly executed and prevents conflicts between concurrent transactions."
      },
      {
        question: "What SQL command is used to modify data in a table?",
        options: [
          "UPDATE",
          "INSERT",
          "SELECT",
          "DELETE"
        ],
        answer: "UPDATE",
        explanation: "The UPDATE command is used to modify existing data in a table."
      },
      {
        question: "MongoDB is categorized as what type of database?",
        options: [
          "NoSQL",
          "Relational",
          "Hierarchical",
          "Network"
        ],
        answer: "NoSQL",
        explanation: "MongoDB is categorized as a NoSQL database, which means it doesn't use the traditional table-based relational database structure."
      },
      {
        question: "What SQL command is used to add new rows to a table?",
        options: [
          "INSERT",
          "SELECT",
          "UPDATE",
          "DELETE"
        ],
        answer: "INSERT",
        explanation: "The INSERT command is used to add new rows to a table in a relational database."
      }
  ];
  
  export default questions;