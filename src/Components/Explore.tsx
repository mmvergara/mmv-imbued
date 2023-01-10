import { Button } from "@mantine/core";
import { signOut } from "firebase/auth";
import { authFB } from "../firebase";
import AccountCard from "./subComponents/AccountCard";

const Explore: React.FC = () => {
  const signOutHandler = () => {
    signOut(authFB);
  };
  return (
    <>
      <div className='flex items-end justify-end'>
        <Button
          onClick={signOutHandler}
          className='text-priCyan m-2 hover:text-white hover:bg-priCyan transition-all ease '
        >
          <span className='mr-2'>Sign Out</span>
          <svg width='24px' height='24px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <g fill='currentColor'>
              <path d='M16 17v2c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h9c1.105 0 2 .895 2 2v2h-2V5H5v14h9v-2h2zm2.5-10.5l-1.414 1.414L20.172 11H10v2h10.172l-3.086 3.086L18.5 17.5 24 12l-5.5-5.5z' />
            </g>
          </svg>
        </Button>
      </div>
      <main className='w-[100%] max-w-[800px] mx-auto flex flex-col gap-2 text-center justify-center items-center mt-2 sm:mt-8'>
        <h1 className='text-6xl  font-rubik text-priCyan'>Imbued</h1>

        <input placeholder='Search Account' className='p-4 rounded-lg bg-bgSecondary text-white' />
        <AccountCard
          AccountName='yoyoyo'
          email='email@gmail.com'
          extraInfo='qweqwe'
          passwordHint='passwordHint'
          username='username'
          websiteUrl='google.com'
        />
      </main>
    </>
  );
};

export default Explore;
