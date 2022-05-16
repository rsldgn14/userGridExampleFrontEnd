import UsersGrid from "./components/UsersGrid";
import "./index.css"
import AddButton from "./components/AddButton";
import DeleteButton from "./components/DeleteButton";
import EditButton from "./components/EditButton";
import {useState} from "react";

function App() {
    const [userIndex,setUserIndex]=useState(null)
    const [renderInfo,setRenderInfo] = useState(0)
    const [addVisibility,setAddVisibility] = useState(true)
    const [editVisibility,setEditVisibility] = useState(true)
    const [deleteVisibility,setDeleteVisibility]= useState(true)
    return (
    <>
        <div className="headers">
            <div className="headerBox">id</div>
            <div className="headerBox">First name</div>
            <div className="headerBox">last name</div>
            <div className="headerBox">E mail</div>
        </div>
      <UsersGrid renderInfo={renderInfo}   setUserIndex={setUserIndex} />
        <div className="dataBox">
            {
                addVisibility &&  <AddButton setRenderInfo={setRenderInfo}  userIndex={userIndex} setDeleteVisibility={setDeleteVisibility}
                setEditVisibility={setEditVisibility}
                />
            }
            {
                deleteVisibility && <DeleteButton setRenderInfo={setRenderInfo}  userIndex={userIndex} setDeleteVisibility={setDeleteVisibility}
                                                  setEditVisibility={setEditVisibility} setAddVisibility={setAddVisibility} />
            }

            {
                editVisibility &&
                <EditButton setRenderInfo={setRenderInfo}  userIndex={userIndex} setAddVisibility={setAddVisibility}
                            setDeleteVisibility={setDeleteVisibility} />
            }
        </div>


    </>
  );
}
export default App;
