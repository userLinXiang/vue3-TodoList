<!--
 * @Author: linxiang
 * @Date: 2022-05-07 15:12:44
 * @LastEditTime: 2022-05-09 08:51:14
 * @LastEditors: linxiang
 * @Description:  
-->
<template>
    <div>
        <todo-item
            v-for="(item, index) of todoList"
            :key="index"
            :item="item"
            @removeTodo="removeTodo"
            @setStatus="setStatus"
            @setDoing="setDoing"
        />
    </div>
</template>

<script lang="ts">

import { IUseTodo, useTodo } from '@/hooks';
import { ITodo } from '@/typings';
import { defineComponent, PropType } from 'vue';
import TodoItem from './item.vue';
export default defineComponent({
    name: 'TodoList',
    props: {
        todoList: Array as PropType<ITodo[]>
    },
    components: {
        TodoItem
    },
    setup(props, { emit }) {
        const {
            removeTodo,
            setStatus,
            setDoing
        }: IUseTodo = useTodo();

        return {
            removeTodo,
            setStatus,
            setDoing
        }
    }
})
</script>

<style>

</style>