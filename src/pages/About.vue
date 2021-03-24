<template>
  <Layout>
    <header>
      <div class="container py-16">
        <div class="space-y-8 max-w-prose">
          <h1 class="font-extrabold uppercase text-7xl">About</h1>

          <div>
            <p>
              I write my reviews here.
            </p>
          </div>
        </div>
      </div>
    </header>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About',
  },
  methods: {
    track() {
      this.$gtag.pageview({
        page_title: 'About',
        page_path: '/about/',
      })
    },
  },
}
</script>
