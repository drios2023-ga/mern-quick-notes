import sendRequest from "./send-request";
import sendRequestNotes from "./send-request";

const BASE_URL = '/api/notes';

export async function newNote(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}

export async function getNotes(){
  return sendRequestNotes(BASE_URL);

}

