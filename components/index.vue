<template>
    <div>
        我是公共页面
        <div class="header">头部导航</div>
        <div class="nav">
            <router-link to='/index/rec' activeClass='select'>推荐</router-link>
            <router-link to='/index/hot' activeClass='select'>热歌榜</router-link>
            <router-link to='/index/search' activeClass='select'>搜索</router-link>
        </div> 
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="" scoped>
  .header{
    height: 1.68rem;
    background: green;
  }
  .select{
    color: red;
  }
  .nav{
    height: 1.07rem /* 80/75 */;
    display: flex;
    font-size: .48rem /* 36/75 */;
  }
  .nav a{
    flex: 1;
    background: skyblue;
    text-align: center;
    line-height: 1.07rem /* 80/75 */;
    text-decoration: none;
  }
</style>