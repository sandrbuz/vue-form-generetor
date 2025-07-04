<template>
  <form @submit.prevent="onSubmit" @reset.prevent="onReset" class="form-generator">
    <template v-for="field in fields" :key="field.name">
      <slot :name="`field-${field.name}`" :field="field" :modelValue="modelValue[field.name]">
        <div class="form-group" v-if="field.type !== 'checkbox'">
          <label :for="field.name">{{ field.label }}</label>
          <component
            :is="getComponent(field.type)"
            v-bind="field.attrs"
            :value="modelValue[field.name]"
            @input="updateField(field.name, $event.target.value)"
            :id="field.name"
            :type="field.type === 'input' ? (field.attrs?.type || 'text') : undefined"
            :options="field.options"
            class="form-control"
          >
            <template v-if="field.type === 'select'" v-for="option in field.options" :key="option.value">
              <option :value="option.value">{{ option.label }}</option>
            </template>
          </component>
        </div>
        <div class="form-group checkbox-group" v-else>
          <label :for="field.name" class="checkbox-label">
            <input
              type="checkbox"
              v-bind="field.attrs"
              :checked="modelValue[field.name]"
              @change="updateField(field.name, $event.target.checked)"
              :id="field.name"
              class="form-checkbox"
            />
            {{ field.label }}
          </label>
        </div>
      </slot>
    </template>
    <div class="form-actions">
      <slot name="actions">
        <button type="submit" class="btn btn-primary">Сохранить</button>
        <button type="reset" class="btn btn-secondary">Отмена</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

interface FieldOption {
  label: string;
  value: string | number | boolean;
}

interface Field {
  name: string;
  label: string;
  type: 'input' | 'select' | 'checkbox' | 'textarea';
  options?: FieldOption[];
  attrs?: Record<string, any>;
}

const props = defineProps<{
  fields: Field[];
  modelValue: Record<string, any>;
}>();

const emit = defineEmits(['update:modelValue', 'submit', 'reset']);

function updateField(fieldName: string, value: any) {
  const updated = { ...props.modelValue };
  updated[fieldName] = value;
  emit('update:modelValue', updated);
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

function onSubmit() {
  emit('submit', { ...props.modelValue });
}

function onReset() {
  const resetObj: Record<string, any> = {};
  props.fields.forEach((field) => {
    resetObj[field.name] = typeof props.modelValue[field.name] === 'boolean' ? false : '';
  });
  emit('update:modelValue', resetObj);
  emit('reset');
}
</script>

<style lang="scss" scoped>
.form-generator {
  max-width: 400px;
  margin: 0 auto;
  .form-group {
    margin-bottom: 1rem;
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    .form-control {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
  .checkbox-group {
    display: flex;
    align-items: center;
    label.checkbox-label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0;
      font-weight: normal;
    }
    .form-checkbox {
      width: 18px;
      height: 18px;
      margin-right: 0.5rem;
    }
  }
  .form-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    .btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      &.btn-primary {
        background: #42b983;
        color: #fff;
      }
      &.btn-secondary {
        background: #eee;
        color: #333;
      }
    }
  }
}
</style>
