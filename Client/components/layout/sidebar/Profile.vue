<script setup lang="ts"></script>

<template>
  <VSheet rounded="d" color="lightsecondary" class="px-4 py-3 ExtraBox">
    <div class="d-flex align-center hide-menu">
      <VAvatar size="40">
        <img src="/images/profile/user-7.jpg" alt="user" height="40" />
      </VAvatar>
      <div class="ml-4">
        <h6 class="mb-n1 text-h6 textPrimary">Daisuke</h6>
        <span class="text-subtitle-2 textSecondary">Engineer</span>
      </div>
      <div class="ml-auto">
        <VBtn
          variant="text"
          icon
          rounded="md"
          color="primary"
          to="/dashboard/profile"
        >
          <PowerIcon />
          <VTooltip activator="parent" location="top">Profile</VTooltip>
        </VBtn>
      </div>
    </div>
  </VSheet>
</template>

<style lang="scss">
.ExtraBox {
  position: relative;
  overflow: hidden;
}
.line-height-none {
  line-height: normal;
}
</style>