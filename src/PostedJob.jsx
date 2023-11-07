import React from 'react';
import { useParams } from 'react-router-dom';

const PostedJob = () => {
    const params= useParams()
    console.log(params.email)
    return (
        <div>
            
        </div>
    );
};

export default PostedJob;