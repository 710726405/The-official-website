<template>
  <div id="about_me_wrap">
    <v-headerfou></v-headerfou>
  <div id="about_me">
    <div class="about_me_content">
      <h1>公司简介</h1>
      <div class="line"></div>
      <div class="introduce">
        轻氧科技是一家专注于互联网研发、智能设备升级的物联网洗衣服务运营平台。通过为传统运营商提供金融租<br/>赁、技术支持、运营服务
        的方式来提升用户体验，颠覆提升运营效率，助力建设智慧校园。我们的愿景是解决中国1.5亿集中居住人群的洗衣难问题，致力成为国内最大的物联网生活服务平台。
      </div>
    </div>
    <div class="development">
      <h1>发展历程</h1>
      <div class="line"></div>
      <div class="development_info">
        <div class="info_one common_font">
          <strong>2016-12</strong>
          <br>
          <strong>轻氧智能洗衣项目启动</strong>
        </div>
        <div class="info_two common_font">
          <strong>2017-02</strong>
          <br>
          <strong>获得ShareVC战略投资</strong>
        </div>
        <div class="info_thr common_font">
          <strong>2017-03</strong>
          <br>
          <strong>与海尔联合研发，达成战略合作</strong>
        </div>
        <div class="info_fou common_font">
          <strong>2017-04</strong>
          <br>
          <strong>“轻氧智能洗衣+”<br/>微信小程序平台正式上线</strong>
        </div>
      </div>
    </div>
    <div class="my_team">
      <h1>我们的团队</h1>
      <div class="line"></div>
      <div class="introduce">
        我们是一支"真实"、"积极"、"有梦想"的互联网创业团队，核心团队成员分别来自国内一流的互联网公司和清华大学，华中科技大学等国内一流学府，
        有10年以上丰富的互联网O2O创业实践经验，当物联网时代来临，新技术与运营的结合必将开创互联网行业的新纪元。
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Headerfou from '@/components/Headfou'
  export default {
    name: 'about_me_wrap',
    components: {
      'v-headerfou': Headerfou
    },
    data () {
      return {}
    },
    mounted () {
      this.$emit('change_title', '关于轻氧', 'ABPUT LIGHT OXYGEN', '')
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"
  #about_me
    position relative
    justify-content center
    flex-wrap wrap
    display flex
    & > div:last-child
      margin-bottom 120px
    .about_me_content, .development, .my_team
      width 1085px
      padding 90px 15px 0
      text-align center
      h1
        color $color-blue
        font-size $font-title
        font-weight 600px
      .line
        width 92px
        height 11px
        border-radius 4px
        background-color $color-yellow
        margin 23px auto 50px
      .introduce
        color $color-black
        font-size 22px
      .development_info
        position relative
        width 1079px
        height 407px
        background-image url("~assets/images/aboutMe/fzlc.png")
        background-size 100% 100%
        color $color-black
        .common_font
          &.info_one
            text-align left
            position absolute
            left 234px
            top 48px
          &.info_two
            text-align left
            position absolute
            left 447px
            top 267px
          &.info_thr
            text-align left
            position absolute
            right 195px
            top 48px
          &.info_fou
            text-align left
            position absolute
            right 5px
            top 267px
          strong
            font-weight 600
            font-size 16px
            font-size 16px
</style>
