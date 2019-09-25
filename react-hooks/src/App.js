import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'

const App = () => {

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  // Hook to render dummy data above to the page
  const [users, setUsers] = useState(usersData)

  // Function to add a new user to the state. It will be passed as a prop in the AddUserForm component.
  const addUser = user => {
    // Since this data isn't coming from a database or API, I am manually updating the user.id here
    user.id = users.length + 1
    // The spread operator is included to make sure the current users stay in the array
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  )
}

export default App
