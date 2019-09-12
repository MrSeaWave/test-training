describe('常用的几个断言方法', () => {
  it('toBe', () => {
    expect(2 + 2).toBe(4);
  });

  it('toEqual', () => {
    const data = { a: 1 };
    data['b'] = 2;
    expect(data).toEqual({ a: 1, b: 2 });
  });

  it('.not', () => {
    expect(2 + 2).not.toBe(5);
  });
});

describe('Truthiness', () => {
  it('null', () => {
    const data = null;
    expect(data).toBeNull();
    expect(data).toBeDefined();
    expect(data).not.toBeUndefined();
    expect(data).not.toBeTruthy();
    expect(data).toBeFalsy();
  });
  it('undefined', () => {
    const data = undefined;
    expect(data).not.toBeNull();
    expect(data).not.toBeDefined();
    expect(data).toBeUndefined();
    expect(data).not.toBeTruthy();
    expect(data).toBeFalsy();
  });
  it('true data', () => {
    const data = 'true data';
    expect(data).not.toBeNull();
    expect(data).toBeDefined();
    expect(data).not.toBeUndefined();
    expect(data).toBeTruthy();
    expect(data).not.toBeFalsy();
  });
});

describe('Numbers', () => {
  it('numbers method', () => {
    const num = 567;
    expect(num).toBeGreaterThan(123);
    expect(num).toBeGreaterThanOrEqual(567);
    expect(num).toBeLessThan(765);
    expect(num).toBeLessThanOrEqual(567);
  });
  it('toBeCloseTo', () => {
    const data = 0.1 + 0.2;
    expect(data).not.toBe(0.3);
    expect(data).not.toEqual(0.3);
    expect(data).toBeCloseTo(0.3);
  });
});

describe('Strings', () => {
  it('toMatch', () => {
    expect('Long may the sunshine').toMatch(/the/);
  });
  it('toHaveLength', () => {
    expect('Long may the sunshine').toHaveLength(21);
  });
});

describe('Array', () => {
  it('toContain', () => {
    const val = ['a', 'b', 'bb', 'c'];
    expect(val).toContain('b');
  });
  it('toHaveLength', () => {
    const val = ['a', 'b', 'bb', 'c'];
    expect(val).toHaveLength(4);
  });
});

describe('Exceptions', () => {
  it('toThrow', () => {});
  const throwErrorFunc = () => {
    throw new Error('long long ago');
  };
  expect(throwErrorFunc).toThrow();
  //  正则匹配
  expect(throwErrorFunc).not.toThrow('long-long');
  expect(throwErrorFunc).toThrow('long long ago');
  expect(throwErrorFunc).toThrow(/ago/);
});
