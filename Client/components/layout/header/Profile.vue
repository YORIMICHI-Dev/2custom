<script setup lang="ts"></script>

<template>
  <VMenu :close-on-content-click="false">
    <!-- Avator button -->
    <template v-slot:activator="{ props }">
      <VBtn class="custom-hover-primary" variant="text" v-bind="props" icon>
        <VAvatar size="35">
          <img src="/images/user-7.jpg" width="35" alt="profile" />
        </VAvatar>
      </VBtn>
    </template>

    <!-- Profile sheet -->
    <VSheet rounded="md" width="360" elevation="10">
      <!-- Profile -->
      <div class="px-8 pt-6">
        <div class="d-flex align-center mt-4 pb-6">
          <VAvatar size="40">
            <img src="/images/user-7.jpg" width="40" alt="profile" />
          </VAvatar>
          <div class="ml-3">
            <h6 class="text-h6 mb-n1">Any user</h6>
            <span class="text-subtitle-1 font-weight-regular textSecondary">Any role</span>
          </div>
        </div>
        <VDivider />
      </div>
    </VSheet>
  </VMenu>
</template>
