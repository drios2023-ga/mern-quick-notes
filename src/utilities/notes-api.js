import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function newNote(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}

export async function getNotes(){
console.log ('getNotes');

}