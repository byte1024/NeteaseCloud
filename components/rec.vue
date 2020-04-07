<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/img/1.jpeg" alt="" style="width:100px;height:100px">
                </div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from '../../node_modules/swiper'
import '../../node_modules/swiper/js/swiper.min.js'
export default {
    mounted() {
        let mySwiper=new Swiper('.swiper-container',{
            loop:true,
            autoplay:{
                delay:4000
            },
            pagination:{
                el:'.swiper-pagination'
            }
        })
    },
}
</script>
<style lang="">
@import '../../node_modules/swiper/css/swiper.min.css';

    .swiper-container {
      width: 100%;
      height: 200px;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

</style>