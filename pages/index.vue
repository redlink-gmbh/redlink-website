<template>
  <div>
    <img class="cover-image" :src="'/img/etikett.jpeg'" />
    <main>
      <section class="self-center flex flex-col flex-1 items-center justify-center">
        <h1 class="title text-center">{{ siteInfos.sitename || 'Weinmacher Nick' }}</h1>
        <h2 class="subtitle text-center">{{ $t('home.wineKirchbichl') || siteInfos.sitedescription }}</h2>
      </section>

      <section class="mt-8">
        <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">{{ $t('home.latestNews') }}</h3>
        <posts post-type="news" :amount="1" />
      </section>
    </main>
  </div>
</template>
<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    };
  },
  async asyncData({ $content, error }) {
    let siteInfo;
    let posts;
    try {
      siteInfo = await $content('site').fetch();
      posts = await $content('news').fetch();
    } catch (e) {
      error({ message: 'News entries not found' });
    }
    return { posts, siteInfos: siteInfo[0] };
  }
};
</script>
