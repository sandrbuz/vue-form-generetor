import { describe, it, expect, beforeEach } from 'vitest';
import { useToast } from '../useToast';

describe('useToast', () => {
  beforeEach(() => {
    const { toasts } = useToast();
    toasts.value = [];
  });

  it('добавляет toast уведомление', () => {
    const { toasts, addToast } = useToast();

    const toastId = addToast({
      title: 'Тестовое уведомление',
      message: 'Тестовое сообщение',
      type: 'success',
    });

    expect(toasts.value).toHaveLength(1);
    expect(toasts.value[0]).toMatchObject({
      id: toastId,
      title: 'Тестовое уведомление',
      message: 'Тестовое сообщение',
      type: 'success',
    });
  });

  it('удаляет toast уведомление по ID', () => {
    const { toasts, addToast, removeToast } = useToast();

    const toastId = addToast({
      title: 'Тестовое уведомление',
      type: 'info',
    });

    expect(toasts.value).toHaveLength(1);

    removeToast(toastId);

    expect(toasts.value).toHaveLength(0);
  });

  it('не падает при удалении несуществующего toast', () => {
    const { toasts, removeToast } = useToast();

    expect(() => removeToast(999)).not.toThrow();
    expect(toasts.value).toHaveLength(0);
  });

  it('showToast работает с правильными параметрами', () => {
    const { toasts, showToast } = useToast();

    showToast('Заголовок', 'error', 'Сообщение ошибки');

    expect(toasts.value).toHaveLength(1);
    expect(toasts.value[0]).toMatchObject({
      title: 'Заголовок',
      message: 'Сообщение ошибки',
      type: 'error',
    });
  });

  it('success helper создает успешное уведомление', () => {
    const { toasts, success } = useToast();

    success('Успех!', 'Операция выполнена');

    expect(toasts.value).toHaveLength(1);
    expect(toasts.value[0].type).toBe('success');
    expect(toasts.value[0].title).toBe('Успех!');
  });

  it('error helper создает уведомление об ошибке', () => {
    const { toasts, error } = useToast();

    error('Ошибка!', 'Что-то пошло не так');

    expect(toasts.value).toHaveLength(1);
    expect(toasts.value[0].type).toBe('error');
    expect(toasts.value[0].title).toBe('Ошибка!');
  });
});
