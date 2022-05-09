/*
 * @Author: linxiang
 * @Date: 2022-05-07 14:59:46
 * @LastEditTime: 2022-05-07 17:11:18
 * @LastEditors: linxiang
 * @Description:  
 */
import { createStore } from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';

export default createStore({
  state,
  mutations,
  actions,
})
