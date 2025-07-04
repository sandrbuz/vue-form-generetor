# 🧪 Тестирование в Vue Form Generator

Проект включает комплексное покрытие тестами, демонстрирующее разные уровни тестирования.

## 🛠 Технологии тестирования

- **Vitest** - быстрый тест-раннер для Vite
- **@vue/test-utils** - официальная библиотека для тестирования Vue компонентов
- **jsdom** - DOM окружение для тестов
- **TypeScript** - типизированные тесты

## 📋 Виды тестов

### 1. **Unit тесты**

- `src/utils/__tests__/formConfigs.test.ts` - тестирование утилитной функции `createFormData`
- `src/composables/__tests__/useToast.test.ts` - тестирование композабла уведомлений

### 2. **Integration тесты**

- `src/components/__tests__/FormGenerator.test.ts` - тестирование основного компонента формы

### 3. **E2E тесты**

- `src/views/__tests__/RegistrationForm.test.ts` - полное тестирование страницы регистрации

## 🚀 Команды для запуска

```bash
# Запуск всех тестов
npm run test

# Разовый запуск (CI)
npm run test:run

# UI интерфейс для тестов
npm run test:ui

# Покрытие кода тестами
npm run test:coverage
```

## 📊 Покрытие тестами

**Текущее покрытие:** 20 тестов ✅

- ✅ Утилитные функции - 4 теста
- ✅ Композаблы - 6 тестов
- ✅ Компоненты - 5 тестов
- ✅ Views (E2E) - 5 тестов

## 🎯 Что тестируется

### FormGenerator компонент:

- Рендеринг всех типов полей
- Обработка пользовательского ввода
- Эмит событий (submit, reset, update)
- Поддержка слотов для кастомизации

### useToast композабл:

- Создание уведомлений разных типов
- Удаление уведомлений по ID
- Helper методы (success, error, warning, info)
- Корректная работа showToast

### formConfigs утилиты:

- Правильная инициализация данных формы
- Обработка разных типов полей
- Checkbox поля как boolean
- Остальные поля как строки

### RegistrationForm (E2E):

- Заполнение и отправка формы
- Кастомизация через слоты
- Отображение всех элементов
- Интеграция с композаблами

## 💡 Примеры тестов

### Unit тест

```typescript
it('создает объект с начальными значениями', () => {
  const formData = createFormData(fields);
  expect(formData).toEqual({
    username: '',
    email: '',
    subscribe: false,
  });
});
```

### Component тест

```typescript
it('эмитит update:modelValue при изменении', async () => {
  const wrapper = mount(FormGenerator, { props });
  await wrapper.find('input').setValue('test');
  expect(wrapper.emitted('update:modelValue')).toBeTruthy();
});
```

### E2E тест

```typescript
it('отправляет заполненную форму', async () => {
  const wrapper = mount(RegistrationForm)
  await wrapper.find('input').setValue('testuser')
  await wrapper.find('form').trigger('submit')
  expect(consoleSpy).toHaveBeenCalledWith('Данные регистрации:', ...)
})
```

## 🔧 Настройка

Конфигурация в `vitest.config.ts`:

- Поддержка Vue SFC
- DOM окружение (jsdom)
- Алиасы TypeScript (@/ → src/)
- Глобальные утилиты тестирования

---

**Тесты демонстрируют:** правильную архитектуру, покрытие кода, типизацию TypeScript и современные практики тестирования Vue 3 приложений.
