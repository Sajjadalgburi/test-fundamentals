import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

describe('Character', () => {
  it('should create a character with a first name, last name, and role', () => {
    const character = new Character('John', 'Mack', 'Archer');
    expect(character.firstName).toBe('John');
    expect(character.lastName).toBe('Mack');
    expect(character.role).toBe('Archer');
  });

  it('should allow you to increase the level', () => {
    const character = new Character('John', 'Mack', 'Archer');

    expect(character.level).toBe(1);

    character.levelUp();

    expect(character.level).toBe(2);
  });

  it('should update the last modified date when leveling up', () => {
    const character = new Character('John', 'Mack', 'Archer');
    const lastModifiedDate = character.lastModified;

    character.levelUp();

    expect(character.lastModified).not.toBe(lastModifiedDate);
  });
});
