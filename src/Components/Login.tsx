import { Button, TextInput } from "@mantine/core";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { userEmail } from "../Config";
import { authFB } from "../firebase";

const Login: React.FC = () => {
  const [pass, setPass] = useState<string>("");
  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = signInWithEmailAndPassword(authFB, userEmail, pass);
    console.log(data);
  };
  return (
    <form onSubmit={loginHandler}>
      <TextInput
        placeholder='Password'
        type='password'
        onChange={(e) => setPass(e.target.value)}
        value={pass}
      />
      <Button>Login</Button>
    </form>
  );
};

export default Login;
