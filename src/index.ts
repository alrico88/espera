export enum Unit {
  milliseconds,
  seconds,
  minutes,
  hours,
  days,
}

/**
 * Converts to milliseconds another time unit
 *
 * @export
 * @param {number} num The amount
 * @param {Unit} unit The unit
 * @return {number} The amount in milliseconds
 */
export function convertToMilliseconds(num: number, unit: Unit): number {
  switch (unit) {
    case Unit.seconds:
      return num * 1000;
    case Unit.minutes:
      return convertToMilliseconds(60 * num, Unit.seconds);
    case Unit.hours:
      return convertToMilliseconds(60 * num, Unit.minutes);
    case Unit.days:
      return convertToMilliseconds(24 * num, Unit.hours);
    default:
      return num;
  }
}

/**
 * Stops execution for the desired time
 *
 * @export
 * @param {number} timeout Amount to wait
 * @param {Unit} unit Unit of the amount
 * @return {Promise<void>}
 */
export function sleep(timeout: number, unit: Unit): Promise<void> {
  const timeoutInMS = convertToMilliseconds(timeout, unit);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeoutInMS);
  });
}
