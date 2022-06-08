export const getTemperature = (data) => Number(data?.current?.temperature);

export const lessThen = (num) => (num2) => num2 < num;

export const between = ([min, max]) => (num) => num >= min && num < max;

export const multipleClasses = (classes) => Object.values(classes).join(' ');

export const toPx = (num) => `${num}px`;

export const identity = (x) => x;