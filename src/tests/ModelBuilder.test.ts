import {ModelBuilder} from '../index';

test('Default ModelBuilder', () => {
    const sut = new ModelBuilder();

    expect(sut.min()).toEqual({});

    expect(sut.max()).toEqual(sut.min());

    expect(sut.mix()).toEqual(sut.min());

    expect(sut.fix()).toEqual(sut.min());

    expect(sut.list().length).toBeGreaterThanOrEqual(1);

    expect(sut.list().length).toBeLessThanOrEqual(10);

    expect(sut.list(1).length).toEqual(1);
});
