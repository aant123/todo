import { call, put, takeEvery } from 'redux-saga/effects'
import { fetch, post, deleteData } from '../services/webService'
import {postRequersted} from '../actions/todoAction'

function* userSaga() {
  yield takeEvery('GET_TASK_REQUERSTED', getTask);
  yield takeEvery('POST_TASK_REQUERSTED',postTask);
  yield takeEvery('DELETE_REQUESED',deleteTask)
}
function* getTask() {
  try {
    const allTask = yield call(fetch,'http://localhost:5000/todos');
    yield put({ 
      type: 'TASK_GET_SUCCEEDED', 
      todo: allTask 
    });
  } catch (error) {
    yield put({ 
      type: 'TASK_GET_FAILED', 
      message : error.message
    });
  }
}
function* postTask(data){
  try {
    const dataTask = yield call(post,'http://localhost:5000/todos',data.task);
    yield put({ 
      type: 'TASK_POST_SUCCEEDED', 
      todo : dataTask
    });
  }catch(error){
    yield put({ 
      type: 'TASK_POST_FAILED', 
      message : error.message
    });

  }
}

function* deleteTask(data){
  let path = "http://localhost:5000/todos/"+data.dataFromDelect.uid;
  console.log("data",data);
  console.log("path",path);
  try {
    const result = yield call(deleteData,path,data);
    yield console.log("result",result);
    yield put({ 
      type: 'TASK_DELETE_SUCCEEDED', 
      uid:data.dataFromDelect.uid,
      result:result
    });
  }catch(error){
    yield put({ 
      type: 'TASK_DELETE_FAILED', 
      message : error.message
    });

  }
}
export {
  userSaga
}