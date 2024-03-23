import React from "react";
import { useState } from "react";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { firebaseConfigExp } from '../../firebase/config.tsx';
const Auth = getAuth(firebaseConfigExp.app);

function FormsFirebase() {


    const  [passwordRegister, sePasswordRegister ] = useState("")
    const [ EmailRegister, setEmailRegister  ]= useState("")

    // console.log(EmailRegister, passwordRegister, "states");
    const register = async () => {
      const user = await createUserWithEmailAndPassword(Auth, EmailRegister, passwordRegister)
      console.log(user);
      
    }

    const singIn = async () => {
      const sign = signInWithEmailAndPassword(Auth, EmailRegister, passwordRegister)
      console.log(sign);
      
    }

    return (
        <div>
            <form>
                <h3>Register</h3>
                <input
                    onChange={(e) => setEmailRegister(e.target.value)}
                    className="input"
                    type="email" />
                <input
                    onChange={(e) => sePasswordRegister(e.target.value)}
                    className="input"
                    type="password" />
                <button onClick={() => register}>Submit</button>
            </form>

            <form>
                <h3>Login</h3>
                <input
                    onChange={(e) => setEmailRegister(e.target.value)}
                    className="input"
                    type="email" />
                <input
                    onChange={(e) => sePasswordRegister(e.target.value)}
                    className="input"
                    type="password" />
                <button onClick={singIn}>Submit</button>
                <button>google</button>
            </form>

            <button>LogOut</button>
        </div>

    )
}

export default FormsFirebase;