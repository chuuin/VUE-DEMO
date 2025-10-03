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
  <p>{{ a * b }}</p>
  <p>{{ myFunction(100) }}</p>
  {{ count }}
  <button @click="myFunction2(5)">button</button>
  <br />
  {{ text }}<br />
  <input type="text" v-model="text" />
  <br />
  {{ selectValue }}<br />
  <select v-model="selectValue">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <br />
  {{ isCheck }}<br />
  <input type="checkbox" v-model="isCheck" />is check
  <br />
  {{ checkbox }}<br />
  <input type="checkbox" value="0" v-model="checkbox" />0
  <input type="checkbox" value="1" v-model="checkbox" />1
  <input type="checkbox" value="2" v-model="checkbox" />2
  <input type="checkbox" value="3" v-model="checkbox" />3
</template>

<script>
//所有程式邏輯都必須要寫在 export default {} 裡頭。
export default {
  //name: 'App' 宣告這個 .vue 的名稱。
  name: "testJs",

  //data() {} 是宣告變數的地方，在裡面使用 return 來輸出一個變數 message，輸出的意思就是將變數輸出給 <template></template> 可以來使用。而這個變數 message 的型別是一個字串，給予了 'Hello World'。
  data() {
    return {
      message: "Hello Ian",
      isShow: true,
      x: 1,
      users1: ["Jake", "John", "Mary"],
      users2: [
        { name: "Jake", age: 18 },
        { name: "John", age: 20 },
        { name: "Mary", age: 16 },
      ],
      a: 100,
      b: 2,
      count: 0,
      text: '',
      selectValue: '',
      isCheck: false,
      checkbox: [],
    };
  },

  methods: {
    myFunction(value) {
      //注意在這邊要用 this 來取得定義在 data() 內的變數
      return this.a * this.b + value;
      //傳入一個數值 100 給 myFunction，然後與 x 跟 y 的相乘結果相加起來。所以在這邊的例子會印出 300。
    },
    myFunction2(num) {
      this.count += num;
      console.log(this.count);
    }
  },
};


</script>
