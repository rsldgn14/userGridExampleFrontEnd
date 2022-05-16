import React, {useEffect, useState} from "react";
import axios from "axios";


function EditButton(props){
    let editId = props.userIndex
    const [visibilityEdit,setVisibilityEdit] = useState(false)
    const [backVisibility,setBackVisibility] = useState(false)
    const [nameDataEdit,setNameDataEdit]=useState(null)
    const [lastNameDataEdit,setLastNameDataEdit]=useState(null)
    const [emailDataEdit,setEmailDataEdit]=useState(null)
    return(<>
        { visibilityEdit && <div>
            <div className="headers">
                <div className="headerBox">{props.userIndex}</div>

                <input className="headerBox" onChange={(event) => {
                    setNameDataEdit(event.target.value)
                }}/>
                <input className="headerBox" onChange={(event) => {
                   setLastNameDataEdit(event.target.value)
                }}/>
                <input className="headerBox" onChange={(event) => {
                    setEmailDataEdit(event.target.value)
                }}/>
            </div>
        </div>}
        {!visibilityEdit ?(<button onClick={() => {
            setVisibilityEdit(true)
                props.setAddVisibility(false)
                props.setDeleteVisibility(false)
            setBackVisibility(true)
        }}>Edit</button>):
            <>
        <button onClick={()=>{
            axios.put(`http://localhost:8080/users/${editId}`,{
                    firstName:nameDataEdit,
                    lastName:lastNameDataEdit,
                    email:emailDataEdit
                }
            ).then(alert(editId+" Succesfully edited"))
            setVisibilityEdit(false)
            props.setAddVisibility(true)
            props.setDeleteVisibility(true)
            props.setRenderInfo(Math.random())
        }
        }>Save</button>
                { backVisibility && <button
                    onClick={() => {
                        props.setAddVisibility(true)
                        props.setDeleteVisibility(true)
                        setVisibilityEdit(false)
                        setBackVisibility(false)
                    }
                    }

                >Back</button>}
            </>
        }
    </>)
}

export default EditButton;