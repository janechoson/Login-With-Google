<template>
  <div>
    <router-view />
    <footer class="the-footer">footer</footer>
  </div>
</template>

<style lang="scss" scoped>
.the-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
}
</style>
