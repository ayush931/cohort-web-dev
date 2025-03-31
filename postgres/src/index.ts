import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

const pgClient = new Client(
  "postgresql://neondb_owner:npg_zZG0cNs6RKgm@ep-polished-block-a5hhptx9-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
);
pgClient.connect();

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password, city, country, street, pincode } =
      req.body;
    // const sqlInqury = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`;
    // const response = await pgClient.query(sqlInqury);

    // For the prevention of any SQL Injection.

    const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
    const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;

    await pgClient.query("BEGIN;");
    const insertQueryResponse = await pgClient.query(insertQuery, [
      username,
      email,
      password,
    ]);

    const userId = insertQueryResponse.rows[0].id;

    const addressInsertQueryResponse = await pgClient.query(
      addressInsertQuery,
      [city, country, street, pincode, userId]
    );

    await pgClient.query("COMMIT;");

    // SQL Injection

    // {
    //   "username": "Ankit123",
    //   "email": "ayushkuma222r@gmail.com",
    //   "password": "123123'); DELETE FROM users; INSERT INTO users (username, email, password) VALUES ('amank', 'amank@gmail.com', 'ayush123')"
    // }

    res.json({
      message: "You have signed up",
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/metadata", async (req, res) => {
  const id = req.query.id;

  const query1 = `SELECT username, email, id FROM users WHERE id=$1`;
  const response1 = await pgClient.query(query1, [id]);

  const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
  const response2 = await pgClient.query(query2, [id]);

  res.json({
    user: response1.rows[0],
    address: response2.rows
  })
});

app.get("/betterMetadata", async (req, res) => {
  const id = req.query.id
  const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.country, addresses.street, addresses.pincode FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id = $1;`

  const response = await pgClient.query(query, [id])

  res.json({
    response: response.rows
  })
})

app.listen(3000, () => {
  console.log("App is listening on 3000");
});
