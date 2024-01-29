import React from 'react'
import { UserData } from '../lib/interfaces';
import { useEffect,useState } from 'react';
import { api } from '../lib/api';

const GetUsers = () => {

    const [users, setUsers] = useState<UserData[]>([]);


    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await api.getUsers();
          setUsers(response.users);
          console.log('hola',response, )
  
        } catch (error) {
          console.error("Error al obtener usuarios:", error.response.data);
        }
      };
  
      fetchUsers();
    }, []);
  


  return (
    <div>

<ul className=''>
    <h2 className='text-3xl text-center text-blue-400'>Usuarios</h2>
          {users.map((user) => (
            <>
            <div className='border mb-3'>
              <p className='mb-2'>Nombre: {user.nombre}</p>
              <p className='mb-2'>Telefono: {user.numero}</p>
              <p className='mb-2'>Apellido: {user.apellido}</p>
              <p className='mb-2'>Fecha: {new Date(user.fecha).toLocaleDateString()}</p>

            </div>
          
            </>
          ))}
        </ul>
      
    </div>
  )
}

export default GetUsers
