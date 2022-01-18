import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailsOnClick = () => {
    const {id} = useParams();
    const [details,setDetails] = useState([]);
    useEffect(()=>{
        fetch('/serviceDatas.JSON')
.then(res =>res.json())
.then( data => setDetails(data))
    },[]);
    const item= details.find(pd=>pd.key == id);
   

    return (
        <div>
            <h1>    Name : {item?.name}</h1>
          <img src= {item.img}/>
          <p> {item.description}</p>

        </div>
    );
};

export default DetailsOnClick;