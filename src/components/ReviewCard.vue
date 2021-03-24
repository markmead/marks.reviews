<template>
  <g-link :to="path" class="relative block border border-black group">
    <span
      class="absolute inset-0 transition-transform transform translate-x-2 translate-y-2 bg-black group-hover:translate-y-0 group-hover:translate-x-0"
    ></span>

    <div class="relative flex flex-col items-center justify-between h-full p-12 text-center bg-yellow-200">
      <div>
        <h2 class="font-mono text-2xl font-bold tracking-widest uppercase">
          {{ title }}
        </h2>

        <p class="mt-4 font-mono text-sm font-bold tracking-widest">
          {{ date }}
        </p>
      </div>

      <div class="relative inline-flex items-center justify-center mt-12 leading-none border border-black group">
        <span class="absolute inset-0 transform translate-x-2 translate-y-2 bg-black"></span>
        <span class="relative px-8 py-5 font-mono font-bold tracking-widest uppercase bg-white"> Read review </span>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  props: {
    title: String,
    path: String,
    date: String,
  },
}
</script>
