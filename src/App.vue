<template>
  <h2>Day3 - Hello World</h2>
  {{ message }}
  <hr>

  <h2>Day4 - if 判斷式</h2>
  <h3>v-if 標籤</h3>
  <p v-if="isShow">Hello World</p>
  <hr>
  <h3>加入更多的 if else 判斷式</h3>
  <p v-if="x === 0">x = 0</p>
  <p v-else-if="x === 1">x = 1</p>
  <p v-else-if="x === 2">x = 2</p>
  <p v-else>x != 0</p>
  <hr>
  <h3>另外可以使用 v-show , 跟 v-if 有一樣的效果</h3>
  <p v-show="isShow">Hello World</p>
  <!-- v-show 與 v-if 的差別在於， v-show 如果不顯示的話，會在 HTML 上顯示：
       <p style="display: none;">Hello World</p>
       而 v-if 不顯示的話，會變成連標籤都消失不見。
  -->

  <hr>
  <h2>Day5 - for 迴圈</h2>
  <h3>v-for</h3>
  <p v-for="user in users1" :key="user">{{ user }}</p>
  <hr>
  <h3>加入 index 來表示資料的編號</h3>
  <p v-for="(user, index) in users1" :key="user">{{ index }} {{ user }}</p>
  <hr>
  <h3>用陣列的物件資料來顯示</h3>
  <p v-for="(user, index) in users2" :key="user.age">{{ index }} {{ user.name }} {{ user.age }}</p>
  <hr>
  <h3>迴圈加入 if 判斷式</h3>
  <div v-for="(user, index) in users1" :key="user">
    <p v-if="user === 'John'">{{ index }} {{ user }}</p>
  </div>
  <hr>

  <h2>Day6 - 函式</h2>
  <h3>如果需要針對變數進行運算，可以這樣寫</h3>
  <p>{{ a * b }}</p>
  <hr>
  <h3>可以寫一個共用的 function 來使用</h3>
  <p>{{ myFunction() }}</p>
  <hr>
  <h3>函式傳入值 => myFunction2(value) 的 value </h3>
  <p> {{ myFunction2(100) }}</p>
  <hr>

  <h2>Day7 - Demo</h2>
  <h3>製作一個按鈕，按鈕 v-on:click="" 後會將數值累加</h3>
  {{ count }}
  <button v-on:click="myFunction3()">button</button>
  <hr>
  <h3>可以使用 @click="" 取代 v-on:click=""</h3>
  {{ count }}
  <button @click="myFunction3()">button</button>
  <hr>
  <h3> 將 event 傳入到 method 裡面</h3>
  {{ count }}
  <button @click="myFunction4(10)">button</button>
  <hr>
  <h3>按鈕可以同時傳入多個 Function</h3>
  {{ myname }} {{ count }}
  <button @click="myFunction3(), changeName($event)">按一下變成英文名</button>





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
  <br />
  <input type="text" v-model="formData.formname" />
  <br />
  <textarea v-model="formData.formtext" />
  <br />
  <select v-model="formData.formvalue">
    <option value="">select</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <br />
  <input type="checkbox" v-model="formData.formischeck" />is check
  <br />
  <input type="checkbox" value="0" v-model="formData.formcheck" />0
  <input type="checkbox" value="1" v-model="formData.formcheck" />1
  <input type="checkbox" value="2" v-model="formData.formcheck" />2
  <input type="checkbox" value="3" v-model="formData.formcheck" />3
  <br />
  <input type="radio" value="0" v-model="formData.formradio" />0
  <input type="radio" value="1" v-model="formData.formradio" />1
  <input type="radio" value="2" v-model="formData.formradio" />2
  <input type="radio" value="3" v-model="formData.formradio" />3
  <br />
  <button @click="submit">送出</button>

  <hr />
  <div v-for="computedDatas in checkDatas" :key="computedDatas.id">
    {{ computedDatas.id }} {{ computedDatas.name }}
  </div>
  <hr />
  <input type="text" v-model="user.name" />
  <hr />
  <button @click="addItem">Add item</button>

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
      myname: '邊伯賢',
      text: '',
      selectValue: '',
      isCheck: false,
      checkbox: [],
      formData: {
        formname: '',
        formtext: '',
        formvalue: '',
        formischeck: false,
        formcheck: [],
        formradio: '',
      },
      computedDatas: [
        { id: 1, name: 'Jake' },
        { id: 2, name: 'Allan' },
        { id: 1, name: 'Peter' },
      ],
      user: {
        name: '',
      },
      items: [],
    };
  },

  methods: {
    myFunction() {
      return this.a * this.b;
      //注意在這邊要用 this 來取得定義在 data() 內的變數
    },
    myFunction2(value) {
      return this.a * this.b + value;
    },
    myFunction3() {
      this.count += 1;
    },
    myFunction4(temp) {
      this.count += temp;
    },
    changeName(event) {
      console.log(event.target)
      this.myname = 'Baekhyun';
    },

    submit() {
      console.log(this.formData)
    },
    addItem() {
      this.items.push('test');
      console.log(this.items)
    }
  },
  watch: {
    count(newvalue, oldvalue) {
      console.log(newvalue, oldvalue);
    },
    user: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true, // 要監聽物件時, 需要加上 deep: true 才會起作用。
    }
  },

  //只需要單一次的複雜運算，官方會是建議使用 computed 來執行的
  computed: {
    checkDatas() {
      return this.computedDatas.filter((data) => data.id === 1);
    }
  }
};


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
