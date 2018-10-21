# model-builder-ts
A Node.js module that create models for testing
## Installation 
```sh
npm install model-builder-ts --save-dev
```
## Usage
```typescript
import {ModelBuilder} from 'model-builder-ts';

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
```

## License
MIT (unless noted otherwise)