import React from "react";
import Filter from "./Filter";
import Women from "./Women";
import style from "./women.module.css"

const App = () => {
  return (
    <>
    <h1 className={style.TopHead}>Tops</h1>
      <Filter />
      <Women />
    </>
  );
};

export default App;
