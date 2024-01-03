<script setup lang="ts">
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
</script>

<template>
  <SharedUIParentCard title="UI・機能などのアイディアを募集中">
    <div class="px-10">
      <VCol cols="12">
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

        <VLabel class="mb-2 font-weight-medium">お問い合わせ詳細</VLabel>
        <VTextarea
          variant="outlined"
          type="email"
          placeholder="..."
          color="primary"
        >
        </VTextarea>

        <div class="d-flex justify-end">
          <VBtn color="primary" @click="clickSubmit" class="" flat>送信</VBtn>
        </div>

        <!-- Feature -->
        <div v-if="submitState">hello</div>
      </VCol>
    </div>
  </SharedUIParentCard>
</template>
