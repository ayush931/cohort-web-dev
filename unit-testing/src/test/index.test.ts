import { describe, expect, it, vi } from 'vitest';
import { app } from "../index";
import request from 'supertest';
import { prisma } from '../__mocks__/client.js';

vi.mock('../client');

describe('it should sum the number', () => {
  it('should return 3 for 1 + 2', async () => {
    prisma.request.create.mockResolvedValue({
      id: 1,
      a: 1,
      b: 2,
      answer: 3,
      type: 'sum'
    });

    vi.spyOn(prisma.request, 'create');
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2
    })

    expect(prisma.request.create).toHaveBeenCalledWith({
      data: {
        a: 1,
        b: 2,
        type: 'sum',
        answer: 3
      }
    })
    expect(prisma.request.create).toHaveBeenCalledOnce();
    expect(res.body.answer).toBe(3);
    expect(res.statusCode).toBe(200);
  })

  it('should return undefined if big numbers are there', async () => {
    const res = await request(app).post('/sum').send({
      a: 10000000,
      b: 10000000
    })

    expect(res.body.message).toBe('sorry we do not support big numbers')
    expect(res.statusCode).toBe(422)
  })
})
