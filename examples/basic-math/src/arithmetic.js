export const add = (a, b) => {
  if (typeof a === 'string') a = Number(a);
  if (typeof b === 'string') b = Number(b);

  if (isNaN(a) || isNaN(b))
    throw new Error('Either Argument (a or b) is not a number');

  return a + b;
};

export const subtract = (a, b) => {
  // [6, 2]
  if (Array.isArray(a)) {
    if (a.length > 2) throw new Error('Array Must be lenght two or less');
    const index1 = a[0];
    const index2 = a[1];
    const total = index1 - index2;
    return total - b;
  }

  return a - b;
};

export const multiply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  return a / b;
};
