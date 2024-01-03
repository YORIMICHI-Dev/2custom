<script setup lang="ts">
import type breadcrumbType from "@/types/breadcrumb"
const props = defineProps<{
  title: string;
  breadcrumbs: breadcrumb[];
}>();
const { title, breadcrumbs } = props;
</script>

<template>
  <VCard class="bg-lightprimary mb-8" rounded="md">
    <div class="px-8 py-8 py-lg-0">
      <div class="d-flex justify-space-between">
        <div class="d-flex py-0 align-center">
          <!-- Breadcrumbs -->
          <div>
            <h3 class="text-h3 mb-2">{{ title }}</h3>
            <v-breadcrumbs
              :items="breadcrumbs"
              class="text-h6 font-weight-medium pa-0 ml-n1"
            >
              <template v-slot:divider>
                <div class="d-flex align-center text-h3 mt-n4">.</div>
              </template>
              <template v-slot:title="{ item }">
                <h6 class="text-medium-emphasis text-subtitle-1">
                  {{ item.text }}
                </h6>
              </template>
            </v-breadcrumbs>
          </div>
        </div>
        <div class="d-none py-0 d-lg-block overflow-hidden">
          <div class="mb-n16 mt-3">
            <img src="/images/breadcrumb/ChatBc.png" alt="breadcrumb" />
          </div>
        </div>
      </div>
    </div>
  </VCard>
</template>

<style lang="scss">
.page-breadcrumb {
  .v-toolbar {
    background: transparent;
  }
}
</style>