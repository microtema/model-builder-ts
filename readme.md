# model-builder-ts
A Node.js module that create models for testing
## Installation 
```sh
npm install model-builder-ts --save-dev
```
## Usage
```sh
Output should be 'Boys'
```
### TypeScript
```typescript
import { ModelBuilderFactory } from 'model-builder-ts';
import { Person } from '../models/Person';

console.log(ModelBuilderFactory.min(Person))
```
```sh
Output should be new Person instance with initialized required properties
```

## License
MIT (unless noted otherwise)