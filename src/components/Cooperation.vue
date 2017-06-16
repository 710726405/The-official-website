<template>
  <div id="cooperation">
    <v-headertwo></v-headertwo>
    <div class="cooperation">
      <div>
        <div class="float_div float_div_one">
          <div class="float_info">
            <div class="float_info_text">
              <h1>战略合作伙伴</h1>
              <div class="cooperation_info_text">
                "品质实力",与世界级品牌海尔科技有限公司联合研发，
                达成战略合作，并肩携手创造垂直领域移动互联新纪元
              </div>
            </div>
            <div class="float_info_logo">
              <img src="~assets/images/cooperation/haier.png" alt="">
            </div>
          </div>
        </div>
        <div class="bac_white">
          <div class="float_div float_div_two">
            <div class="float_info">
              <div class="float_info_text" style="margin-right: ">
                <h2>运营商合作</h2>
                <div class="cooperation_info_text">
                  为了推进中国智能商用洗衣的发展进程，“轻氧智能洗衣”面向中国大陆地区发起运营商合作征集。在合作期内，“轻氧智能洗衣”运营合作商将享受高额运营补贴、推广服务、技术培训等。轻氧智能洗衣真诚期待与您携手并进，合作共赢！
                </div>
                <p>联系人:张鹏文</p>
                <p>邮箱：1027039239@qq.com</p>
                <p>手机:18202767308</p>
              </div>
              <div class="float_info_logo">
                <img src="~assets/images/cooperation/yyshz.png" alt="">
              </div>
            </div>
          </div>
          <div class="float_div float_div_fou">
            <!--<img src="~assets/images/cooperation/yysbg.png" alt="">-->
            <div class="float_info">
              <div class="float_info_logo">
                <img src="~assets/images/cooperation/gxzz.png" alt="">
              </div>
              <div class="float_info_text">
                <h1>高校资源</h1>
                <div class="cooperation_info_text">
                  更舒畅的校园生活，覆盖全国32个省市，150多所高校生，共享经济开启校园生活新篇章。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="float_div float_div_two float_div_fiv">
          <div class="float_info">
            <div class="float_info_text">
              <h1>异业联盟</h1>
              <div class="cooperation_info_text">
                "互联共赢"，轻氧大力营销推广，企业直击用户，移动金融营销新玩法，品牌广告新模式，打造O2O营销闭环。
              </div>
              <p>联系人:张鹏文</p>
              <p>邮箱：1027039239@qq.com</p>
              <p>手机:18202767308</p>
            </div>
            <div class="float_info_logo">
              <img src="~assets/images/cooperation/yxlm.png" alt="">
            </div>
          </div>
        </div>
        <div class="float_div float_div_thr">
          <div class="float_info_one">
            <div class="float_info_text">
              <h1>多渠道推广</h1>
              <div class="cooperation_info_text">
                公众号,app,小程序多渠道推广模式，实现高精度广告位投放，为您注入最有活力的新生力量
              </div>
            </div>
          </div>
          <div class="float_info_two">
            <div class="float_info_text">
              <h1>精准用户</h1>
              <div class="cooperation_info_text">
                大量市场调研，定位需求人群。以需求为导向，以最优的服务为目标，精准用户，优质服务，吸附式提升60万+人群粘合度。
              </div>
            </div>
          </div>
          <div class="float_info_logo">
            <img src="~assets/images/cooperation/dqdjz.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Headertwo from '@/components/Headtwo'
  export default {
    name: 'cooperation',
    components: {
      'v-headertwo': Headertwo
    },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"
  .cooperation
    position: relative;
    padding-bottom 120px
    background-color #f2f7fa
    display flex
    justify-content center

  .bac_white
    background url("~assets/images/cooperation/bbg.png") no-repeat
    background-size 100% 100%

  .float_div
    &.float_div_one
      position relative
      top -263px
      width 1200px
      height 428px
      margin 0 auto
      margin-bottom -263px
      background #fff
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
      .float_info
        display flex
        div
          flex 1
          &.float_info_text
            color #414141
            h1
              padding 135px 0 0 60px
              font-size 38px
              text-align justify
              font-family SimHei
            .cooperation_info_text
              padding 0 0 0 60px
              width 387px
              height 64px
              font-size 20px
              text-align justify
              font-family "Microsoft JhengHei Light"
          &.float_info_logo
            text-align right
            padding 138px 132px 0 0

    &.float_div_two
      .float_info
        display flex
        div
          flex 1
          &.float_info_text
            padding 130px 0 0 450px
            color #414141
            h1
              font-size 38px
              text-align justify
              font-family SimHei
            .cooperation_info_text
              width 387px
              height 120px
              font-size 16px
              text-align justify
              font-family "Microsoft JhengHei Light"
              margin-bottom 20px
            p
              font-size 16px
              text-align justify
              font-family "Microsoft JhengHei Light"
          &.float_info_logo
            text-align right
            padding 91px 359px 0 0
    &.float_div_thr
      position relative
      display flex
      .float_info_one, .float_info_two
        position absolute
        top 81px
        /*right  430px*/
        left 1100px
        z-index 2
        color #414141
        &.float_info_two
          top 440px
          left 450px
          z-index 2
        h1
          font-size 38px
          text-align justify
          font-family SimHei
        .cooperation_info_text
          width 387px
          height 65px
          font-size 20px
          text-align justify
          font-family "Microsoft JhengHei Light"
          margin-bottom 20px
      .float_info_logo
        padding 53px 0 0 379px
    &.float_div_fou
      .float_info
        display flex
        div
          flex 1
        .float_info_logo
          padding 50px 0 80px 380px
        .float_info_text
          padding 70px 380px 0 80px
          color #414141
          h1
            font-size 38px
            text-align justify
            font-family SimHei
          .cooperation_info_text
            width 335px
            height 130px
            font-size 18px
            text-align justify
            font-family "Microsoft JhengHei Light"
            margin-bottom 20px
          p
            font-size 18px
            text-align justify
            font-family "Microsoft JhengHei Light"

    &.float_div_fiv
      .float_info_text
        padding 30px 0 0 450px !important
        .cooperation_info_text
          font-size 20px !important
          width 300px !important
          p
            font-size 20px !important
      .float_info_logo
        padding 10px 359px 0 0 !important
</style>
