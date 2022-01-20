import React from "react"
import { Route, Redirect  } from "react-router-dom"
import { ApplicationViews } from "./applicationViews"
import { Login } from "../Auth/Login"
import { Register } from "../Auth/Register"


export const Capstone = () => (

<div className="containter-max bg-black">
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("organizer_user")) {
          return (
      
              <ApplicationViews />
          
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
  </div>
   
  
  


)
