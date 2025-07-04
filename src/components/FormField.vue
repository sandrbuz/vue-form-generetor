<template>
  <div class="form-group" v-if="field.type !== 'checkbox'">
    <label :for="field.name">{{ field.label }}</label>
    <component
      :is="getComponent(field.type)"
      v-bind="field.attrs"
      :value="modelValue"
      @input="handleInput"
      :id="field.name"
      :type="field.type === 'input' ? field.attrs?.type || 'text' : undefined"
      class="form-control"
    >
      <template v-for="option in field.options" :key="option.value">
        <option v-if="field.type === 'select'" :value="option.value">{{ option.label }}</option>
      </template>
    </component>
  </div>
  <div class="form-group checkbox-group" v-else>
    <label :for="field.name" class="checkbox-label">
      <input
        type="checkbox"
        v-bind="field.attrs"
        :checked="Boolean(modelValue)"
        @change="handleCheckbox"
        :id="field.name"
        class="form-checkbox"
      />
      {{ field.label }}
    </label>
  </div>
</template>

<script lang="ts" setup>
import type { Field } from '@/types/form';

defineProps<{
  field: Field;
  modelValue: unknown;
}>();

const emit = defineEmits(['update:modelValue']);

function handleInput(event: Event) {
  const target = event.target;
  if (target && 'value' in target && typeof target.value === 'string') {
    emit('update:modelValue', target.value);
  }
}

function handleCheckbox(event: Event) {
  const target = event.target;
  if (target && 'checked' in target && typeof target.checked === 'boolean') {
    emit('update:modelValue', target.checked);
  }
}

function getComponent(type: string) {
  switch (type) {
    case 'input':
      return 'input';
    case 'select':
      return 'select';
    case 'checkbox':
      return 'input';
    case 'textarea':
      return 'textarea';
    default:
      return 'input';
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 0;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
    font-size: 0.95rem;
  }

  .form-control {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e1e5e9;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.2s ease;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #42b983;
      box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.1);
    }

    &::placeholder {
      color: #999;
    }
  }

  select.form-control {
    cursor: pointer;
  }

  textarea.form-control {
    resize: vertical;
    min-height: 80px;
  }
}

.checkbox-group {
  display: flex;
  align-items: center;

  label.checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    user-select: none;
  }

  .form-checkbox {
    width: 20px;
    height: 20px;
    margin: 0;
    cursor: pointer;
    accent-color: #42b983;
  }
}
</style>
