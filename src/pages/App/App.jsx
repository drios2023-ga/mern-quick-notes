import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import NotesPage from '../NotesPage/NotesPage';
import NewNotePage from '../NewNotePage/NewNotePage';
import { getNotes } from '../../utilities/notes-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  async function getNote(){
    const notes = await getNotes();
    setNotes(notes);
    }

  console.log(notes);


useEffect(() => {
 //if(user){
    getNote();
  }, []);


  return (
    <main className="App">
      
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/orders/:id/new" element={<NewOrderPage />} />
              <Route path="/orders/:id" element={<OrderHistoryPage />} />
              <Route path="/notes/:id" element ={<NotesPage usernotes={notes} />} />
              <Route path="/notes/new/:id" element={<NewNotePage usernotes={notes}/>}  />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
      
    </main>
  );
}
