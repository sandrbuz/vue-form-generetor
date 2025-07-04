import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FormGenerator from '../FormGenerator.vue';

const mockFields = [
  {
    name: 'username',
    label: 'Имя пользователя',
    type: 'input',
    attrs: { placeholder: 'Введите имя' },
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input',
    attrs: { type: 'email' },
  },
  {
    name: 'agree',
    label: 'Согласен с условиями',
    type: 'checkbox',
  },
];

const mockFormData = {
  username: '',
  email: '',
  agree: false,
};

describe('FormGenerator', () => {
  it('рендерит все поля формы', () => {
    const wrapper = mount(FormGenerator, {
      props: {
        fields: mockFields,
        modelValue: mockFormData,
      },
    });

    expect(wrapper.find('input[placeholder="Введите имя"]').exists()).toBe(true);
    expect(wrapper.find('input[type="email"]').exists()).toBe(true);
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
  });

  it('эмитит update:modelValue при изменении поля', async () => {
    const wrapper = mount(FormGenerator, {
      props: {
        fields: mockFields,
        modelValue: mockFormData,
      },
    });

    const usernameInput = wrapper.find('input[placeholder="Введите имя"]');
    await usernameInput.setValue('testuser');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    const emittedValue = wrapper.emitted('update:modelValue')?.[0]?.[0];
    expect(emittedValue).toMatchObject({
      username: 'testuser',
    });
  });

  it('эмитит submit при отправке формы', async () => {
    const wrapper = mount(FormGenerator, {
      props: {
        fields: mockFields,
        modelValue: mockFormData,
      },
    });

    await wrapper.find('form').trigger('submit');

    expect(wrapper.emitted('submit')).toBeTruthy();
    expect(wrapper.emitted('submit')?.[0]?.[0]).toEqual(mockFormData);
  });

  it('эмитит reset при сбросе формы', async () => {
    const wrapper = mount(FormGenerator, {
      props: {
        fields: mockFields,
        modelValue: { username: 'test', email: 'test@test.com', agree: true },
      },
    });

    await wrapper.find('form').trigger('reset');

    expect(wrapper.emitted('reset')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });

  it('поддерживает слоты для кастомных полей', () => {
    const wrapper = mount(FormGenerator, {
      props: {
        fields: mockFields,
        modelValue: mockFormData,
      },
      slots: {
        'field-username': '<div class="custom-username">Кастомное поле</div>',
      },
    });

    expect(wrapper.find('.custom-username').exists()).toBe(true);
    expect(wrapper.find('.custom-username').text()).toBe('Кастомное поле');
  });
});
