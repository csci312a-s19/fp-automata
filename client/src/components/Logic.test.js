import logic from './Logic.js';

describe('Water tests', () => {
  test('Water falls into void', () => {
    expect(
      logic(
        [
          [{ element: 'Water' }, { element: 'Void' }],
          [{ element: 'Void' }, { element: 'Void' }]
        ],
        2
      )
    ).toEqual([
      [{ element: 'Void' }, { element: 'Void' }],
      [{ element: 'Water' }, { element: 'Void' }]
    ]);
  });

  test('Sand falls in water', () => {
    expect(
      logic(
        [
          [{ element: 'Sand' }, { element: 'Void' }],
          [{ element: 'Water' }, { element: 'Void' }]
        ],
        2
      )
    ).toEqual([
      [{ element: 'Water' }, { element: 'Void' }],
      [{ element: 'Sand' }, { element: 'Void' }]
    ]);
  });
  test('Water piles', () => {
    expect(
      logic(
        logic(
          [
            [{ element: 'Water' }, { element: 'Void' }, { element: 'Void' }],
            [{ element: 'Water' }, { element: 'Void' }, { element: 'Void' }],
            [{ element: 'Water' }, { element: 'Void' }, { element: 'Void' }]
          ],
          3
        ),
        3
      )
    ).toEqual([
      [{ element: 'Void' }, { element: 'Void' }, { element: 'Void' }],
      [{ element: 'Void' }, { element: 'Void' }, { element: 'Void' }],
      [{ element: 'Water' }, { element: 'Water' }, { element: 'Water' }]
    ]);
  });
  test('Water falls', () => {
    expect(
      logic(
        [
          [{ element: 'Water' }, { element: 'Void' }, { element: 'Void' }],
          [{ element: 'Water' }, { element: 'Water' }, { element: 'Void' }],
          [{ element: 'Water' }, { element: 'Water' }, { element: 'Water' }]
        ],
        3
      )
    ).toEqual([
      [{ element: 'Void' }, { element: 'Void' }, { element: 'Void' }],
      [{ element: 'Water' }, { element: 'Water' }, { element: 'Water' }],
      [{ element: 'Water' }, { element: 'Water' }, { element: 'Water' }]
    ]);
  });
});

describe('Sand tests', () => {
  test('Sand falls into void', () => {
    expect(
      logic(
        [
          [{ element: 'Sand' }, { element: 'Void' }],
          [{ element: 'Void' }, { element: 'Void' }]
        ],
        2
      )
    ).toEqual([
      [{ element: 'Void' }, { element: 'Void' }],
      [{ element: 'Sand' }, { element: 'Void' }]
    ]);
  });

  test('Sand falls in water', () => {
    expect(
      logic(
        [
          [{ element: 'Sand' }, { element: 'Void' }],
          [{ element: 'Water' }, { element: 'Void' }]
        ],
        2
      )
    ).toEqual([
      [{ element: 'Water' }, { element: 'Void' }],
      [{ element: 'Sand' }, { element: 'Void' }]
    ]);
  });
  test('Sand falls', () => {
    expect(
      logic(
        logic(
          [
            [{ element: 'Sand' }, { element: 'Void' }, { element: 'Void' }],
            [{ element: 'Sand' }, { element: 'Void' }, { element: 'Void' }],
            [{ element: 'Sand' }, { element: 'Void' }, { element: 'Void' }]
          ],
          3
        ),
        3
      )
    ).toEqual([
      [{ element: 'Void' }, { element: 'Void' }, { element: 'Void' }],
      [{ element: 'Void' }, { element: 'Void' }, { element: 'Void' }],
      [{ element: 'Sand' }, { element: 'Sand' }, { element: 'Sand' }]
    ]);
  });

  test('Sand piles', () => {
    expect(
      logic(
        [
          [{ element: 'Sand' }, { element: 'Void' }, { element: 'Void' }],
          [{ element: 'Sand' }, { element: 'Sand' }, { element: 'Void' }],
          [{ element: 'Sand' }, { element: 'Sand' }, { element: 'Sand' }]
        ],
        3
      )
    ).toEqual([
      [{ element: 'Sand' }, { element: 'Void' }, { element: 'Void' }],
      [{ element: 'Sand' }, { element: 'Sand' }, { element: 'Void' }],
      [{ element: 'Sand' }, { element: 'Sand' }, { element: 'Sand' }]
    ]);
  });
});

describe('Oil tests', () => {
  test('Oil rises in water', () => {
    expect(
      logic(
        [
          [{ element: 'Water' }, { element: 'Void' }],
          [{ element: 'Oil' }, { element: 'Void' }]
        ],
        2
      )
    ).toEqual([
      [{ element: 'Oil' }, { element: 'Void' }],
      [{ element: 'Water' }, { element: 'Void' }]
    ]);
  });

  test('Water piles in oil', () => {
    expect(
      logic(
        [
          [{ element: 'Oil' }, { element: 'Oil' }, { element: 'Oil' }],
          [{ element: 'Oil' }, { element: 'Water' }, { element: 'Oil' }],
          [{ element: 'Water' }, { element: 'Water' }, { element: 'Oil' }]
        ],
        3
      )
    ).toEqual([
      [{ element: 'Oil' }, { element: 'Oil' }, { element: 'Oil' }],
      [{ element: 'Oil' }, { element: 'Oil' }, { element: 'Oil' }],
      [{ element: 'Water' }, { element: 'Water' }, { element: 'Water' }]
    ]);
  });
  test('Oil piles upside-down in water', () => {
    expect(
      logic(
        [
          [{ element: 'Water' }, { element: 'Oil' }, { element: 'Water' }],
          [{ element: 'Water' }, { element: 'Oil' }, { element: 'Water' }],
          [{ element: 'Water' }, { element: 'Water' }, { element: 'Water' }]
        ],
        3
      )
    ).toEqual([
      [{ element: 'Oil' }, { element: 'Oil' }, { element: 'Oil' }],
      [{ element: 'Water' }, { element: 'Water' }, { element: 'Water' }],
      [{ element: 'Water' }, { element: 'Water' }, { element: 'Water' }]
    ]);
  });
});
