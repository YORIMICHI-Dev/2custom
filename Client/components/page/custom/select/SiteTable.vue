<script setup lang="ts">
import { PlusIcon } from 'vue-tabler-icons';
import { selectSites } from './selectSites';
</script>

<template>
  <VTable class="month-table">
    <!-- Columns -->
    <thead>
      <tr>
        <th class="text-h5 text-no-wrap w-50">サイト名</th>
        <th class="text-h5 text-no-wrap w-30">カテゴリー</th>
        <th class="text-h5 text-no-wrap w-10"></th>
      </tr>
    </thead>
    <!-- Contents -->
    <tbody>
      <tr
        v-for="item in selectSites"
        :key="item.name"
        class="month-item"
        draggable
      >
        <td>
          <div class="d-flex align-center">
            <h6 class="text-h6 text-no-wrap">{{ item.name }}</h6>
          </div>
        </td>
        <td>
          <VChip
            rounded="lg"
            class="font-weight-bold py-4 px-3"
            :color="item.categoryColor"
            size="small"
          >
            {{ item.category }}
          </VChip>
        </td>
        <td>
          <VBtn size="30" icon variant="flat" class="bg-success">
            <PlusIcon size="18" />
            <VTooltip activator="parent" location="top">追加</VTooltip>
          </VBtn>
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
