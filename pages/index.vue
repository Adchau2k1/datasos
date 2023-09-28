<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

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

    <div class="w-1024px relative mx-auto">
      <div class="absolute -top-10 left-0">
        <img src="/img/banner.svg" loading="lazy" class="" />
      </div>

      <div class="pt-16">
        <div class="grid grid-cols-3 gap-5">
          <div
            v-for="(item, index) of dataPackage"
            class="p-30px rounded-xl border border-blue1"
          >
            <div
              class="relative h-4 rounded-xl bg-gradient-to-r from-blue1 to-blue2"
            >
              <IconHot v-if="item.isHot" class="absolute -left-35px -top-3px" />
            </div>
            <h1 class="mt-4 text-xl font-bold">{{ item.tittle }}</h1>
            <div class="mt-4">
              <p class="flex gap-2">
                <IconDownload /> <span class="">Data: {{ item.data }}</span>
              </p>
              <p class="flex gap-2 mt-3">
                <IconCalender /> <span class="">HSD: {{ item.date }}</span>
              </p>
              <p class="flex gap-2 mt-3">
                <IconPrice /> <span class="">Giá: {{ item.price }}</span>
              </p>
            </div>
            <button
              class="mt-6 w-full py-2 uppercase rounded-lg font-bold text-white bg-gradient-to-r from-blue2 to-blue1"
            >
              Đăng ký ngay
            </button>
          </div>
        </div>

        <button
          class="mt-10 w-full py-1 flex justify-center rounded-lg font-bold text-blue1 bg-[rgba(34,87,193,.1)]"
        >
          Xem thêm <IconShowMore />
        </button>
      </div>

      <div class="mb-100">
        <div v-for="(item, index) of dataPackMore" :key="index" class="mt-8">
          <div class="border-b border-b-blue2">
            <div
              class="max-w-143px h-30px flex items-center justify-center py-6px px-3 font-bold rounded-tl-6px rounded-tr-6px text-#f6f6f6 bg-gradient-to-r from-blue1 to-blue2"
            >
              {{ item.heading }}
            </div>
          </div>
          <div class="mt-6 grid grid-cols-3 gap-5">
            <div
              v-for="(pack, idx) of item.data"
              :key="idx"
              class="p-30px rounded-xl border border-blue1 shadow-br"
            >
              <div
                class="relative h-4 rounded-xl bg-gradient-to-r from-blue1 to-blue2"
              >
                <IconHot
                  v-if="pack.isHot"
                  class="absolute -left-35px -top-3px"
                />
              </div>
              <h1 class="mt-4 text-xl font-bold">{{ pack.tittle }}</h1>
              <div class="mt-4">
                <p class="flex gap-2">
                  <IconDownload /> <span class="">Data: {{ pack.data }}</span>
                </p>
                <p class="flex gap-2 mt-3">
                  <IconCalender /> <span class="">HSD: {{ pack.date }}</span>
                </p>
                <p class="flex gap-2 mt-3">
                  <IconPrice /> <span class="">Giá: {{ pack.price }}</span>
                </p>
              </div>
              <button
                class="mt-6 w-full py-2 uppercase rounded-lg font-bold text-white bg-gradient-to-r from-blue2 to-blue1"
              >
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
