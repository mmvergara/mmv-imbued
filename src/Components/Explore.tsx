import { Button, Input } from "@mantine/core";
import { signOut } from "firebase/auth";
import { authFB } from "../firebase";

import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from "@mantine/core";

const Explore: React.FC = () => {
  const signOutHandler = () => {
    signOut(authFB);
  };
  return (
    <main className='w-[100%] max-w-[800px] mx-auto flex flex-col gap-2 text-center justify-center items-center mt-2 sm:mt-8'>
      <h1 className='text-6xl  font-rubik text-priCyan'>Imbued</h1>
      <input placeholder='Search Account' className='p-4 rounded-lg bg-bgSecondary text-white' />
      <Button onClick={signOutHandler} className='bg-priCyan'>
        Sign Out
      </Button>
    </main>
  );
};

export default Explore;
