<template>
  <div class="form-vux-container">
    <div class="vux-demo">
      <img class="logo" src="../../assets/images/vux_logo.png">
      <h1><i class="iconfont icon-right"></i></h1>
    </div>
    <router-link to="/">
      <group :title="msg">
        <cell title="VUX" value="cool" is-link></cell>
      </group>
    </router-link>
    <div @click="testToast">测试弹出框</div>
    <input type="file"  />
    <input type="text"  :value="getParams"/>
  </div>
</template>

<script>
import { Group, Cell, querystring } from 'vux'
import * as api from '@/assets/config/api'

let a = 345;

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  computed: {
    getParams() {
      console.log(this.$route.params.id);
      return this.$route.params.id;
    }
  },
  methods: {
    getUserInfo: function() {
      let that = this;
      // GET 请求
    //   this.$http.get('https://www.haibingo.com/station/wechat/queryUserInfo', {
    //     params: {
    //     openid: 'ozJ8gw3r93BoIsXc0U0wKpF2lWc4',
    //     roleType: '2',
    //     unionid: '',
    //     uid: ''
    //     }
    //   }
    //  ).then(({data}) => {
    //     console.log(data);
    //   })
    // POST 请求
    let data = {
      openid: 'ozJ8gw3r93BoIsXc0U0wKpF2lWc4',
      roleType: '2',
      unionid: '',
      uid: ''
    }
    this.$http({
      method: 'post',
      url: "https://www.haibingo.com" + api.service.getUserInfo,
      params: data
    }).then(({data}) => {
      if(data.success === api.resStatus.OK) {
        console.log(data.data)
        if(data.data) {
          that.msg = data.data.nickname;
        }
      }else{
      console.log(data);
      }
    })
    },
    testToast: function() {
      console.log(a);
      console.log(api);
      console.log(this.$route.params.id);
      this.getUserInfo()
      this.$vux.toast.show({
        type: 'text',
        text: '这是测试toast'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/mixin.less';

.form-vux-container {
  width: 100%;
  background-color: @bg-yellow;
}
.vux-demo {
  text-align: center;
}
.weui-cells__title {
  font-size: @font-tw-size !important;
  font-size: 50px;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>
