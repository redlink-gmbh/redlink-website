<template>
  <div class="header" id="header">
    <div>
      <nuxt-link :to="localePath('/')">
        <img class="logo" src="/logo-white.png" alt="Redlink GmbH" />
      </nuxt-link>
    </div>
    <div class="links">
      <nuxt-link
          class="link"
          @click="open = false"
          v-for="route of routes"
          :key="route.keyName"
          :to="localePath(route.route)"
      >{{ $t(`header.${route.keyName}`) }}</nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data: () => {
    return {
      open: false,
      routes: [
        { keyName: 'about', route: '/' },
        { keyName: 'team', route: '/team' },
        { keyName: 'jobs', route: '/jobs' },
        { keyName: 'blog', route: '/blog' }
      ]
    };
  },
  mounted:() => {
    var scrollpos = window.scrollY;
    var header = document.getElementById("header");

    function add_class_on_scroll() {
      header.classList.add("header-fade-in");
    }

    function remove_class_on_scroll() {
      header.classList.remove("header-fade-in");
    }

    window.addEventListener('scroll', function(){
      //Here you forgot to update the value
      scrollpos = window.scrollY;

      if(scrollpos > 20){
        add_class_on_scroll();
      }
      else {
        remove_class_on_scroll();
      }
    });
  }
};
</script>

<style lang="postcss" scoped>
.header {
  z-index: 10;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: transparent;
  padding: 0 50px;
  transition: background-color 0.5s ease;
}
.header-fade-in {
  background-color: black;
  transition: background-color 0.5s ease;
}
.logo {
  height: 60px;
  margin-top: 10px;
}

.links {
  padding-top: 30px;
}

.link {
  font-weight: bold;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  height: 40px;
  border: 2px solid white;
  margin-left: 10px;

  &:hover {
    background-color: white;
    color: black;
   }
}
</style>
