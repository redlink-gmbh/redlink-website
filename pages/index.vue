<template>
  <main-content :site-image-url="heroImage.imgUrl"
                :site-image-header="heroImage.header"
                :site-image-description="heroImage.description"
                :site-image-action="heroImage.action">
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
  data: () => {
    return {
      heroImage: {
        imgUrl: '/img/office.jpeg',
        header: 'Data that matters',
        description: 'Die Firma Redlink packt aktuelle Spitzentechnologien aus den Bereichen Information Discovery, Natural Language Processing und Artificial Intelligence in wartbare und langlebige Software. Dabei entstehen sowohl maßgeschneiderte Lösungen für nationale und internationale Kunden als auch universell einsetzbare Produkte.',
        action: "Let's talk"
      }
    }
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
