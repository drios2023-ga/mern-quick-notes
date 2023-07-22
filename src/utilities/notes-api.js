import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function newNote(formData) {
 console.log('formData');
  return sendRequest(BASE_URL, 'POST', formData);
  //return sendRequest(`${BASE_URL}/new`, 'POST', formData);  
}