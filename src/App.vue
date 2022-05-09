<!--
 * @Author: linxiang
 * @Date: 2022-05-07 14:59:46
 * @LastEditTime: 2022-05-07 21:41:57
 * @LastEditors: linxiang
 * @Description:  
-->
<template>
  <div class="wrapper">
    <todo-input />
    <todo-list
      :todoList="todoList"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import TodoInput from './components/TodoInput/index.vue';
import TodoList from './components/TodoList/index.vue';
import { IUseTodo, useTodo } from './hooks';
import { Store, useStore } from 'vuex';
export default defineComponent({
  name: 'App',
  components: {
    TodoInput,
    TodoList
  },
  setup() {
    const { setTodoList }: IUseTodo = useTodo();
    const store: Store<any> = useStore();

    onMounted(() => {
      setTodoList();
    })

    return {
      todoList: computed(() => store.state.list)
    }
  }
});
</script>

