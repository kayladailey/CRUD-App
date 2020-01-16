import React from 'react';
import UserTable from './tables/UserTables';
import {useState} from 'react';



const App = (props) => {

  //mock data below is being used as out initialstate in our useState hook
  const usersData = [
    { id: 1, name: 'Kayla', username: 'daileyfro' },
    { id: 2, name: 'Nick', username: 'nick_duh' },
    { id: 3, name: 'Lincoln', username: 'blackpanther'},
    { id: 4, name: 'Mackenzie', username: 'princessjune'},
  ]

  const [users, setUsers] = useState(usersData)

  return (
    <div className="container">
      <h1>The Dailey Craze</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users=/>
        </div>
      </div>
    </div>
  )
}

export default App
