const TASK_GET_SUCCEEDED = 'TASK_GET_SUCCEEDED'
const POST_TASK = 'POST_TASK_REQUERSTED'
const GET_TASK = 'GET_TASK_REQUERSTED'
const TASK_POST_SUCCEEDED = 'TASK_POST_SUCCEEDED'
const CLICK_CHEKBOX = 'CLICK_CHEKBOX'
const DELETE_REQUESED = 'DELETE_REQUESED'

const taskGetSucceeded = todo => ({
    type: TASK_GET_SUCCEEDED,
    todo:todo
  })
const postRequersted = task => ({
  type: POST_TASK,
  task:task
})
const getRequersted = () =>({
  type:GET_TASK
})
const taskPostSucceeded = todo => ({
  type:TASK_POST_SUCCEEDED,
  todo:todo
})

const clickCheckbox = data => ({
  type:CLICK_CHEKBOX,
  dataFromCheckBox : data
})

const deleteRequesed = data =>({
  type:DELETE_REQUESED,
  dataFromDelect : data
})
  export {
    taskGetSucceeded,
    postRequersted,
    taskPostSucceeded,
    getRequersted,
    clickCheckbox,
    deleteRequesed
    
  }
  