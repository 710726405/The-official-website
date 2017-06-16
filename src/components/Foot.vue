<style>
  .foot {
    height: 200px;
    background-color: #2699f1;
    box-sizing: border-box;
    padding: 0px 20%;
  }

  .foot-con {
    color: white;
    display: flex;
    justify-content: space-between;
  }

  .foot-right {
    margin-top: 24px;
  }

  .foot-right div:first-child {
    display: flex;
    justify-content: left;
    font-size: 28px;
  }

  .foot-right div:first-child p {
    height: 28px;
    display: block;
    line-height: 28px;
    box-sizing: border-box;
    padding-top: 10px;
    padding-left: 13px;
  }

  .foot-right div:last-child p {
    text-align: left;
    height: 20px;
    line-height: 20px;
    margin-top: 5px;
  }

  .foot-right div:last-child p:first-child {
    margin-top: 14px;
  }

  .foot-left {
    margin-top: 15px;
    padding-top: 24px;
    border-left: 1px solid #ffffff;
    padding-left: 51px;
    box-sizing: border-box;
    height: 170px;
  }
</style>


<template>
  <div>
    <div class="foot">
      <div class="foot-con">
        <div class="foot-right">
          <div>
            <img src="~assets/img/Flogoo.png" alt="logo">
            <p>轻氧科技</p>
          </div>
          <div>
            <p style="font-size: 18px">QINGYANG Technology Co,Ltd</p>
            <p style="font-size: 18px">客服 400-1699-711</p>
            <p style="font-size: 14px;color:#9dd1f9 ">哈啰宝贝科技（北京）有限公司</p>
            <p style="font-size: 14px;color: #9dd1f9">京ICP备15057849号-1 京公网安备 11016502032956 号</p>
          </div>
        </div>
        <div class="foot-left">
          <div>
            <div><img src="~assets/img/QRcode.png" alt=""></div>
            <div style="margin-top: 13px;font-size: 16px"><p>关注轻氧公众号</p></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script type="javascript">
</script>
