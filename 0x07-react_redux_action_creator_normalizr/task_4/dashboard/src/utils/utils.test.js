import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

describe('check getFullYear function', () => {
  it('check output', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  })
})

describe('check getFooterCopy function', () => {
  it('check output', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  })
  it('check output', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  })
})

describe('check getLatestNotification function', () => {
  it('check output', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  })
})
