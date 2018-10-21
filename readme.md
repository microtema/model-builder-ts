# model-builder-ts
A Node.js module that create models for testing
## Installation 
```sh
npm install model-builder-ts --save-dev
```
## Usage
```typescript
import ModelBuilder from 'model-builder-ts';

interface Person {
    name: string;
    age: number;
    dob: Date,
    married: boolean
    email?: string
}

class DefaultPerson implements Person {

    age: number;
    dob: Date;
    email: string;
    married: boolean;
    name: string;

    constructor(age: number, dob: Date, email: string, married: boolean, name: string) {
        this.age = age;
        this.dob = dob;
        this.email = email;
        this.married = married;
        this.name = name;
    }
}

class PersonModelBuilder extends ModelBuilder<Person> {

    min(): Person {
        return new DefaultPerson(20, new Date(0), '7fate@web.de', true, 'Mario');
    }
}

test("Person ModelBuilder#min", () => {

    const sut = new PersonModelBuilder();

    let person = sut.min();

    expect(person.name).toEqual('Mario');
    expect(person.age).toEqual(20);
    expect(person.dob).toEqual(new Date(0));
    expect(person.married).toEqual(true);
});
```

## License
MIT (unless noted otherwise)