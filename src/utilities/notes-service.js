

import * as notesAPI from './notes-api';

export async function createNote(formData) {
    console.log(formData)
    const token = await notesAPI.newNote(formData);

    console.log ('created note');
  }