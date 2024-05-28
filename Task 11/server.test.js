import request from 'supertest';
import app from './server';

describe('Калькулятор API', () => {
  it('должен выполнять операцию сложения', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'add', num1: 5, num2: 3 });

    expect(response.status).toBe(200);
    expect(response.text).toBe('Result: 8');
  });

  it('должен выполнять операцию вычитания', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'subtract', num1: 10, num2: 5 });

    expect(response.status).toBe(200);
    expect(response.text).toBe('Result: 5');
  });

  it('должен выполнять операцию умножения', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'multiply', num1: 5, num2: 3 });

    expect(response.status).toBe(200);
    expect(response.text).toBe('Result: 15');
  });

  it('должен выполнять операцию деления', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'divide', num1: 10, num2: 2 });

    expect(response.status).toBe(200);
    expect(response.text).toBe('Result: 5');
  });

  it('должен выполнять операцию возведения в степень', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'power', num1: 2, num2: 3 });

    expect(response.status).toBe(200);
    expect(response.text).toBe('Result: 8');
  });

  it('должен выполнять операцию нахождения квадратного корня', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'squareRoot', num1: 9 });

    expect(response.status).toBe(200);
    expect(response.text).toBe('Result: 3');
  });

  it('должен выполнять операцию нахождения факториала', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'factorial', num1: 5 });

    expect(response.status).toBe(200);
    expect(response.text).toBe('Result: 120');
  });

  it('должен выполнять операцию нахождения остатка от деления', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'modulus', num1: 10, num2: 3 });

    expect(response.status).toBe(200);
    expect(response.text).toBe('Result: 1');
  });

  it('должен выполнять операцию нахождения максимального числа', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'max', num1: 10, num2: 20 });

    expect(response.status).toBe(200);
    expect(response.text).toBe('Result: 20');
  });

  it('должен выполнять операцию нахождения среднего арифметического', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ operation: 'average', num1: 10, num2: 20 });

    expect(response.status).toBe(200);
    expect(response.text).toBe('Result: 15');
  });
});
