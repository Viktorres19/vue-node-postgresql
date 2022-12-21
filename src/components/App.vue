<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="!loading && !error">Welcome</div>
    <div v-if="!loading && error">Something went terribly wrong!</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  name: 'App',
  data() {
    return {
      loading: true,
      error: false
    }
  },
  methods: {
    ...mapActions(['initialLoad'])
  },
  async mounted() {
    try {
      await this.initialLoad() //when application mounted start initial load
      this.loading = false
    } catch(err) {
      this.loading = false
      this.error = true
    }
  }
}
</script>

<style scoped>

</style>