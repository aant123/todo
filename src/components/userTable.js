import React, { Component } from 'react'

class UserTable extends Component {
  render() {
    const { users } = this.props;
    
    const userRows = users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
        </tr>
      )
    })

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {userRows}
        </tbody>
      </table>
    )
  }
}

export default UserTable