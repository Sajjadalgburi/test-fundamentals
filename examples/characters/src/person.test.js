import { describe, it, expect } from 'vitest';
import { Person } from './person.js';

// Remove the `todo` from the `describe` to run the tests.
describe('Person', () => {
  // todo: This test will fail. Why?
  // this test fails because the id property is random, it wont stay the same every iteration the test is executed
  it('should create a person with a first name and last name', () => {
    const person = new Person('Grace', 'Hopper');
    expect(person).toEqual({
      // the string containing method checks weather the string contains the passed in string, this can even be a single char
      // test passes if 'p' also
      id: expect.stringContaining('person-'),
      firstName: 'Grace',
      lastName: 'Hopper',
    });
  });
});
