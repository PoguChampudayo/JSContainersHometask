import Team from '../src/index';
import ErrorRepository from '../src/errorRepository';

test('should add character to the team', () => {
  const team = new Team();
  team.members.add('pupa');
  team.members.add('lupa');
  team.add('random guy');
  const expected = new Set(['pupa', 'lupa', 'random guy']);
  expect(team.members).toEqual(expected);
  expect(() => { team.add('lupa'); }).toThrow('Этот персонаж уже в команде!');
});

test('should add all characters to the team', () => {
  const team = new Team();
  team.members.add('pupa');
  team.members.add('lupa');
  team.addAll('random guy', 'another random guy', 'strange random guy', 'pupa');
  const expected = new Set(['pupa', 'lupa', 'random guy', 'another random guy', 'strange random guy']);
  expect(team.members).toEqual(expected);
});

test('should add character to the team', () => {
  const team = new Team();
  team.members.add('pupa');
  team.members.add('lupa');
  team.add('random guy');
  const expected = ['pupa', 'lupa', 'random guy'];
  expect(team.toArray()).toEqual(expected);
});

test('shold translate error correctly', () => {
  const dict = new ErrorRepository();
  dict.add(404, 'Not Found');
  expect(dict.translate(404)).toBe('Not Found');
  expect(dict.translate(403)).toBe('Unknown error');
});
