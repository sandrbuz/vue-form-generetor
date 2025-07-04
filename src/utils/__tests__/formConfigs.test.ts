import { describe, it, expect } from 'vitest';
import { createFormData, registrationFormFields, personalSurveyFields } from '../formConfigs';

describe('formConfigs', () => {
  describe('createFormData', () => {
    it('создает объект с начальными значениями для полей регистрации', () => {
      const formData = createFormData(registrationFormFields);

      expect(formData).toEqual({
        username: '',
        email: '',
        role: '',
        subscribe: false,
        about: '',
      });
    });

    it('создает объект с начальными значениями для полей анкеты', () => {
      const formData = createFormData(personalSurveyFields);

      expect(formData).toEqual({
        city: '',
        gender: '',
        agree: false,
      });
    });

    it('правильно инициализирует checkbox поля как false', () => {
      const testFields = [
        { name: 'checkbox1', type: 'checkbox' as const, label: 'Test 1' },
        { name: 'checkbox2', type: 'checkbox' as const, label: 'Test 2' },
      ];

      const formData = createFormData(testFields);

      expect(formData.checkbox1).toBe(false);
      expect(formData.checkbox2).toBe(false);
    });

    it('правильно инициализирует не-checkbox поля как пустые строки', () => {
      const testFields = [
        { name: 'input1', type: 'input' as const, label: 'Test 1' },
        { name: 'select1', type: 'select' as const, label: 'Test 2' },
        { name: 'textarea1', type: 'textarea' as const, label: 'Test 3' },
      ];

      const formData = createFormData(testFields);

      expect(formData.input1).toBe('');
      expect(formData.select1).toBe('');
      expect(formData.textarea1).toBe('');
    });
  });
});
