import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ShowImage = () => {
    const [data, setData] = useState([]);
    console.log(data)
    const getUserData = async () => {
        const res = await axios.get("http://localhost:5000/images/get-images", {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status === 401 || !res.data) {
            console.log("errror")
        } else {
            setData(res.data.getimage)
            console.log(res.data.getimage)
        }

    }
    useEffect(() => {
        getUserData()
    }, [])
    return (
        <div>
           <h1>Show data</h1>
            <div className='grid grid-cols-3 gap-12'>
                {
                   data.length > 0 ?data.map((el, i) => {
                     return(
                        <>
                          <div class="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src={`http://localhost:5000/images/${el.imgpath}`} alt="kla" /></figure>
                                    <div class="card-body">
                                        Name : {el.imgname}
                                    </div>
                                </div>
                        </>
                     )
                       
                       
                    }):""
                }       
            </div>
        </div>
    );
};

export default ShowImage;