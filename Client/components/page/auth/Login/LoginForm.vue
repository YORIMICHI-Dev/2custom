<script setup lang="ts">
import * as yup from 'yup';
const router = useRouter();
const toast = useToast()

// email, password validation
const schema = yup.object({
  email: yup.string().required().email('有効なメールアドレスを入力してください'),
  password: yup.string().required().min(5, 'パスワードは5文字以上入力してください'),
});
const { errors, validate } = useForm({ validationSchema: schema });
const { value: email } = useField('email');
const { value: password } = useField('password');

// login API
const clickLogin = async () => {
  const {valid} = await validate();
  if (valid) {
    const { data, error } = await login({ email: email.value as string, password: password.value as string });
    if (data.value) {
      // jwt token設定
      const loginToken = useCookie<string | null>('token', {
        sameSite: 'lax',
        secure: true,
      });
      loginToken.value = data.value.token;

      toast.add({title: "ログインしました", timeout: 3000})
      router.push('/');
    } else if (error.value) {
      console.log(error.value);
    }
  }
};
</script>

<template>
  <!-- Logo -->
  <div class="d-flex justify-center py-4 mb-5"><Logo /></div>
  <div class="mt-5">
    <!-- メールアドレス -->
    <VLabel class="text-subtitle-1 font-weight-semibold mb-2 text-lightText">メールアドレス</VLabel>
    <VTextField v-model="email" required hide-details="auto" />
    <p class="text-error text-13 ml-5 mb-5">{{ errors.email }}</p>

    <!-- パスワード -->
    <VLabel class="text-subtitle-1 font-weight-semibold mb-2 text-lightText">パスワード</VLabel>
    <VTextField v-model="password" required hide-details="auto" type="password" class="pwdInput" />
    <p class="text-error text-13 ml-5">{{ errors.password }}</p>

    <!-- パスワード忘れ -->
    <div class="d-flex flex-wrap align-center my-5">
      <div class="ml-sm-auto">
        <NuxtLink to="" class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
          >パスワードを忘れましたか?</NuxtLink
        >
      </div>
    </div>

    <!-- ログインボタン -->
    <form @submit.prevent="clickLogin">
      <VBtn size="large" color="primary" :disabled="!email || !password" block type="submit" flat>ログイン</VBtn>
    </form>
  </div>

  <!-- アカウント作成 -->
  <h6 class="text-h6 text-medium-emphasis d-flex justify-center align-center mt-5">
    New to まとめカスタマイズ?
    <VBtn class="text-primary text-body-1 opacity-1 pl-2" height="auto" to="/auth/register" variant="plain"
      >アカウント作成</VBtn
    >
  </h6>
</template>
