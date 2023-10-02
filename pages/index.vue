<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'

const modalOptions = ref({
  open: false,
  data: {},
})

const modules = [Pagination, Autoplay, EffectCreative]
const onSwiper = (swiper) => {
  // console.log(swiper);
}

const sliderData = [
  {
    imgUrl: '/img/slide1.jpg',
  },
  {
    imgUrl: '/img/slide3.jpg',
  },
  {
    imgUrl: '/img/slide2.jpg',
  },
]

const dataPackage = [
  {
    isHot: true,
    title: 'KC90',
    data: '1GB/ngày',
    date: '30 ngày',
    price: 90000,
    packageIncentives: 'Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút ngoại mạng/tháng',
    imgUrl: '/img/kc90.jpg',
    metaData: {
      hotText: 'GÓI CƯỚC COMBO DATA VÀ THOẠI',
      contents: [
        '💎 Cước phí: 90.000 VNĐ.',
        '🎁 Ưu đãi: Data 1GB/ngày tương đương 30GB/30 ngày (hết dung lượng, dừng truy cập).',
        'Thoại nội mạng: Miễn phí các cuộc gọi nội mạng dưới 10 phút (Tối đa 1.000 phút thoại nội mạng/tháng).',
        'Miễn phí 30 phút thoại ngoại mạng/tháng.',
        '⏳ Thời gian sử dụng trong 30 ngày.',
        '👥 Đối tượng sử dụng: Thuê bao trả trước, trả sau phát triển mới từ ngày 15/6/2023; Thuê bao trả trước, trả sau hiện hữu theo điều kiện tiêu dùng (ARPU data + thoại trung bình tháng n-1, n-2, n-3 < giá gói).',
        '✅ Hệ thống tự động gia hạn gói cước; nếu gia hạn gói không thành công, hệ thống tiếp tục retry 30 ngày.',
        '❌ Hủy gia hạn gói cước: Soạn KGH KC90 gửi 9318',
        '❌ Hủy gói cước: Soạn HUY KC90 gửi 9318 hoặc click Hủy tại mục gói KC90 ngay trên My MobiFone.',
        '👉 Đăng ký ngay để được hưởng ưu đãi bạn nhé! ️❤️',
        '☎ Mọi thông tin chi tiết vui lòng liên hệ hotline 1800 1090.',
      ],
    },
  },
  {
    isHot: true,
    title: 'KC120',
    data: '1,5GB/ngày',
    date: '30 ngày',
    price: 120000,
    packageIncentives: 'Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút ngoại mạng/tháng',
    imgUrl: '/img/kc120.jpg',
    metaData: {
      hotText: 'GÓI CƯỚC COMBO DATA VÀ THOẠI',
      contents: [
        '💎 Cước phí: 120.000 VNĐ.',
        '🎁 Ưu đãi: Data 1.5GB/ngày tương đương 45GB/30 ngày (hết dung lượng, dừng truy cập).',
        'Miễn phí các cuộc gọi nội mạng dưới 10 phút (Tối đa 1.500 phút thoại nội mạng/30 ngày).',
        'Miễn phí 50 phút thoại ngoại mạng/30 ngày.',
        '⏳ Thời gian sử dụng trong 30 ngày.',
        '👥 Đối tượng sử dụng: Thuê bao trả trước, trả sau phát triển mới từ ngày 15/6/2023; Thuê bao trả trước, trả sau hiện hữu theo điều kiện tiêu dùng (ARPU data + thoại trung bình tháng n-1, n-2, n-3 < giá gói).',
        '✅ Hệ thống tự động gia hạn gói cước; nếu gia hạn gói không thành công, hệ thống tiếp tục retry 30 ngày.',
        '❌ Hủy gia hạn gói cước: Soạn KGH KC120 gửi 9318',
        '❌ Hủy gói cước: Soạn HUY KC120 gửi 9318 hoặc click Hủy tại mục gói KC120 ngay trên My MobiFone.',
        '👉 Đăng ký ngay để được hưởng ưu đãi bạn nhé! ️❤️',
        '☎ Mọi thông tin chi tiết vui lòng liên hệ hotline 1800 1090.',
      ],
    },
  },
  {
    isHot: false,
    title: 'PT70',
    data: '1GB/ngày',
    date: '30 ngày',
    price: 70000,
    imgUrl: '/img/pt70.jpg',
    metaData: {
      hotText: 'GÓI MÊ LY - DATA ONLY',
      contents: [
        '💎 Cước phí: 70.000 VNĐ.',
        '🎁 Ưu đãi: Data 1GB/ngày tương đương 30GB/30 ngày (hết dung lượng, tạm khóa internet).',
        '⏳ Thời gian sử dụng trong 30 ngày.',
        '👥 Đối tượng sử dụng: Thuê bao phát triển mới từ ngày 15/6/2023 (bao gồm Thuê bao trả trước, thuê bao trả sau).',
        '✅ Hệ thống tự động gia hạn gói cước; nếu gia hạn gói không thành công, hệ thống tiếp tục retry 30 ngày.',
        '❌ Hủy gia hạn gói cước: Soạn KGH PT70 gửi 9318',
        '❌ Hủy gói cước: Soạn HUY PT70 gửi 9318 hoặc click Hủy tại mục gói PT70 ngay trên My MobiFone.',
        '👉 Đăng ký ngay để được hưởng ưu đãi bạn nhé! ️❤️',
        '☎ Mọi thông tin chi tiết vui lòng liên hệ hotline 1800 1090.',
      ],
    },
  },
  {
    isHot: false,
    title: 'PT90',
    data: '1,5GB/ngày',
    date: '30 ngày',
    price: 90000,
    imgUrl: '/img/pt90.jpg',
    metaData: {
      hotText: 'GÓI MÊ LY - DATA ONLY',
      contents: [
        '💎 Cước phí: 90.000 VNĐ.',
        '🎁 Ưu đãi: Data 1.5GB/ngày tương đương 45GB/30 ngày (hết dung lượng, dừng truy cập).',
        '⏳ Thời gian sử dụng trong 30 ngày.',
        '👥 Đối tượng sử dụng: Thuê bao phát triển mới từ ngày 15/6/2023 (bao gồm Thuê bao trả trước, trả sau).',
        '✅ Hệ thống tự động gia hạn gói cước; nếu gia hạn gói không thành công, hệ thống tiếp tục retry 30 ngày.',
        '❌ Hủy gia hạn gói cước: Soạn KGH PT90 gửi 9318',
        '❌ Hủy gói cước: Soạn HUY PT90 gửi 9318 hoặc click Hủy tại mục gói PT90 ngay trên My MobiFone.',
        '👉 Đăng ký ngay để được hưởng ưu đãi bạn nhé! ️❤️',
        '☎ Mọi thông tin chi tiết vui lòng liên hệ hotline 1800 1090.',
      ],
    },
  },
  {
    isHot: false,
    title: 'NA70',
    data: '10GB',
    date: '30 ngày',
    price: 70000,
    imgUrl: '/img/na70.jpg',
    metaData: {
      hotText: 'GÓI MÊ LY - DATA ONLY',
      contents: [
        '💎 Cước phí: 70.000 VNĐ',
        '🎁 Ưu đãi: Data 10GB/chu kỳ (chu kỳ 30 ngày) - Hết dung lượng, tạm khóa internet.',
        '⏳ Thời gian sử dụng trong 30 ngày.',
        '👥 Đối tượng sử dụng: Toàn bộ thuê bao di động trả trước, trả sau ',
        '✅ Hệ thống tự động gia hạn gói cước; nếu gia hạn gói không thành công, hệ thống tiếp tục retry 30 ngày.',
        '❌ Hủy gia hạn gói cước: Soạn KGH NA70 gửi 9318',
        '❌ Hủy gói cước: Soạn HUY NA70 gửi 9318 hoặc click Hủy tại mục gói NA70 ngay trên My MobiFone.',
        '👉 Đăng ký ngay để được hưởng ưu đãi bạn nhé! ️❤️',
        '☎ Mọi thông tin chi tiết vui lòng liên hệ hotline 1800 1090.',
      ],
    },
  },
  {
    isHot: false,
    title: 'MBF30',
    data: '30GB',
    date: '7 ngày',
    price: 30000,
    imgUrl: '/img/mbf30.jpg',
    metaData: {
      hotText: '🎇 Đánh dấu cột mốc 30 năm phát triển, MobiFone tung ra gói cước MBF30 với deal siêu hời! 😊',
      contents: [
        '🎁 Chỉ 30k mà nhận được 30GB sử dụng trong 07 ngày!',
        '📍 MBF30 quả là chân ái phải không quý zị!',
        '🎁 Ngoài ra quý khách có thể tặng gói cước này cho người thân, bạn bè.',
        '📱 Chương trình áp dụng với tất cả thuê bao trả trước, trả sau của',
        'MobiFone. Không giới hạn số lần đăng ký gói cước trong thời gian triển khai chương trình.',
        ' ☎  Mọi thông tin chi tiết vui lòng liên hệ hotline 1800 1090.',
      ],
    },
  },
  {
    isHot: false,
    title: 'NA90',
    data: '15GB',
    date: '30 ngày',
    price: 90000,
    imgUrl: '/img/na90.jpg',
    metaData: {
      hotText: 'GÓI MÊ LY - DATA ONLY',
      contents: [
        '💎 Cước phí: 90.000 VNĐ.',
        '🎁 Ưu đãi: Data 15GB/chu kỳ (chu kỳ 30 ngày) - Hết dung lượng, tạm khóa internet.',
        '⏳ Thời gian sử dụng trong 30 ngày.',
        '👥 Đối tượng sử dụng: Toàn bộ thuê bao di động trả trước, trả sau .',
        '✅ Hệ thống tự động gia hạn gói cước; nếu gia hạn gói không thành công, hệ thống tiếp tục retry 30 ngày.',
        '❌ Hủy gia hạn gói cước: Soạn KGH NA90 gửi 9318',
        '❌ Hủy gói cước: Soạn HUY NA90 gửi 9318 hoặc click Hủy tại mục gói NA90 ngay trên My MobiFone.',
        '👉 Đăng ký ngay để được hưởng ưu đãi bạn nhé! ️❤️',
        '☎ Mọi thông tin chi tiết vui lòng liên hệ hotline 1800 1090.',
      ],
    },
  },
]

const dataPackMore = [
  {
    heading: 'Gói Data Ngày',
    data: [
      {
        isHot: true,
        tittle: 'D10',
        data: '8Gb',
        date: '1 ngày',
        price: 10000,
      },
      {
        isHot: true,
        tittle: 'MBF30',
        data: '30GB',
        date: '30 ngày',
        price: 30000,
      },
      {
        isHot: true,
        tittle: 'D5',
        data: '8Gb',
        date: '1 ngày',
        price: 10000,
      },
      {
        isHot: false,
        tittle: 'D5',
        data: '8Gb',
        date: '1 ngày',
        price: 10000,
      },
    ],
  },
  {
    heading: 'Gói Data Tuần',
    data: [
      {
        isHot: true,
        tittle: 'D10',
        data: '8Gb',
        date: '1 ngày',
        price: 10000,
      },
      {
        isHot: true,
        tittle: 'MBF30',
        data: '30GB',
        date: '30 ngày',
        price: 30000,
      },
      {
        isHot: true,
        tittle: 'D5',
        data: '8Gb',
        date: '1 ngày',
        price: 10000,
      },
      {
        isHot: false,
        tittle: 'D5',
        data: '8Gb',
        date: '1 ngày',
        price: 10000,
      },
    ],
  },
  {
    heading: 'Gói Data Tháng',
    data: [
      {
        isHot: true,
        tittle: 'D10',
        data: '8Gb',
        date: '1 ngày',
        price: 10000,
      },
      {
        isHot: true,
        tittle: 'MBF30',
        data: '30GB',
        date: '30 ngày',
        price: 30000,
      },
      {
        isHot: true,
        tittle: 'D5',
        data: '8Gb',
        date: '1 ngày',
        price: 10000,
      },
      {
        isHot: false,
        tittle: 'D5',
        data: '8Gb',
        date: '1 ngày',
        price: 10000,
      },
    ],
  },
]

const topPacks = ref(dataPackage.slice(0, 3))

const handleOpenModal = (item) => {
  modalOptions.value.open = true
  modalOptions.value.data = item
}

let current = 1
const handleShowMore = () => {
  current += 1
  topPacks.value = dataPackage.slice(0, current * 3)
}
const handleShowLess = () => {
  current = 1
  topPacks.value = dataPackage.slice(0, current * 3)
}

definePageMeta({
  colorMode: 'light',
})
</script>

<template>
  <div class="my-10">
    <div class="cursor-pointer">
      <Swiper
        :modules="modules"
        @swiper="onSwiper"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :pagination="{ clickable: true }"
        effect="creative"
        :creativeEffect="{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
        class="!z-0"
      >
        <SwiperSlide v-for="(slide, index) of sliderData" :key="index">
          <img :src="slide.imgUrl" alt="slide" class="w-full h-full" />
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
            @click="handleOpenModal(item)"
            class="flex flex-col justify-between p-4 md:p-30px rounded-xl duration-500 cursor-pointer border border-blue1 shadow-br hover:(shadow-none border-#ededed)"
          >
            <div class="relative h-4 rounded-xl bg-gradient-to-r from-blue1 to-blue2">
              <IconHot v-if="item.isHot" class="absolute -left-5 -top-3px md:-left-35px" />
            </div>
            <div class="mt-2 flex-1 md:(mt-4) text-13px md:text-base">
              <h1 class="text-lg md:(text-xl) font-bold">
                {{ item.title }}
              </h1>
              <p class="mt-4 flex items-center gap-2">
                <IconDownload class="w-4 h-4 md:(w-6 h-6)" />
                <span class="">Data: {{ item.data }}</span>
              </p>
              <p class="flex items-center gap-2 mt-2 md:mt-3">
                <IconCalender class="w-4 h-4 md:(w-6 h-6)" />
                <span class="">HSD: {{ item.date }}</span>
              </p>
              <p class="flex items-center gap-2 mt-2 md:mt-3">
                <IconPrice class="w-4 h-4 md:(w-6 h-6)" />
                <span class="">Giá: {{ formatNumberView(item.price) }} đ</span>
              </p>
              <p class="mt-2 md:mt-3 text-xs md:text-base text-justify">
                {{ item.packageIncentives }}
              </p>
            </div>
            <a
              :href="`sms:9318?&body=${item.title}`"
              @click.stop
              class="flex items-center justify-center mt-6 w-full py-2 uppercase rounded-lg font-bold text-13px md:text-base text-white bg-gradient-to-r from-blue2 to-blue1 hover:(text-#4096ff shadow-btn)"
              >Đăng ký ngay</a
            >
          </div>
        </div>

        <!-- <button
          class="mt-10 w-full py-1 flex justify-center rounded-lg font-bold text-blue1 bg-[rgba(34,87,193,.1)]"
        >
          Xem thêm <IconShowMore />
        </button> -->
      </div>

      <!-- <div class="">
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
                :href="`sms:9318?&body=${pack.tittle}`"
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
      </div> -->
    </div>

    <div class="clip-path bg-gradient-to-tr from-#2257c1 to-blue2">
      <h1 class="pt-16 mb-6 text-xl md:(text-3xl pt-20 mb-10) font-bold text-center text-white">
        Gói cước nhiều người đăng ký
      </h1>
      <div class="lg:(flex items-center) gap-x-12 px-4 lg:px-0">
        <div class="w-40% hidden lg:block">
          <img src="/img/top-addon.svg" alt="addon" loading="lazy" class="float-right" />
        </div>
        <div class="lg:w-60%">
          <div
            v-for="(item, index) of topPacks"
            :key="index"
            @click="handleOpenModal(item)"
            class="mb-30px lg:w-90% 2xl:w-70% flex lg:items-center bg-white pl-30px pt-22px cursor-pointer rounded-tl-10px rounded-tr-50px rounded-bl-50px rounded-br-10px"
          >
            <div
              class="relative w-16 h-16 md:(w-30 h-30) lg:(-mt-6) flex items-center justify-center bg-gradient-to-tr from-#2257c1 to-blue2 rounded-md"
            >
              <IconCircleLeft class="absolute -left-2 -bottom-16px" />
              <IconCircleRight class="absolute -top-2 -right-8px" />
              <span class="text-sm md:text-3xl font-bold text-white">{{ item.title }}</span>
            </div>
            <div class="ml-4 flex-1">
              <h1 class="text-2xl font-bold">
                {{ item.title }}
              </h1>
              <div
                class="flex flex-col cursor-pointer text-13px mt-6px md:(mt-1 flex-row items-center text-base)"
                @click="handleOpenModal(item)"
              >
                <div class="mt-2 md:w-1/3 lg:mt-0 flex items-center gap-2">
                  <IconDownload class="w-4 h-4 md:(w-6 h-6)" />
                  <span class="">Data: {{ item.data }}</span>
                </div>
                <div class="mt-2 md:w-1/3 lg:mt-0 flex items-center gap-2">
                  <IconCalender class="w-4 h-4 md:(w-6 h-6)" />
                  <span class="">HSD: {{ item.date }}</span>
                </div>
                <div class="mt-2 md:w-1/3 lg:mt-0 flex items-center gap-2">
                  <IconPrice class="w-4 h-4 md:(w-6 h-6)" />
                  <span class="">Giá: {{ formatNumberView(item.price) }} đ</span>
                </div>
              </div>
              <a
                :href="`sms:9318?&body=${item.title}`"
                @click.stop
                class="flex items-center justify-center mt-2 mb-5 w-140px md:(w-250px mt-6) py-3 uppercase rounded-lg text-13px md:text-base font-bold text-white bg-gradient-to-r from-blue2 to-blue1 hover:(text-#4096ff shadow-btn)"
                >Đăng ký ngay</a
              >
            </div>
          </div>

          <button
            v-if="topPacks.length < dataPackage.length"
            @click="handleShowMore"
            class="mb-10 w-full lg:w-90% 2xl:w-70% h-42px md:h-50px uppercase font-bold text-sm md:text-base rounded-md border-1px border-dashed border-white text-white"
          >
            Xem thêm
          </button>
          <button
            v-else
            @click="handleShowLess"
            class="mb-10 w-full lg:w-90% 2xl:w-70% h-42px md:h-50px uppercase font-bold text-sm md:text-base rounded-md border-1px border-dashed border-white text-white"
          >
            Thu gọn
          </button>
        </div>
      </div>
    </div>

    <div class="h-400px md:h-490px bg-[url('/img/bg.jpg')] bg-cover bg-center px-4 lg:px-0">
      <div class="h-full flex justify-center flex-col lg:(w-1024px justify-normal items-center flex-row mx-auto)">
        <div class="lg:(w-1/2)">
          <div class="text-white">
            <h1 class="text-2xl font-bold">Bạn đã cài ứng dụng MyMobiFone chưa?</h1>
            <p class="mt-3 text-xl md:text-2xl font-normal">
              Cài ứng dụng My MobiFone để tận hưởng nhiều tiện ích và dịch vụ hơn!
            </p>
          </div>
        </div>
        <div class="mt-6 flex md:gap-6 lg:(mt-0 w-1/2 justify-end)">
          <a href="https://play.google.com/store/search?q=my%20mobifone&amp;c=apps&amp;hl=vi-VN" class="block">
            <IconGplay class="mx-auto w-80% md:w-full"
          /></a>
          <a href="https://apps.apple.com/vn/app/my-mobifone/id719320091?l=vi" class="block"
            ><IconAppStore class="mx-auto w-80% md:w-full"
          /></a>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <UModal v-model="modalOptions.open" prevent-close class="relative">
      <div
        v-if="modalOptions.data.isHot"
        class="absolute top-6 md:top-5 -left-1 bg-[url('/img/bg-hot.svg')] bg-cover w-66px h-22px flex items-center justify-center text-white"
      >
        HOT
      </div>
      <div class="flex items-center justify-center py-5 md(pt-8 pb-10) text-2xl font-bold text-white bg-blue1">
        {{ modalOptions.data.title }}
      </div>
      <div class="max-h-65vh overflow-y-auto">
        <div class="mt-4 px-4 md:(px-10)">
          <h1 class="text-2xl font-bold">{{ modalOptions.data.title }}</h1>
          <img :src="modalOptions.data.imgUrl" loading="lazy" class="mt-2" />
          <p class="mt-1 text-center font-bold text-red-500">
            {{ modalOptions.data.metaData.hotText }}
          </p>
          <div class="mt-3">
            <div v-for="(item, index) of modalOptions.data.metaData.contents" :key="index">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      <div class="mt-0 pb-6 md:(mt-4 pb-8) flex gap-8 px-10">
        <button
          @click="modalOptions.open = false"
          class="mt-6 w-full py-2 uppercase rounded-lg text-13px lg:text-base font-bold border border-solid border-black text-back to-blue1 hover:(text-#4096ff border-transparent)"
        >
          Đóng
        </button>
        <a
          :href="`sms:9318?&body=${modalOptions.data.title}`"
          class="flex items-center justify-center mt-6 w-full py-2 uppercase rounded-lg text-13px lg:text-base font-bold text-white bg-gradient-to-r from-blue2 to-blue1 hover:(text-#4096ff shadow-btn)"
          >Đăng ký</a
        >
      </div>
    </UModal>
  </div>
</template>
