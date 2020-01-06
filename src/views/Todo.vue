<template>
  <div class="todo-app">
    <div class="form-add">
      <div class="form-group">
        <input type="text" class="form-control" id="inputItem" />
      </div>
      <button type="button" class="btn btn-primary" id="btnAdd" @click="onAdd">
        添加
      </button>
    </div>
    <hr />
    <h2>todo list</h2>
    <ul id="todoList" class="list-group">
      <li v-for="item in todos" :key="item" class="list-group-item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todo",
  data: function() {
    return {
      inputItem: "",
      todos: ["buy cards"]
    };
  },
  mounted() {
    console.log(this._vnode);
  },
  methods: {
    onAdd() {
      this.todos.push(this.inputItem);
    }
  }
};
</script>

<style scoped>
.todo-app {
  padding: 2em;
  width: 500px;
  background-color: #eee;
}
.form-add {
  width: 20em;
}
</style>
