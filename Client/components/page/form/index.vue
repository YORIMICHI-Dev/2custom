<script setup lang="ts">
import { BulbIcon } from 'vue-tabler-icons';
const submitState = ref(false);
const clickSubmit = () => {
  submitState.value = !submitState.value;
};

// Form Contents
const formContents = [
  '見た目・UIについて',
  '使用感・不便な点について',
  '追加したい機能について',
  '追加したいまとめサイトについて',
];

const icon = BulbIcon;
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

          <!-- Submit -->
          <div class="d-flex justify-end">
            <VBtn color="primary" @click="clickSubmit" class="" flat>送信</VBtn>
          </div>

          <!-- Feature -->
          <div v-if="submitState">hello</div>
        </VCardItem>
      </VCard>
    </VCol>
  </VRow>
</template>
