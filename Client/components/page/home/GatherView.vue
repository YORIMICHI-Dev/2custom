<script setup lang="ts">
const gatherSites = [
  {
    title: 'テストテストテストテストテスト',
    time: '2023/11/01 15:00',
    url: 'http://blog.livedoor.jp/kinisoku/',
    siteName: 'キニ速',
    siteUrl: '/',
  },
  {
    title: 'テストテストテストテストテスト',
    time: '2023/11/01 15:00',
    url: 'http://blog.livedoor.jp/kinisoku/',
    siteName: 'キニ速',
    siteUrl: '/',
  },
  {
    title: 'テストテストテストテストテスト',
    time: '2023/11/01 15:00',
    url: 'http://blog.livedoor.jp/kinisoku/',
    siteName: 'キニ速',
    siteUrl: '/',
  },
  {
    title: 'テストテストテストテストテスト',
    time: '2023/11/01 15:00',
    url: 'http://blog.livedoor.jp/kinisoku/',
    siteName: 'キニ速',
  },
  {
    title: 'テストテストテストテストテスト',
    time: '2023/11/01 15:00',
    url: 'http://blog.livedoor.jp/kinisoku/',
    siteName: 'キニ速',
    siteUrl: '/',
  },
  {
    title: 'テストテストテストテストテスト',
    time: '2023/11/01 15:00',
    url: 'http://blog.livedoor.jp/kinisoku/',
    siteName: 'キニ速',
    siteUrl: '/',
  },
];
</script>

<template>
  <h6 class="text-h6 py-2 px-4 bg-lightprimary">新着順</h6>
  <!-- List -->
  <ul>
    <li
      class="border border-grey300 pa-2 px-4"
      v-for="(site, num) in gatherSites"
      :key="site.title"
    >
      <div class="d-flex align-center justify-space-between">
        <div>
          <img
            height="16"
            class="mr-3"
            :src="'http://www.google.com/s2/favicons?domain=' + site.url"
          />
          <VHover v-slot="{ isHovering, props }">
            <NuxtLink :to="site.url" class="" target="blank">
              <span
                class="text-subtitle-1 mt-2 font-weight-medium"
                v-bind="props"
                v-bind:class="{
                  'text-primary cursor-pointer text-decoration-underline':
                    isHovering,
                }"
              >
                {{ site.title }}
              </span>
            </NuxtLink>
          </VHover>
        </div>
        <div>
          <VHover v-slot="{ isHovering, props }">
            <NuxtLink :to="site.siteUrl" class="" target="blank">
              <span
                class="text-subtitle-2 text-grey300 mt-2"
                v-bind="props"
                v-bind:class="{
                  'text-primary cursor-pointer text-decoration-underline':
                    isHovering,
                }"
              >
                {{ site.siteName }}
              </span>
            </NuxtLink>
          </VHover>
        </div>
      </div>
    </li>
  </ul>
</template>

<style>
ul {
  list-style: none;
}
</style>
