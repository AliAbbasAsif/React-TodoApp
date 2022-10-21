import app from "./firebaseconfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";




const auth = getAuth(app);
const database = getDatabase(app)
let signUpUser = (obj) => {
    let { email, password, Username } = obj
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((usercredential) => {
                // user is rigesterd and its data is send into database
                const user = usercredential.user;
                const refrence = ref(database, `users/${user.uid}`)
                set(refrence, obj)
                    .then(() => {
                        resolve('User Created Successfully')
                    })
                    .catch((errr) => {
                        reject(errr)
                    })
            })
            .catch((erro) => {
                reject(erro)
            })

    })
}




let Signout = () => {

    return new Promise((resolve, reject) => {
        signOut(auth).then(() => {
            // Sign-out successful.
            resolve('user loggedout')
        }).catch((error) => {
            // An error happened.
            reject(error)
        });
    })



}

let LoginUser = (obj) => {
    let { email, password } = obj
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                const refrence = ref(database, `users/${user.uid}`)
                onValue(refrence, (data) => {
                    let status = data.exists()
                    if (status) {

                        resolve(data.val())
                    } else {
                        reject('data not found')
                    }
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject(errorMessage)
            })

    })
}



export { signUpUser, LoginUser, Signout, }