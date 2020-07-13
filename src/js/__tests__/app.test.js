import fetchData from '../http';
import { getLevel } from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel(1) вызывает fetchData с userId 1', () => {
  fetchData.mockReturnValue({});

  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('response status ok, отображается текущий уровень', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 'Gold' });

  expect(getLevel()).toBe('Ваш текущий уровень: Gold');
});

test('response status is not ok, информация об уровне недоступна', () => {
  fetchData.mockReturnValue({ });

  expect(getLevel()).toBe('Информация об уровне временно недоступна');
});
