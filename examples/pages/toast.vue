<template>
  <div class="f f-c f-c-c toast-window" :style="[{height: windowHeight+'px', display: (show? 'display': 'none')}]">
    <div class="toast-container">
      <div class="t f f-c-c" v-if="image">
        <img class="type-img" :src="image">
      </div>
      <div class="b f f-c-c">{{_text}}</div>
    </div>
  </div>
</template>

<script>
// import { getWindowHeight } from "@/utils/util";
/**
 * // 获取微信窗口高度
 * @return number 单位 px
 */
export function getWindowHeight() {
    try {
        const res = wx.getSystemInfoSync()
        return res.windowHeight;
    } catch (e) {
        return 1196
    }
}
const ossUrl = 'https://mieba.oss-cn-hangzhou.aliyuncs.com/growth/assets/'
const img_success = ossUrl + "images/toast/success.png";
const img_error = ossUrl + "images/toast/error.png";
const img_info = ossUrl + "images/toast/info.png";
const img_warn = ossUrl + "images/toast/warn.png";

const types = {
  success: "SUCCESS",
  info: "INFO",
  error: "ERROR",
  warn: "WARN"
};

const matchImg = function(type) {
  type = type.toUpperCase();
  switch (type) {
    case types.info:
      return img_info;
    case types.error:
      return img_error;
    case types.warn:
      return img_warn;
    case types.success:
      return img_success;
    default:
      return "";
  }
};

const packToastParams = function(param) {
  return {
    ...(typeof param === "string" ? { text: param } : param)
  };
};

const _duration = 1000;

export default {
  data() {
    return {
      windowHeight: 0,
      _text: "",
      type: "",
      image: "",
      show: false,
      timer: null
    };
  },
  onReady() {
    this.windowHeight = getWindowHeight();
  },
  methods: {
    _showToast({ text, type = "", duration = _duration }, cb) {
      this._clearToast();
      this._text = text;
      this.type = type.toUpperCase();
      this.image = matchImg(type);
      this.show = true;
      this.timer = setTimeout(() => {
        this.show = false;
        this._text = "";
        this.type = "";
        this.image = "";
        cb && cb();
        // if (this && this.hasOwnProperty("show")) {
        //   console.log(this)
        // }else {
        //   console.log(this)
        // }
      }, duration);
    },
    _clearToast() {
      this.show = false;
      clearTimeout(this.timer);
      this.timer = null;
    },
    showSuccessToast(params, cb) {
      this._showToast(
        {
          text: "操作成功",
          ...packToastParams(params),
          type: "Success"
        },
        cb
      );
    },
    showWarnToast(params, cb) {
      this._showToast(
        {
          text: "警告",
          ...packToastParams(params),
          type: "Warn"
        },
        cb
      );
    },
    showInfoToast(params, cb) {
      this._showToast(
        {
          text: "提示信息",
          ...packToastParams(params),
          type: "Info"
        },
        cb
      );
    },
    showErrorToast(params, cb) {
      this._showToast(
        {
          text: "操作失败",
          ...packToastParams(params),
          type: "Error"
        },
        cb
      );
    },
    showTextToast(text, cb) {
      this._showToast(
        {
          text
        },
        cb
      );
    },
    success(...args) {
      this.showSuccessToast(...args);
    },
    info(...args) {
      this.showInfoToast(...args);
    },
    error(...args) {
      this.showErrorToast(...args);
    },
    warn(...args) {
      this.showWarnToast(...args);
    },
    text(...args) {
      this.showTextToast(...args);
    }
  }
};
</script>

<style>
.f {
  display: flex;
}
.f-c {
  align-items: center;
}
.f-c-c {
  justify-content: center;
}
.toast-window {
  z-index:  210;
  position: fixed;
  top: 0;
  left: 0;
  width: 750rpx;
  color: #fff;
  pointer-events: none;
}

.toast-container {
  box-sizing: border-box;
  padding: 40rpx;
  min-width: 264rpx;
  max-width: 580rpx;
  background-color: rgba(58, 58, 58, 0.9);
  border-radius: 16rpx;
}

.toast-container .t {
  margin-top: 6rpx;
  margin-bottom: 6rpx;
}

.type-img {
  width: 76rpx;
  height: 76rpx;
}

.toast-container .b {
  font-size: 32rpx;
  line-height: 44rpx;
  text-align: center;
  white-space: pre-wrap;
}
</style>
