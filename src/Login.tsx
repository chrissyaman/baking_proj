import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import auth from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login({ setWhichPage, setCurrentUser }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => setPasswordShown((prev) => !prev);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email + " logged in");
        setWhichPage(1);
        setCurrentUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <section className="grid place-items-center p-1"> 
        <div>
            <Typography variant="h3" color="blue-gray" className="mb-2">
                Want to leave feedback on a recipe?
            </Typography>
            <Typography className="mb-1 text-gray-600 font-normal" style={{ fontSize: '10px' }}>
                Enter your email and password to sign in
            </Typography>
            <form className="mx-auto max-w-[24rem] text-left">
                <div className="mb-6">
                    <label htmlFor="email">
                        <Typography
                            variant="small"
                            className="mb-2 block font-medium text-gray-900"
                      >
                            Your Email
                        </Typography>
                    </label>
                    <div className="mb-6">
                    <Input
                    id="email"
                    color="gray"
                    size="lg"
                    type="email"
                    name="email"
                    placeholder="name@mail.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full placeholder-opacity-100 border-t-blue-gray-200"
                    labelProps={{
                        className: "hidden",
                    }}
                />
                </div>
        </div>
        <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <div>
            <Input
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder-opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="ml-3 p-2 flex items-center text-sm leading-5 text-blue-600"
            > Password Visibility</button>
            </div>
            </div>
        </div>
        <div>
        <button
            color="red"
            size="lg"
            className="mt-3"
            fullWidth
            onClick={loginUser}
        >
            Sign In
        </button>
        </div>
     </form>
    </div>
  </section>
 );
}

export default Login;