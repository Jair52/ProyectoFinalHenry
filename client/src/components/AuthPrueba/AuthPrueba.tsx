import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpNewUser } from "../../redux/actions/Actions";
import { signInWithEmailAndPassword, getAuth, signOut } from "@firebase/auth";
import { app } from "../../Auth/firebaseConfig";

function FormsFirebase() {
    const [passwordRegister, setPasswordRegister] = useState("");
    const [emailRegister, setEmailRegister] = useState("");
    const dispatch = useDispatch();
    const auth = getAuth(app);

    const register = async () => {
        await dispatch(signUpNewUser(emailRegister, passwordRegister));
    };

    const signIn = async () => {
        signInWithEmailAndPassword(auth, emailRegister, passwordRegister);
    };

    const cerrarSesion = () => {
        signOut(auth)
    }

    return (
        <div>
            <form>
                <h3>Register</h3>
                <input
                    onChange={(e) => setEmailRegister(e.target.value)}
                    className="input"
                    type="email"
                />
                <input
                    onChange={(e) => setPasswordRegister(e.target.value)}
                    className="input"
                    type="password"
                />
                <button type="button" onClick={register}>Submit</button>
            </form>

            <form>
                <h3>Login</h3>
                <input
                    onChange={(e) => setEmailRegister(e.target.value)}
                    className="input"
                    type="email"
                />
                <input
                    onChange={(e) => setPasswordRegister(e.target.value)}
                    className="input"
                    type="password"
                />
                <button type="button" onClick={signIn}>Submit</button>
                <button>google</button>
            </form>

            <button onClick={cerrarSesion}>LogOut</button>
        </div>
    );
}

export default FormsFirebase;
