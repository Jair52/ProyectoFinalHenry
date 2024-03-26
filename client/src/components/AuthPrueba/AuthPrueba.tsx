import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInUser, signUpNewUser } from "../../redux/actions/Actions";

function FormsFirebase() {
    const  [passwordRegister, sePasswordRegister ] = useState("")
    const [ EmailRegister, setEmailRegister  ]= useState("")
    const dispatch = useDispatch();

const register = async () => {
  await dispatch(signUpNewUser(EmailRegister, passwordRegister));
}

const singIn = async () => {
  await dispatch(signInUser(EmailRegister, passwordRegister));
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
                <button onClick={() => register()}>Submit</button>
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
                <button onClick={() => singIn()}>Submit</button>
                <button>google</button>
            </form>

            <button>LogOut</button>
        </div>

    )
}

export default FormsFirebase;