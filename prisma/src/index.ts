import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient();

async function createUser() {
  await client.user.create({
    data: {
      username: "Ayush",
      password: "12345",
      age: 23,
      city: "Patna",
    },
  });
}

async function getUser() {
  const user = await client.user.findFirst({
    where: {
      id: 1,
    },
    include: {
      todos: true,
    },
  });
  console.log(user);
}

async function createTodo() {
  const todos = await client.todo.create({
    data: {
      title: "Go to gym",
      description: "Going to the gym",
      done: false,
      userId: 1,
    },
  });
  console.log(todos);
}

app.get("/users", async (req, res) => {
  const users = await client.user.findMany();
  res.json({
    users,
  });
});

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const users = await client.user.findFirst({
    where: {
      id: parseInt(id)
    },
    select: {
      todos: true,
      username: true,
      password: true
    }
  })
  res.json({
    users
  })
});

app.listen(3000, () => {
  console.log("App is listening on 3000")
})

// createTodo();
getUser();
// createUser();
