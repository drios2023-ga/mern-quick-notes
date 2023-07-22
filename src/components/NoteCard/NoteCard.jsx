


export default function NoteCard({
    user,
    date,
    note
}){

    return(
            <li>
                <div className="note-card">
                    <div>{user}</div>
                    <div>{date}</div>
                    <div>{note}</div>
                </div>
            </li>
        )
}

