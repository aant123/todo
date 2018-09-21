import axios from 'axios'

const fetch = (path, data) => {
  return new Promise((resolve, reject) => {
    axios.get(path)
      .then(resp => {
        resolve(resp.data.result);
      })
      .catch(error => {
        reject(error);
      });
  })
}
const post = (path,data) => {
  return new Promise((resolve, reject) => {
      axios.post(path,{
        title:data,
        done:false
      })
      .then(resp => {
        resolve(resp.data.result);
      })
      .catch(error => {
        reject(error);
      });
})
}

const deleteData= (path,data) => {
  return new Promise((resolve, reject) => {
    axios.delete(path)
    .then(resp => {
      resolve(resp.data.result);
    })
    .catch(error => {
      reject(error);
    });
})
}
export {
  fetch,
  post,
  deleteData
}