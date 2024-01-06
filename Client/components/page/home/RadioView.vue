<script setup lang="ts">
const setting = useSettingStore();
</script>

<template>
    <div class="pa-4">
        <VRadioGroup hide-details v-model="setting.format" inline class="d-flex justify-end">
          <VRadio label="まとめ" color="primary" value="list" />
          <VRadio label="アンテナ" color="primary" value="gather" />
        </VRadioGroup>
    </div>
</template>
