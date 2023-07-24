import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { useParams } from 'react-router-dom';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      {/* <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;*/}
      <Link to={`/note/${user._id}`}>Notes</Link>
      &nbsp; | &nbsp; 
      <Link to={`/notes/new/${user._id}`}>New Note</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}