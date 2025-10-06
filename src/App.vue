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
  <button @click="myFunction3(), changeName()">按一下變成英文名</button>
  <hr>

  <h2>Day8 - 表單 input</h2>
  <h3>input :</h3>
  {{ text }}<br />
  <input type="text" v-model="text" />
  <hr>
  <h3>input 去除前後空白 (v-model.trim="")</h3>
  {{ text }} <br />
  <input type="text" v-model.trim="text" />
  {{ selectValue }}<br />
  <hr>
  <h3>input 游標退出後才更新</h3>
  {{ text }} <br />
  <input type="text" v-model.lazy="text" />
  <hr>
  <h3>input 防止顯示的變數被更改</h3>
  <p v-once>{{ message2 }}</p>
  <br />
  <input type="text" v-model="message2" />
  <hr>
  <h3>input 完全顯示標籤的內容</h3>
  <p v-pre>{{ text }}</p>
  <input type="text" v-model="text">
  <hr>

  <h2>Day9 - 表單常用欄位</h2>
  <h3>input</h3>
  {{ text2 }} <br />
  <input type="text" v-model="text2" />
  <hr>
  <h3>textarea(文字區域)</h3>
  {{ text2 }} <br />
  <textarea v-model="text2" />
  <hr>
  <h3>select(下拉式選單)</h3>
  <select v-model="selectValue">
    <option value="">select</option>
    <option value="audi">Audi</option>
    <option value="bmw">BMW</option>
    <option value="benz">Benz</option>
    <option value="volvo">Volvo</option>
  </select>
  <hr>
  <h3>checkbox 單選(boolean)</h3>
  {{ isCheck }}<br />
  <input type="checkbox" v-model="isCheck" />is check
  <hr>
  <h3>checkbox 多選(Array)</h3>
  {{ checkbox }}<br />
  <input type="checkbox" value="audi" v-model="checkbox" />Audi
  <input type="checkbox" value="bmw" v-model="checkbox" />BMW
  <input type="checkbox" value="benz" v-model="checkbox" />Benz
  <input type="checkbox" value="volvo" v-model="checkbox" />Volvo
  <hr>
  <h3>radio 單選(string)</h3>
  {{ radio }} <br />
  <input type="radio" value="audi" v-model="radio" />Audi
  <input type="radio" value="bmw" v-model="radio" />BMW
  <input type="radio" value="benz" v-model="radio" />Benz
  <input type="radio" value="volvo" v-model="radio" />Volvo
  <hr>

  <h2>day10 - 表單 submit</h2>
  <input type="text" v-model="formData.formname" />
  <br />
  <textarea v-model="formData.formtext" />
  <br />
  <select v-model="formData.formvalue">
    <option value="">select</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="bird">Bird</option>
    <option value="fish">Fish</option>
  </select>
  <br />
  <input type="checkbox" v-model="formData.formischeck" />is check
  <br />
  <input type="checkbox" value="dog" v-model="formData.formcheck" />Dog
  <input type="checkbox" value="cat" v-model="formData.formcheck" />Cat
  <input type="checkbox" value="bird" v-model="formData.formcheck" />Bird
  <input type="checkbox" value="fish" v-model="formData.formcheck" />Fish
  <br />
  <input type="radio" value="dog" v-model="formData.formradio" />Dog
  <input type="radio" value="cat" v-model="formData.formradio" />Cat
  <input type="radio" value="bird" v-model="formData.formradio" />Bird
  <input type="radio" value="fish" v-model="formData.formradio" />Fish
  <br />
  <button @click="submit">送出</button>
  <hr>
  {{ formData }}
  <hr />

  <h2>Day11 - computed(另一種宣告 function 的方式)</h2>
  <!-- methods 與 computed 的差別 -->
  <!-- computed 不管呼叫多少次，都只會執行一次 -->
  <!-- computed 可以用在一開始網頁執行時需要的判斷 -->
  <div v-for="computedDatas in checkDatas" :key="computedDatas.id">
    {{ computedDatas.id }} {{ computedDatas.name }}
  </div>
  <hr />

  <h2>Day12 - watch(監聽)</h2>
  <h3>基本監聽, 按鈕按下去才會監聽</h3>
  <button @click="addcount">Add item</button>
  <hr>
  <h3>剛開始執行時就會監聽</h3>
  {{ count3 }}
  <hr>
  <h3>監聽物件</h3>
  <input type="text" v-model="user.name" />
  <hr>
  <h3>監聽陣列</h3>
  <button @click="addItem">Add item</button>
  <hr>

  <h2>Day13 - component(元件)</h2>
  <Day13 />
  <hr>

  <h2>Day14 - 元件傳入參數</h2>
  <h3>基本 component</h3>
  <Day14 />
  <hr>
  <h3>傳入參數</h3>
  <Day14 name="Ian" />
  <hr>
  <h3>傳入參數使用變數</h3>
  <Day14 :name="ComponentName" />
  <hr>
  <h3>傳入參數型別不相符</h3>
  <Day14_2 id="name" name="Ian" />
  <hr>
  <h3>傳入參數缺少時</h3>
  <Day14_2 :id="ComponentName" :name="myname" />


</template>

<script>
import Day13 from './components/Day13Compontent.vue';
import Day14 from './components/Day14Component.vue';
import Day14_2 from './components/Day14-2Component.vue';

//所有程式邏輯都必須要寫在 export default {} 裡頭。
export default {
  //name: 'App' 宣告這個 .vue 的名稱。
  name: "App",

  components: {
    Day13,
    Day14,
    Day14_2,
  },

  //   //data() {} 是宣告變數的地方，在裡面使用 return 來輸出一個變數 message，輸出的意思就是將變數輸出給 <template></template> 可以來使用。而這個變數 message 的型別是一個字串，給予了 'Hello World'。
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
      message2: '不能被改了',
      text2: '',
      selectValue: '',
      isCheck: false,
      checkbox: [],
      radio: '',
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
      count2: 0,
      count3: 10,
      user: {
        name: '',
      },
      items: [],
      ComponentName: 'WenLin',
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
    changeName() {
      // console.log(event.target);
      this.myname = 'Baekhyun';
    },

    submit() {
      console.log(this.formData)
    },

    addcount() {
      this.count2 += 1;
    },

    addItem() {
      this.items.push('甲矩橘room');
      console.log(this.items)
    }
  },
  watch: {
    count2(newvalue, oldvalue) {
      console.log(newvalue, oldvalue);
    },
    count3: {
      handler(newvalue) {
        console.log(newvalue);
      },
      immediate: true, //要設定才會起作用，剛開始執行時就會監聽
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
      // 使用了一個快速篩選的方式 filter，this.datas.filter((data) => data.id === 1) 這個寫法就表示將陣列 datas 的資料一個一個走訪，然後找到 id 等於 1 的回傳成一個陣列出來。
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
