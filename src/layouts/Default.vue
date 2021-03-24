<template>
  <div>
    <header class="border-b border-black">
      <div class="flex items-center h-24 pl-8">
        <div class="flex-1">
          <g-link to="/" class="font-mono text-xl font-bold tracking-widest uppercase"> ⭐️ Marks Reviews </g-link>
        </div>

        <div class="flex space-x-8">
          <nav class="flex items-center space-x-8">
            <g-link to="/" class="font-mono font-bold tracking-widest uppercase"> Home </g-link>
            <g-link to="/about/" class="font-mono font-bold tracking-widest uppercase"> About </g-link>
            <g-link to="/reviews/" class="font-mono font-bold tracking-widest uppercase"> Reviews </g-link>
          </nav>

          <div class="relative">
            <div class="inline-flex items-center justify-center h-24 p-8 border-l border-black">
              <button v-on:click="search = !search" class="font-mono font-bold tracking-widest uppercase">
                🕵️‍♀️ Search 🕵️
              </button>
            </div>

            <div
              v-if="search"
              class="absolute right-0 top-auto z-10 w-screen max-w-3xl p-8 bg-white border border-black"
            >
              <Search />
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <div class="container py-16">
        <nav class="flex items-center space-x-8">
          <a href="/rss.xml" class="font-mono font-bold tracking-widest uppercase"> RSS </a>
          <a href="/sitemap.xml" class="font-mono font-bold tracking-widest uppercase"> Sitemap </a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
import Search from '@/components/Search'

export default {
  data() {
    return {
      search: false,
    }
  },
  components: {
    Search,
  },
}
</script>
