import sendRequest from "./send-request";
import sendRequestNotes from "./send-request";

const BASE_URL = '/api/notes';

export async function newNote(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}

export async function getNotes(){
  return sendRequestNotes(BASE_URL);

    //  const notes =  {
    //           _id: '64bc1d10e261c4bcf2ff7c4f',
    //           user: '64bac9980d88c28c215dc99', 
    //           name: 'test1', 
    //           date: 'Sat Jul 22 2023 13:16:41 GMT-0500 (Central Daylight Time)',
    //         };

    //    console.log(notes);

    // return notes;     


  //console.log()


}

//console.log(getNotes());