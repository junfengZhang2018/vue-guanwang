<template>
   <div class='setting'>
        <div class="subhead-right">
        </div>
        <div class="main">
          <div class="panel">
            <div class="panel-tp text-500"><b>通知设置</b></div>
              <div class="m-row">
                <div class="row">
                  <div class="checkbox"><img src="" alt=""></div>
                  <div class="wraper">
                    <div class="setting-title">包裹入库通知</div>
                    <div class="setting-desc">包裹送达仓库发送包裹信息</div> 
                  </div>
                </div>
                 <div class="row">
                  <div class="checkbox"><img src="" alt=""></div>
                  <div class="wraper">
                    <div class="setting-title">运单包装完成</div>
                    <div class="setting-desc">运单完成包装发送运单信息</div> 
                  </div>
                </div>
                 <div class="row">
                  <div class="checkbox"><img src="" alt=""></div>
                  <div class="wraper">
                    <div class="setting-title">运单发货通知</div>
                    <div class="setting-desc">运单开始运输发送追踪单号</div> 
                  </div>
                </div>
                 <div class="row">
                  <div class="checkbox"><img src="" alt=""></div>
                  <div class="wraper">
                    <div class="setting-title">运单签收通知</div>
                    <div class="setting-desc">运单完成签收发送签收信息</div> 
                  </div>
                </div>
              </div>
          </div>
        </div>
   </div>
</template>
<script>
    export default {
        data() {
        //这里存放数据
            return {
                
            };
        },
    }
</script>
<style lang='less' scoped>
    .main{
      width: 100%;
      background-color: #fff;
      line-height: 1.625;
      .text-500{
        font-weight: 500;
      }
      .panel{
        margin: 8px 0;
        background-color: #fff;
        border: 1px solid #eeeeee;
        .panel-tp{
          display: flex;
          padding: 4px 12px;
          border-bottom: 1px solid #eeeeee;
        }
      .m-row{
        .row{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border-top: 1px solid #eee;
          padding: 8px 12px;
          .checkbox{
            width: 16px;
            height: 16px;
            margin: 0 6px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .wraper{
            flex: 1;
            .setting-title{
              font-size: 16px;
              font-weight: bold;
              line-height: 24px;
              color: #586C94;
            }
            .setting-desc{
              font-size: 14px;
              line-height: 20px;
              color: #666666;
            }
          }

        }
        .row:first-child{
          border-top: none;
        }
      }
    }
    }
   @media screen and (max-width: 768px) {
    .main{
        
    }
  }
</style>