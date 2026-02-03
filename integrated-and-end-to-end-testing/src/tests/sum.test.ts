import { describe, expect, it, vi } from 'vitest';
import { app } from "../index";
import request from 'supertest';


describe('it should sum the number', () => {
  it('should return 3 for 1 + 2', async () => {
    const { status, body } = await request(app).post("/sum").send({
      a: 1,
      b: 2
    })

    expect(status).toBe(200);
    expect(body).toEqual({ answer: 3, id: expect.any(Number)})
  })
})
