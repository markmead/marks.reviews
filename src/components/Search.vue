<template>
  <div>
    <form action="/reviews" class="flex items-center space-x-8">
      <div class="w-full">
        <label for="q" class="sr-only">Search</label>
        <input type="text" id="q" name="q" class="w-full p-4 border border-black" placeholder="Enter your search" />
      </div>
      <button
        type="submit"
        class="relative inline-flex items-center justify-center px-8 py-5 font-mono font-bold leading-none tracking-widest uppercase bg-white border border-black"
      >
        Search
      </button>
    </form>
  </div>
</template>
