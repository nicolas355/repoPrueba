import "../src/App.css";
import Formulario from "./components/Formulario";
import React from "react";
import { FileUpload } from "./components/FileUpload";
import FormUsers from "./components/FormUsers";

import GetUsers from "./components/getUsers";
import GetPdf from "./components/GetPdf";
import GetImages from "./components/GetImages";

function App() {
  return (
    <>
      <h1 className=" ">Formularios</h1>
      <div className="flex gap-8 justify-center ">
        <Formulario>
          <FormUsers type="users" />
        </Formulario>

        <Formulario>
          <FileUpload type="pdf" />
        </Formulario>

        <Formulario>
          <FileUpload type="image" />
        </Formulario>
      </div>

      <h1 className="mt-6 mb-6">Renderizar respuestas </h1>

      <div className="grid grid-cols-3 gap-5 max-w-[1200px] mx-auto">
        <GetUsers />

        <GetPdf />

        <GetImages />
      </div>
    </>
  );
}

export default App;
