import { vi } from 'vitest';

Object.defineProperty(window, 'setTimeout', {
  value: vi.fn((fn: () => void) => fn()),
  writable: true,
});

global.console = {
  ...console,
  log: vi.fn(),
  error: vi.fn(),
  warn: vi.fn(),
};
