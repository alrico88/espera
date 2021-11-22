import { convertToMilliseconds, sleep, Unit } from '../src';

describe('Test time conversion', () => {
  it('Should return the correct amount of milliseconds in 2 minutes', () => {
    expect(convertToMilliseconds(2, Unit.minutes)).toBe(120000);
  });

  it('Should return the correct amount of milliseconds in 2 hours', () => {
    expect(convertToMilliseconds(2, Unit.hours)).toBe(7200000);
  });
});

describe('Test waiting time', () => {
  it('Should not resolve a promise before the timeout has passed', async () => {
    const now = new Date();
    await sleep(4, Unit.seconds);
    const then = new Date();

    const diff = then.getTime() - now.getTime();

    expect(diff).not.toBeLessThan(convertToMilliseconds(4, Unit.seconds));
  });
});
