<template>
  <div class="profile">
    <div class="subhead-right">
      <a
        @click.prevent="$router.push('/freightPrice/calculation')"
        class="breadBtn breadBtn-primary"
      >
        <span>网站首页</span>
      </a>
    </div>
    <div class="main">
      <div class="panel">
        <div class="panel-tp text-500">#425442</div>
        <div class="m-row">
          <div class="row">
            <div class="icon md icon-o-email"></div>
            <div class="row-bd">
              <p class="text-info fonts14">注册邮箱</p>
              <p class="user-text">450567157@qq.com</p>
            </div>
            <div class="row-ft">
              <a
                class="btn btn-sm breadBtn-success"
                @click="$router.push('/my/email')"
                >验证邮箱</a
              >
            </div>
          </div>
          <div class="row">
            <div class="icon md icon-o-wechat"></div>
            <div class="row-bd">
              <p class="text-info fonts14">关联微信</p>
              <p class="user-text">暂未绑定</p>
            </div>
            <div class="row-ft">
              <a class="btn btn-sm breadBtn-success" @click="bindWechat"
                >立即绑定</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-tp text-500">个人资料</div>
        <div class="m-row">
          <div class="row" @click="$router.push('/my/profile/edit')">
            <div class="row-bd">账号昵称</div>
            <div class="row-ft access text-500">bob</div>
          </div>
          <div class="row" @click="$router.push('/my/profile/edit')">
            <div class="row-bd">账号性别</div>
            <div class="row-ft access text-500">保密</div>
          </div>
          <div class="row">
            <div class="row-bd">注册时间</div>
            <div class="row-ft access text-500">
              <time>14 May 2021</time> <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
              <time>3天</time>
            </div>
          </div>
          <div class="row">
            <div class="row-bd text-danger text-center" @click="logout">
              <b>退出登录</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import util from "@/util";
export default {
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  methods: {
    ...mapMutations(["SET_USER_INFO", "SET_USER_NAME"]),
    bindWechat() {
      this.$dialog({
        title: "微信扫一扫，绑定账户",
        content: "欢迎使用MuluPost",
      });
    },
    logout() {
      this.$dialog({
        title: "操作确认",
        content: "确定退出登录?",
        cancelText: "取消",
        confirmButtonClass: "text-danger",
        onConfirm: () => {
          util.storage.remove("user");
          util.storage.remove("userData");
          util.storage.remove("token");
          this.SET_USER_INFO(null);
          this.SET_USER_NAME(null);
          this.$router.push("/signIn");
        },
      });
    },
  },
};
</script>
<style lang='less' scoped>
.main {
  min-height: 570px;
  padding: 14px;
  line-height: 1.625;
  .text-success {
    color: #059603;
  }
  .text-info {
    color: #586c94;
  }
  .text-warning {
    color: #d46419;
  }
  .text-danger {
    color: #ea3838;
  }
  .text-gray {
    color: #666666;
    font-size: 13px;
  }
  .text-500 {
    font-weight: 500;
  }
  .text-center {
    text-align: center;
  }
  .panel {
    .panel-tp {
      display: flex;
      padding: 4px 12px;
      border-bottom: 1px solid #eeeeee;
    }
    .m-row {
      .row {
        display: flex;
        align-items: center;
        background-color: #ffffff;
        padding: 12px;
        border-top: 1px dashed #eeeeee;
        .icon {
          margin-right: 6px;
        }
        .row-bd {
          flex: 1;
          width: 0;
          min-width: 0;
        }
        .row-ft {
          padding-right: 12px;
          min-height: 20px;
          position: relative;
          .btn-sm {
            font-size: 14px;
            line-height: 18px;
            padding: 3px 6px;
            background-color: #ffffff;
            color: #059603;
          }
        }
        .access.row-ft:after {
          content: "";
          position: absolute;
          right: 0px;
          top: 50%;
          width: 10px;
          height: 10px;
          margin-top: -6px;
          transform: rotate(45deg);
          border-right: 1px solid #333;
          border-top: 1px solid #333;
        }
        .fonts14 {
          font-size: 14px;
        }
      }
      .row:first-child {
        border: none;
      }
    }
  }
}
</style>