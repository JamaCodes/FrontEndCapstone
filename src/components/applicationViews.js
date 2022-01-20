import React, { useState } from "react"
import { Route,Redirect } from "react-router-dom"
import { CampaignDetail } from "./campaignDashboard/CampaignDetail"
import { CampaignForm } from "./campaignDashboard/CampaignForm"
import { Login } from "../Auth/Login"
import { Register } from "../Auth/Register"
import { CampaignList } from "./campaignDashboard/campaignList"
import { CampaignEditForm } from "./campaignDashboard/campaignEdit"
import { EmailList } from "./emails/emaillist"


export const ApplicationViews = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("organizer_user") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("organizer_user", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("organizer_user") !== null)
  }

 
  return (
    <>
      <Route exact path="/">
 
<CampaignList/>



      </Route>
      <Route route path="/emails">
        <EmailList /></Route>
   
      <Route path="/campaign/:campaignId(\d+)/edit">
        {isAuthenticated ? <CampaignEditForm />: <Redirect to="/login" />}
      </Route>
    
      <Route exact path="/campaign/:campaignId(\d+)/details">
        <CampaignDetail />
      
      </Route>
      <Route exact path="/CampaignForm">
        {/* Render the component for the messages */}
        {isAuthenticated ? <CampaignForm 
      
        /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register">
        <Register setAuthUser={setAuthUser} />
      </Route>
      </>

  )
}
