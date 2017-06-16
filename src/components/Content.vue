<template>
  <div id="main_wrap">
    <v-headerthr></v-headerthr>
  <div id="main">
    <div class="info_one">
      <div class="info_40 info_end position_left_36">
        <div class="pic_right">
          <img class="washer_pic" src="~assets/images/content/xyj1.png" alt="">
        </div>
      </div>
      <div class="info_60">
        <div class="content_info">
          <h1>商用智能洗衣机</h1>
          <div class="line_yellow"></div>
          <p>★ 洗前桶自洁，洗中臭氧消毒，卫生健康;</p>
          <p>★ 铁头铁脑，金属打造，100%商用外观，结实耐用;</p>
          <p>★ 强化设计：高品质电机、离合器，满足高强度洗衣要求，<br/>
            核心部件10000周期寿命保障。</p>
          <p>★ 洗衣机通电后，自行联网，24小时在线;</p>
          <p>★ 关注“轻氧公众号”，即可查找/预约洗衣机，在线支付洗 <br/>
            衣费， 还能随时了解洗衣进度，衣物洗好后收到提醒。</p>
        </div>
      </div>
    </div>
    <div class="info_two">
      <div class="info_60 info_yellow">
        <div class="content_info">
          <h1>商用智能烘干机</h1>
          <div class="line_blue"></div>
          <p>★ 高温杀菌，杀菌率高达99%</p>
          <p>★ 冷风护理，适合不同质地衣物</p>
          <p>★ 半小时省时省力，立等立穿</p>
          <p>★ 自动限温设计安全放心，特有恒温、限温双重保护</p>
          <p>★ 不锈钢内筒，使用寿命长</p>
          <p>★ 三种安装方式，优化使用空间  </p>
        </div>
      </div>
      <div class="info_40 position_left_42">
        <div class="pic_right">
          <img class="washer_pic" src="~assets/images/content/hgj1.png" alt="">
        </div>
      </div>
    </div>
    <div class="info_thr">
      <div class="info_40 info_end position_left_36">
        <div class="pic_right">
          <img class="washer_pic" src="~assets/images/content/xxj1.png" alt="">
        </div>
      </div>
      <div class="info_60 info_shoes">
        <div class="content_info content_w_s">
          <h1>商用智能洗鞋机</h1>
          <div class="line_yellow"></div>
          <p>★ 在线查找/预约/支付/洗鞋进度可见</p>
          <p>★ 采用日本创新技术，洗鞋专家</p>
          <p>★ 洗前桶自洁，健康安全</p>
          <p>★ 金属打造，铁头铁脑，结实耐用。</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Headerthr from '@/components/Headthr'
  export default {
    name: 'main_wrap',
    components: {
      'v-headerthr': Headerthr
    },
    data () {
      return {}
    },
    mounted () {
      this.$emit('change_title', '智能洗衣新风尚', 'Intelligent laundry', 'New fashion')
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"
  #main
    margin 0 auto
    padding 75px 0
    .info_one, .info_two, .info_thr
      margin-bottom 102px
      display flex
      .info_end
        justify-content flex-end
      .info_40
        flex 0 0 40%
        display flex
        position relative
        z-index 1
        .pic_right
          background-image url('~assets/images/content/xyjhb.png')
          background-size 100% 100%
          padding 26px 100px 26px 81px
          .back_ground
            position absolute
            overflow hidden
          .washer_pic
            position relative
      .position_left_36
        left 36px
      .position_left_42
        left -42px
      .info_60
        flex 0 0 60%
        position relative
        z-index 0
        background-image url('~assets/images/content/lanb1.png')
        color #fff
        &.info_yellow
          background-image url('~assets/images/content/huangb1.png') !important
        &.info_shoes
          background-image url('~assets/images/content/lanb2.png') !important
          & .content_info
            position absolute
            top 100px
            left 365px
        .content_info
          position absolute
          top 74px
          left 69px
          &.content_w_s
            position absolute
            top 148px
            left 69px
        h1
          margin-bottom 22px
          font-size $font-title
          font-weight normal
        .line_yellow
          width 92px
          height 11px
          border-radius 4px
          background-color $color-yellow
          margin-bottom 23px
        .line_blue
          width 92px
          height 11px
          border-radius 4px
          background-color $color-blue
          margin-bottom 23px
        p
          font-size $font-content
          letter-spacing 2.5px
    .info_two
      .pic_right
        background-image url('~assets/images/content/hgjhb.png') !important
        padding 50px 61px 50px 101px !important

</style>
