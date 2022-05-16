import React, {useEffect, useState} from 'react';
import axios from "axios";
function DeleteButton(props){
      let  deleteId = props.userIndex
      const  [backVisibility,setBackVisibility] = useState(true)
      const [firstDeleteVisibility,setFirstDeleteVisibility]= useState(true)
      const [deleteContent,setDeleteContent]= useState([])
        useEffect(()=>{
           if(deleteId != null){
               axios.get(`http://localhost:8080/users/${deleteId}`).then(res => {
                       setDeleteContent(res.data)
                   }
               )
           }
        },[deleteId])

    return(<>
            { firstDeleteVisibility ? <button onClick={() => {
                        setBackVisibility(true)
                        setFirstDeleteVisibility(false)
                        props.setAddVisibility(false)
                        props.setEditVisibility(false)
            }
            }>Delete</button>:(
                <>
                <div className="dataColumn">
                    <div className="dataBox">{deleteContent.id} </div>
                    <div className="dataBox">{deleteContent.firstName} </div>
                    <div className="dataBox">{deleteContent.lastName} </div>
                    <div className="dataBox">{deleteContent.email} </div>
                </div>

                <button onClick={()=>{
                    axios.delete(`http://localhost:8080/users/${deleteId}`).then(alert(`${deleteId} ID Succesfully deleted`))
                    props.setRenderInfo(Math.random())
                    setFirstDeleteVisibility(true)
                    setBackVisibility(false)
                    props.setAddVisibility(true)
                    props.setEditVisibility(true)
                }
                }>Delete</button>

                    {backVisibility && <button onClick={() => {
                        setBackVisibility(false)
                        setFirstDeleteVisibility(true)
                        props.setEditVisibility(true)
                        props.setAddVisibility(true)
                    }

                    }>Back</button>}

                </>
            )
            }
        </>
    )
}
export default DeleteButton;