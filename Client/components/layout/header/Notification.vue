<script setup lang="ts">
const notifications = ['お知らせはありません'];
</script>
<template>
  <!-- ---------------------------------------------- -->
  <!-- notifications DD -->
  <!-- ---------------------------------------------- -->
  <VMenu :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <VBtn icon variant="text" color="primary" class="custom-hover-primary" v-bind="props">
        <VBadge dot color="primary">
          <BellRingingIcon stroke-width="1.5" size="22" />
        </VBadge>
      </VBtn>
    </template>
    <VSheet rounded="md" width="360" elevation="10">
      <div class="px-8 pb-4 pt-6">
        <div class="d-flex align-center justify-space-between">
          <h6 class="text-h5">お知らせ</h6>
          <!-- <v-chip color="primary" variant="flat" size="small" class="text-white">5 New</v-chip> -->
        </div>
      </div>
      <perfect-scrollbar style="height: 200px">
        <VList class="py-0 theme-list" lines="two">
          <VListItem v-for="item in notifications" :key="item" :value="item" color="primary" class="py-4 px-8">
            <VListItemTitle>{{ item }}</VListItemTitle>
            <VListItemSubtitle>{{ item }}</VListItemSubtitle>
          </VListItem>
          <VDivider></VDivider>
        </VList>
      </perfect-scrollbar>
      <div class="py-4 px-6 text-center">
        <VBtn color="primary" variant="outlined" to="/notification" block>お知らせ・更新履歴</VBtn>
      </div>
    </VSheet>
  </VMenu>
</template>
