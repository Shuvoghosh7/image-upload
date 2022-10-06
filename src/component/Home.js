import React from 'react';
import ShowImage from './ShowImage';
import UploadImage from './UploadImage';

const Home = () => {
    return (
        <div className='mx-20 mt-5'>
            <div className='flex justify-between'>
                <div>
                    <button class="btn btn-info">Info</button>
                </div>
                <div>
                    <UploadImage />
                </div>
            </div>
            <div>
                <ShowImage/>
            </div>

        </div>
    );
};

export default Home;