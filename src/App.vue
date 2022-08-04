
<template>

  <header class="md:mx-auto lg:px-[135px] lg:pt-[40px] px-5 py-3">
    <nav class="justify-between flex items-center">
      <div class="text-black text-xl font-bold">
        FinLanding
      </div>

      <div class="hidden md:flex space-x-[32px]">
        <a class="text-[14px] text-black font-semibold leading-5" href="">Product</a>
        <a class="text-[14px] text-black font-semibold leading-5" href="">Template</a>
        <a class="text-[14px] text-black font-semibold leading-5" href="">Blog</a>
        <a class="text-[14px] text-black font-semibold leading-5" href="">Pricing</a>
      </div>

      <div class="hidden md:flex space-x-12 items-center">
        <a class="text-[14px] text-black font-semibold" href="">Sign In</a>
        <button
          class="bg-[#F57059] rounded-[40px] font-semibold text-white px-[35px] py-[17px]  text-[14px] text-center">Start
          Free</button>
      </div>
      <button aria-label="humburger" id="hamburger" class="relative w-10 h-10 -mr-2 md:hidden">
        <div aria-hidden="true" id="line" class="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300">
        </div>
        <div aria-hidden="true" id="line2"
          class="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"></div>
      </button>
    </nav>
  </header>
  <section class="mt-[26px] lg:flex lg:pb-[142px] pb-[90px]">
    <div class="mt-[94px] flex-col lg:ml-[134px] lg:w-[646px] mx-4">
      <h4 class="text-black lg:text-[22px] lg:leading-[25.78px] text-[18px] leading-5 mb-1 lg:font-bold font-extrabold">
        Product Growth Solution in Single Platform.
      </h4>
      <h1
        class="text-black lg:text-[60px] lg:leading-[80px] text-[50px] leading-[60px] font-extrabold mb-3 tracking-[-0.03em]">
        Managing business
        payments has never been
        easier</h1>
      <h5 class="text-[#757095] lg:text-xl lg:leading-[35px] text-[19px] leading-7 font-normal mb-[42px]">Never at water
        me might. On formed merits
        hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.</h5>
      <button
        class="px-[48px] py-[16px] rounded-[80px] bg-[#05796B] text-[white] text-[18px] leading-[25px] font-semibold text-center shadow-xl">
        Try for free
      </button>
      <div class="md:flex mt-[55px] md:gap-[50px]">
        <div class="flex-col mb-3">
          <h1 class="tracking-[-5%] leading-[52px] font-bold text-[#282828] text-[26px]">195k+ Users</h1>
          <h5 class=" text-[16px] tracking-[-5%] leading-[160%] font-normal text-[#8593A3]">Delightful remarkably mr on
            announcing themselves entreaties favourable.</h5>
        </div>
        <div class="flex-col">
          <h1 class="tracking-[-5%] leading-[52px] font-bold text-[#282828] text-[26px]">$400m+ Saved</h1>
          <h5 class=" text-[16px] tracking-[-5%] leading-[160%] font-normal text-[#8593A3]">About to in so terms voice
            at. Equal an would is found seems of and concluded.</h5>
        </div>
      </div>
    </div>
    <div class="">
      <img class="lg:w-[638px] lg:mr-[99px] " src="./assets/hero.svg">
    </div>
  </section>
  <section class="lg:mx-[91px] lg:mb-[95px] mb-[60px]">
    <h5 class="text-center text-[20px] leading-[24px] lg:text-[22px] lg:leading-[26px] font-bold mb-[39px] text-black">
      Over 32k+ software businesses growing with FinLanding
    </h5>
    <!-- <div class="flex flex-wrap justify-between items-center"> -->
    <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mx-2 items-center">
      <div class="p-4"> <img class="" src="./assets/1.svg"></div>
      <div class="p-4"><img class="" src="./assets/2.svg"></div>
      <div class="p-4"><img class="" src="./assets/3.svg"></div>
      <div class="p-4"><img class="" src="./assets/4.svg"></div>
      <div class="p-4"><img class="" src="./assets/5.svg"></div>
      <div class="p-4"><img class="" src="./assets/6.svg"></div>
      <div class="p-4"><img class="" src="./assets/7.svg"></div>
    </div>
  </section>
  <section class="bg-[url('./assets/bgservice.svg')] bg-right-top bg-no-repeat">
    <!-- <img src="./assets/bgservice.svg" class="absolute top-0 right-0 "> -->
    <div class="lg:mx-[135px] md:mx-8 mx-6 md:mb-[120px] mb-[60px]">
      <h5 class="text-center leading-[17px] text-[14px] font-bold text-black mb-[15px] uppercase">Our Services</h5>
      <h2
        class="tracking-[-0.03em] text-center lg:text-[40px] lg:leading-[52px] text-[30px] leading-[45px] text-black font-extrabold lg:mx-[200px] mb-[56px]">
        Save
        Time Managing Your Business With Our Best Services</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
        <div class="rounded-[15px] bg-white border-[1px] border-[#E7E7E7] pt-[57px] pb-[27px] pr-[60px] pl-[55px]">
          <div class="px-2 py-2 bg-[#ECECEC] rounded-[5px] mb-[25px] w-[40px] h-[40px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.45971 2.92969C4.08972 2.92969 2.99072 4.02868 2.99072 5.39868V8.46069C2.99072 9.83069 4.08972 10.9297 5.45971 10.9297H8.52172C9.89172 10.9297 10.9907 9.83069 10.9907 8.46069V5.39868C10.9907 4.02868 9.89172 2.92969 8.52172 2.92969H5.45971ZM14.9907 2.92969C13.8857 2.92969 12.9907 3.82469 12.9907 4.92969V8.92969C12.9907 10.0347 13.8857 10.9297 14.9907 10.9297H18.9907C20.0957 10.9297 20.9907 10.0347 20.9907 8.92969V4.92969C20.9907 3.82469 20.0957 2.92969 18.9907 2.92969H14.9907ZM14.9907 4.92969H18.9907V8.92969H14.9907V4.92969ZM8.14672 5.58569C8.34272 5.38969 8.63871 5.38969 8.83471 5.58569C9.03071 5.78269 9.03071 6.07768 8.83471 6.27368L6.83471 8.27368C6.63871 8.46968 6.34272 8.46968 6.14672 8.27368L5.14672 7.27368C4.95073 7.07668 4.95073 6.78169 5.14672 6.58569C5.34272 6.38969 5.63871 6.38969 5.83471 6.58569L6.49072 7.2417L8.14672 5.58569ZM4.99072 12.9297C3.88572 12.9297 2.99072 13.8247 2.99072 14.9297V18.9297C2.99072 20.0347 3.88572 20.9297 4.99072 20.9297H8.99071C10.0957 20.9297 10.9907 20.0347 10.9907 18.9297V14.9297C10.9907 13.8247 10.0957 12.9297 8.99071 12.9297H4.99072ZM14.9907 12.9297C13.8857 12.9297 12.9907 13.8247 12.9907 14.9297V18.9297C12.9907 20.0347 13.8857 20.9297 14.9907 20.9297H18.9907C20.0957 20.9297 20.9907 20.0347 20.9907 18.9297V14.9297C20.9907 13.8247 20.0957 12.9297 18.9907 12.9297H14.9907ZM4.99072 14.9297H8.99071V18.9297H4.99072V14.9297ZM14.9907 14.9297H18.9907V18.9297H14.9907V14.9297Z"
                fill="black" />
            </svg>
          </div>
          <h3 class="text-[20px] leading-[28px] tracking-[-0.02em] text-black font-bold mb-[2px]"> Project Management
          </h3>
          <h6 class="text-[12px] teacking-[-0.02em] leading-[30px] text-[#757095] font-medium">30 options available</h6>
        </div>
        <div class="rounded-[15px] bg-white border-[1px] border-[#E7E7E7] pt-[57px] pb-[27px] pr-[60px] pl-[55px]">
          <div class="px-2 py-2 bg-[#ECECEC] rounded-[5px] mb-[25px] w-[40px] h-[40px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.5525 2.4429C15.7458 2.4179 14.9042 2.70692 14.2602 3.35092L13.1247 4.49392C10.9557 4.36592 9.15945 4.9349 7.74005 5.9429C6.95275 6.5019 6.42355 7.05791 6.14625 7.47391C6.08275 7.56991 6.04905 7.67589 6.02125 7.78689L3.02125 19.7869C2.83825 20.5189 3.50765 21.1879 4.24005 21.0049L16.24 18.0049C16.3512 17.9779 16.4571 17.9439 16.5525 17.8799C16.9674 17.6039 17.5262 17.0729 18.0837 16.2869C19.0926 14.8649 19.6662 13.0729 19.5255 10.9119L20.7123 9.7319C22.0004 8.4439 21.7505 6.38391 20.6691 5.30191L18.6857 3.32992C18.145 2.78992 17.3592 2.4679 16.5525 2.4429ZM16.5212 4.4429C16.8179 4.4529 17.1386 4.58094 17.3166 4.75894L19.2712 6.75491C19.6272 7.11091 19.7433 7.8619 19.3059 8.2999L18.49 9.12991C17.3996 8.03991 15.8959 6.51494 14.9116 5.52994L15.7233 4.72891C15.942 4.50991 16.2246 4.4339 16.5212 4.4429ZM12.9996 6.4899C13.8257 7.3099 16.6697 10.1359 17.527 10.9869C17.6442 12.6679 17.2326 14.0389 16.4587 15.1299C16.2217 15.4649 15.9583 15.7459 15.7087 15.9739C15.6124 16.0619 15.573 16.0899 15.5212 16.1299L7.25975 18.1849L11.472 13.9759C11.6189 14.0109 11.8326 14.0369 11.99 14.0369C13.0946 14.0369 13.99 13.1409 13.99 12.0369C13.99 10.9319 13.0946 10.0369 11.99 10.0369C10.8854 10.0369 9.99005 10.9319 9.99005 12.0369C9.99005 12.1939 10.0226 12.4029 10.057 12.5499L5.83225 16.7909L7.89625 8.50491C7.93655 8.45291 7.96405 8.4149 8.05255 8.3179C8.28155 8.0669 8.56115 7.8059 8.89625 7.5679C9.97785 6.7999 11.341 6.3849 12.9996 6.4899Z"
                fill="black" />
            </svg>

          </div>
          <h3 class="text-[20px] leading-[28px] tracking-[-0.02em] text-black font-bold mb-[2px]"> Web & Mobile
            Development</h3>
          <h6 class="text-[12px] teacking-[-0.02em] leading-[30px] text-[#757095] font-medium">40 options available</h6>
        </div>
        <div class="rounded-[15px] bg-white border-[1px] border-[#E7E7E7] pt-[57px] pb-[27px] pr-[60px] pl-[55px] ">
          <div class="px-2 py-2 bg-[#ECECEC] rounded-[5px] mb-[25px] w-[40px] h-[40px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.999 2.01416C8.63396 2.01416 5.69296 4.19216 4.56396 7.04916C3.12796 7.22216 1.99896 8.52915 1.99896 10.0141V14.0141C1.99896 15.6711 3.34196 17.0141 4.99896 17.0141C6.65596 17.0141 7.99896 15.6711 7.99896 14.0141V10.0141C7.99896 8.95315 7.39497 7.97614 6.56497 7.44314C7.46797 5.48314 9.57496 4.01416 11.999 4.01416C14.429 4.01416 16.481 5.42216 17.418 7.45016C16.57 7.99116 15.999 8.96815 15.999 10.0141V14.0141C15.999 14.6501 16.246 15.3551 16.617 15.8451C15.99 16.5821 15.33 17.0851 14.558 17.4551C13.996 16.5561 13.045 16.0141 11.999 16.0141C10.342 16.0141 8.99896 17.3571 8.99896 19.0141C8.99896 20.6711 10.342 22.0141 11.999 22.0141C13.509 22.0141 14.75 20.8941 14.96 19.4421C16.131 19.0021 17.41 18.1291 18.308 16.9261C18.547 16.9861 18.742 17.0141 18.999 17.0141C20.656 17.0141 21.999 15.6711 21.999 14.0141V10.0141C21.999 8.51415 20.867 7.26316 19.429 7.04116C18.249 4.09616 15.345 2.01416 11.999 2.01416ZM4.99896 9.01415C5.55096 9.01415 5.99896 9.46215 5.99896 10.0141V14.0141C5.99896 14.5661 5.55096 15.0141 4.99896 15.0141C4.44696 15.0141 3.99896 14.5661 3.99896 14.0141V10.0141C3.99896 9.46215 4.44696 9.01415 4.99896 9.01415ZM18.999 9.01415C19.551 9.01415 19.999 9.46215 19.999 10.0141V14.0141C19.999 14.5661 19.551 15.0141 18.999 15.0141C18.447 15.0141 17.999 14.5661 17.999 14.0141V10.0141C17.999 9.46215 18.447 9.01415 18.999 9.01415ZM11.999 18.0141C12.551 18.0141 12.999 18.4621 12.999 19.0141C12.999 19.5661 12.551 20.0141 11.999 20.0141C11.447 20.0141 10.999 19.5661 10.999 19.0141C10.999 18.4621 11.447 18.0141 11.999 18.0141Z"
                fill="black" />
            </svg>

          </div>
          <h3 class="text-[20px] leading-[28px] tracking-[-0.02em] text-black font-bold mb-[2px]">Customer Support</h3>
          <h6 class="text-[12px] teacking-[-0.02em] leading-[30px] text-[#757095] font-medium">17 options available</h6>
        </div>
        <div class="rounded-[15px] bg-white border-[1px] border-[#E7E7E7] pt-[57px] pb-[27px] pr-[60px] pl-[55px]">
          <div class="px-2 py-2 bg-[#ECECEC] rounded-[5px] mb-[25px] w-[40px] h-[40px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.4989 2.92969C13.0136 2.92969 10.9989 4.94469 10.9989 7.42969C10.9989 9.91469 13.0136 11.9297 15.4989 11.9297C17.9842 11.9297 19.9989 9.91469 19.9989 7.42969C19.9989 4.94469 17.9842 2.92969 15.4989 2.92969ZM7.9989 3.92969C5.7898 3.92969 3.9989 5.72069 3.9989 7.92969C3.9989 10.1387 5.7898 11.9297 7.9989 11.9297C8.8283 11.9297 9.6139 11.6767 10.2801 11.2107C10.7328 10.8947 10.8465 10.2577 10.5301 9.80469C10.2137 9.35169 9.6078 9.26969 9.1551 9.58569C8.8222 9.81869 8.4151 9.92969 7.9989 9.92969C6.8943 9.92969 5.9989 9.03469 5.9989 7.92969C5.9989 6.82469 6.8943 5.92969 7.9989 5.92969C8.3251 5.92969 8.6235 6.00168 8.9051 6.14868C9.3951 6.40368 10.0253 6.2317 10.2801 5.7417C10.535 5.2527 10.3326 4.62168 9.8427 4.36768C9.2776 4.07368 8.6483 3.92969 7.9989 3.92969ZM15.4989 4.92969C16.8796 4.92969 17.9989 6.04869 17.9989 7.42969C17.9989 8.81069 16.8796 9.92969 15.4989 9.92969C14.1182 9.92969 12.9989 8.81069 12.9989 7.42969C12.9989 6.04869 14.1182 4.92969 15.4989 4.92969ZM5.0614 13.2737C3.2273 14.0307 1.9989 15.8857 1.9989 17.9297V19.9297C1.9989 20.4817 2.4466 20.9297 2.9989 20.9297H6.9989C7.5512 20.9297 7.9989 20.4817 7.9989 19.9297C7.9989 19.3777 7.5512 18.9297 6.9989 18.9297H3.9989V17.9297C3.9989 16.8057 4.6656 15.7737 5.4319 15.3197C6.1526 15.6237 6.915 15.8537 7.593 15.9107C8.1434 15.9577 8.6397 15.5427 8.6864 14.9917C8.7331 14.4417 8.3354 13.9757 7.7851 13.9287C7.3461 13.8917 6.8663 13.7597 6.3114 13.5237C6.1774 13.4667 6.0996 13.4217 5.8427 13.3047C5.5908 13.1897 5.3172 13.1677 5.0614 13.2737ZM12.0614 13.2737C10.2273 14.0307 8.9989 15.8857 8.9989 17.9297V19.9297C8.9989 20.4817 9.4466 20.9297 9.9989 20.9297H20.9989C21.5512 20.9297 21.9989 20.4817 21.9989 19.9297V17.9297C21.9989 15.9337 20.7637 14.1237 18.9364 13.3357C18.6792 13.2247 18.3795 13.2217 18.1239 13.3357C17.2391 13.7327 16.3771 13.9297 15.4989 13.9297C14.6237 13.9297 13.7587 13.7217 12.8427 13.3047C12.5908 13.1897 12.3172 13.1677 12.0614 13.2737ZM12.4459 15.3197C13.3907 15.6777 14.5298 15.9297 15.4989 15.9297C16.4604 15.9297 17.5524 15.6947 18.4781 15.3527C19.3807 15.8667 19.9989 16.8287 19.9989 17.9297V18.9297H10.9989V17.9297C10.9989 16.7647 11.6548 15.7827 12.4459 15.3197Z"
                fill="black" />
            </svg>
          </div>
          <h3 class="text-[20px] leading-[28px] tracking-[-0.02em] text-black font-bold mb-[2px]"> Human Resources</h3>
          <h6 class="text-[12px] teacking-[-0.02em] leading-[30px] text-[#757095] font-medium">21 options available</h6>
        </div>
        <div class="rounded-[15px] bg-white border-[1px] border-[#E7E7E7] pt-[57px] pb-[27px] pr-[60px] pl-[55px]">
          <div class="px-2 py-2 bg-[#ECECEC] rounded-[5px] mb-[25px] w-[40px] h-[40px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.99907 2.99072C5.95007 2.99072 5.72807 3.02773 5.65507 3.05373C5.39507 3.14473 5.19906 3.32073 5.09306 3.55373L2.18406 9.38572C2.18406 9.38572 2.00607 9.62672 1.99907 9.99372C1.99207 10.3607 2.26207 10.6537 2.26207 10.6537L11.2181 21.6237C11.6181 22.1127 12.3801 22.1127 12.7801 21.6237C13.0591 21.2827 21.7711 10.6047 21.7711 10.6047C21.7711 10.6047 21.9931 10.3227 21.9991 9.99372C22.0061 9.66472 21.8311 9.43174 21.8311 9.43174L18.9051 3.55373C18.7991 3.32073 18.6031 3.14473 18.3431 3.05373C18.2701 3.02773 18.0491 2.99072 17.9991 2.99072H5.99907ZM7.40507 4.99173H16.5931L15.1871 8.99372H8.81205L7.40507 4.99173ZM5.84306 6.55472L6.71806 8.99372H4.62407L5.84306 6.55472ZM18.1551 6.55472L19.3741 8.99372H17.2801L18.1551 6.55472ZM5.12407 10.9937H7.40507L9.15507 15.9337L5.12407 10.9937ZM9.53007 10.9937H14.4681L11.9991 17.9977L9.53007 10.9937ZM16.5931 10.9937H18.8741C17.9161 12.1647 16.5261 13.8797 14.8431 15.9337L16.5931 10.9937Z"
                fill="black" />
            </svg>
          </div>
          <h3 class="text-[20px] leading-[28px] tracking-[-0.02em] text-black font-bold mb-[2px]">Design & Creatives
          </h3>
          <h6 class="text-[12px] teacking-[-0.02em] leading-[30px] text-[#757095] font-medium">13 options available</h6>
        </div>
        <div class="rounded-[15px] bg-white border-[1px] border-[#E7E7E7] pt-[57px] pb-[27px] pr-[60px] pl-[55px]">
          <div class="px-2 py-2 bg-[#ECECEC] rounded-[5px] mb-[25px] w-[40px] h-[40px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.00057 1.95312C8.55897 1.95312 8.15866 2.24912 8.03176 2.67212L5.03176 12.6721C4.83936 13.3131 5.33066 13.9531 6.00056 13.9531H9.87557L9.00057 20.8281C8.86967 21.8751 10.2586 22.3931 10.8446 21.5161L18.8446 9.51611C19.2876 8.85111 18.7996 7.95312 18.0006 7.95312H13.3756L14.9386 3.26611C15.1536 2.61811 14.6836 1.95312 14.0006 1.95312C13.3756 1.95312 9.62557 1.95312 9.00057 1.95312ZM9.75057 3.95312C10.5686 3.95312 11.5496 3.95312 12.6256 3.95312L11.0626 8.64111C10.8476 9.28811 11.3176 9.95312 12.0006 9.95312H16.1256L11.5316 16.8281L12.0006 13.0781C12.0756 12.4811 11.6016 11.9531 11.0006 11.9531H7.34437L9.75057 3.95312Z"
                fill="black" />
            </svg>
          </div>
          <h3 class="text-[20px] leading-[28px] tracking-[-0.02em] text-black font-bold mb-[2px]"> Marketing &
            Communication
          </h3>
          <h6 class="text-[12px] teacking-[-0.02em] leading-[30px] text-[#757095] font-medium">27 options available</h6>
        </div>
        <div class="rounded-[15px] bg-white border-[1px] border-[#E7E7E7] pt-[57px] pb-[27px] pr-[60px] pl-[55px] ">
          <div class="px-2 py-2 bg-[#ECECEC] rounded-[5px] mb-[25px] w-[40px] h-[40px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.9989 2.99072C8.7898 2.99072 6.9989 4.78172 6.9989 6.99072H5.9989C3.7898 6.99072 1.9989 8.78172 1.9989 10.9907V16.9907C1.9989 19.1997 3.7898 20.9907 5.9989 20.9907H17.9989C20.208 20.9907 21.9989 19.1997 21.9989 16.9907V10.9907C21.9989 8.78172 20.208 6.99072 17.9989 6.99072H16.9989C16.9989 4.78172 15.208 2.99072 12.9989 2.99072H10.9989ZM10.9989 4.99072H12.9989C14.1035 4.99072 14.9989 5.88572 14.9989 6.99072H8.9989C8.9989 5.88572 9.8943 4.99072 10.9989 4.99072ZM5.9989 8.99072H17.9989C19.1035 8.99072 19.9989 9.88572 19.9989 10.9907V11.2717L14.6551 13.0527C13.2201 13.5317 10.7777 13.5317 9.3427 13.0527L3.9989 11.2717V10.9907C3.9989 9.88572 4.8943 8.99072 5.9989 8.99072ZM3.9989 13.3657L8.7177 14.9597C10.5632 15.5747 13.4346 15.5747 15.2801 14.9597L19.9989 13.3657V16.9907C19.9989 18.0957 19.1035 18.9907 17.9989 18.9907H5.9989C4.8943 18.9907 3.9989 18.0957 3.9989 16.9907V13.3657Z"
                fill="black" />
            </svg>

          </div>
          <h3 class="text-[20px] leading-[28px] tracking-[-0.02em] text-black font-bold mb-[2px]">Business Development
          </h3>
          <h6 class="text-[12px] teacking-[-0.02em] leading-[30px] text-[#757095] font-medium">22 options available</h6>
        </div>
        <div class="rounded-[15px] border-[1px] border-[#E7E7E7] pt-[80px] pb-[27px] pr-[60px] bg-[#05796B] pl-[55px]">

          <h3 class="text-[33px] leading-[28px] tracking-[-0.02em] text-white font-bold mb-[18px]"> +4 </h3>
          <h3 class="text-[33px] leading-[28px] tracking-[-0.02em] text-white font-bold mb-[17px]"> More</h3>
          <h6 class="text-[12px] teacking-[-0.02em] leading-[30px] text-[#ffff] font-medium">170+ options available</h6>
        </div>
      </div>
    </div>
  </section>
  <section class="lg:mx-[160px] mx-3 lg:mb-[162px] mb-[80px]">
    <img src="./assets/62.svg" class="mx-auto mb-[15px]">
    <h3 class="font-extrabold text-[40px] leading-[48px] text-black text-center tracking-[-0.03em] mb-[14px]">Learn More
      About Process
    </h3>
    <h4
      class="font-normal lg:mx-[270px] text-[20px] leading-[35px] text-[#757095] text-center tracking-[-0.02em] mb-[46px]">
      Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably.
    </h4>
    <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> -->
    <div class="lg:flex lg:-ml-11">
      <div class="min-w-[320px] lg:mb-0 mb-20">
        <div class="relative w-[180px] h-[180px] mx-auto lg:mb-[54px] mb-2">
          <div
            class="absolute -top-[20px] -left-[20px] w-10 h-10 rounded-[80px] hover:shadow-num bg-[#F6F6F7] text-center px-[10px] py-[10px] text-[black] text-[18px] font-bold">
            1</div>
          <!-- <img src="./assets/process1.svg" class='mb-[24px] mx-auto' alt=""> -->
          <!-- <div class="rounded-[80px] h-[160px] w-[160px] px-10 py-10 mx-auto bg-white shadow-progress"> -->
          <div
            class="rounded-[80px] h-[160px] w-[160px] px-10 py-10 mx-auto bg-white border border-dashed border-[#939393] hover:shadow-progress hover:border-none hover:transition hover:duration-500 hover:ease-in">
            <img src="./assets/profile-circle.svg" alt="">
          </div>
        </div>
        <h3
          class="font-semibold text-[24px] leading-[27px] text-[#282828] text-center tracking-[-0.05em] lg:mb-[16px] mb-3">
          Register
        </h3>
        <h4 class="font-normal text-[16px] leading-[32px] text-[#757095] text-center tracking-[-0.02em]">It more shed
          went up is roof if loud case. Delay music in lived noise an.
        </h4>
      </div>
      <img src="./assets/v1.svg" class="lg:-mx-[45px] lg:-mt-[150px] hidden lg:block" alt="">
      <div class="min-w-[320px] lg:mb-0 mb-20">
        <div class="relative w-[180px] h-[180px] mx-auto lg:mb-[54px] mb-2">
          <div
            class="absolute -top-[20px] -left-[20px] w-10 h-10 rounded-[80px] hover:shadow-num bg-[#F6F6F7] text-center px-[10px] py-[10px] text-[black] text-[18px] font-bold">
            2</div>
          <!-- <img src="./assets/process1.svg" class='mb-[24px] mx-auto' alt=""> -->
          <div
            class="rounded-[80px] h-[160px] w-[160px] px-10 py-10 mx-auto bg-white border border-dashed border-[#939393] hover:shadow-progress hover:border-none hover:transition hover:duration-500 hover:ease-in">
            <img src="./assets/setting-2.svg" alt="">
          </div>
        </div>
        <h3
          class="font-semibold text-[24px] leading-[27px] text-[#282828] text-center tracking-[-0.05em] lg:mb-[16px] mb-3">
          Complete Setup
        </h3>
        <h4 class="font-normal text-[16px] leading-[32px] text-[#757095] text-center tracking-[-0.02em]">Beyond genius
          really enough passed is up. ‍
          Up maids me an ample stood given.
        </h4>
      </div>
      <img src="./assets/v2.svg" class="lg:-mx-[45px] lg:-mt-[150px] hidden lg:block" alt="">
      <div class="min-w-[320px] lg:mb-0">
        <div class="relative w-[180px] h-[180px] mx-auto lg:mb-[54px] mb-2">
          <div
            class="absolute -top-[20px] -left-[20px] w-10 h-10 rounded-[80px] hover:shadow-num bg-[#F6F6F7] text-center px-[10px] py-[10px] text-[black] text-[18px] font-bold">
            3</div>
          <!-- <img src="./assets/process1.svg" class='mb-[24px] mx-auto' alt=""> -->
          <div
            class="rounded-[80px] h-[160px] w-[160px] px-10 py-10 mx-auto bg-white border border-dashed border-[#939393] hover:shadow-progress hover:border-none hover:transition hover:duration-500 hover:ease-in">
            <img src="./assets/flash.svg" alt="">
          </div>
        </div>
        <h3
          class="font-semibold text-[24px] leading-[27px] text-[#282828] text-center tracking-[-0.05em] lg:mb-[16px] mb-3">
          Utilize App
        </h3>
        <h4 class="font-normal text-[16px] leading-[32px] text-[#757095] text-center tracking-[-0.02em]">Certainty say
          suffering his him collected intention promotion. Hill sold ham men.
        </h4>
      </div>
    </div>
  </section>
  <section class="lg:mx-[370px] mx-3 lg:mb-[110px] mb-[80px]">
    <h2 class="font-bold text-[14px] leading-[17px] text-[#F57059] uppercase text-center mb-[20px]">Project Management
      App</h2>
    <h3
      class="font-extrabold lg:text-[40px] lg:leading-[48px] text-[30px] leading-[38px] text-[black] text-center tracking-[-0.03em] lg:mb-[23px] mb-3">
      Download our app and start your free trail to get started today!
    </h3>
    <h5
      class="font-normal lg:text-[20px] lg:leading-[35px] text-[18px] leading-[32px] text-[#757095] text-center tracking-[-0.02em] lg:mb-[24px] mb-4">
      End-to-end payments and financial management in a single solution.
    </h5>
    <div class="flex justify-center lg:gap-x-[11px] gap-x-2">
      <button
        class="text-white bg-[#F57059] font-semibold text-[16px] leading-[30px] tracking-[-0.02em] flex gap-x-2 rounded-full items-center lg:px-[35px] lg:py-3 px-5 py-2 text-center">
        <svg class="" width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_1146)">
            <path
              d="M14.1271 11.0997C14.1271 9.36911 15.0589 7.85945 16.4413 7.05989C15.7194 6.16078 14.6336 5.355 13.4367 5.11856C11.8045 4.79578 10.8735 5.33322 10.2712 5.54867C9.66887 5.76411 8.86887 5.95778 8.86887 5.95778C8.86887 5.95778 8.06964 5.76411 7.46657 5.54867C6.86504 5.33322 5.934 4.795 4.30182 5.11778C2.66963 5.44056 1.24435 6.82267 0.665037 8.05467C-0.452204 10.4323 0.00756602 13.4237 0.796838 15.575C1.58534 17.7271 3.6704 20.734 5.28726 20.9759C6.43745 21.1478 7.14933 20.3412 8.86887 20.1367C10.5884 20.3412 11.3003 21.1478 12.4505 20.9759C14.0673 20.734 16.1524 17.7271 16.9409 15.575C16.9601 15.5221 16.98 15.4677 16.9991 15.4132C15.3156 14.7272 14.1271 13.0542 14.1271 11.0997ZM8.46044 4.725C8.46044 4.725 10.0597 4.94045 11.5118 3.26667C12.9639 1.59289 12.5509 0.00933541 12.5509 0.00933541C12.5509 0.00933541 10.9516 -0.206109 9.49952 1.46767C8.04741 3.14145 8.46044 4.725 8.46044 4.725Z"
              fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_1_1146">
              <rect width="17" height="21" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Playstore
      </button>
      <button
        class="text-white bg-[#05796B] font-semibold text-[16px] leading-[30px] tracking-[-0.02em] flex gap-x-2 rounded-full items-center lg:px-[35px] lg:py-3 px-5 py-2 text-center">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.56747 6.00003C7.90214 5.95658 8.24151 6.03081 8.52747 6.21003L18.2775 11.7525L15.81 14.25L7.56747 6.00003ZM6.81747 6.75003C6.77045 6.91331 6.74771 7.08262 6.74997 7.25253V22.7475C6.74771 22.9174 6.77045 23.0867 6.81747 23.25L15.0675 15L6.81747 6.75003ZM15.8175 15.75L7.56747 24C7.9023 24.0474 8.24301 23.9729 8.52747 23.79L18.2775 18.2475L15.8175 15.75ZM22.2075 13.995L19.2525 12.315L16.5525 15L19.245 17.6925L22.2 16.0125C23.175 15.4575 23.175 14.5425 22.2 13.9875L22.2075 13.995Z"
            fill="white" />
        </svg>
        Google Play
      </button>
    </div>
  </section>
  <section class="lg:mx-[120px] mx-4 lg:mb-[85px] mb-20">
    <div class="lg:flex items-center lg:justify-between">
      <img src="./assets/woman.svg" alt="">
      <div class="">
        <h2 class="font-extrabold text-[40px] leading-[52px] text-[black]  tracking-[-0.03em] lg:mb-[32px] mb-5">
          My little garret repair to desire he esteem.
        </h2>
        <h2
          class="font-normal text-[20px] leading-[35px] text-[#757095] lg:w-[400px]  tracking-[-0.02em] lg:mb-[48px] mb-8">
          Just like we said before, we have tons of features that will helps you to manage you wallet. From income,
          outcome, montly usage, and etc.
        </h2>
        <button
          class="text-white bg-[#05796B] font-semibold text-[18px] shadow-button leading-[25px] tracking-[-0.02em] rounded-[80px] items-center  px-[48px] py-[15px] text-center">
          Try For Free
        </button>
      </div>
    </div>
  </section>
  <section class="bg-[url('./assets/bgsec.svg')] bg-bottom bg-no-repeat lg:mb-[156px] mb-28">
    <div class="lg:mx-[392px] mx-4">
      <h2
        class="font-extrabold text-[46px] leading-[55px] text-[black] text-center tracking-[-0.03em] lg:mb-[32px] mb-5">
        Start today, with free or premium plan, you choose
      </h2>
      <h3
        class="font-normal text-[20px] leading-[35px] text-[#757095]  text-center tracking-[-0.02em] lg:mb-[60px] mb-10">
        With lots of unique and useful features, you can easily manage your wallet easily without any problem.
      </h3>
    </div>
    <div class="lg:mx-[342px] mx-4 lg:flex lg:gap-x-[32px]">
      <!-- one pricing -->
      <div class="p-[32px] bg-white rounded-[16px] shadow-pricing lg:mb-0 mb-11">
        <h2 class="font-medium text-[16px] leading-[0.06em] text-[#05796B] uppercase lg:mb-[32px] mb-5">
          Basic Plan
        </h2>
        <div class="flex lg:mb-[32px] mb-5 items-end">
          <h2 class="font-bold text-[64px] leading-[115%] text-[#282828] mr-[7px]">
            $0
          </h2>
          <h2 class="font-bold text-[16px] leading-[115%] text-[#8593A3] tracking-[-0.05em] ">
            per month
          </h2>
        </div>
        <h2
          class="font-medium text-[16px] leading-[200%] text-[#8593A3] tracking-[-0.05em] border-b-2 lg:mb-[32px] pb-[32px] mb-5">
          Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning
          assured.
        </h2>
        <div class="lg:mb-[32px] mb-5">
          <div
            class="flex gap-x-[20px] font-medium text-[16px] leading-[200%] text-[#8593A3] tracking-[-0.05em] lg:mb-4 mb-3 items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM15.7127 10.7197C16.0055 10.4268 16.0055 9.95192 15.7127 9.65903C15.4198 9.36614 14.9449 9.36614 14.652 9.65903L10.9397 13.3713L9.34869 11.7804C9.0558 11.4875 8.58092 11.4875 8.28803 11.7804C7.99514 12.0732 7.99514 12.5481 8.28803 12.841L10.4093 14.9623C10.7022 15.2552 11.1771 15.2552 11.47 14.9623L15.7127 10.7197Z"
                fill="#05796B" />
            </svg>
            Customer Support
          </div>
          <div
            class="flex gap-x-[20px] font-medium text-[16px] leading-[200%] text-[#8593A3] tracking-[-0.05em] lg:mb-4 mb-3 items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM15.7127 10.7197C16.0055 10.4268 16.0055 9.95192 15.7127 9.65903C15.4198 9.36614 14.9449 9.36614 14.652 9.65903L10.9397 13.3713L9.34869 11.7804C9.0558 11.4875 8.58092 11.4875 8.28803 11.7804C7.99514 12.0732 7.99514 12.5481 8.28803 12.841L10.4093 14.9623C10.7022 15.2552 11.1771 15.2552 11.47 14.9623L15.7127 10.7197Z"
                fill="#05796B" />
            </svg>
            Free User Account
          </div>
          <div
            class="flex gap-x-[20px] font-medium text-[16px] leading-[200%] text-[#8593A3] tracking-[-0.05em] lg:mb-4 mb-3 items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM9.87896 8.81803C9.58607 8.52513 9.1112 8.52513 8.8183 8.81803C8.52541 9.11092 8.52541 9.5858 8.8183 9.87869L10.9396 12L8.81831 14.1213C8.52542 14.4142 8.52542 14.8891 8.81831 15.182C9.1112 15.4749 9.58608 15.4749 9.87897 15.182L12.0003 13.0607L14.1216 15.182C14.4145 15.4749 14.8894 15.4749 15.1823 15.182C15.4752 14.8891 15.4752 14.4142 15.1823 14.1213L13.0609 12L15.1823 9.87869C15.4752 9.5858 15.4752 9.11092 15.1823 8.81803C14.8894 8.52513 14.4145 8.52513 14.1216 8.81803L12.0003 10.9394L9.87896 8.81803Z"
                fill="#FF6954" fill-opacity="0.32" />
            </svg>
            Monthly Reports
          </div>
          <div
            class="flex gap-x-[20px] font-medium text-[16px] leading-[200%] text-[#8593A3] tracking-[-0.05em] items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM9.87896 8.81803C9.58607 8.52513 9.1112 8.52513 8.8183 8.81803C8.52541 9.11092 8.52541 9.5858 8.8183 9.87869L10.9396 12L8.81831 14.1213C8.52542 14.4142 8.52542 14.8891 8.81831 15.182C9.1112 15.4749 9.58608 15.4749 9.87897 15.182L12.0003 13.0607L14.1216 15.182C14.4145 15.4749 14.8894 15.4749 15.1823 15.182C15.4752 14.8891 15.4752 14.4142 15.1823 14.1213L13.0609 12L15.1823 9.87869C15.4752 9.5858 15.4752 9.11092 15.1823 8.81803C14.8894 8.52513 14.4145 8.52513 14.1216 8.81803L12.0003 10.9394L9.87896 8.81803Z"
                fill="#FF6954" fill-opacity="0.32" />
            </svg>
            Multiple Devices
          </div>
        </div>
        <button
          class="px-8 py-4 rounded-[80px] lg:mb-[32px] mb-5 w-full self-stretch font-semibold text-[18px] leading-[25px] drop-shadow-pricing text-[#8593A3] tracking-[-0.05em]"
          style="border: 1px solid rgba(133, 147, 163, 0.32);">
          Join for free
        </button>
      </div>

      <!-- Another pricing -->
      <!-- <div class="relative"> -->
      <!-- <div
          class="absolute -top-[16px] -right-[16px]  rounded-[80px]  bg-[#282828] text-center px-8 py-4 text-[white] text-[14px] leading-[19px] tracking-tighter font-medium">
          Best Choice
        </div> -->
      <div class="p-[32px] bg-[#05796B] rounded-[16px] shadow-pricing2">
        <h2 class="font-medium text-[16px] leading-[0.06em] text-[white] uppercase lg:mb-[32px] mb-5">
          PREMIUM PLAN
        </h2>
        <div class="flex lg:mb-[32px] mb-5 items-end">
          <h2 class="font-bold text-[64px] leading-[115%] text-[white] mr-[7px]">
            $49
          </h2>
          <h2 class="font-bold text-[16px] leading-[115%] text-[white] tracking-[-0.05em] ">
            per month
          </h2>
        </div>
        <h2
          class="font-medium text-[16px] leading-[200%] text-[white] tracking-[-0.05em] border-b lg:mb-[32px] pb-[32px] mb-5">
          Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning
          assured.
        </h2>
        <div class="lg:mb-[32px] mb-5">
          <div
            class="flex gap-x-[20px] font-medium text-[16px] leading-[200%] text-[white] tracking-[-0.05em] lg:mb-4 mb-3 items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM15.7127 10.7197C16.0055 10.4268 16.0055 9.95192 15.7127 9.65903C15.4198 9.36614 14.9449 9.36614 14.652 9.65903L10.9397 13.3713L9.34869 11.7804C9.0558 11.4875 8.58092 11.4875 8.28803 11.7804C7.99514 12.0732 7.99514 12.5481 8.28803 12.841L10.4093 14.9623C10.7022 15.2552 11.1771 15.2552 11.47 14.9623L15.7127 10.7197Z"
                fill="white" />
            </svg>

            Customer Support
          </div>
          <div
            class="flex gap-x-[20px] font-medium text-[16px] leading-[200%] text-[white] tracking-[-0.05em] lg:mb-4 mb-3 items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM15.7127 10.7197C16.0055 10.4268 16.0055 9.95192 15.7127 9.65903C15.4198 9.36614 14.9449 9.36614 14.652 9.65903L10.9397 13.3713L9.34869 11.7804C9.0558 11.4875 8.58092 11.4875 8.28803 11.7804C7.99514 12.0732 7.99514 12.5481 8.28803 12.841L10.4093 14.9623C10.7022 15.2552 11.1771 15.2552 11.47 14.9623L15.7127 10.7197Z"
                fill="white" />
            </svg>
            Upto 10 Users
          </div>
          <div
            class="flex gap-x-[20px] font-medium text-[16px] leading-[200%] text-[white] tracking-[-0.05em] lg:mb-4 mb-3 items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM15.7127 10.7197C16.0055 10.4268 16.0055 9.95192 15.7127 9.65903C15.4198 9.36614 14.9449 9.36614 14.652 9.65903L10.9397 13.3713L9.34869 11.7804C9.0558 11.4875 8.58092 11.4875 8.28803 11.7804C7.99514 12.0732 7.99514 12.5481 8.28803 12.841L10.4093 14.9623C10.7022 15.2552 11.1771 15.2552 11.47 14.9623L15.7127 10.7197Z"
                fill="white" />
            </svg>

            Monthly Reports
          </div>
          <div
            class="flex gap-x-[20px] font-medium text-[16px] leading-[200%] text-[white] tracking-[-0.05em] items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM15.7127 10.7197C16.0055 10.4268 16.0055 9.95192 15.7127 9.65903C15.4198 9.36614 14.9449 9.36614 14.652 9.65903L10.9397 13.3713L9.34869 11.7804C9.0558 11.4875 8.58092 11.4875 8.28803 11.7804C7.99514 12.0732 7.99514 12.5481 8.28803 12.841L10.4093 14.9623C10.7022 15.2552 11.1771 15.2552 11.47 14.9623L15.7127 10.7197Z"
                fill="white" />
            </svg>

            Multiple Devices Supported
          </div>
        </div>
        <button
          class="px-8 py-4 rounded-[80px] bg-white shadow-insidebutton lg:mb-[32px] mb-5 w-full self-stretch font-semibold text-[18px] leading-[25px] drop-shadow-pricing text-[#282828] tracking-[-0.05em]"
          style="border: 1px solid rgba(255, 255, 255, 0.32);">
          Get the premium
        </button>
      </div>

      <!-- </div> -->
    </div>
  </section>
  <section class="lg:mx-[120px] mx-6 lg:mb-[120px] mb-28">
    <h2 class="font-bold text-[14px] leading-[17px] text-[#3734A9] text-center lg:mb-[16px] mb-3 uppercase">
      Testimonials
    </h2>
    <h2 class="font-extrabold text-[40px] leading-[52px] text-[black] text-center tracking-[-0.03em] lg:mb-[38px] mb-7">
      Check what our clients are saying
    </h2>
    <div class="lg:flex justify-between items-center">
      <img src="./assets/ladyimg.svg" alt="">
      <div class="lg:w-[554px]">
        <svg class="mb-[20px]" width="31" height="27" viewBox="0 0 31 27" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M31 0.26625L30.2177 5.88921C28.653 5.75768 27.3817 6.02075 26.4038 6.6784C25.4259 7.30318 24.7413 8.2239 24.3502 9.44056C23.9916 10.6243 23.9264 12.0054 24.1546 13.5838H31V27H17.7003V13.5838C17.7003 8.84867 18.7923 5.26444 20.9763 2.83111C23.1604 0.3649 26.5016 -0.490055 31 0.26625ZM13.2997 0.26625L12.5173 5.88921C10.9527 5.75768 9.68139 6.02075 8.70347 6.6784C7.72555 7.30318 7.04101 8.2239 6.64984 9.44056C6.29127 10.6243 6.22608 12.0054 6.45426 13.5838H13.2997V27H0V13.5838C0 8.84867 1.09201 5.26444 3.27603 2.83111C5.46004 0.3649 8.80126 -0.490055 13.2997 0.26625Z"
            fill="#FBB57B" />
        </svg>
        <svg class="mb-[20px]" width="145" height="29" viewBox="0 0 145 29" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.5489 2.92705C13.8483 2.00574 15.1517 2.00574 15.4511 2.92705L17.5309 9.32827C17.6648 9.74029 18.0488 10.0193 18.482 10.0193L25.2126 10.0193C26.1814 10.0193 26.5841 11.2589 25.8004 11.8283L20.3552 15.7844C20.0047 16.0391 19.8581 16.4905 19.9919 16.9025L22.0718 23.3037C22.3712 24.225 21.3167 24.9911 20.533 24.4217L15.0878 20.4656C14.7373 20.2109 14.2627 20.2109 13.9122 20.4656L8.46701 24.4217C7.6833 24.9911 6.62882 24.225 6.92817 23.3037L9.00805 16.9025C9.14193 16.4905 8.99527 16.0391 8.64478 15.7844L3.19958 11.8283C2.41586 11.2589 2.81864 10.0193 3.78736 10.0193L10.518 10.0193C10.9512 10.0193 11.3352 9.74029 11.4691 9.32827L13.5489 2.92705Z"
            fill="#FBB57B" />
          <path
            d="M42.5489 2.92705C42.8483 2.00574 44.1517 2.00574 44.4511 2.92705L46.5309 9.32827C46.6648 9.74029 47.0488 10.0193 47.482 10.0193L54.2126 10.0193C55.1814 10.0193 55.5841 11.2589 54.8004 11.8283L49.3552 15.7844C49.0047 16.0391 48.8581 16.4905 48.9919 16.9025L51.0718 23.3037C51.3712 24.225 50.3167 24.9911 49.533 24.4217L44.0878 20.4656C43.7373 20.2109 43.2627 20.2109 42.9122 20.4656L37.467 24.4217C36.6833 24.9911 35.6288 24.225 35.9282 23.3037L38.0081 16.9025C38.1419 16.4905 37.9953 16.0391 37.6448 15.7844L32.1996 11.8283C31.4159 11.2589 31.8186 10.0193 32.7874 10.0193L39.518 10.0193C39.9512 10.0193 40.3352 9.74029 40.4691 9.32827L42.5489 2.92705Z"
            fill="#FBB57B" />
          <path
            d="M71.5489 2.92705C71.8483 2.00574 73.1517 2.00574 73.4511 2.92705L75.5309 9.32827C75.6648 9.74029 76.0488 10.0193 76.482 10.0193L83.2126 10.0193C84.1814 10.0193 84.5841 11.2589 83.8004 11.8283L78.3552 15.7844C78.0047 16.0391 77.8581 16.4905 77.9919 16.9025L80.0718 23.3037C80.3712 24.225 79.3167 24.9911 78.533 24.4217L73.0878 20.4656C72.7373 20.2109 72.2627 20.2109 71.9122 20.4656L66.467 24.4217C65.6833 24.9911 64.6288 24.225 64.9282 23.3037L67.0081 16.9025C67.1419 16.4905 66.9953 16.0391 66.6448 15.7844L61.1996 11.8283C60.4159 11.2589 60.8186 10.0193 61.7874 10.0193L68.518 10.0193C68.9512 10.0193 69.3352 9.74029 69.4691 9.32827L71.5489 2.92705Z"
            fill="#FBB57B" />
          <path
            d="M100.549 2.92705C100.848 2.00574 102.152 2.00574 102.451 2.92705L104.531 9.32827C104.665 9.74029 105.049 10.0193 105.482 10.0193L112.213 10.0193C113.181 10.0193 113.584 11.2589 112.8 11.8283L107.355 15.7844C107.005 16.0391 106.858 16.4905 106.992 16.9025L109.072 23.3037C109.371 24.225 108.317 24.9911 107.533 24.4217L102.088 20.4656C101.737 20.2109 101.263 20.2109 100.912 20.4656L95.467 24.4217C94.6833 24.9911 93.6288 24.225 93.9282 23.3037L96.0081 16.9025C96.1419 16.4905 95.9953 16.0391 95.6448 15.7844L90.1996 11.8283C89.4159 11.2589 89.8186 10.0193 90.7874 10.0193L97.518 10.0193C97.9512 10.0193 98.3352 9.74029 98.4691 9.32827L100.549 2.92705Z"
            fill="#FBB57B" />
          <path
            d="M129.549 2.92705C129.848 2.00574 131.152 2.00574 131.451 2.92705L133.531 9.32827C133.665 9.74029 134.049 10.0193 134.482 10.0193L141.213 10.0193C142.181 10.0193 142.584 11.2589 141.8 11.8283L136.355 15.7844C136.005 16.0391 135.858 16.4905 135.992 16.9025L138.072 23.3037C138.371 24.225 137.317 24.9911 136.533 24.4217L131.088 20.4656C130.737 20.2109 130.263 20.2109 129.912 20.4656L124.467 24.4217C123.683 24.9911 122.629 24.225 122.928 23.3037L125.008 16.9025C125.142 16.4905 124.995 16.0391 124.645 15.7844L119.2 11.8283C118.416 11.2589 118.819 10.0193 119.787 10.0193L126.518 10.0193C126.951 10.0193 127.335 9.74029 127.469 9.32827L129.549 2.92705Z"
            fill="#FBB57B" />
        </svg>
        <h2
          class="font-bold lg:text-[30px] lg:leading-[41px] text-[25px] leading-[35px] text-[#1B1C31]  tracking-[-0.02em] lg:mb-[47px] mb-8">
          Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six.
          Among sex are leave law built now.
        </h2>
        <div class="flex justify-between items-center">
          <div>
            <h3 class="font-bold text-[20px] leading-[30px] text-[black] tracking-[-0.03em] mb-[1px]">
              Raphael Abayomi
            </h3>
            <h4 class="font-medium text-[16px] leading-[24px] text-[#757095] tracking-[-0.02em]">
              CEO RaphWebb Inc.
            </h4>
          </div>

          <svg width="138" height="29" viewBox="0 0 138 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24.7466 15.0378L24.7648 15.0392L26.6605 15.2373C26.7936 15.2517 26.9158 15.3166 27.0021 15.4182L27.0162 15.4354L26.9982 15.4444C27.0868 15.5562 27.1259 15.6993 27.1063 15.8407C26.6921 19.1334 25.1314 22.1751 22.6982 24.4318C20.1734 26.7735 16.8571 28.0745 13.4135 28.0745C11.741 28.0772 10.0827 27.7693 8.52306 27.1666L8.43809 27.1334C8.31043 27.0863 8.20786 26.9892 8.15356 26.8651L8.14539 26.8453C8.09222 26.7217 8.08926 26.5827 8.13653 26.4575L8.88478 24.6319C8.98617 24.3738 9.27351 24.2438 9.53301 24.3353L9.55027 24.3417C13.3749 25.8185 17.7067 24.9868 20.7124 22.1985C22.6256 20.4405 23.8593 18.0656 24.1975 15.4894C24.2333 15.2234 24.4641 15.0299 24.7286 15.037L24.7466 15.0378ZM69.5172 7.29007C71.1336 7.29007 72.3977 7.78323 73.2049 8.73034L73.232 8.76244V7.96096C73.2428 7.73725 73.416 7.55644 73.6372 7.5346L73.6552 7.53318H75.812C76.0339 7.54852 76.2104 7.72319 76.2296 7.94303L76.2308 7.96096V19.9337C76.3005 21.6219 75.7816 23.2819 74.7629 24.63C73.6011 26.0438 71.8361 26.7597 69.5172 26.7597C66.2933 26.7597 63.7492 24.72 63.3305 21.8067C63.3097 21.5964 63.4378 21.4008 63.6369 21.3349L63.6547 21.3294L65.762 20.8342C65.7729 20.8317 65.784 20.8296 65.7951 20.828C66.0264 20.7941 66.2413 20.9541 66.2752 21.1854C66.4677 22.8196 67.8723 24.0387 69.5172 23.9995C72.0091 23.9995 73.1814 22.733 73.2046 20.0863L73.2049 20.0056V18.9566C72.2709 20.0042 70.92 20.5831 69.5172 20.537C65.933 20.537 63.335 17.7543 63.335 13.927C63.3022 12.205 63.9086 10.5318 65.037 9.23068C66.1832 7.97146 67.8147 7.26481 69.5172 7.29007ZM4.6068 21.8517L4.63352 21.8515L4.66034 21.8517C5.52067 21.8616 6.21337 22.5572 6.22273 23.4144L6.2228 23.4413C6.2228 23.4501 6.22269 23.4591 6.22254 23.468C6.20755 24.3457 5.48399 25.0452 4.60628 25.0302C3.72857 25.0153 3.02918 24.2917 3.04401 23.414C3.05869 22.5542 3.75332 21.8654 4.6068 21.8517ZM106.852 7.12347L106.962 7.12429C110.815 7.1775 113.202 9.85944 113.202 14.1521C113.202 14.3793 113.19 14.6062 113.166 14.832C113.147 15.0397 112.977 15.1999 112.77 15.2098L112.752 15.2102H103.594C103.65 17.1338 105.24 18.6557 107.165 18.6278C108.656 18.7215 110.015 17.7731 110.442 16.3405C110.52 16.1348 110.742 16.0242 110.952 16.0832L110.969 16.0883L112.797 16.7322C112.898 16.7647 112.981 16.8363 113.027 16.9304L113.036 16.9484C113.086 17.0475 113.094 17.1627 113.059 17.268C112.209 19.7821 109.817 21.4455 107.165 21.3655C105.425 21.3828 103.752 20.7034 102.518 19.4789C101.17 18.0612 100.451 16.1605 100.523 14.2062C100.523 9.81541 103.678 7.17661 106.76 7.12428L106.852 7.12347ZM55.0275 7.12348H55.032C58.9539 7.12348 61.3899 9.81608 61.3899 14.1521C61.3896 14.3793 61.3775 14.6062 61.3538 14.832C61.3356 15.0409 61.1646 15.2022 60.9569 15.2099L60.9396 15.2102H51.7811C51.8375 17.1391 53.4359 18.6632 55.3652 18.6279C56.8577 18.7232 58.2178 17.7742 58.6432 16.3405C58.7195 16.1332 58.9429 16.0218 59.153 16.083L59.17 16.0883L60.9981 16.7322C61.105 16.7667 61.1919 16.8454 61.2367 16.9484C61.2795 17.0506 61.2795 17.1658 61.2367 17.268C60.3883 19.7804 57.9979 21.4435 55.3472 21.3655C53.6053 21.3852 51.9282 20.7056 50.6914 19.4789C49.3459 18.0602 48.6271 16.1602 48.6967 14.2062C48.6967 9.77106 51.9162 7.12348 55.0275 7.12348ZM41.1592 7.11893C42.9197 7.11893 44.3426 7.5467 45.3962 8.38865C46.1087 8.95644 46.6367 9.72263 46.9136 10.5905L46.9145 10.594C46.9507 10.7436 46.8627 10.8943 46.7168 10.9377L46.702 10.9417L44.5182 11.6622C44.4213 11.7006 44.3134 11.7006 44.2166 11.6622C44.1338 11.6236 44.0716 11.5514 44.0454 11.4641L44.0338 11.4211C43.8349 10.71 43.1846 9.56841 41.1592 9.56841C39.7183 9.56841 38.8538 10.3969 38.8538 11.1984L38.8542 11.2301C38.865 11.7513 39.1484 12.4055 40.391 12.6542L40.4298 12.6617L42.8342 13.112C45.491 13.647 47.0224 15.0909 47.0527 17.1033L47.0532 17.1644L47.0442 17.1285L47.0436 17.1896C47.005 19.2068 45.0538 21.3294 41.4609 21.3294C37.2509 21.3294 35.5984 18.9475 35.2922 17.5427C35.2722 17.3957 35.3619 17.2569 35.5021 17.2137L35.5173 17.2095L37.7687 16.5071C37.8089 16.5005 37.85 16.5005 37.8902 16.5071C37.9475 16.506 38.0041 16.5182 38.0557 16.5424L38.0748 16.5521C38.1575 16.5917 38.2185 16.6659 38.2414 16.7547C38.5251 18.1056 39.7454 18.9115 41.5014 18.9115C43.1359 18.9115 43.8788 18.056 43.8788 17.2815C43.8788 16.5156 43.2314 15.9478 42.1152 15.7133L42.0778 15.7056L39.5518 15.2148C37.1968 14.769 35.729 13.3056 35.729 11.401C35.729 9.08209 38.2189 7.11893 41.1592 7.11893ZM131.97 3.36821H133.938C134.17 3.38215 134.352 3.57045 134.361 3.80108L134.361 3.81846V7.51519H136.729C136.959 7.53138 137.139 7.71885 137.148 7.94775L137.148 7.96544V9.92861L137.148 9.9457C137.141 10.1658 136.966 10.3446 136.746 10.3558L136.729 10.3564H134.361V16.9258C134.361 18.0154 134.793 18.4658 135.905 18.4658C136.13 18.4618 136.355 18.4448 136.578 18.4146L136.662 18.4027C136.784 18.3819 136.909 18.4166 137.004 18.4973C137.089 18.5761 137.14 18.6846 137.147 18.7998L137.148 18.8215V20.672C137.15 20.8606 137.027 21.0277 136.846 21.0818C136.328 21.227 135.792 21.2999 135.254 21.2986L135.18 21.2979C132.831 21.2979 131.365 19.8019 131.335 17.3822L131.335 17.3086V10.3834H129.286C129.063 10.3702 128.883 10.195 128.864 9.97368L128.863 9.95563V7.98343C128.862 7.75076 129.039 7.55713 129.269 7.53455L129.286 7.53318L129.837 7.53311L129.896 7.53207C130.539 7.5136 131.526 7.25301 131.546 5.81781L131.547 5.77259V3.81846C131.546 3.58579 131.723 3.39215 131.953 3.36958L131.97 3.36821ZM93.7261 7.12148L93.7777 7.12348H93.773C96.0912 7.12348 98.4313 8.73861 98.4779 12.2661L98.4786 12.3735V20.7126C98.4681 20.9363 98.2943 21.117 98.0734 21.1389L98.0554 21.1404H95.8984C95.675 21.1271 95.4964 20.9519 95.4764 20.7306L95.4752 20.7126V12.6438L95.4748 12.5816C95.4616 11.5535 95.1122 9.90157 92.9946 9.90157C91.4295 9.90157 90.3148 11.1196 90.2926 12.8915L90.2923 12.9454V20.7126C90.2818 20.9363 90.1087 21.117 89.8872 21.1389L89.8691 21.1404H87.6858C87.4617 21.1271 87.283 20.9519 87.2638 20.7306L87.2626 20.7126V12.6438L87.2622 12.5816C87.2491 11.5535 86.8996 9.90157 84.7812 9.90157C83.1542 9.90157 82.0525 11.1108 82.0307 12.9175L82.0303 12.9724V20.7126C82.019 20.9363 81.846 21.117 81.6251 21.1389L81.6071 21.1404H79.4501C79.2283 21.125 79.0518 20.9503 79.0327 20.7305L79.0315 20.7126V7.93393C79.042 7.71179 79.2129 7.53162 79.4322 7.50774L79.4501 7.50615H81.526C81.7494 7.51931 81.9288 7.69458 81.948 7.91588L81.9492 7.93393V8.7039C82.8829 7.68015 84.2105 7.10495 85.596 7.12348C87.2008 7.07645 88.6983 7.92489 89.4822 9.32521C90.4157 7.89883 92.0252 7.06436 93.7261 7.12148ZM126.022 8.71286C126.848 9.80144 127.274 11.1403 127.23 12.505L127.228 12.5627V20.7126C127.217 20.9347 127.047 21.1149 126.827 21.1388L126.809 21.1404H124.626C124.402 21.1271 124.223 20.9519 124.203 20.7306L124.202 20.7126V12.9995C124.202 10.9822 123.252 9.95563 121.451 9.95563C120.656 9.92992 119.895 10.2843 119.402 10.9102C118.926 11.5972 118.68 12.4171 118.699 13.252L118.7 13.3011V20.7126C118.689 20.9363 118.516 21.117 118.295 21.1389L118.277 21.1404H116.098C115.874 21.1271 115.695 20.9519 115.676 20.7306L115.674 20.7126V7.92489C115.685 7.70118 115.859 7.52045 116.08 7.49854L116.098 7.49712H118.228C118.45 7.51246 118.626 7.68719 118.645 7.90697L118.646 7.92489V8.82546C119.56 7.71861 120.931 7.09143 122.366 7.12348C123.763 7.06371 125.112 7.6498 126.022 8.71286ZM0.522321 15.584H16.0252C16.31 15.5864 16.5402 15.8146 16.5473 16.0972L16.5475 16.1154V18.0561C16.5499 18.3409 16.3257 18.5749 16.0432 18.5869L16.0251 18.5873H0.522321C0.237384 18.5849 0.00731346 18.3567 0 18.0741V18.056V16.1153V16.0972C0.00716087 15.8207 0.227558 15.5964 0.503822 15.5845L0.522321 15.584ZM69.891 9.98267C67.7657 9.98267 66.4149 11.4956 66.4149 13.927C66.4149 16.3585 67.7476 17.8668 69.891 17.8668C71.9351 17.8668 73.313 16.2819 73.313 13.927C73.313 11.5676 71.9351 9.98267 69.891 9.98267ZM51.8769 12.6134L51.8711 12.6617H58.2785C58.1225 10.95 56.9161 9.8826 55.1095 9.86143L55.0545 9.8611C53.4626 9.83522 52.1069 10.9996 51.8833 12.5659L51.8769 12.6134ZM103.707 12.6134L103.702 12.6617H110.109C109.953 10.95 108.747 9.8826 106.94 9.86143L106.885 9.8611C105.293 9.83522 103.937 10.9996 103.714 12.5659L103.707 12.6134ZM17.9658 0.774618C18.1 0.823041 18.2088 0.923748 18.2674 1.0538C18.3213 1.18509 18.3213 1.33229 18.2674 1.4635L17.5921 3.26464C17.4985 3.5317 17.2065 3.67265 16.9392 3.57982C13.4008 2.34508 9.47466 3.04663 6.58296 5.43039C4.78082 6.93883 3.50121 8.97807 2.92678 11.2569C2.86731 11.487 2.6601 11.648 2.42247 11.6487H2.30539L0.450266 11.2029C0.311948 11.1704 0.19317 11.0824 0.121578 10.9597H0.112542C0.0374756 10.8371 0.0163148 10.6888 0.0540799 10.55C0.79077 7.63289 2.43915 5.02702 4.75935 3.1115C8.44875 0.0741483 13.4581 -0.812289 17.9658 0.774618ZM11.0992 8.55531H26.602C26.8798 8.55758 27.1069 8.77492 27.1235 9.05015L27.1243 9.06858V11.0093C27.1267 11.2942 26.9026 11.5282 26.6201 11.5402L26.602 11.5406H11.0992C10.8161 11.5358 10.5887 11.3085 10.5815 11.0277L10.5813 11.0093V9.08657C10.5789 8.8035 10.8002 8.57037 11.0808 8.55594L11.0992 8.55531ZM21.8611 2.6342L21.8879 2.63399L21.9147 2.63422C22.775 2.64408 23.4677 3.33974 23.4771 4.19684L23.4771 4.22368C23.4771 4.23264 23.477 4.24159 23.4769 4.25048C23.462 5.12819 22.7383 5.82757 21.8606 5.81267C20.9829 5.79776 20.2835 5.07413 20.2984 4.19649C20.313 3.33662 21.0077 2.64794 21.8611 2.6342Z"
              fill="#C6D3DA" />
          </svg>
        </div>
      </div>
    </div>
  </section>
  <section class="lg:mx-[135px] mx-6 bg-[#05796B] rounded-[16px] pt-[49px] lg:mb-[190px] mb-32">
    <div class="flex justify-end">
      <svg class="mb-[43px] mr-20 " width="105" height="17" viewBox="0 0 105 17" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.58337 11.6668L13.75 3.3335L22.0834 11.6668L29.1667 4.5835L36.25 11.6668L43.3334 4.5835L50.4167 11.6668L57.5 4.5835L64.5834 11.6668L71.6667 4.5835L78.75 11.6668L85.8334 4.5835L92.9167 11.6668L100 4.5835"
          stroke="#E6EFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="100" cy="5" r="4" fill="#002F86" stroke="white" stroke-width="2" />
        <circle cx="5" cy="11.6667" r="4" fill="#002F86" stroke="white" stroke-width="2" />
      </svg>

    </div>
    <div class="flex justify-start">
      <img src="./assets/pattern.svg" class="-mb-[6rem] ml-[5rem]" alt="">
    </div>
    <h2
      class="font-extrabold lg:text-[56px] lg:leading-[61px] text-[36px] leading-[41px] text-[white] text-center tracking-[-0.03em] mt-[] lg:mb-[41px] mb-8">
      Discover a better way to manage purchases.
    </h2>
    <div class="flex justify-center">
      <button
        class=" rounded-full px-11 py-5 bg-[#FF7F5C] text-white font-ebold text-[18px] leading-[30x] text-center  tracking-[-0.02em] ">
        Get Started Now
      </button>
    </div>
    <div class="flex justify-start">

      <!-- <img src="./assets/pattern.svg" class="-mb-[6rem] ml-[5rem]" alt=""> -->
      <svg class="-mt-[2rem] ml-[1.5rem] lg:mb-[44px] mb-8" width="16" height="102" viewBox="0 0 16 102" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.2 97.0005L3.20001 88.2005L11.2 80.2005L4.40001 73.4004L11.2 66.6004L4.40001 59.8004L11.2 53.0004L4.40001 46.2004L11.2 39.4004L4.40001 32.6004L11.2 25.8004L4.40001 19.0004L11.2 12.2003L4.40001 5.40033"
          stroke="#E6EFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="4.80001" cy="5.40019" r="3.80001" transform="rotate(-90 4.80001 5.40019)" fill="#002F86"
          stroke="white" stroke-width="2" />
        <circle cx="11.2" cy="96.6004" r="3.80001" transform="rotate(-90 11.2 96.6004)" fill="#002F86" stroke="white"
          stroke-width="2" />
      </svg>
    </div>
  </section>
  <footer class="lg:mx-[131px] mx-7 lg:mb-9 mb-5">
    <div class="lg:flex lg:items-start">
      <div class="lg:mr-[156px] lg:mb-0 mb-10">
        <h2 class="font-bold  text-[21px] leading-[28px] text-[#1B1C31]  tracking-[-0.02em] lg:mb-[18px] mb-4">
          FinLanding
        </h2>
        <h2 class="font-normal text-[16px] leading-[28px] text-[#757095]  tracking-[-0.02em] mt-[] lg:mb-[31px] mb-6">
          Finance helps companies manage payments easily.
        </h2>
        <div class="flex space-x-4 items-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_1124)">
              <path
                d="M19.995 19.9999V19.999H20V12.664C20 9.07569 19.2275 6.31152 15.0325 6.31152C13.0159 6.31152 11.6625 7.41819 11.11 8.46736H11.0517V6.64652H7.07419V19.999H11.2159V13.3874C11.2159 11.6465 11.5459 9.96319 13.7017 9.96319C15.8259 9.96319 15.8575 11.9499 15.8575 13.499V19.9999H19.995Z"
                fill="#3734A9" />
              <path d="M0.33017 6.64771H4.47684V20.0002H0.33017V6.64771Z" fill="#3734A9" />
              <path
                d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z"
                fill="#3734A9" />
            </g>
            <defs>
              <clipPath id="clip0_1_1124">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_1122)">
              <path
                d="M0.986938 9.25917C0.986938 12.1725 2.44027 14.7717 4.71277 16.4692V20L8.11777 18.1317C9.02611 18.3825 9.98861 18.5192 10.9861 18.5192C16.5086 18.5192 20.9861 14.3742 20.9861 9.26C20.9869 4.14583 16.5094 0 10.9869 0C5.46444 0 0.986938 4.145 0.986938 9.25917H0.986938ZM9.93194 6.66583L12.5403 9.38167L17.4461 6.66583L11.9794 12.4675L9.43361 9.7525L4.46444 12.4683L9.93194 6.66583Z"
                fill="#3734A9" />
            </g>
            <defs>
              <clipPath id="clip0_1_1122">
                <rect width="20" height="20" fill="white" transform="translate(0.986938)" />
              </clipPath>
            </defs>
          </svg>
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_1128)">
              <path
                d="M18.9189 5.9275C19.7322 5.35 20.4164 4.62917 20.9739 3.79917V3.79833C20.2297 4.12417 19.4381 4.34083 18.6114 4.44583C19.4614 3.93833 20.1106 3.14083 20.4156 2.18C19.6231 2.6525 18.7481 2.98583 17.8156 3.1725C17.0631 2.37083 15.9906 1.875 14.8206 1.875C12.5506 1.875 10.7231 3.7175 10.7231 5.97583C10.7231 6.30083 10.7506 6.61333 10.8181 6.91083C7.40974 6.74417 4.39307 5.11083 2.36641 2.62167C2.01307 3.23583 1.80474 3.93833 1.80474 4.69417C1.80474 6.11417 2.53557 7.3725 3.62641 8.10167C2.96724 8.08917 2.32141 7.8975 1.77391 7.59667V7.64167C1.77391 9.63417 3.19474 11.2892 5.05891 11.6708C4.72474 11.7625 4.36141 11.8058 3.98391 11.8058C3.72141 11.8058 3.45641 11.7908 3.20807 11.7358C3.73891 13.3592 5.24724 14.5533 7.03891 14.5925C5.64391 15.6833 3.87224 16.3408 1.95474 16.3408C1.61891 16.3408 1.29641 16.3258 0.973907 16.285C2.79057 17.4558 4.94224 18.125 7.26391 18.125C14.4997 18.125 19.2156 12.0883 18.9189 5.9275Z"
                fill="#3734A9" />
            </g>
            <defs>
              <clipPath id="clip0_1_1128">
                <rect width="20" height="20" fill="white" transform="translate(0.973938)" />
              </clipPath>
            </defs>
          </svg>
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_1130)">
              <path
                d="M9.39157 14.0991C9.4449 14.0541 9.49907 14.0075 9.54907 13.9583C6.7649 16.69 2.2249 15.415 1.16074 11.5625V11.5566C-0.266763 6.31496 5.7524 2.33329 9.5474 5.99996C9.62657 6.08412 14.8691 11.675 14.5357 11.3191H14.5507C15.3332 12.1258 16.4649 12.0375 17.1382 11.3325C17.8624 10.5758 17.8882 9.34079 17.1774 8.57162C16.0549 7.27912 13.8507 8.24496 14.0616 10.1608L12.7999 8.87579L11.3366 7.47662C11.6382 6.87746 12.0341 6.35329 12.5299 5.89996C12.4766 5.94579 12.4224 5.99329 12.3724 6.04079C15.1674 3.29912 19.7041 4.60412 20.7607 8.43996V8.44496C22.1916 13.6858 16.1657 17.6675 12.3741 14.0008C12.2966 13.9175 7.0574 8.29162 7.38907 8.64829L7.38574 8.63579C7.3724 8.63579 7.3724 8.62329 7.3724 8.62329C6.55074 7.77579 5.43657 7.90329 4.7849 8.59746C4.0599 9.35412 4.0349 10.5891 4.7474 11.3466C5.82074 12.6091 8.0724 11.6733 7.86074 9.71912C7.9424 9.80329 10.7682 12.7041 10.5882 12.52C10.1307 13.4325 9.61907 13.8516 9.39157 14.0991Z"
                fill="#3734A9" />
            </g>
            <defs>
              <clipPath id="clip0_1_1130">
                <rect width="20" height="20" fill="white" transform="translate(0.960938)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div class="lg:mr-[100px] lg:mb-0 mb-10">
        <h2 class="font-bold  text-[21px] leading-[24px] text-[#181433] lg:mb-[24px] mb-5">
          Company
        </h2>
        <h2 class="font-normal text-[16px] leading-[24px] text-[#181433] mt-[] lg:mb-[18px] mb-4">
          About Us
        </h2>
        <h2 class="font-normal text-[16px] leading-[24px] text-[#181433] mt-[] lg:mb-[18px] mb-4">
          Careers
        </h2>
        <h2 class="font-normal text-[16px] leading-[24px] text-[#181433] mt-[] lg:mb-[18px] mb-4">
          Blog
        </h2>
        <h2 class="font-normal text-[16px] leading-[24px] text-[#181433] mt-[]">
          Pricing
        </h2>
      </div>
      <div class="lg:mr-[100px] lg:mb-0 mb-10">
        <h2 class="font-bold  text-[21px] leading-[24px] text-[#181433] lg:mb-[24px] mb-5">
          Product
        </h2>
        <h2 class="font-normal text-[16px] leading-[24px] text-[#181433] mt-[] lg:mb-[12px] mb-3">
          Invoicing
        </h2>
        <h2 class="font-normal text-[16px] leading-[24px] text-[#181433] mt-[] lg:mb-[12px] mb-3">
          Contract
        </h2>
        <h2 class="font-normal text-[16px] leading-[24px] text-[#181433] mt-[] lg:mb-[12px] mb-3">
          Accounting
        </h2>
        <h2 class="font-normal text-[16px] leading-[24px] text-[#181433] mt-[]">
          Proposal
        </h2>
      </div>
      <div class="lg:mr-[53px] lg:mb-0 mb-10">
        <h2 class="font-bold  text-[21px] leading-[24px] text-[#181433] lg:mb-[24px] mb-5">
          Resources
        </h2>
        <h2 class="font-normal text-[16px] leading-[24px] text-[#181433] mt-[] lg:mb-[12px] mb-3">
          Proposal Template
        </h2>
        <h2 class="font-normal text-[16px] leading-[24px] text-[#181433] mt-[] lg:mb-[12px] mb-3">
          Invoice Template
        </h2>
        <h2 class="font-normal text-[16px] leading-[24px] text-[#181433] mt-[] lg:mb-[12px] mb-3">
          Tutorial
        </h2>
        <h2 class="font-normal text-[16px] leading-[24px] text-[#181433] mt-[]">
          How to write a contract
        </h2>
      </div>
      <div class="lg:mb-0 mb-10">
        <h2 class="font-bold  text-[21px] leading-[24px] text-[#181433] lg:mb-[24px] mb-5">
          Contact Us
        </h2>
        <div class="flex items-center space-x-3 lg:mb-[12px] mb-3">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M14.1758 11.2458L19.9378 6.30676V15.773L14.1758 11.2458ZM8.88888 12.1581L10.5526 13.5847C10.8105 13.8054 11.19 13.8054 11.4478 13.5847L13.1115 12.1581L18.637 16.5004H3.36203L8.88888 12.1581ZM11.0002 12.1574L3.23346 5.50025H18.7669L11.0002 12.1574ZM2.06263 6.30744L7.82461 11.2458L2.06263 15.773V6.30744ZM21.3128 17.1878V4.81275C21.3128 4.42775 20.956 4.12524 20.6253 4.12524H1.37513C1.02725 4.12524 0.687622 4.42362 0.687622 4.81275V17.1878C0.687622 17.5488 1.01556 17.8753 1.37513 17.8753H20.6253C21.0117 17.8753 21.3128 17.5337 21.3128 17.1878Z"
              fill="#181433" />
          </svg>

          <h2 class="font-normal text-[16px] leading-[24px] text-[#181433] mt-[]">
            raphyabak@gmail.com
          </h2>
        </div>
        <div class="flex items-center space-x-3">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_1136)">
              <rect width="22.0002" height="22.0002" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M13.0626 19.9377C11.9255 19.9377 11.0001 19.0123 11.0001 17.8751C11.0001 16.738 11.9255 15.8126 13.0626 15.8126C14.1997 15.8126 15.1251 16.738 15.1251 17.8751C15.1251 19.0123 14.1997 19.9377 13.0626 19.9377ZM4.12503 6.87505C5.26216 6.87505 6.18755 7.80043 6.18755 8.93757C6.18755 10.0747 5.26216 11.0001 4.12503 11.0001C2.9879 11.0001 2.06252 10.0747 2.06252 8.93757C2.06252 7.80043 2.9879 6.87505 4.12503 6.87505ZM13.0626 14.4376C11.3294 14.4376 9.90557 15.7321 9.67251 17.4021L4.59734 12.3276C6.26798 12.0939 7.56255 10.6707 7.56255 8.93753C7.56255 7.04207 6.02048 5.5 4.12503 5.5C2.22957 5.5 0.6875 7.04207 0.6875 8.93753C0.6875 9.8801 1.07044 10.7347 1.68644 11.3562C1.68988 11.3596 1.69126 11.3644 1.6947 11.3685L10.6323 20.3061C10.6364 20.3095 10.6412 20.3102 10.6446 20.3144C11.2668 20.9304 12.1207 21.3126 13.0626 21.3126C14.958 21.3126 16.5001 19.7705 16.5001 17.8751C16.5001 15.9796 14.958 14.4376 13.0626 14.4376Z"
                fill="#181433" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.0001 0.6875C10.6199 0.6875 10.3126 0.995502 10.3126 1.37501C10.3126 1.75451 10.6199 2.06251 11.0001 2.06251C15.9282 2.06251 19.9377 6.07204 19.9377 11.0001C19.9377 11.3796 20.245 11.6876 20.6252 11.6876C21.0054 11.6876 21.3127 11.3796 21.3127 11.0001C21.3127 5.31372 16.6865 0.6875 11.0001 0.6875Z"
                fill="#181433" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.0001 4.125C10.6199 4.125 10.3126 4.433 10.3126 4.81251C10.3126 5.19201 10.6199 5.50001 11.0001 5.50001C14.0327 5.50001 16.5002 7.96747 16.5002 11.0001C16.5002 11.3796 16.8075 11.6876 17.1877 11.6876C17.5679 11.6876 17.8752 11.3796 17.8752 11.0001C17.8752 7.20915 14.791 4.125 11.0001 4.125Z"
                fill="#181433" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M13.0626 11C13.0626 11.3795 13.37 11.6875 13.7501 11.6875C14.1303 11.6875 14.4377 11.3795 14.4377 11C14.4377 9.10457 12.8956 7.5625 11.0001 7.5625C10.6199 7.5625 10.3126 7.8705 10.3126 8.25001C10.3126 8.62951 10.6199 8.93751 11.0001 8.93751C12.1373 8.93751 13.0626 9.86289 13.0626 11Z"
                fill="#181433" />
            </g>
            <defs>
              <clipPath id="clip0_1_1136">
                <rect width="22.0002" height="22.0002" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h2 class="font-normal text-[16px] leading-[24px] text-[#181433] mt-[]">
            +2348068325446
          </h2>
        </div>
      </div>
    </div>
  </footer>
</template>

