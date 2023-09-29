<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const modalOptions = ref({
  open: false,
  data: {},
});

const mySwiper = ref({});
const setSwiper = (xswiper) => {
  mySwiper.value = xswiper;
};

const sliderData = [
  {
    imgUrl: "/img/slide1.jpg",
  },
  {
    imgUrl: "/img/slide3.jpg",
  },
  {
    imgUrl: "/img/slide2.jpg",
  },
];

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

const dataPackMore = [
  {
    heading: "Gói Data Ngày",
    data: [
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
    ],
  },
  {
    heading: "Gói Data Tuần",
    data: [
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
    ],
  },
  {
    heading: "Gói Data Tháng",
    data: [
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
    ],
  },
];

const topPacks = [
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
];

const handleOpenModal = (item) => {
  modalOptions.value.open = true;
};

definePageMeta({
  colorMode: "light",
});
</script>

<template>
  <div class="my-10">
    <div class="">
      <Swiper
        @swiper="setSwiper"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        class="!z-0"
      >
        <SwiperSlide v-for="(slide, index) of sliderData" :key="index">
          <img
            :src="slide.imgUrl"
            alt="slide"
            loading="lazy"
            class="w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="px-4 lg:(w-1024px px-0) relative mx-auto mb-10">
      <div class="hidden lg:block absolute -top-10 left-0">
        <img src="/img/banner.svg" loading="lazy" />
      </div>
      <div class="lg:hidden absolute -top-5 -left-0">
        <img src="/img/banner-mobile.svg" loading="lazy" />
      </div>

      <div class="pt-6 md:pt-16">
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

        <button
          class="mt-10 w-full py-1 flex justify-center rounded-lg font-bold text-blue1 bg-[rgba(34,87,193,.1)]"
        >
          Xem thêm <IconShowMore />
        </button>
      </div>

      <div class="">
        <div v-for="(item, index) of dataPackMore" :key="index" class="mt-8">
          <div class="border-b border-b-blue2">
            <div
              class="max-w-143px h-30px flex items-center justify-center py-6px px-3 font-bold rounded-tl-6px rounded-tr-6px text-#f6f6f6 bg-gradient-to-r from-blue1 to-blue2"
            >
              {{ item.heading }}
            </div>
          </div>
          <div class="mt-6 grid grid-cols-2 gap-4 lg:(grid-cols-3 gap-5)">
            <div
              v-for="(pack, idx) of item.data"
              :key="idx"
              class="p-4 md:p-30px rounded-xl duration-500 border border-blue1 shadow-br hover:(shadow-none border-#ededed)"
            >
              <div
                class="relative h-4 rounded-xl bg-gradient-to-r from-blue1 to-blue2"
              >
                <IconHot
                  v-if="pack.isHot"
                  class="absolute -left-5 -top-3px md:-left-35px"
                />
              </div>
              <h1 class="mt-2 text-lg md:(mt-4 text-xl) font-bold">
                {{ pack.tittle }}
              </h1>
              <div
                class="mt-4 cursor-pointer text-13px md:text-base"
                @click="handleOpenModal(pack)"
              >
                <p class="flex gap-2">
                  <IconDownload class="hidden md:block" />
                  <span class="">Data: {{ pack.data }}</span>
                </p>
                <p class="flex gap-2 mt-2 md:mt-3">
                  <IconCalender class="hidden md:block" />
                  <span class="">HSD: {{ pack.date }}</span>
                </p>
                <p class="flex gap-2 mt-2 md:mt-3">
                  <IconPrice class="hidden md:block" />
                  <span class="">Giá: {{ pack.price }}</span>
                </p>
              </div>
              <a
                :href="`sms:5259?&body=${pack.tittle}`"
                class="flex items-center justify-center mt-6 w-full py-2 uppercase rounded-lg font-bold text-13px md:text-base text-white bg-gradient-to-r from-blue2 to-blue1 hover:(text-#4096ff shadow-btn)"
                >Đăng ký ngay</a
              >
            </div>
          </div>
        </div>

        <button
          class="mt-10 w-full py-1 flex justify-center rounded-lg font-bold text-blue1 bg-[rgba(34,87,193,.1)]"
        >
          Xem thêm <IconShowMore />
        </button>
      </div>
    </div>

    <div class="clip-path bg-gradient-to-tr from-#2257c1 to-blue2">
      <h1
        class="pt-16 mb-6 text-xl md:(text-3xl pt-20 mb-10) font-bold text-center text-white"
      >
        Gói cước nhiều người đăng ký
      </h1>
      <div class="lg:(flex items-center) gap-x-12 px-4 lg:px-0">
        <div class="w-45% hidden lg:block">
          <img
            src="/img/top-addon.svg"
            alt="addon"
            loading="lazy"
            class="float-right"
          />
        </div>
        <div class="lg:w-55%">
          <div
            v-for="(item, index) of topPacks"
            class="mb-30px lg:w-80% 2xl:w-58% flex lg:items-center bg-white pl-30px pt-22px rounded-tl-10px rounded-tr-50px rounded-bl-50px rounded-br-10px"
          >
            <div
              class="relative w-16 h-16 md:(w-30 h-30) lg:(-mt-6) flex items-center justify-center bg-gradient-to-tr from-#2257c1 to-blue2 rounded-md"
            >
              <IconCircleLeft class="absolute left-0 -bottom-34px" />
              <IconCircleRight class="absolute top-0 -right-11px" />
              <span class="text-sm md:text-3xl font-bold text-white">{{
                item.tittle
              }}</span>
            </div>
            <div class="ml-4 flex-1">
              <h1 class="text-2xl font-bold">
                {{ item.tittle }}
              </h1>
              <div
                class="flex flex-col cursor-pointer text-13px mt-6px md:(mt-1 flex-row items-center text-base)"
                @click="handleOpenModal(item)"
              >
                <p class="md:w-1/3 flex gap-1">
                  <IconDownload class="w-4 h-4 md:(w-auto h-auto)" />
                  <span class="">Data: {{ item.data }}</span>
                </p>
                <p class="md:w-1/3 flex gap-1">
                  <IconCalender class="w-4 h-4 md:(w-auto h-auto)" />
                  <span class="">HSD: {{ item.date }}</span>
                </p>
                <p class="md:w-1/3 flex gap-1">
                  <IconPrice class="w-4 h-4 md:(w-auto h-auto)" />
                  <span class="">Giá: {{ item.price }}</span>
                </p>
              </div>
              <a
                :href="`sms:5259?&body=${item.tittle}`"
                class="flex items-center justify-center mt-2 mb-5 w-140px md:(w-250px mt-6) py-3 uppercase rounded-lg text-13px md:text-base font-bold text-white bg-gradient-to-r from-blue2 to-blue1 hover:(text-#4096ff shadow-btn)"
                >Đăng ký ngay</a
              >
            </div>
          </div>

          <button
            class="mb-10 w-full lg:w-80% 2xl:w-58% h-50px uppercase font-bold text-sm md:text-base rounded-md border-1px border-dashed border-white text-white"
          >
            Xem thêm
          </button>
        </div>
      </div>
    </div>

    <div class="h-490px bg-[url('/img/bg.svg')] bg-cover px-4 lg:px-0">
      <div
        class="h-full flex justify-center flex-col lg:(w-1024px justify-normal items-center flex-row mx-auto)"
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
          class="mt-6 w-full py-2 uppercase rounded-lg text-13px lg:text-base font-bold border border-solid border-black text-back to-blue1 hover:(text-#4096ff border-transparent)"
        >
          Đóng
        </button>
        <button
          class="mt-6 w-full py-2 uppercase rounded-lg text-13px lg:text-base font-bold text-white bg-gradient-to-r from-blue2 to-blue1 hover:(text-#4096ff shadow-btn)"
        >
          Đăng ký
        </button>
      </div>
    </UModal>
  </div>
</template>
