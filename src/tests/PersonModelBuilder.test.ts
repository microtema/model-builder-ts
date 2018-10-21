import { ModelBuilder } from '../index';

interface Person {
  name: string;
  age: number;
  dob: Date;
  married: boolean;
  email?: string;
}

class PersonModelBuilder extends ModelBuilder<Person> {
  public min(): Person {
    return {
      age: 20,
      dob: new Date(0),
      email: '7fate@web.de',
      married: true,
      name: 'Mario',
    } as Person;
  }
}

test('Person ModelBuilder#min', () => {
  const sut = new PersonModelBuilder();

  const person = sut.min();

  expect(person.name).toEqual('Mario');
  expect(person.age).toEqual(20);
  expect(person.dob).toEqual(new Date(0));
  expect(person.married).toEqual(true);
});

test('Person ModelBuilder#max', () => {
  const sut = new PersonModelBuilder();

  expect(sut.max()).toEqual(sut.min());
});

test('Person ModelBuilder#mix', () => {
  const sut = new PersonModelBuilder();

  expect(sut.mix()).toEqual(sut.min());
});

test('Person ModelBuilder#fix', () => {
  const sut = new PersonModelBuilder();

  expect(sut.fix()).toEqual(sut.min());
});

test('Person ModelBuilder#list', () => {
  const sut = new PersonModelBuilder();

  expect(sut.list(1)).toEqual([sut.min()]);
});
