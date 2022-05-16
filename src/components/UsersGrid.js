import React, {useEffect, useState} from 'react';
import axios from "axios";
import "../index.css"


function UsersGrid (props){
    const [content,setContent] = useState([])
    useEffect( () => {
        axios.get("http://localhost:8080/users").then(res => {

            setContent(res.data)
        })
    },[props.renderInfo])
  return(
      <>
        <div>{
            content.map((data,index) =>{
                return (<>
                         <div className="dataColumn" onClick={() => {
                             props.setUserIndex(data.id)
                        }}>
                            <div className="dataBox" > {data.id}</div>
                            <div className="dataBox" > {data.firstName}</div>
                            <div className="dataBox" > {data.lastName}</div>
                            <div className="dataBox" > {data.email}</div>
                        </div>
                </>
            )
            })
        }</div>
      </>
  )
}

export default UsersGrid;