<script setup>
const route = useRoute()

const forList = ["Tất cả", "Cho bạn", "Gói top", "Gói hot"];
const packList = ["Tất cả", "Gói ngày", "Gói tuần", "Gói tháng"];
const trendList = ["Theo lượt đăng ký", "Giá tăng dần", "Giá giảm dần"];

const openMobileSearch = ref(false)
const modalOptions = ref({
  open: false,
  forSelect: forList[0],
  packSelect: packList[0],
  trendSelect: trendList[0],
});

const handleSearch = () => {
  openMobileSearch.value = false
  return navigateTo('/search')
}
</script>

<template>
  <div>
    <header class="z-50 fixed inset-0 h-70px md:h-96px bg-#caefff">
      <div class="hidden px-4 h-full mx-auto md:(flex items-center justify-between gap-12) lg:(w-1024px px-0 gap-0)">
        <NuxtLink to="/"><img src="/img/logo.svg" loading="lazy" class="w-215px" /></NuxtLink>
        <div v-if="route.path !== '/search'" class="flex w-70%">
          <div class="relative w-full">
            <input
              placeholder="Tìm gói..."
              class="w-full h-10 pl-3 pr-11 rounded-md border border-transparent focus:( border-blue1) outline-none"
            />
            <button @click="handleSearch"><IconSearch class="absolute top-1/2 -translate-y-1/2 right-3" /></button>
          </div>
          <button @click="modalOptions.open = true" class="ml-3"><IconFilter /></button>
        </div>
      </div>

      <!-- Header mobile -->
      <div class="relative h-full md:hidden">
        <div class="w-full h-full flex justify-between items-center px-4 z-50">
          <NuxtLink to="/"><img src="/img/logo.svg" loading="lazy" class="w-136px" /></NuxtLink>
          <div v-if="route.path !== '/search'" class="flex justify-end gap-4">
            <button @click="openMobileSearch = true"><IconSearch class="" /></button>
            <button @click="modalOptions.open = true" class=""><IconFilter /></button>
          </div>
        </div>

        <div :class="`absolute inset-0 flex items-center justify-between px-4 transition-all duration-300 ease-in-out bg-#caefff z-100 ${!openMobileSearch ? '-translate-y-full': 'translate-y-0' }`">
          <div class="relative w-full">
            <input
              placeholder="Tìm gói..."
              class="w-full h-10 pl-3 pr-11 rounded-md border border-transparent focus:( border-blue1) outline-none"
            />
            <button @click="handleSearch"><IconSearch class="absolute top-1/2 -translate-y-1/2 right-3" /></button>
          </div>
          <button @click="openMobileSearch = false" class="ml-3"><IconClose /></button>
        </div>
      </div>
    </header>
    <div class="mt-70px md:mt-96px">
      <slot />
    </div>
    <footer class="pt-0 lg:pt-4">
      <div class="mx-auto px-4 flex flex-col lg:(px-0 w-1024px flex-row) ">
        <div class="lg:w-1/2">
          <div><img src="/img/logo.svg" loading="lazy" class="w-215px" /></div>
          <h2 class="mt-5 font-bold">Tổng công ty Viễn thông MobiFone</h2>
          <p class="flex gap-3"><IconCall /> (+84-24) 3783 1800</p>
          <p class="flex gap-3"><div class="w-4 h-4"></div> (+84-24) 3783 1734</p>
          <p class="flex items-center gap-3">
            <IconLocal /> Số 01 phố Phạm Văn Bạch, Yên Hòa, Cầu Giấy, Hà Nội.
          </p>
        </div>
        <div class="mt-6 lg:(mt-0 w-1/2)">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14896.935309649289!2d105.789239!3d21.023328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab519542a95f%3A0x3affdd6cd059dffd!2zVOG7lW5nIEPDtG5nIHR5IFZp4buFbiB0aMO0bmcgTW9iaWZvbmU!5e0!3m2!1svi!2sus!4v1695955888016!5m2!1svi!2sus"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="mt-8 text-#656565 bg-gray-200 py-5 lg:(py-50px mt-12) text-center">
        ©2023 By TTCNTT MobiFone
      </div>
    </footer>

    <!-- Modal Search -->
    <UModal
      v-model="modalOptions.open"
      prevent-close
      class="!w-30% max-h-90vh"
    >
      <div class="p-30px">
        <h1 class="text-lg lg:text-2xl text-center font-bold uppercase">Bộ lọc</h1>
        <div class="mt-6 border-t border-t-gray-200"></div>
        <div class="pt-6 pb-4">
          <div class="">
            <label for="" class="">Loại gói cước</label>
            <USelect
              v-model="modalOptions.forSelect"
              :options="forList"
              class="mt-2"
            />
          </div>
          <div class="mt-4">
            <label for="" class="">Thời gian sử dụng</label>
            <USelect
              v-model="modalOptions.packSelect"
              :options="packList"
              class="mt-2"
            />
          </div>
          <div class="mt-4">
            <label for="" class="">Sắp xếp theo</label>
            <USelect
              v-model="modalOptions.trendSelect"
              :options="trendList"
              class="mt-2"
            />
          </div>
        </div>
        <div class="flex gap-8">
          <button
            @click="modalOptions.open = false"
            class="mt-6 w-full py-2 uppercase rounded-lg text-13px lg:text-base font-bold border border-solid border-black text-back to-blue1 hover:(text-#4096ff border-transparent)"
          >
            Đóng
          </button>
          <button
            class="mt-6 w-full py-2 uppercase rounded-lg font-bold text-13px lg:text-base text-white bg-gradient-to-r from-blue2 to-blue1 hover:(text-#4096ff shadow-btn)"
          >
            Lọc
          </button>
        </div>
      </div>
    </UModal>
  </div>
</template>
