import { format } from 'date-fns';
import { expect, test, describe } from "vitest";
import { formattedDate } from '@/utils/util';

describe('formattedDate', () => {
  test('returns "-" for empty date', () => {
    expect(formattedDate(null)).toBe('-');
    expect(formattedDate(undefined)).toBe('-');
    expect(formattedDate('')).toBe('-');
  });

  test('returns formatted date for valid date string', () => {
    const date = '2022-05-12T15:00:00.000Z';
    const formattedDateString = format(new Date(date), 'dd MMM yyyy');
    expect(formattedDate(date)).toBe(formattedDateString);
  });

  test('returns "-" for invalid date string', () => {
    expect(formattedDate('invalid-date')).toBe('-');
  });
});
