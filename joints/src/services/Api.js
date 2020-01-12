import axios from 'axios';
import firebase from 'firebase/app';

 async function Api(){
    
    const TOKEN = await firebase.auth().currentUser.getIdToken()

    return axios.create({
        baseURL: 'api.joints.id',
        headers:{
            'Content-Type': 'application/json',
            'Authorization' : $`Bearer ${TOKEN}`
        }
    })


}

export default Api