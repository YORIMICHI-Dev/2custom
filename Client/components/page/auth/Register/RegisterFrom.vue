<script setup lang="ts">
const router = useRouter();

// email, password validation
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const emailRules = ref([
  (v: string) => !!v || 'メールアドレスを入力してください',
  (v: string) => /.+@.+\..+/.test(v) || '無効なメールアドレスです',
]);
const passwordRules = ref([(v: string) => !!v || 'パスワードを入力してください']);
const passwordConfirmRules = ref([(v: string) => v == password.value || 'パスワードが一致しません']);

const submitLogin = () => {
  router.push('/');
};
</script>

<template>
  <!-- Logo -->
  <div class="d-flex justify-center py-4 mb-5"><Logo /></div>
  <form @submit="submitLogin" class="mt-5">
    <!-- メールアドレス -->
    <VLabel class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">メールアドレス</VLabel>
    <VTextField v-model="email" :rules="emailRules" class="mb-8" required hide-details="auto" />

    <!-- パスワード -->
    <VLabel class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">パスワード</VLabel>
    <VTextField v-model="password" :rules="passwordRules" required hide-details="auto" type="password" class="mb-8" />

    <!-- パスワード確認 -->
    <VLabel class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">パスワード確認</VLabel>
    <VTextField
      v-model="passwordConfirm"
      :rules="passwordConfirmRules"
      required
      hide-details="auto"
      type="password"
      class="mb-8"
    />

    <!-- ログインボタン -->
    <VBtn class="mt-10" size="large" color="primary" :disabled="!email || !password" block type="submit" flat
      >登録</VBtn
    >
  </form>

  <!-- アカウント作成 -->
  <h6 class="text-h6 text-medium-emphasis d-flex justify-center align-center mt-5">
    アカウントをお持ちですか?
    <VBtn class="text-primary text-body-1 opacity-1 pl-2" height="auto" to="/auth/login" variant="plain">ログイン</VBtn>
  </h6>
</template>
