import * as sut from '../src/facade';

describe('test index', () => {

    it('test', () => {
        expect('foo').toEqual(sut.getPlural('foo'));
    });
});
