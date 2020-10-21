import { main } from './app';

describe('Fizz Buzz', () => {
  it('return an error message if the argument is negative', () => {
    const number = main(0);
    expect(number).toBe('sorry papi');
  });
  it('should return FizzBuzz', () => {
    const number = main(15);
    expect.stringContaining('FizzBuzz');
  });
  it('should return Buzz', () => {
    const number = main(5);
    expect.stringContaining('Buzz');
  });
  it('should return Fizz', () => {
    const number = main(3);
    expect.stringContaining('Fizz');
  });
});
