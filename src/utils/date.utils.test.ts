import { formatDate } from './date.utils';

const date = '2022-12-19T15:51:26.708Z'; // 19/12/2022 16:51:26

describe('formatDate', () => {
  it('Date is formatted correctly DD M YYYY, hh:mm', () => {
    expect(formatDate(date)).toBe('19 dic 2022, 16:51');
  });
});
