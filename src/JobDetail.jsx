import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetail = () => {

    const job =  useLoaderData()
   const params  = useParams()
    // console.log(job, params.id)
    return (
        <div>
            
        </div>
    );
};

export default JobDetail;
