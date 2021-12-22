<template>
  <main-content>
    <h1>Company info</h1>
  </main-content>
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
    } catch (e) {
      error({ message: 'News entries not found' });
    }
    return { posts, siteInfos: siteInfo[0] };
  }
};
</script>
