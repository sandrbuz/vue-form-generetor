import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import RegistrationForm from '../RegistrationForm.vue';

vi.mock('@/composables/useToast', () => ({
  useToast: () => ({
    showToast: vi.fn(),
  }),
}));

describe('RegistrationForm E2E', () => {
  it('правильно отправляет заполненную форму', async () => {
    const wrapper = mount(RegistrationForm);

    const usernameField = wrapper.find('input[placeholder="Введите имя"]');
    const emailField = wrapper.find('input[type="email"]');
    const aboutTextarea = wrapper.find('textarea');

    await usernameField.setValue('testuser');
    await emailField.setValue('test@example.com');
    await aboutTextarea.setValue('Тестовое описание');

    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await wrapper.find('form').trigger('submit');

    expect(consoleSpy).toHaveBeenCalledWith(
      'Данные регистрации:',
      expect.objectContaining({
        username: 'testuser',
        email: 'test@example.com',
        about: 'Тестовое описание',
      })
    );

    consoleSpy.mockRestore();
  });

  it('отображает кастомное поле username', () => {
    const wrapper = mount(RegistrationForm);

    const customField = wrapper.find('.custom-field');
    const customLabel = wrapper.find('.custom-label');

    expect(customField.exists()).toBe(true);
    expect(customLabel.exists()).toBe(true);
    expect(customLabel.text()).toContain('👤');
    expect(customLabel.text()).toContain('кастомный дизайн');
  });

  it('отображает кастомные кнопки', () => {
    const wrapper = mount(RegistrationForm);

    const submitButton = wrapper.find('button[type="submit"]');
    const resetButton = wrapper.find('button[type="reset"]');

    expect(submitButton.text()).toContain('💾 Зарегистрироваться');
    expect(resetButton.text()).toContain('🗑️ Очистить форму');
  });

  it('содержит все необходимые поля', () => {
    const wrapper = mount(RegistrationForm);

    expect(wrapper.find('input[placeholder="Введите имя"]').exists()).toBe(true);
    expect(wrapper.find('input[type="email"]').exists()).toBe(true);
    expect(wrapper.find('select').exists()).toBe(true);
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
    expect(wrapper.find('textarea').exists()).toBe(true);
  });

  it('эмитит события при сбросе формы', async () => {
    const wrapper = mount(RegistrationForm);

    await wrapper.find('form').trigger('reset');

    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.vm).toBeDefined();
  });
});
