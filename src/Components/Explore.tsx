import { Button } from "@mantine/core";
import { signOut } from "firebase/auth";
import { authFB } from "../firebase";

const Explore: React.FC = () => {
  const signOutHandler = () => {
    signOut(authFB);
  };
  return (
    <>
      <Button onClick={signOutHandler}>Sign Out</Button>
    </>
  );
};

export default Explore;
