import { Button, TextInput } from "@mantine/core";
import { useState } from "react";

const Login: React.FC = () => {
  const [pass, setPass] = useState<string>();

  return (
    <>
      {" "}
      <TextInput
        placeholder='Password'
        type='password'
        onChange={(e) => setPass(e.target.value)}
        value={pass}
      />
      <Button>Login</Button>
    </>
  );
};

export default Login;
