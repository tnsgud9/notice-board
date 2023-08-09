import { verbose } from "sqlite3";
const sqlite3 = verbose();
const db = new sqlite3.Database(":memory:", (err) => {
  if (err) return console.error(err.message);
  console.log("Connected to the in-memory SQlite database.");
});
export default db;
