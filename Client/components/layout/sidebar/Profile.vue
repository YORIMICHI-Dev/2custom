<script setup lang="ts">
import { LoginIcon, Logout2Icon } from 'vue-tabler-icons';
const router = useRouter();
const tokenCookie = useCookie<string | null>('token');

const clickLogin = () => {
  router.push('/auth/login');
};

const clickLogout = () => {
  tokenCookie.value = null;
  router.push('/auth/login');
};
</script>

<template>
  <VSheet rounded="d" color="lightsecondary" class="px-4 py-2 rounded-lg ExtraBox">
    <div class="d-flex align-center hide-menu justify-space-between">
      <div class="">
        <h6 class="mb-n1 text-h6 textPrimary">Anyname</h6>
        <span class="text-subtitle-2 textSecondary">Anyrole</span>
      </div>

      <!-- Login -->
      <VAvatar
        v-if="!tokenCookie"
        variant="text"
        icon
        rounded="md"
        color="primary"
        width="20"
        class="cursor-pointer"
        @click="clickLogin"
      >
        <LoginIcon width="20" />
        <VTooltip activator="parent" location="top">ログイン</VTooltip>
      </VAvatar>

      <!-- Logout -->
      <VAvatar
        v-else
        variant="text"
        icon
        rounded="md"
        color="primary"
        width="20"
        class="cursor-pointer"
        @click="clickLogout"
      >
        <Logout2Icon width="20" />
        <VTooltip activator="parent" location="top">ログアウト</VTooltip>
      </VAvatar>
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
