<script setup lang="ts">
import * as yup from 'yup';
import { successFormToast } from '~/theme/toast';
const router = useRouter();
const toast = useToast();
const submitting = ref<boolean>(false);

// email, password validation
const schema = yup.object({
  email: yup.string().required('メールアドレスを入力してください').email('有効なメールアドレスを入力してください'),
  content: yup.string().required('お問い合わせ項目を選択してください'),
  detail: yup.string().required('お問い合わせ内容を入力してください').min(1, 'お問い合わせ内容を入力してください'),
});
const { errors, validate } = useForm({ validationSchema: schema });
const { value: email } = useField('email');
const { value: content } = useField('content');
const { value: detail } = useField('detail');

const clickSubmit = async () => {
  submitting.value = true;
  const { valid } = await validate();

  if (valid) {
    // const { data, error } = await login({ email: email.value as string, content: content.value as string, detail: detail.value as string });
    // if (data.value) {
    //   // anything
    // } else if (error.value) {
    //   console.log(error.value);
    // }
    toast.add(successFormToast);
  }
  submitting.value = false;
};

const clickCancelSetting = () => {
  router.push('/');
};

// Form Contents
const formContents = [
  '見た目・UIについて',
  '使用感・不便な点について',
  '追加したい機能について',
  '追加したいまとめサイトについて',
];
</script>

<template>
  <VRow class="justify-center ma-n2">
    <VCol cols="12" md="9">
      <VCard elevation="10">
        <VCardItem>
          <div class="mb-3">
            <h3 class="text-h3 mb-2">問い合わせ</h3>
            <div class="d-flex gap-2">
              <BulbIcon width="20" />
              <h5 class="text-body-1">見た目・機能についてアイディア募集中</h5>
            </div>
          </div>

          <!-- User ID -->
          <VLabel class="mb-2 font-weight-medium">ユーザーID</VLabel>
          <VTextField variant="outlined" type="text" placeholder="User ID" color="primary">
            <template v-slot:prepend-inner>
              <UserIcon stroke-width="1.5" size="22" class="text-medium-emphasis" />
            </template>
          </VTextField>

          <!-- Email -->
          <VLabel class="mb-2 font-weight-medium">メールアドレス</VLabel>
          <VTextField v-model="email" variant="outlined" type="email" placeholder="Email" color="primary">
            <template v-slot:prepend-inner>
              <MailIcon stroke-width="1.5" size="22" class="text-medium-emphasis" />
            </template>
          </VTextField>
          <p class="text-error text-13 ml-5 mb-5">{{ errors.email }}</p>

          <!-- Content -->
          <VLabel class="mb-2 font-weight-medium">お問い合わせ項目</VLabel>
          <VSelect v-model="content as string" :items="formContents" label="Content">
            <template v-slot:prepend-inner>
              <Message2Icon stroke-width="1.5" size="22" class="text-medium-emphasis" />
            </template>
          </VSelect>
          <p class="text-error text-13 ml-5 mb-5">{{ errors.content }}</p>

          <!-- Detail -->
          <VLabel class="mb-2 font-weight-medium">お問い合わせ詳細</VLabel>
          <VTextarea v-model="detail" variant="outlined" type="email" placeholder="..." color="primary"> </VTextarea>
          <p class="text-error text-13 ml-5 mb-5">{{ errors.detail }}</p>
        </VCardItem>
      </VCard>

      <!-- Submit -->
      <div class="d-flex justify-end mt-5">
        <VBtn
          size="large"
          color="primary"
          class="mr-4"
          flat
          :disabled="submitting"
          :loading="submitting"
          @click="clickSubmit"
          >Send</VBtn
        >
        <!-- Cancel Button -->
        <VBtn size="large" class="bg-lighterror text-error" flat @click="clickCancelSetting">Cancel</VBtn>
      </div>
    </VCol>
  </VRow>
</template>
