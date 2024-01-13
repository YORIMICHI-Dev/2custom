<script setup lang="ts"></script>

<template>
  <div class="authentication">
    <VContainer fluid class="pa-3">
      <VRow class="h-100vh d-flex justify-center align-center">
        <VCol cols="12" class="d-flex align-center">
          <VCard rounded="md" elevation="10" class="px-sm-1 px-0 mx-auto" max-width="450">
            <VCardItem class="pa-sm-8">
              <PageAuthLoginForm />
            </VCardItem>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>
