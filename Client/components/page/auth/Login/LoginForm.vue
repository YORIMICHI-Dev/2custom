<script setup lang="ts">
const router = useRouter();

// email, password validation
const email = ref('');
const password = ref('');
const emailRules = ref([
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
]);
const passwordRules = ref([
  (v: string) => !!v || 'Password is required',
  (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters',
]);

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
    <VTextField
      v-model="password"
      :rules="passwordRules"
      required
      hide-details="auto"
      type="password"
      class="pwdInput"
    />

    <!-- パスワード忘れ -->
    <div class="d-flex flex-wrap align-center my-5">
      <div class="ml-sm-auto">
        <NuxtLink to="" class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
          >パスワードを忘れましたか?</NuxtLink
        >
      </div>
    </div>

    <!-- ログインボタン -->
    <VBtn size="large" color="primary" :disabled="!email || !password" block type="submit" flat>ログイン</VBtn>
  </form>

  <!-- アカウント作成 -->
  <h6 class="text-h6 text-medium-emphasis d-flex justify-center align-center mt-5">
    New to まとめカスタマイズ?
    <VBtn class="text-primary text-body-1 opacity-1 pl-2" height="auto" to="/auth/register" variant="plain"
      >アカウント作成</VBtn
    >
  </h6>
</template>
