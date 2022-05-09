<!--
 * @Author: linxiang
 * @Date: 2022-05-07 15:12:27
 * @LastEditTime: 2022-05-07 17:21:17
 * @LastEditors: linxiang
 * @Description:  
-->
<template>
    <div>
        <input
            type="text"
            v-model="todoValue"
            @keyup="setTodoValue"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { IUseTodo, useTodo } from '../../hooks/index';

export default defineComponent({
    name: 'TodoInput',
    setup() {
        const todoValue = ref<string>('');
        const { setTodo }: IUseTodo = useTodo();

        const setTodoValue = (e: KeyboardEvent): void => {
            if (e.keyCode=== 13 && todoValue.value.trim().length) {
                // 设置数据
                setTodo(todoValue.value);
                todoValue.value = '';
            }
        }

        return {
            todoValue,
            setTodoValue
        }
    }
})
</script>

<style>

</style>