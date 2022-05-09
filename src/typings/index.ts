/*
 * @Author: linxiang
 * @Date: 2022-05-07 16:59:41
 * @LastEditTime: 2022-05-09 08:54:56
 * @LastEditors: linxiang
 * @Description:  
 */
interface ITodo {
    id?: Number;
    content?: String;
    status?: TODO_STATUS
}

interface IState {
    list: ITodo[]
}

enum TODO_STATUS {
    WILLDO = 'willdo',
    DOING = 'doing',
    FINISHED = 'finished'
}

export {
    ITodo,
    IState,
    TODO_STATUS
}