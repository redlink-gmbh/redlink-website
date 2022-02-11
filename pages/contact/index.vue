<template>

  <main-content class="bg-gray-50" :site-image-url="heroImage.imgUrl"
                :site-image-header="heroImage.header">
    <div class="relative pt-1 pb-20 px-4 sm:px-6 lg:pt-1 lg:pb-28 lg:px-8">
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"><nuxt-content :document="contact" /></p>
        </div>
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-shrink-0">
                <svg class="h-48 w-full object-cover" viewBox="0 0 100 100" >
                  <path fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M89.111,68.484c0,1.769-1.434,3.202-3.202,3.202H13.096c-1.768,0-3.202-1.434-3.202-3.202V24.081c0-1.768,1.434-3.202,3.202-3.202  h72.813c1.768,0,3.202,1.434,3.202,3.202V68.484z"/><polyline fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="  43.658,72.754 38.074,85.463 58.917,85.463 53.991,72.754 "/><line fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="9.894" y1="61.93" x2="89.111" y2="61.93"/><circle fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="49.07" cy="34.646" r="8.13"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="49.069" y1="53.595" x2="49.069" y2="45.372"/><path fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M43.48,46.791l-4.034-1.437c-2.879,2.618-4.686,6.394-4.686,10.591c0,0.604,0.038,1.199,0.11,1.785h28.398  c0.074-0.585,0.111-1.181,0.111-1.785c0-4.2-1.808-7.976-4.689-10.593l-4.018,1.693"/><path fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M54.966,46.954c-6.293-3.56-11.796,0.002-11.796,0.002l5.851,7.47L54.966,46.954z"/><rect x="13.608" y="25.194" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="18.802" height="18.802"/><circle fill="none" stroke="#000000" stroke-miterlimit="10" cx="23.01" cy="31.04" r="3.865"/><line fill="none" stroke="#000000" stroke-miterlimit="10" x1="23.009" y1="40.05" x2="23.009" y2="36.141"/><path fill="none" stroke="#000000" stroke-miterlimit="10" d="M20.352,36.816l-1.918-0.684c-1.368,1.245-2.228,3.04-2.228,5.036  c0,0.287,0.018,0.57,0.052,0.848h13.503c0.034-0.278,0.052-0.562,0.052-0.848c0-1.997-0.859-3.792-2.229-5.038l-1.911,0.805"/><path fill="none" stroke="#000000" stroke-miterlimit="10" d="M25.813,36.893c-2.993-1.693-5.609,0.001-5.609,0.001l2.781,3.552  L25.813,36.893z"/><circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="49.536" cy="16.732" r="3.763"/><circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="49.536" cy="16.732" r="1.303"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="15.205" y1="68.298" x2="15.205" y2="65.197"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="27.205" y1="68.298" x2="27.205" y2="65.197"/><line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="21.205" y1="68.298" x2="21.205" y2="65.197"/>
                </svg>
              </div>
              <div class="flex-1">
                <a href="#" class="block mt-2">
                  <p class="text-xl font-semibold text-gray-900">Schedule a Call</p>
                  <p class="mt-3 text-base text-gray-500">Schedule a Microsoft Teams call.</p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <span class="sr-only">Roel Aufderehar</span>
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#" class="hover:underline"> Thomas Kurz </a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
<!--                    <span aria-hidden="true"> &middot; </span>-->
                    <span> 30 min call </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-shrink-0">
                <svg class="h-48 w-full object-cover" viewBox="0 0 100 100">
                  <g transform="translate(0,-952.36218)">
                    <path style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:#000000;enable-background:accumulate;" d="m 16.999997,972.3622 c -4.934069,0 -8.9999995,4.0659 -8.9999995,9 l 0,42 c 0,4.9341 4.0659305,9 8.9999995,9 l 66.000001,0 c 4.934069,0 9.000004,-4.0659 9.000004,-9 l 0,-42 c 0,-4.9341 -4.065935,-9 -9.000004,-9 l -66.000001,0 z m 0.5,6 64.968751,0 -30.437501,28.0938 c -1.42593,1.3162 -2.70232,1.3154 -4.125,0 l -30.40625,-28.0938 z m -3.5,4.9062 29.8125,27.5938 c 3.440621,3.1813 8.87153,3.1764 12.3125,0 l 29.875001,-27.5938 0,40.0938 c 0,1.7139 -1.286151,3 -3,3 l -66.000001,0 c -1.71385,0 -3,-1.2861 -3,-3 l 0,-40.0938 z" fill="#000000" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/>
                  </g>
                </svg>
              </div>
              <div class="flex-1">
                <a href="#" class="block mt-2">
                  <p class="text-xl font-semibold text-gray-900">Email us</p>
                  <p class="mt-3 text-base text-gray-500">Send us an email with your question and we will get back to you.</p>
                </a>
              </div>

              <div class="mt-6 flex items-center">
                <div class="flex -space-x-2 relative z-0 overflow-hidden">
                  <img class="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  <img class="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  <img class="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="">
                  <img class="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-shrink-0">
                <iframe class="h-48 w-full object-cover" style="border:0" loading="lazy" allowfullscreen
                        src="https://www.google.com/maps/embed/v1/place?q=Franz-Josef-Stra%C3%9Fe%2015%2C%20Salzburg%2C%20Austria&key=AIzaSyBRw4GQ0f1JlFX-f3Iil_kEpWrHVjp8W_4">
                </iframe>
              </div>
              <div class="flex-1">
                <a href="#" class="block mt-2">
                  <p class="text-xl font-semibold text-gray-900">Visit us</p>
                  <p class="mt-3 text-base text-gray-500">Visit us in our office in Salzburg.</p>
                </a>
              </div>

              <div class="mt-6 flex items-center">
                <div class="mt-6 flex items-center">
                  <div class="flex -space-x-2 relative z-0 overflow-hidden">
                    <img class="relative z-60 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    <img class="relative z-50 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    <img class="relative z-40 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    <img class="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    <img class="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    <img class="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="">
                    <img class="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main-content>
</template>

<script>
export default {
  async asyncData({ $content, error, i18n }) {
    let contact;
    try {
      contact = await $content('contact').where({ slug: { $contains: `.${i18n.locale || 'de'}` } }).fetch();
      if (contact?.length === 1) {
        return {
          heroImage: {
            imgUrl: '/img/office.jpeg',
            header: contact[0].title,
          },
          contact: contact[0]
        };
      }
    } catch (e) {
      error({ message: 'Contact not found' });
    }
    error({ message: 'Contact not found' });
  }
};
</script>
