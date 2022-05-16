import React, {useState} from "react"
import axios from "axios";
import "../index.css"

function AddButton(props){
    const [visibilityAdd,setVisibilityAdd] = useState(false)
    const [isCreate,setIsCreate]=useState(false)
    const [nameData,setNameData]=useState(null)
    const [lastNameData,setLastNameData]=useState(null)
    const [emailData,setEmailData]=useState(null)
    const [backVisibility,setBackVisibility]=useState(true)
    return(
        <>
            { visibilityAdd &&
                 (<div className="headers">
                     <div className="headerBox">{}</div>
                     <input className="headerBox" onChange={(event)=>{
                            setNameData(event.target.value)
                     }}/>
                     <input className="headerBox" onChange={(event)=>{
                            setLastNameData(event.target.value)
                     }}/>
                     <input className="headerBox" onChange={(event)=>{
                            setEmailData(event.target.value)
                     }}/>
            </div>)}
            {!isCreate ? (<button onClick={() => {
                    setVisibilityAdd(true)
                    setIsCreate(true)
                    props.setEditVisibility(false)
                    props.setDeleteVisibility(false)
                setBackVisibility(true)
            }}>New</button>):(
                <>
                <button onClick={()=>{
                    if(nameData!=null && lastNameData!=null && emailData!=null) {
                        axios.post("http://localhost:8080/users", {


                            firstName: nameData,
                            lastName: lastNameData,
                            email: emailData,

                        }).then(alert("You added succesfuly"))
                    }
                    else{
                        alert("Please fill all inputs")
                    }
                    setIsCreate(false)
                    setVisibilityAdd(false)
                    setNameData(null)
                    setLastNameData(null)
                    setEmailData(null)
                    props.setRenderInfo(Math.random())
                    props.setEditVisibility(true)
                    props.setDeleteVisibility(true)
                    setBackVisibility(false)
                }} >Create</button>

                    {backVisibility && <button
                        onClick={() => {
                            props.setEditVisibility(true)
                            props.setDeleteVisibility(true)
                            setBackVisibility(false)
                            setVisibilityAdd(false)
                            setIsCreate(false)
                        }}
                    >Back</button>}

                </>
            )  }
        </>
    )
}
export default AddButton;