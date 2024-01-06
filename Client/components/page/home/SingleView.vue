<script setup lang="ts">
const roleCookie = useCookie('role', {
  default: () => 'visitor',
  sameSite: 'lax',
});
const getSites = () => {
  if (roleCookie.value === 'visitor') {
  } else {
  }
};
getSites();
const rssSites = [
  {
    name: 'キニ速',
    url: 'http://blog.livedoor.jp/kinisoku/',
    articles: [
      {
        title: 'えちゃんえちゃんえちゃん',
        time: '2023/11/01 15:00',
        url: '/',
      },
      {
        title: 'えちゃんえちゃんえちゃん',
        time: '2023/11/01 15:00',
        url: '/',
      },
      {
        title: 'えちゃんえちゃんえちゃん',
        time: '2023/11/01 15:00',
        url: '/',
      },
    ],
  },
  {
    name: '資格ちゃんねる',
    url: 'http://shikaku2ch.doorblog.jp/',
    articles: [
      {
        title: 'えちゃんえちゃんえちゃん',
        time: '2023/11/01 15:00',
        url: '/',
      },
      {
        title: 'えちゃんえちゃんえちゃん',
        time: '2023/11/01 15:00',
        url: '/',
      },
      {
        title: 'えちゃんえちゃんえちゃん',
        time: '2023/11/01 15:00',
        url: '/',
      },
    ],
  },
];
</script>

<template>
  <div v-for="site in rssSites" :key="site.name" class="mb-4">
    <!-- Title -->
    <div class="d-flex align-center">
      <img
        height="16"
        class="mr-3"
        :src="'http://www.google.com/s2/favicons?domain=' + site.url"
      />
      <NuxtLink :to="site.url" target="blank">
        <VHover v-slot="{ isHovering, props }">
          <h5
            class="text-h5"
            v-bind="props"
            v-bind:class="{ 'text-primary': isHovering }"
          >
            {{ site.name }}
          </h5>
        </VHover>
      </NuxtLink>
    </div>

    <VList class="p-0" lines="one">
      <VListItem class="" v-for="article in site.articles" :key="article.title">
        <span class="text-body-2 text-grey300">{{ article.time }}</span>
        <NuxtLink :to="article.url" class="" target="blank">
          <VHover v-slot="{ isHovering, props }">
            <h5
              class="text-subtitle-1 font-weight-medium mt-2"
              v-bind="props"
              v-bind:class="{
                'text-primary cursor-pointer text-decoration-underline':
                  isHovering,
              }"
            >
              {{ article.title }}
            </h5>
          </VHover>
        </NuxtLink>
        <VDivider class="mt-2" />
      </VListItem>
    </VList>
  </div>
</template>
