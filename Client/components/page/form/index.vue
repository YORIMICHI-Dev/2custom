<script setup lang="ts">
const router = useRouter();
const submitState = ref(false);
const clickSubmit = () => {
  submitState.value = !submitState.value;
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
          <VTextField
            variant="outlined"
            type="text"
            placeholder="User ID"
            color="primary"
          >
            <template v-slot:prepend-inner>
              <UserIcon
                stroke-width="1.5"
                size="22"
                class="text-medium-emphasis"
              />
            </template>
          </VTextField>

          <!-- Email -->
          <VLabel class="mb-2 font-weight-medium">メールアドレス</VLabel>
          <VTextField
            variant="outlined"
            type="email"
            placeholder="Email"
            color="primary"
          >
            <template v-slot:prepend-inner>
              <MailIcon
                stroke-width="1.5"
                size="22"
                class="text-medium-emphasis"
              />
            </template>
          </VTextField>

          <!-- Content -->
          <VLabel class="mb-2 font-weight-medium">お問い合わせ項目</VLabel>
          <v-select :items="formContents" label="Content">
            <template v-slot:prepend-inner>
              <Message2Icon
                stroke-width="1.5"
                size="22"
                class="text-medium-emphasis"
              />
            </template>
          </v-select>

          <!-- Detail -->
          <VLabel class="mb-2 font-weight-medium">お問い合わせ詳細</VLabel>
          <VTextarea
            variant="outlined"
            type="email"
            placeholder="..."
            color="primary"
          >
          </VTextarea>
        </VCardItem>
      </VCard>
    </VCol>

    <!-- Submit -->
    <VCol cols="12" md="9">
      <div class="d-flex justify-end mt-5">
        <VBtn
          size="large"
          color="primary"
          class="mr-4"
          flat
          @click="clickSubmit"
          >Send</VBtn
        >
        <VBtn
          size="large"
          class="bg-lighterror text-error"
          flat
          @click="clickCancelSetting"
          >Cancel</VBtn
        >
      </div>
    </VCol>
  </VRow>
</template>
