<template>
  <div class="form-actions">
    <slot>
      <button type="submit" class="btn btn-primary">Сохранить</button>
      <button type="reset" class="btn btn-secondary">Отмена</button>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
}
</style>
