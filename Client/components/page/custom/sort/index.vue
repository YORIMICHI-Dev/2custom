<script setup lang="ts">
import { registerList } from './siteData';
</script>
<template>
  <VCard elevation="9" class="pa-6 border">
    <VTable class="month-table">
      <!-- Columns -->
      <thead>
        <tr>
          <th class="text-h5 text-no-wrap">サイト名</th>
          <th class="text-h5 text-no-wrap">URL</th>
          <th class="text-h5 text-no-wrap">カテゴリー</th>
          <th class="text-h5 text-no-wrap"></th>
        </tr>
      </thead>

      <!-- Contents -->
      <tbody>
        <tr v-for="item in registerList" :key="item.name" class="month-item">
          <td>
            <div class="d-flex align-center">
              <h6 class="text-h6 text-no-wrap">{{ item.name }}</h6>
            </div>
          </td>
          <td>
            <div class="text-subtitle-1 text-medium-emphasis text-no-wrap">
              {{ item.url }}
            </div>
          </td>
          <td>
            <VChip
              rounded="lg"
              class="font-weight-bold py-4 px-3"
              :color="item.statusColor"
              size="small"
            >
              {{ item.status }}
            </VChip>
          </td>
          <td>
            <VBtn size="30" icon variant="flat" class="bg-error">
              <TrashIcon size="18" />
            </VBtn>
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>
