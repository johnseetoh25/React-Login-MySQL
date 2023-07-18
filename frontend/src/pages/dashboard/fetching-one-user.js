import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function FetchingOneUser() {
    const [ users, setUsers ] = useState([]);

    useEffect(()=>{
        const fecthAllUsers = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/users");
                setUsers(res.data);
                console.log(res);
            }catch(err){
                console.log(err);
            }
        }
        fecthAllUsers();
    },[]);

    return (
        <div className='HomePageUI'>
            {
                users.map((user)=>(
                    <div className='user' key={user.id}>
                        <h3>{user.username}</h3>
                        <p>{user.email}</p>
                    </div>
                ))
            }
        </div>
       
    );
}
