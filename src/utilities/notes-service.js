import * as notesAPI from './notes-api';

export async function createNote(formData) {
    const note = await notesAPI.newNote(formData);
  }

// export async function getNotes(){

//     const notes = await notesAPI.getNotes();

//     return notes;

// }