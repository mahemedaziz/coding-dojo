
import './App.css';
import React , {useState} from 'react'




function App() {


  const UserForm = (props) => {
    const [Firstname , setFirstname] = useState("");
    const [Lastname , setLastname] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState ("");
    const [Confirmpassword , setConfirmPassword] = useState ("");
    const [allUsers , setallUsers] = useState ([])
    
    
    
  
    const createUser = (e) => {
      e.preventDefault();
      
      
      const newUser = { Firstname,Lastname, email, password, Confirmpassword};
      setallUsers ([...allUsers,newUser])
    	setFirstname("");
    	setLastname("");
    	setEmail("");
    	setPassword("");
    	setConfirmPassword("");

      
    };
    return (
      <div className=' col-auto d-flex flex-column align-items-center' >
      <form onSubmit={ createUser}>
        <div className='col p-2 '>
          <label className='col text-start  me-1  '>First Name :  </label>
          <input type="text" className='ms-5' value={Firstname} onChange={(e) => setFirstname(e.target.value)}  />
        </div>
        <div className='col p-2 '>
        <label className='col-form-label me-1 ' >Last Name : </label>
        <input type="text" className='ms-5' value={Lastname} onChange={(e) => setLastname(e.target.value)}  />
        </div>
        <div className='col p-2 '>
        <label className='col-form-label me-2'>Email Address : </label> 
        <input type="text" className='ms-4' value={email} onChange={ (e) => setEmail(e.target.value) }  />
        </div>
        <div className='col p-2 '>
        <label className='col-form-label me-3'>Password  :  </label>
        <input type="password" className='ms-5' value={password} onChange={ (e) => setPassword(e.target.value) } />
        </div>
        <div className='col p-2 '>
        <label className='col-form-label me-1'>Confirm password  : </label>
        <input type="password" value={Confirmpassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
        </div>
        <div className='col p-2 '>
        <input type="submit" value="Create User" />
        </div>
      </form>
      <div className='container col-auto d-flex flex-column align-items-center'>
            
            <h1>Your Form Data:</h1>
            <ul>
              {allUsers.map((user, index) => (
                <ul key={index}>
                  <h2>
                    <div>
                    First Name: {user.Firstname}
                    </div>
                    <div>
                    First Name: {user.Firstname}
                    </div>
                    <div>
                    Last Name: {user.Lastname}
                    </div>
                    <div>
                    Email Address: {user.email}
                    </div>
                    <div>
                    Password: password
                    </div>
                    <div>
                    Confirm password: password
                    </div>
                  </h2>
                </ul>
              ))}
            </ul>
          </div>
      </div>
      
    );

  };




  return (
    <div className="container w-50 border ">
      
      <UserForm/>
      
    </div>
  );
}

export default App;
