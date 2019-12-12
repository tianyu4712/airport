<template>
  <div class="hello">
    <h1 style="text-align:center;padding:20px 0;">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  h1 {
    font-size: 14px;
  }
}
</style>
