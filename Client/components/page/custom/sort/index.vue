<script setup lang="ts">
// feature fetch from db
const sites = useSitesStore();
</script>

<template>
  <VRow class="justify-center ma-n2">
    <VCol cols="12" md="9">
      <VCard elevation="9" class="pa-6 border">
        <VTable class="month-table">
          <!-- Columns -->
          <thead>
            <tr>
              <th class="text-h5 text-no-wrap w-10"></th>
              <th class="text-h5 text-no-wrap w-50">サイト名</th>
              <th class="text-h5 text-no-wrap w-30">カテゴリー</th>
              <th class="text-h5 text-no-wrap w-10"></th>
            </tr>
          </thead>
          <!-- Contents -->
          <draggable
            class="dragArea list-group cursor-move"
            :list="sites.siteList"
            :animation="300"
            ghost-class="ghost-card"
            group="sites"
            tag="tbody"
          >
            <transition-group>
              <tr
                v-for="item in sites.siteList"
                :key="item.name"
                class="month-item"
                draggable
              >
                <td>
                  <VBtn size="30" icon variant="flat">
                    <BaselineDensityMediumIcon size="18" class="cursor-move" />
                  </VBtn>
                </td>
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
                  <VBtn size="30" icon variant="flat" class="bg-error">
                    <TrashIcon size="18" />
                    <VTooltip activator="parent" location="top">削除</VTooltip>
                  </VBtn>
                </td>
              </tr>
            </transition-group>
          </draggable>
        </VTable>
      </VCard>
    </VCol>
  </VRow>
</template>

<style>
th.w-20 {
  width: 20%;
}

th.w-30 {
  width: 30%;
}

th.w-40 {
  width: 40%;
}

th.w-50 {
  width: 50%;
}
</style>
