import axios from "axios";
import { UserData } from "./interfaces";

const baseUrl = "http://localhost:3001/api/prueba";

const endpoints = {
  user: `${baseUrl}/users`,
  pdf: `${baseUrl}/pdf`,
  image: `${baseUrl}/image`,
};

const sendPdf = async (file) => {
  try {
    const response = await axios.post(endpoints.pdf, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Archivo PDF subido exitosamente:", response.data);
  } catch (error) {
    console.error("Error al subir el archivo PDF:", error.response.data);
  }
};
const sendImage = async (file) => {
  try {
    const response = await axios.post(endpoints.image, file, {
      headers: {
    
        'Content-Type': 'multipart/form-data'
      },
    });

    console.log("Archivo de la Imagen subido exitosamente:", response.data);
  } catch (error) {
    console.error("Error al subir el archivo:", error.response.data);
  }
};

const sendUsers = async (userData: UserData) => {
  try {
    const response = await axios.post(endpoints.user, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("usuario agregado con Exito! :", response.data);
  } catch (error) {
    console.error("error al subir el archivo:", error.response.data);
  }
};

// get

const getPdf = async () => {
  try {
    const response = await axios.get(endpoints.pdf);
   
    return response;
  } catch (error) {
    console.error("Error al obtener archivos PDF:", error.response.data);
  }
};

const getImage = async () => {
  try {
    const response = await axios.get(endpoints.image);
    return response;
  } catch (error) {
    console.error("Error al obtener archivos de imagen:", error.response.data);
  }
};

const getUsers: any  = async () => {
  try {
    const response = await axios.get(endpoints.user);
  return response.data

  


  } catch (error) {
    console.error("Error al obtener usuarios:", error.response.data);
  }
};

export const api = {
  sendImage,
  sendPdf,
  sendUsers,
  getImage,
  getPdf,
  getUsers,
};
