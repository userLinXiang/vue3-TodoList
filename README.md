<!--
 * @Author: linxiang
 * @Date: 2022-05-07 14:59:54
 * @LastEditTime: 2022-05-07 15:17:43
 * @LastEditors: linxiang
 * @Description:  
-->
# 组件 -> commit -> mutation -> state -> 视图变更 -> 响应式

# 标准做法：
    - Vuex工作流
        1. 组件 -> dispatch -> action
        2. dispatch -> type(actionType) -> 某个action
        3. action -> commit 调用 -> mutation
        4. mutation -> 变更 -> state
        5. render方案：state -> 数据流 -> 视图

    - 文件集合
        1. actionTypes  action 类型
        2. actions      调用mutation的方法
        3. mutations    更改state方法
        4. state        中央数据管理池
        5. store出口    actions、mutations、state统一到仓库里进行管理

# 组件划分
    - TodoList
        1. TodoInput -> 输入的组件
        2. TodoList -> 列表组件
            - TodoItem -> 列表项
                1. 完成或未完成的选择 checkbox
                2. 删除该项          button
                3. 正在做的确认按钮   button
# vue3-TodoList
