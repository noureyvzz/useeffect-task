import React, { useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Welcome from "./components/Welcome";
import Product from "./components/Product/Product";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      {isLogged ? (
        <>
          <Welcome />
          <Logout setIsLogged={setIsLogged} />
          <Product />
        </>
      ) : (
        <>
          <Login setIsLogged={setIsLogged} />
          <p>You should login to see products</p>
        </>
      )}
    </div>
  );
}

export default App;
