<script setup lang="ts">
import { Logout2Icon } from 'vue-tabler-icons';
</script>

<template>
  <VSheet rounded="d" color="lightsecondary" class="px-4 py-3 ExtraBox">
    <div class="d-flex align-center hide-menu">
      <VAvatar size="40">
        <img src="/images/user-7.jpg" alt="user" height="40" />
      </VAvatar>
      <div class="ml-4">
        <h6 class="mb-n1 text-h6 textPrimary">Anyname</h6>
        <span class="text-subtitle-2 textSecondary">Anyrole</span>
      </div>
      <div class="ml-auto">
        <VBtn
          variant="text"
          icon
          rounded="md"
          color="primary"
          to="/dashboard/profile"
        >
          <Logout2Icon />
          <VTooltip activator="parent" location="top">ログアウト</VTooltip>
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
