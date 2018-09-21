const userReducer = (users = [], action) => {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      console.log('fetch users succeeded', [...users, ...action.users])
      return [...users, ...action.users];
      break;

    default:
      return users;
      break;
  }
}

export default userReducer 
