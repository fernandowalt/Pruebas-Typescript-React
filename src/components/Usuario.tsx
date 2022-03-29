import { useState } from "react";

export const Usuario = () => {
    
  interface User {
    uid: string;
    name: string;
  }

  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "abc123",
      name: "walter",
    });
  };

  const tempUser: User = {
    uid: "okoko",
    name: "pablus",
  };
  return (
    <div className="mt-5">
      <h3>UseState</h3>
      <br />

      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>
      {!user ? (
        <pre>{JSON.stringify(tempUser)}</pre>
      ) : (
        <pre>{JSON.stringify(user)}</pre>
      )}
    </div>
  );
};
