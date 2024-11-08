import React, { useCallback, useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import Alltask from './components/dashboard/others/Alltask'
import { AuthContext } from './context/AuthProvider'
 import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

const [user, setUser] = useState(null)
const [loggedInUserData, setloggedInUserData] = useState(null)
const [userData,setuserdata] = useContext(AuthContext)


useEffect(()=>{
  
const loggedInUser  = localStorage.getItem('loggedInUser')
if(loggedInUser){
  const userData = JSON.parse(loggedInUser)
  setUser(userData.role)
  setloggedInUserData(userData.data)
}
 
 
  
},[])



// useEffect(() => {
  
// if (AuthData)
  
//   {const LoggedInUser = localStorage.getItem('LoggedInUser')

// if (LoggedInUser) {
//   setUser(LoggedInUser.role)
// }
// }
 
// }, [AuthData]);


  
  
// check email pass match
  const HandleLOgin = (email,password)=>{

  if (email == 'admin@me.com' && password =='123'){
    setUser('admin')

  localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
     
    }


       else if(userData ){
     const employee = userData.find((e)=> email == e.email && e.password == password) 
      if (employee)

     setUser('employee')
     setloggedInUserData(employee)
     
     localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
    }




    else{
      alert("Invalid Credentials")
    }

   
  }



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // useEffect(() => {
  //   //  SetLocalStorage()
  // getLocalStorage()
    
  // }, )



// context ko use karna jo AuthContext mai banaya

  return (
    <>
   {!user ? <Login HandleLOgin={HandleLOgin} />: ''}
   {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser}  data={loggedInUserData} />:null)      }







   
  

    
    </>
  )
}

export default App