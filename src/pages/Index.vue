<template>
  <Layout>
    <section>
      <div class="container py-16">
        <div class="space-y-8 max-w-prose">
          <h1 class="font-extrabold uppercase text-7xl">No faff reviews</h1>

          <div>
            <p>
              Here I review things that may interest you. If they've interested me they will be rated highly, if not,
              then they won't. If any of these reviews upset you, then just know I do not take this website seriously
              and neither should you.
            </p>
          </div>

          <div>
            <g-link
              to="/reviews/"
              class="relative inline-flex items-center justify-center leading-none border border-black group"
            >
              <span
                class="absolute inset-0 transition-transform transform translate-x-2 translate-y-2 bg-black group-hover:translate-y-0 group-hover:translate-x-0"
              ></span>
              <span class="relative px-8 py-5 font-mono font-bold tracking-widest uppercase bg-white">
                Read reviews
              </span>
            </g-link>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        <ReviewCard
          v-for="review in $page.reviews.edges"
          :title="review.node.title"
          :path="review.node.path"
          :date="review.node.date"
          :key="review.path"
        />
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
    reviews: allReview(limit: 6, sortBy: "date", order: DESC) {
      edges {
        node {
          title
          path
          date
        }
      }
    }
    count: allReview {
      totalCount
    }
  }
</page-query>

<script>
import ReviewCard from '@/components/ReviewCard'

export default {
  metaInfo: {
    title: 'Marks Reviews',
    description: 'Read my reviews',
  },
  methods: {
    track() {
      this.$gtag.pageview({
        page_title: 'Home',
        page_path: '/',
      })
    },
    isNew(date) {
      const today = new Date()
      const lastWeekDay = today.getDate() - 3
      const todayDay = date.substring(0, 2)

      return lastWeekDay < todayDay ? true : false
    },
  },
  components: {
    ReviewCard,
  },
}
</script>
