<template>
<div id="app">
  <v-app-bar
    app
     color="primary"
     dark
    >
      <router-link to="/" tag="div">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      </router-link>
      <span>Умный Дом</span>
      <v-spacer></v-spacer>
      <router-link to="/camera" tag="v-btn">
        <v-btn
          flat
          value="feed"
        >
          <span>Камера</span>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/login" tag="v-btn">
        <v-btn
          flat
          value="feed"
        >
          <span>Войти</span>
        </v-btn>
      </router-link>
      <v-btn>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
</v-app-bar>
  <div class="router">
    <router-view/>
  </div>
</div>
</template>

<style lang="scss">
#app {
  font-family: 'Ubuntu', sans-serif;
}

.branding {
  flex: 1;
  text-align: left;
}

h1, h2 {
  text-align: center;
}

.router {
  margin-top: 100px;
}

.content {
  padding-top: 16px;
  padding-bottom: 16px;
  width: 1024px;
}

</style>

<script>
export default {
  name: 'App',
  data: () => ({
    title: "Vue Groups",
    authenticated: false
  }),
  methods: {
    login () {},
    async logout () {}
  },
}
</script>
