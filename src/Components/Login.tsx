import { Button } from "@mantine/core";
import {
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { userEmail } from "../Config";
import { authFB } from "../firebase";

const Login: React.FC = () => {
  const [pass, setPass] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Submit");
    setPersistence(authFB, browserSessionPersistence)
      .then(() => {
        console.log("Submit2");
        return signInWithEmailAndPassword(authFB, userEmail, pass);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode} | ${errorMessage}`);
        setIsLoading(false);
        inputRef.current.focus();
      });
  };

  return (
    <main>
      <section className='h-screen w-screen flex justify-center items-center flex-col bg-bgPrimary gap-4'>
        <h1 className='font-rubik text-priCyan text-5xl sm:text-6xl text-center'>
          Welcome to Imbued!
        </h1>
        <p className='text-white font-semibold'>Simple accounts management system </p>
        <div className='flex gap-2'>
          <a href='' className='link transition-all ease'>
            Github
          </a>
          <a href='' className='link transition-all ease'>
            Docs
          </a>
        </div>

        <form onSubmit={loginHandler} className='flex flex-col gap-4'>
          <input
            ref={inputRef}
            placeholder='Password'
            type='password'
            className='p-4 rounded-lg bg-bgSecondary text-white'
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
          <Button
            type='submit'
            className='bg-priCyan hover:bg-cyan-800 hover:scale-105 transition-all ease'
          >
            Login
          </Button>
          {isLoading && <p className='text-white text-center'>Loading...</p>}
        </form>
      </section>
    </main>
  );
};

export default Login;
