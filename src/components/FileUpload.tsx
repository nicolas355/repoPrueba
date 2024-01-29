import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { TextField } from "@mui/material";

import { api } from "../lib/api";
import { useState } from "react";
import axios from 'axios'

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface Props {
  type: "image" | "pdf";
}

export const FileUpload: React.FC<Props> = ({ type }) => {
  const [title, setTitle] = useState<string>("");
  const [file, setFile] = useState<any>(null);
  const [image, setImage] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   

    if (type === "image") {
      const formData = new FormData();
      formData.append("titulo", title);
      formData.append("image", image);
      console.log(formData)
     
      try {
         await api.sendImage(formData);
      } catch (error) {
         console.error(error)
      }
     
      try {
         await axios.post('http://localhost:3001/api/prueba/image', formData, {
           headers: { 'Content-Type': 'multipart/form-data' }
         });
      } catch (error) {
         console.error(error)
      }
     }

    if (type === "pdf") {

      const formData = new FormData();
      formData.append("titulo", title);
      formData.append("file", file);


      await api.sendPdf(formData);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
       setFile(e.target.files[0]);
       setImage(e.target.files[0]);
    }
   };

  return (
    <>
      <form className="flex flex-col " onSubmit={(e) => handleSubmit(e)}>
        <h2> {type.toUpperCase()} </h2>

        <TextField
          onChange={handleTitleChange}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          name="titulo"
          required
          className=""
        />
      <div className="mt-2">
      <Button
          component="label"
          variant="contained"
          className=""
          startIcon={<CloudUploadIcon />}
        >
      Subir Archivo
          <VisuallyHiddenInput
            required
            accept={type === "image" ? "image/*" : "application/pdf"}
            name="path"
            type="file"
            onChange={handleFileChange}
          />
        </Button>
      </div>

    <div className="mt-2">
    <Button type="submit" variant="contained">
          Enviar
        </Button>
    </div>
      </form>
    </>
  );
};
