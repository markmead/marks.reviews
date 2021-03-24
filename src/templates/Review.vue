<template>
  <Layout>
    <article>
      <div class="container pt-16 space-y-12">
        <header class="items-center justify-between lg:flex">
          <h1 class="font-extrabold uppercase max-w-prose text-7xl">{{ $page.review.title }}</h1>

          <div class="mt-4 font-mono font-bold tracking-widest uppercase lg:mt-0">
            <span>Reviewed on:</span>

            <time :datetime="$page.review.date">
              {{ $page.review.date }}
            </time>
          </div>
        </header>

        <client-only>
          <star-rating v-model="$page.review.stars" :increment="0.5" :read-only="true" :show-rating="false" />
        </client-only>

        <div class="prose" v-html="$page.review.content"></div>

        <footer class="p-8 space-y-4 border border-black">
          <p class="font-mono text-lg font-bold tracking-widest uppercase">Read more reviews:</p>

          <div class="flow-root">
            <ul class="flex flex-wrap -mx-2 -my-1 list-none">
              <li v-for="review in $page.reviews.edges" :key="review.node.id" class="px-2 py-1">
                <g-link
                  :to="review.node.path"
                  class="relative font-mono text-sm font-bold tracking-widest uppercase group"
                >
                  <span
                    class="absolute inset-0 transition-transform transform bg-yellow-200 -rotate-2 group-hover:scale-y-125 group-hover:scale-x-110"
                  ></span>

                  <span class="relative">
                    {{ review.node.title }}
                  </span>
                </g-link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Review($path: String!) {
  review (path: $path) {
    title
    date
    stars
    content
    path
  }
  reviews: allReview(filter: { path: { ne: $path } }, sortBy: "title", order: ASC) {
    edges {
      node {
        title
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.review.title,
      descrition: `Review of ${this.$page.review.title}, reviewed on ${this.$page.review.date}`,
    }
  },
  data() {
    return {
      stars: 0,
    }
  },
  components: {
    StarRating: () => import('vue-star-rating'),
  },
  methods: {
    track() {
      this.$gtag.pageview({
        page_title: this.$page.review.title,
        page_path: this.$page.review.path,
      })
    },
  },
}
</script>
