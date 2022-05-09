/*
 * @Author: linxiang
 * @Date: 2022-05-07 15:08:41
 * @LastEditTime: 2022-05-09 08:29:46
 * @LastEditors: linxiang
 * @Description:  
 */
import { IState, ITodo } from '@/typings';
import { Commit } from 'vuex';
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS, SET_DOING_STATUS } from './actionTypes';

interface ICtx {
    commit: Commit,
    state: IState
}

export default {
    [SET_TODO]({ commit }: ICtx, todo: ITodo): void {
        commit(SET_TODO, todo);
    },
    [SET_TODO_LIST]({ commit }: ICtx, todoList: ITodo[]): void {
        commit(SET_TODO_LIST, todoList);
    },
    [REMOVE_TODO]({ commit }: ICtx, id: number): void {
        commit(REMOVE_TODO, id);
    },
    [SET_TODO_STATUS]({ commit }: ICtx, id:number): void {
        commit(SET_TODO_STATUS, id);
    },
    [SET_DOING_STATUS]({ commit }: ICtx, id:number): void {
        commit(SET_DOING_STATUS, id);
    },
}
