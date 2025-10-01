<template>
  {{ message }}
  <p v-show="isShow">Hello World</p>
  <p v-if="x === 0">x = 0</p>
  <p v-else-if="x === 1">x = 1</p>
  <p v-else-if="x === 2">x = 2</p>
  <p v-else>x != 0</p>
  <p v-for="user in users1" :key="user">{{ user }}</p>
  <p v-for="(user, index) in users1" :key="user">{{ index }} {{ user }}</p>
  <p v-for="(user, index) in users2" :key="user.age">{{ index }} {{ user.name }} {{ user.age }}</p>
  <div v-for="(user, index) in users1" :key="user">
    <p v-if="user === 'John'">{{ index }} {{ user }}</p>
  </div>
</template>

<script>
//所有程式邏輯都必須要寫在 export default {} 裡頭。
export default {

  //name: 'App' 宣告這個 .vue 的名稱。
  name: 'App',

  //data() {} 是宣告變數的地方，在裡面使用 return 來輸出一個變數 message，輸出的意思就是將變數輸出給 <template></template> 可以來使用。而這個變數 message 的型別是一個字串，給予了 'Hello World'。
  data() {
    return {
      message: 'Hello Ian',
      isShow: true,
      x: 1,
      users1: ['Jake', 'John', 'Mary'],
      users2: [
        { name: 'Jake', age: 18 },
        { name: 'John', age: 20 },
        { name: 'Mary', age: 16 }
      ],
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
