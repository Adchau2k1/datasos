<script setup>
const input = ref();
const modalOptions = ref({
  open: false,
  data: {},
});
const pagination = ref({
  page: 1,
  pageSize: 6,
  total: 20,
});

const forList = ["Tất cả", "Cho bạn", "Gói top", "Gói hot"];
const packList = ["Tất cả", "Gói ngày", "Gói tuần", "Gói tháng"];
const trendList = ["Theo lượt đăng ký", "Giá tăng dần", "Giá giảm dần"];

const forSelect = ref(forList[0]);
const packSelect = ref(packList[0]);
const trendSelect = ref(trendList[0]);

const dataPackage = [
  {
    isHot: true,
    tittle: "D10",
    data: "8Gb",
    date: "1 ngày",
    price: 10000,
  },
  {
    isHot: true,
    tittle: "MBF30",
    data: "30GB",
    date: "30 ngày",
    price: 30000,
  },
  {
    isHot: true,
    tittle: "D5",
    data: "8Gb",
    date: "1 ngày",
    price: 10000,
  },
  {
    isHot: false,
    tittle: "D5",
    data: "8Gb",
    date: "1 ngày",
    price: 10000,
  },
  {
    isHot: false,
    tittle: "D5",
    data: "8Gb",
    date: "1 ngày",
    price: 10000,
  },
];

const handleOpenModal = (item) => {
  modalOptions.value.open = true;
};
definePageMeta({
  colorMode: "light",
});
</script>

<template>
  <div>
    <div class="lg:(w-1024px px-0) mx-auto px-4">
      <div class="py-4 flex flex-col lg:(flex-row items-center)">
        <h1 class="">
          <NuxtLink to="/" class="font-bold">Trang chủ / </NuxtLink
          ><span class="text-xl font-bold">Danh sách gói cước</span>
        </h1>
        <div
          class="lg:ml-10 flex flex-col mt-2 lg:mt-0 md:flex-row w-full gap-4"
        >
          <UInput v-model="input" placeholder="Tìm gói..." class="flex-1" />
          <div class="flex gap-4">
            <USelect v-model="forSelect" :options="forList" />
            <USelect v-model="packSelect" :options="packList" />
            <USelect v-model="trendSelect" :options="trendList" />
          </div>
        </div>
      </div>
      <div class="mt-2">
        <div class="grid grid-cols-2 gap-4 lg:(grid-cols-3 gap-5)">
          <div
            v-for="(item, index) of dataPackage"
            :key="index"
            class="p-4 md:p-30px rounded-xl duration-500 border border-blue1 shadow-br hover:(shadow-none border-#ededed)"
          >
            <div
              class="relative h-4 rounded-xl bg-gradient-to-r from-blue1 to-blue2"
            >
              <IconHot
                v-if="item.isHot"
                class="absolute -left-5 -top-3px md:-left-35px"
              />
            </div>
            <h1 class="mt-2 text-lg md:(mt-4 text-xl) font-bold">
              {{ item.tittle }}
            </h1>
            <div
              class="mt-4 cursor-pointer text-13px md:text-base"
              @click="handleOpenModal(item)"
            >
              <p class="flex gap-2">
                <IconDownload class="hidden md:block" />
                <span class="">Data: {{ item.data }}</span>
              </p>
              <p class="flex gap-2 mt-2 md:mt-3">
                <IconCalender class="hidden md:block" />
                <span class="">HSD: {{ item.date }}</span>
              </p>
              <p class="flex gap-2 mt-2 md:mt-3">
                <IconPrice class="hidden md:block" />
                <span class="">Giá: {{ item.price }}</span>
              </p>
            </div>
            <a
              :href="`sms:5259?&body=${item.tittle}`"
              class="flex items-center justify-center mt-6 w-full py-2 uppercase rounded-lg font-bold text-13px md:text-base text-white bg-gradient-to-r from-blue2 to-blue1 hover:(text-#4096ff shadow-btn)"
              >Đăng ký ngay</a
            >
          </div>
        </div>

        <div class="flex justify-end py-6">
          <UPagination
            v-model="pagination.page"
            :page-count="pagination.pageSize"
            :total="pagination.total"
          />
        </div>
      </div>
    </div>

    <div class="h-490px bg-[url('/img/bg.svg')] bg-cover px-4 lg:px-0">
      <div
        class="h-full flex flex-col justify-center lg:(w-1024px justify-normal items-center flex-row mx-auto)"
      >
        <div class="lg:(w-1/2 float-right)">
          <div class="text-white">
            <h1 class="text-2xl font-bold">
              Bạn đã cài ứng dụng MyMobiFone chưa?
            </h1>
            <p class="mt-3 text-2xl font-normal">
              Cài ứng dụng My MobiFone để tận hưởng nhiều tiện ích và dịch vụ
              hơn!
            </p>
          </div>
        </div>
        <div
          class="mt-6 flex flex-col gap-2 md:(flex-row gap-4) lg:(mt-0 w-1/2 justify-end)"
        >
          <a
            href="https://play.google.com/store/search?q=my%20mobifone&amp;c=apps&amp;hl=vi-VN"
          >
            <IconGplay
          /></a>
          <a
            href="https://apps.apple.com/vn/app/my-mobifone/id719320091?l=vi"
            class="block mt-4 md:mt-0"
            ><IconAppStore
          /></a>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <UModal
      v-model="modalOptions.open"
      prevent-close
      class="relative max-h-90vh"
    >
      <div
        class="absolute top-5 -left-1 bg-[url('/img/bg-hot.svg')] bg-cover w-66px h-22px flex items-center justify-center text-white"
      >
        HOT
      </div>
      <div
        class="flex items-center justify-center pt-8 pb-10 text-2xl font-bold text-white bg-blue1"
      >
        D5
      </div>
      <div class="mt-9 px-10">
        <h1 class="text-2xl font-bold">D5</h1>
        <img src="/img/d5.jpg" loading="lazy" class="mt-2" />
        <span style="color: #e74c3c"
          >&nbsp;😍🗓&nbsp;<strong
            >Ngày còn dài mà&nbsp;Data đã hết!&nbsp;🤔<br />
            👉&nbsp;Có&nbsp;D5 đến ngay bên bạn!</strong
          ></span
        >
      </div>
      <div class="mt-9 flex gap-8 pb-8 px-10">
        <button
          @click="modalOptions.open = false"
          class="mt-6 w-full py-2 uppercase rounded-lg font-bold border border-solid border-black text-back to-blue1 hover:(text-#4096ff border-transparent)"
        >
          Đóng
        </button>
        <button
          class="mt-6 w-full py-2 uppercase rounded-lg font-bold text-white bg-gradient-to-r from-blue2 to-blue1 hover:(text-#4096ff shadow-btn)"
        >
          Đăng ký
        </button>
      </div>
    </UModal>
  </div>
</template>
