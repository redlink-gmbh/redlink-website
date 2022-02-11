<template>
  <main-content>
    <div class="bg-white">
      <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12">
        <div class="space-y-12">
          <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl"></h2>
            <p class="text-xl text-gray-500"></p>
          </div>
          <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            <li v-for="person in team" :key="person.name">
              <div class="space-y-4">
                <div class="employee-image aspect-w-3 aspect-h-2 relative">
                  <img class="object-cover shadow-lg rounded-lg" :src="person.imageUrl" alt="" />
                  <div v-if="person.quote" class="overlay-cite hidden absolute w-full h-full top-0 flex items-center justify-center text-white p-4">
                    <svg class="absolute transform -translate-x-24 -translate-y-24 h-8 w-8 text-white opacity-25 z-0" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <blockquote class="italic z-10 font-bold text-center">{{ person.quote }}</blockquote>
                    <svg class="absolute transform translate-x-24 translate-y-24 rotate-180 h-8 w-8 text-white opacity-25 z-0" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                </div>

                <div class="space-y-2">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3>{{ person.name }}</h3>
                    <p class="text-indigo-600">{{ person.role }}</p>
                  </div>
                  <ul role="list" class="flex space-x-5">
                    <li v-if="showSocialMediaLink(person.twitterUrl)">
                      <a target="_blank" :href="person.twitterUrl" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Twitter</span>
                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                    <li v-if="showSocialMediaLink(person.linkedinUrl)">
                      <a target="_blank" :href="person.linkedinUrl" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">LinkedIn</span>
                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main-content>
</template>
<script>
export default {
  async asyncData({ $content, error, i18n }) {
    let team;
    try {
      team = await $content('team').where({ slug: { $contains: `.${i18n.locale || 'de'}` } }).fetch();
      console.log(team)
      team.sort((a,b) => {
        const sa = a.sort || 1000;
        const sb = b.sort || 1000;
        return sa-sb;
      })
    } catch (e) {
      error({ message: 'News entries not found' });
    }
    return { team: team  };
  },
  methods: {
    showSocialMediaLink(data) {
      return data && data !== '#';
    }
  }
};
</script>
<style lang="postcss" scoped>
  .overlay-cite {
    background: rgba(0,0,0, 0.7);
  }
  .employee-image:hover .overlay-cite{
    display: flex;
  }
</style>
