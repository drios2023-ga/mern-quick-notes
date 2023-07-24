import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';
import NotesList from '../../components/NotesList/NotesList';

export default function NewNotePage({usernotes}) {
  

  
    return (
      <main>
        <h1>New Note Page</h1>
        {
            <>
            <NewNoteForm />
            <NotesList usernotes={usernotes} />
            </>
        }
      </main>
    );
  }