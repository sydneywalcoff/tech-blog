const {format_date, format_plural} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

test('format_plural() returns the correct pluralization', () => {
    const word = 'word';

    expect(format_plural(word, 2)).toBe('words');
    expect(format_plural(word, 0)).toBe('words');
    expect(format_plural(word, 1)).toBe('word');
});