import { initializeApp } from "firebase/app"
import { getDatabase, ref, child, get } from "firebase/database"

class FirebaseConnection {

  projectId = "portfolio-e9405";

  initializeConnection = () => {
    try {
      const firebaseConfig = this.getFirebaseConfig()
      initializeApp(firebaseConfig)
    } catch (error) {
      console.error('Error while initializing connection to firebase: ', error)
    }
  }

  getSnapshot = async () => {
    try {
      const dbRef = ref(getDatabase())
      const snapshot = await get(child(dbRef, '/'));
      return snapshot.val();
    } catch (error) {
      console.error('Error while getting data from firebase: ', error)
    }
  }

  getFirebaseConfig = () => ({
    projectId: this.projectId,
    apiKey: "AIzaSyARBW56w1O1jl_wx07C1z2Ka9gFH_VBs2I",
    authDomain: `${this.projectId}.firebaseapp.com`,
    databaseURL:`https://${this.projectId}.firebaseio.com`,
    storageBucket: `https://${this.projectId}.appspot.com`,
    messagingSenderId: "652131799329",
    appId: "1:652131799329:web:fb522a78d0ef7aaf" 
  })

}

export default FirebaseConnection
