<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const mySwiper = ref({});
const modalOptions = ref({
  open: false,
  data: {}
})
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

const handleOpenModal = (item) => {
  modalOptions.value.open = true
}

definePageMeta( {
    colorMode: 'light',
})
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
            :key="index"
            class="p-30px rounded-xl duration-500 border border-blue1 shadow-br hover:(shadow-none border-#ededed)"
          >
            <div
              class="relative h-4 rounded-xl bg-gradient-to-r from-blue1 to-blue2"
            >
              <IconHot v-if="item.isHot" class="absolute -left-35px -top-3px" />
            </div>
            <h1 class="mt-4 text-xl font-bold">{{ item.tittle }}</h1>
            <div class="mt-4 cursor-pointer" @click="handleOpenModal(item)">
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
              class="mt-6 w-full py-2 uppercase rounded-lg font-bold text-white bg-gradient-to-r from-blue2 to-blue1 hover:(text-#4096ff shadow-btn)"
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
              class="p-30px rounded-xl border border-blue1 shadow-br hover:(shadow-none border-#ededed)"
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
                class="mt-6 w-full py-2 uppercase rounded-lg font-bold text-white bg-gradient-to-r from-blue2 to-blue1 hover:(text-#4096ff shadow-btn)"
              >
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <UModal v-model="modalOptions.open" class="relative">
      <div class="absolute top-5 -left-1 bg-[url('/img/bg-hot.svg')] bg-cover w-66px h-22px flex items-center justify-center text-white">HOT
      </div>
      <div class="flex items-center justify-center pt-8 pb-10 text-2xl font-bold text-white bg-blue1 ">
    D5
  </div>
    <div class="mt-9 px-10">
<h1>Gói Data ngày D5</h1>
<img src="/img/d5.jpg" loading="lazy"/>
<span style="color:#E74C3C">&nbsp;😍🗓&nbsp;<strong>Ngày còn dài mà&nbsp;Data đã hết!&nbsp;🤔<br>
👉&nbsp;Có&nbsp;D5 đến ngay bên bạn!</strong></span>
    </div>
    <div class="mt-9 flex gap-8 pb-8 px-10">
      <button
      @click="modalOptions.open = false"
              class="mt-6 w-full py-2 uppercase rounded-lg font-bold border border-solid border-black text-back  to-blue1 hover:(text-#4096ff border-transparent)"
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
