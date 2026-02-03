import express from 'express';
import { prisma } from './client.js';
export const app = express();
app.use(express.json());

app.post('/sum', async (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (a > 100000 || b > 100000) {
    return res.status(422).json({
      message: 'sorry we do not support big numbers'
    })
  }

  const result = a + b;

  const response = await prisma.request.create({
    data: {
      a: a,
      b: b,
      type: 'sum',
      answer: result
    }
  })

  res.json({ answer: result, id: response.id })
})

app.post('/multiply', async (req, res) => {
  const a = req.body.a;
  const b = req.body.b;

  const result = a * b


  await prisma.request.create({
    data: {
      a: a,
      b: b,
      type: 'sum',
      answer: result
    }
  })

  res.json({ answer: result })
})