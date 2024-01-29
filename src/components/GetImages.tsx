import React from "react";
import { useState, useEffect } from "react";
import { api } from "../lib/api";
import { Button } from "@mui/material";
interface imageFile {
  titulo: string;
  imagePath: string;
}

const GetImages = () => {
  const [images, setImages] = useState<imageFile[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.getImage();

        setImages(response?.data.images);
      } catch (error) {
        console.error("Error al obtener usuarios:", error.response.data);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {images.map((file) => (
        


          <>
          {console.log(file)}

          <h2 className="text-3xl text-center text-blue-400">Imagenes</h2>
            <div className="border flex justify-items-center justify-center">
           
           
              <div className="p-5 ">
              <img className="h-[300px] w-[300px] object-cover object-center " src={file.imagePath} alt="" />
           
                <p className="text-center"> {file.titulo} </p>
              </div>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default GetImages;
