/*
 * @Author: linxiang
 * @Date: 2022-05-07 17:12:27
 * @LastEditTime: 2022-05-09 08:41:19
 * @LastEditors: linxiang
 * @Description:  
 */
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS, SET_DOING_STATUS } from './../store/actionTypes';
import { ITodo, TODO_STATUS } from '@/typings';
import { Store, useStore } from 'vuex';
import { watch } from 'vue';
export interface IUseTodo {
    setTodo:  (value: string) => void;
    setTodoList:  () => void;
    removeTodo:  (id: number) => void;
    setStatus:  (id: number) => void;
    setDoing:  (id: number) => void;
}

export interface IUseLocalStorage {
    getLocalList: () => ITodo[];
    setLocalList: (todolist: ITodo[]) => void;
}
function useTodo():IUseTodo {

    const store: Store<any> = useStore();
    const { getLocalList, setLocalList }: IUseLocalStorage = useLocalStorage();
    const todoList: ITodo[] = getLocalList();

    watch(() => store.state.list, (todoList) => {
        setLocalList(todoList);
    })

    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO
        }
        store.dispatch(SET_TODO, todo);
    }

    function setTodoList(): void {
        store.dispatch(SET_TODO_LIST, todoList);
    }

    function removeTodo(id: number): void {
        store.dispatch(REMOVE_TODO, id);
    }

    function setStatus(id: number): void {
        store.dispatch(SET_TODO_STATUS, id);
    }

    function setDoing(id: number): void {
        store.dispatch(SET_DOING_STATUS, id);
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}

function useLocalStorage(): IUseLocalStorage {
    function getLocalList(): ITodo[] {
        return JSON.parse(localStorage.getItem('todoList') || '[]');
    }

    function setLocalList(todoList: ITodo[]): void {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }

    return {
        getLocalList,
        setLocalList
    }
}

export {
    useTodo,
    useLocalStorage
}