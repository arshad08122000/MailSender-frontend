import logo from './logo.svg';
import './Home.css';
import {useState} from 'react';
import axios from 'axios';

function App() {

 const [email,setEmail]=useState("");
 const [description,setDescription]=useState("");



 const handleSubmit=async(e)=>{
   e.preventDefault();
   const data={email,description};

   console.log("Email :",email);
    console.log("Description :",description);


   const response = await axios.post("https://mailsender-api.onrender.com/mail",data);
   console.log(response);
   alert("Mail Sended");
   window.location.reload(false);
 }

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
     <h2 className="mb-5">React Mail Sender</h2>
     <hr />
      <div class="form-group">
       <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Email" required="required">
      </input></div>
        <div class="form-group">
          <input type="text" class="form-control" onChange={(e) => setDescription(e.target.value)} name="description" placeholder="Description" required="required">
          </input></div>
      <div class="form-group">
       <button type="submit" class="btn btn-primary">Send</button>
      </div> 
      </form>
    </div>
  );
}

export default App;
