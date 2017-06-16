<style>
  .content {
    height: 582px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .content .content-con {
    background: #f2f7fa;
    width: 100%;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 0 20%;
  }

  .content-con .content-left div {
    margin-top: 10px;
  }

  .content-con .content-phone {
    margin-top: -70px;
    z-index: 999999;
  }

  .adv-f5 {
    box-sizing: border-box;
    background: -webkit-gradient(linear, 0% 0%, 100% 0%, from(#2799F1), to(#35BDE6), color-stop(1.0, #336600)),
    -webkit-gradient(linear, 0% 0%, 0% 100%, from(#2698F2), to(#29a2ef), color-stop(1.0, #336600));
    padding: 91px 0 88px;
    height: 470px;
    display: flex;
    justify-content: center;
  }
  .adv-f5-con{
    display: flex;
    justify-content: space-around;
    color: white;
  }

  .adv-f1 {
    min-width: 140px !important;
  }

  .adv-f5 .adv-f1 p:first-child {
    white-space: nowrap;
    margin-top: 29px;
    font-size: 2.375em;
    margin-bottom: 21px;
  }

  .adv-f5 .adv-f1 p:nth-child(2) {
    height: 6px;
    background: #ffcc01;
    width: 36.81%;
    margin-left: 31.50%;
    border-radius: 10px;
  }

  .adv-f5 .adv-f1 p:nth-child(3) {
    margin-top: 21px;
    font-size: 1.5em;
  }

  .adv-f5 .adv-f1 p:last-child {
    white-space: nowrap;
    margin-top: 5px;
    font-size: 1.5em;
  }

  .exh-f3 {
    height: 695px;
    display: flex;
    box-sizing: border-box;
    padding: 0 18%;
    padding-bottom: 120px;
    justify-content: space-around;
    background: url("~assets/img/xianbg.png");
  }

  .exh-f3 .exh-f1 {
    width: 350px;
    text-align: left;
    margin: 0 2%;
    display: flex;
    flex-direction: column;
    color: white;
  }

  .exh-f3 .exh-f1:first-child {
    margin-top: 135px;
    background: #2699f1;
  }

  .exh-f3 .exh-f1:nth-child(2) {
    margin-top: 78px;
    background: #ffc301;
  }

  .exh-f3 .exh-f1:last-child {
    margin-top: 183px;
    background: #2699f1;
  }

  .exh-f1-title {
    height: 20px;
    box-sizing: border-box;
    padding-left: 15px;
    font-size: 20px;
    line-height: 20px;
    margin-top: 20px;
  }

  .exh-f3 .exh-f1 ul {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
  }

  .exh-f3 .exh-f1 ul li {
    margin-top: 15px;
    font-size: 0.8em;
    height: 12px;
    line-height: 15px;
    white-space: normal;
    color: white;
    box-sizing: border-box;
    padding-left: 32px;
    background: url("~assets/img/xing.png") left center no-repeat;
    font-size: 1.2em;
  }

</style>
<template>
  <div>

    <div class="content">
      <div class="content-con">
        <div class="content-left">
          <div>
            <img src="~assets/img/sm.png" alt="扫码">
          </div>
          <div>
            <img src="~assets/img/xy.png" alt="洗衣">
          </div>
          <div>
            <img src="~assets/img/zf.png" alt="支付">
          </div>
        </div>
        <div class="content-phone">
          <img src="~assets/img/phone.png" alt="phone">
        </div>
      </div>
    </div>
    <!--content end-->
    <div class="adv-f5">
      <div class="adv-f5-con" style="width: 1080px">
        <div class="adv-f1">
          <div>
            <img src="~assets/img/ganjing.png" alt="更干净">
          </div>
          <div>
            <p>更干净</p>
            <p></p>
            <p>洗衣桶自洁</p>
            <p>洗中臭氧杀菌</p>
          </div>
        </div>
        <div class="adv-f1">
          <div>
            <img src="~assets/img/gaoxiao.png" alt="更高效">
          </div>
          <div>
            <p>更高效</p>
            <p></p>
            <p>单脱 快洗</p>
            <p>标准洗 大件洗</p>
          </div>
        </div>
        <div class="adv-f1">
          <div>
            <img src="~assets/img/pianyi.png" alt="更便宜">
          </div>
          <div>
            <p>更便宜</p>
            <p></p>
            <p>洗衣红包</p>
            <p>抢不停</p>
          </div>
        </div>
        <div class="adv-f1">
          <div>
            <img src="~assets/img/wxzf.png" alt="微信支付">
          </div>
          <div>
            <p>微信支付</p>
            <p></p>
            <p>手机扫码支付</p>
            <p>后台实时管理</p>
          </div>
        </div>
        <div class="adv-f1">
          <div>
            <img src="~assets/img/dyh.png" alt="多样化">
          </div>
          <div>
            <p>多样化</p>
            <p></p>
            <p>商用洗衣机</p>
            <p>洗鞋机 烘干机</p>
          </div>
        </div>
      </div>
    </div>
    <div class="exh-f3">
      <div class="exh-f1">
        <div>
          <div><img src="~assets/img/xyj.png" alt="洗衣机"></div>
        </div>
        <div class="exh-f1-title"><p>商用智能洗衣机</p></div>
        <div>
          <ul>
            <li>洗前桶自净，臭氧杀菌，卫生健康</li>
            <li>高品质，核心部件10000周期寿命保证</li>
            <li>标准，大物，快速，单脱4种程序可选</li>
            <li>内置网络，自动联网，24小时在线，硬件 <br>
              <br>故障后台自动报警
            </li>
          </ul>
        </div>
      </div>
      <div class="exh-f1">
        <div>
          <div><img src="~assets/img/hgj.png" alt="洗衣机"></div>
        </div>
        <div class="exh-f1-title"><p>商用智能烘干机</p></div>
        <div>
          <ul>
            <li>高温杀菌，杀菌率高达99%；</li>
            <li>冷风护理，适合不同质地的衣物</li>
            <li>半小时省时省力，立等立穿</li>
            <li>不锈钢内筒，使用寿命长</li>
            <li>三种安装方式，优化使用空间</li>
            <li>自动限温设计安全放心，特有恒温，限温 <br><br>双重保护</li>
          </ul>
        </div>
      </div>
      <div class="exh-f1">
        <div>
          <div><img src="~assets/img/xxj.png" alt="洗衣机"></div>
        </div>
        <div class="exh-f1-title"><p>商用智能洗鞋机</p></div>
        <div>
          <ul>
            <li>在线查找/预约/支付/洗鞋进度可见</li>
            <li>采用日本创新技术，洗鞋专家</li>
            <li>洗前桶自洁，健康安全</li>
            <li>金属打造，铁头铁脑，结实耐用</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  /*img, object { max-width: 100%;}*/
</style>
