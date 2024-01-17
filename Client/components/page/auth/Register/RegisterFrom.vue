<script setup lang="ts">
import * as yup from "yup"
const router = useRouter();

// email, password validation
const schema = yup.object({
  email: yup.string().required().email("有効なメールアドレスを入力してください"),
  password: yup.string().required().min(5, "パスワードは5文字以上入力してください"),
  passwordConfirm: yup.string()
    .required()
    .oneOf([yup.ref('password')], "パスワードが一致しません"),
})
const { errors, validate } = useForm({ validationSchema: schema})
const { value: email } = useField("email")
const { value: password } = useField("password")
const { value: passwordConfirm } = useField("passwordConfirm")

// Register API
const clickRegister = async() => {
  const valid = await validate()
  if (valid) {
    const {data, error} = await register({email: email.value as string, password: password.value as string, passwordConfirm: passwordConfirm.value as string})
    if (data.value) {
        const loginToken = useCookie<string|null>("token")
        loginToken.value = data.value.token
        router.push('/custom/select');
      }
    else if (error.value) {
      console.log(error.value)
    }
}}
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
    <VLabel class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">パスワード</VLabel>
    <VTextField v-model="password" required hide-details="auto" type="password" />
    <p class="text-error text-13 ml-5 mb-5">{{ errors.password }}</p>

    <!-- パスワード確認 -->
    <VLabel class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">パスワード確認</VLabel>
    <VTextField
      v-model="passwordConfirm"
      required
      hide-details="auto"
      type="password"
    />
    <p class="text-error text-13 ml-5 mb-5">{{ errors.passwordConfirm }}</p>

    <!-- ログインボタン -->
    <form @submit.prevent="clickRegister">
      <VBtn size="large" color="primary" :disabled="!email || !password" block type="submit" flat>登録</VBtn>
    </form>
  </div>

  <!-- アカウント作成 -->
  <h6 class="text-h6 text-medium-emphasis d-flex justify-center align-center mt-5">
    アカウントをお持ちですか?
    <VBtn class="text-primary text-body-1 opacity-1 pl-2" height="auto" to="/auth/login" variant="plain">ログイン</VBtn>
  </h6>
</template>
