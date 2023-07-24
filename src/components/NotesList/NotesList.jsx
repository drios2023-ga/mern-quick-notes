import NoteCard from '../NoteCard/NoteCard';

export default function NotesList({usernotes}){
    //console.log(usernotes)
    // const notes = usernotes.map((n)=>{
        
    //     return(
    //             <NoteCard
    //                 user={n.user}
    //                 date={n.date}
    //                 note={n.note}
    //             />       
    //         )
    // })

    return(

        <div>
            <div className="form-container">
                <ul className="NotesList">
                {usernotes.map((n)=>{      
                            return(
                                    <NoteCard
                                        user={n.user}
                                        date={n.date}
                                        note={n.note}
                                    />       
                                )
                            })}
                </ul>
            </div>
            <br />
        </div>


        )






}