import React, { useState, useEffect } from "react";
import { api } from "../lib/api";
import { Button } from "@mui/material";
interface PdfFile {
  titulo: string;
  path: string;
}

const GetPdf = () => {
  const [pdf, setPDf] = useState<PdfFile[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.getPdf();

        setPDf(response?.data.files);
      } catch (error) {
        console.error("Error al obtener usuarios:", error.response.data);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-center text-blue-400">PDF</h2>

      <ul>
        {pdf.map((file) => (
          <>
            <div className="border flex justify-between">
              <p>Titulo de Pdf {file.titulo} </p>

              <div className="p-5 ">
                <Button href={file.path} variant="contained">
                  Ver Pdf
                </Button>
              </div>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default GetPdf;
