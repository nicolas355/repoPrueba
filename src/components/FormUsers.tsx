import React from "react";
import { useState } from "react";
import { api } from "../lib/api";

interface Props {
  type: "users";
}

const FormUsers: React.FC<Props> = ({ type }) => {

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    numero: "",
    fecha: "",
  });

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  const handleData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (type === "users") {
      api.sendUsers(form);
    }
  };

  return (
    <>

      <form action="" className="" onSubmit={handleData}>
        <h2>Usuarios</h2>
        <input
          className="mt-2 mb-5 w-full p-2 block"
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={(e) => handleChangeData(e)}
        />
        <input
          className="mt-2 mb-2 p-2 block"
          type="text"
          placeholder="Apellido"
          name="apellido"
          onChange={(e) => handleChangeData(e)}
        />
        <input
          className="mt-2 mb-2 p-2 block"
          type="tel"
          placeholder="Telefono"
          name="numero"
          onChange={(e) => handleChangeData(e)}
        />
        <input
          className="mt-2 mb-2 p-2"
          type="date"
          placeholder="Fecha"
          name="fecha"
          onChange={(e) => handleChangeData(e)}
        />
        <input
          className="bg-slate-800   py-1 px-5 block cursor-pointer text-white"
          type="submit"
          placeholder="Enviar"
        />
      </form>
    </>
  );
};

export default FormUsers;
