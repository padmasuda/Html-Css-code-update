<template>
  <div class="calculator">
    <input type="text" v-model="display" disabled />
    <div class="buttons">
      <button @click="clear">C</button>
      <button @click="append('1')">1</button>
      <button @click="append('2')">2</button>
      <button @click="append('3')">3</button>
      <button @click="append('+')">+</button>
      <button @click="append('4')">4</button>
      <button @click="append('5')">5</button>
      <button @click="append('6')">6</button>
      <button @click="append('-')">-</button>
      <button @click="append('7')">7</button>
      <button @click="append('8')">8</button>
      <button @click="append('9')">9</button>
      <button @click="append('*')">*</button>
      <button @click="append('0')">0</button>
      <button @click="append('.')">.</button>
      <button @click="calculate">=</button>
      <button @click="append('/')">/</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: ''
    };
  },
  methods: {
    append(char) {
      this.display += char;
    },
    clear() {
      this.display = '';
    },
    calculate() {
      try {
        this.display = eval(this.display);
      } catch (e) {
        this.display = 'Error';
      }
    }
  }
};
</script>

<style>
.calculator {
  width: 200px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.calculator input {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  text-align: right;
  padding: 5px;
  font-size: 1.2em;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.buttons button {
  height: 40px;
  font-size: 1.2em;
}
</style>