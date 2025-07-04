<template>
  <form @submit.prevent="onSubmit" @reset.prevent="onReset" class="form-generator">
    <template v-for="field in fields" :key="field.name">
      <slot :name="`field-${field.name}`" :field="field" :modelValue="modelValue[field.name]">
        <FormField
          :field="field"
          :model-value="modelValue[field.name]"
          @update:model-value="value => updateField(field.name, value)"
        />
      </slot>
    </template>
    <FormActions>
      <template #default>
        <slot name="actions">
          <button type="submit" class="btn btn-primary">Сохранить</button>
          <button type="reset" class="btn btn-secondary">Отмена</button>
        </slot>
      </template>
    </FormActions>
  </form>
</template>

<script lang="ts" setup>
import FormField from './FormField.vue';
import FormActions from './FormActions.vue';
import type { Field, FormData } from '@/types/form';

const props = defineProps<{
  fields: Field[];
  modelValue: FormData;
}>();

const emit = defineEmits(['update:modelValue', 'submit', 'reset']);

function updateField(fieldName: string, value: string | number | boolean) {
  const updated = { ...props.modelValue };
  updated[fieldName] = value;
  emit('update:modelValue', updated);
}

function onSubmit() {
  emit('submit', { ...props.modelValue });
}

function onReset() {
  const resetObj: FormData = {};
  props.fields.forEach(field => {
    resetObj[field.name] = typeof props.modelValue[field.name] === 'boolean' ? false : '';
  });
  emit('update:modelValue', resetObj);
  emit('reset');
}
</script>

<style lang="scss" scoped>
.form-generator {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
