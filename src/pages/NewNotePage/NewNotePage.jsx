import NewNoteForm from '../../components/NewNoteForm/NewNoteForm'

export default function NewNotePage({user}) {
  
    return (
      <main>
        <h1>New Note Page</h1>
        {
            <NewNoteForm></NewNoteForm>
        }
      </main>
    );
  }