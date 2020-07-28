import firebase from "firebase"

class FirebaseConnection  {

    constructor() {
        this.appImplementation = null
        this.db = null
    }

    initializeConnection = () => {
        try {
            const firebaseConfig = this.getFirebaseConfig()
            this.appImplementation = firebase.initializeApp(firebaseConfig)            
        } catch (error) {
            console.error("Error while initializing connection to firebase: ", error);
        }
    }

    initializeDatabase = () => {
        try {
            this.db = this.appImplementation.database()
        } catch (error) {
            console.error("Error while initializing database")
        }
    }

    getFirebaseConfig = () => {
        return {
            apiKey: "AIzaSyARBW56w1O1jl_wx07C1z2Ka9gFH_VBs2I",
            authDomain: "portfolio-e9405.firebaseapp.com",
            databaseURL: "https://portfolio-e9405.firebaseio.com/",
            projectId: "portfolio-e9405",
            storageBucket: "portfolio-e9405.appspot.com",
            messagingSenderId: "652131799329",
            appId: "1:652131799329:web:fb522a78d0ef7aaf"
        }
    }

    getSnapshot = () => {
        try {
            return this.db.ref("/").once("value").then(function(snapshot) {
                return snapshot.val()
            })
        } catch (error) {
            console.error("Error while getting data from firebase: ", error);
        }
    }

}

export default FirebaseConnection