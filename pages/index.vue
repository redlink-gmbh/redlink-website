<template>
  <main-content :site-image-url="heroImage.imgUrl"
                :site-image-header="heroImage.header"
                :site-image-description="heroImage.description"
                :site-image-action="heroImage.action"
                :site-image-action-url="heroImage.actionUrl">
    <div style="margin-top: 60px" class="content">
      <p>{{ $t(`home.what`) }}</p>
    </div>
    <img class="content-img" src="/img/what.png">
    <div class="content">
      <p>{{ $t(`home.workflow`) }}</p>
    </div>
    <img class="content-img" src="/img/workflow.png">
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
        action: "Let's talk",
        actionUrl: "/contact",
      }
    }
  },
  async asyncData({ $content, error }) {
    let siteInfo;
    let posts;
    try {
      siteInfo = await $content('site/info').fetch();
    } catch (e) {
      error({ message: 'Site info not found' });
    }
    return { posts, siteInfo };
  }
};
</script>
<style lang="postcss" scoped>
.content {
  display: flex;
  justify-content: center;
  font-size:20px;
  font-weight: normal;
}

.content p {
  width: 100%;
}

.content-img {
  width: 90%;
  margin: 0 auto;
}
</style>
