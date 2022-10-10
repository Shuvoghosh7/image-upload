import React, { useEffect, useState } from 'react';

const ShowLoginData = () => {
  const[user,setUser]=useState()
    useEffect(() => {
        fetch('http://localhost:5000/user/me', {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setUser(data.data))
    }, [])
    return (
        <div>
            Show Data
            <li>{user?.email}</li>
            <li>{user?.role}</li>
            <li>{user?.firstName}</li>
            <li>{user?.lastName}</li>
        </div>
    );
};

export default ShowLoginData;