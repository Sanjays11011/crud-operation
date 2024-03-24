import Usertable from "./table/usertable";
 import Adduser from "./form/adduser"; 
 import { useState } from "react";

function App() { 
  const [adduser,setadduser] = useState(false);

const handleAddUser = () => { setadduser(true); };

return ( 
<><div className="container"> 
<h1>CRUD Operation</h1> 
<div className="flex-row"> 
<div className="add"> 
<button id="adduser" onClick={handleAddUser}>Add +</button> 
</div> <div className="flex-large"> 
<h2>View Users</h2> 
<div className="table">
  <Usertable /></div> 
  </div> 
  </div>
   </div><Adduser trigger={adduser} closeFunction={() => setadduser(false)}/></> ); }

export default App; 