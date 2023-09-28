<script setup>
</script>

<template>
  <div>
    <header class="z-50 fixed inset-0 h-96px bg-#BCEBFFCC">
      <div class="w-1024px h-full mx-auto flex justify-between items-center">
        <div><img src="/img/logo.svg" loading="lazy" class="w-215px" /></div>
        <div class="flex w-70%">
          <div class="relative w-full">
            <input
              placeholder="Tìm gói..."
              class="w-full h-10 px-3 rounded-md border border-transparent focus:( border-blue1) outline-none"
            />
            <IconSearch class="absolute top-1/2 -translate-y-1/2 right-3" />
          </div>
          <button class="ml-3"><IconFilter /></button>
        </div>
      </div>
    </header>
    <div class="mt-96px">
      <slot />
    </div>
    <footer>Footer</footer>
  </div>
</template>
