const todoReducer = (state={task:'',todo:[]} , action) => {
  let indexCheckBox,index;
  const newTask = state.todo;
    switch (action.type) {
      case 'ADD_TODO':
        return {...state,
                task : action.task
            };
      case 'TASK_POST_SUCCEEDED':
            return {...state,
                    todo:[...state.todo,action.todo]}
      case 'TASK_GET_SUCCEEDED':
            return {...state,
                    todo:action.todo}
      case 'CLICK_CHEKBOX':
      console.log("action",action);
        indexCheckBox = state.todo.indexOf(action.dataFromCheckBox)
      console.log("indexCheckBox",indexCheckBox);
        // state.todo[indexCheckBox].done = action.doneCheckBox
        return {...state,
                    todo:state.todo}
      case 'TASK_DELETE_SUCCEEDED':
          index = state.todo.findIndex(task => {
            return task.uid === action.uid
          })
          if (index > -1) {
            newTask.splice(index, 1);
          }
          return {
                ...state,
                todo:newTask
              }
      default:
        return state;
    }
  }
  export default todoReducer 
  