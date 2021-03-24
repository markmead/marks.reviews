<template>
  <Layout>
    <header>
      <div class="container py-16">
        <h1 class="font-extrabold uppercase text-7xl">
          {{ searchReviews.length }} No faff {{ 'review' | pluralize(searchReviews.length) }}
        </h1>
      </div>
    </header>

    <section>
      <div
        v-if="searchReviews.length > 0"
        class="container grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <ReviewCard
          v-for="review in searchReviews"
          :title="review.node.title"
          :path="review.node.path"
          :date="review.node.date"
          :key="review.path"
        />
      </div>

      <div v-else class="container">
        <h2 class="text-4xl font-extrabold uppercase">
          😢 No results, try again 😢
        </h2>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
    reviews: allReview(sortBy: "title", order: ASC) {
      edges {
        node {
          title
          path
          date
        }
      }
    }
  }
</page-query>

<script>
import ReviewCard from '@/components/ReviewCard'

export default {
  metaInfo: {
    title: 'Reviews',
  },
  data() {
    return {
      reviews: [],
      search: '',
    }
  },
  methods: {
    track() {
      this.$gtag.pageview({
        page_title: 'Reviews',
        page_path: '/reviews/',
      })
    },
  },
  computed: {
    searchReviews() {
      if (!this.search) return this.reviews

      return this.reviews.filter((review) => {
        return review.node.title.toLowerCase().includes(this.search.toLowerCase().trim())
      })
    },
  },
  mounted() {
    const url = new URL(window.location)

    this.search = url.searchParams.get('q')
    this.reviews = this.$page.reviews.edges
  },
  components: {
    ReviewCard,
  },
}
</script>
