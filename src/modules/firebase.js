export {getFirebase, postToFirebase, deleteScoresFirebase}
//GET
async function getFirebase(){
    const url = 'https://rockpaperscissor-5995a-default-rtdb.europe-west1.firebasedatabase.app/scores.json'

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

//POST
async function postToFirebase(message){
    const url = 'https://rockpaperscissor-5995a-default-rtdb.europe-west1.firebasedatabase.app/scores.json';
    /*
    const newComment = {
        title: 'Created in JS',
        text: 'Hello is it me your looking for'
    }
    */
    const options = {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

//document.querySelector('#post').addEventListener('click', postToFirebase );

//DELETE
async function deleteScoresFirebase(){
    const url = 'https://rockpaperscissor-5995a-default-rtdb.europe-west1.firebasedatabase.app/scores.json';


    const options = {
        method: 'DELETE',
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

//document.querySelector('#delete').addEventListener('click', deleteBananFirebase );

