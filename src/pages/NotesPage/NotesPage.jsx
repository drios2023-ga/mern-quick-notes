//import NotesList from '../../components/NotesList/NotesList'
import NoteCard from '../../components/NoteCard/NoteCard';


export default function NotesPage({usernotes}) {
  //console.log(usernotes)
  const notes = usernotes.map((n)=>{
      
      return(
              <NoteCard
                  user={n.user}
                  date={n.date}
                  note={n.note}
              />       
          )
  })
  
  return (
    <main>
      <h1>Notes Page</h1>
      <div>
        <div className="form-container">
            <ul className="NotesList">

            </ul>
        </div>
      </div>
    </main>
  );
}