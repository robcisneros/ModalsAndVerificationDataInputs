import { Fragment, useState } from 'react';
import './App.css';
import Wrapper from './components/Helpers/Wrapper';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler= user => {
    setUsersList((prevUsersList) =>{
      return [user, ...prevUsersList];
    });

  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
