//Author: Jama Mohamed Purpose: shows the list of all campaigns on the dom

import React, { useState, useEffect } from 'react';
import { Card }  from "./cards"
import  { getAllCampaigns, deleteCampaign }  from '../modules/CampaignManager'
import { useHistory } from 'react-router';


export const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);
  const history = useHistory();
  const getCampaigns = () => {
    // After the data comes back from API, we
    //  use the setCampaigns function to update state
    return getAllCampaigns().then(campaignsFromAPI => {
      setCampaigns(campaignsFromAPI)
    });
  };
//function deletes a single campaign and then re-renders to display campaigns still in API
  const handleDeleteCampaign = id => {
    deleteCampaign(id)
      .then(() => getAllCampaigns().then(setCampaigns));
  };
  

  //first render
  // put "campaigns" in dependancy array for demoing
  useEffect(() => {
    getCampaigns();
  }, []);

  
  


  // Finally we use .map() to "loop over" the campaigns array to show a list of campaign cards
  //return shows a button to add a campaign, displays the campaign cards in a list, and shows a button to delete campaigns
 
  return (
    
    
    <section className=" ml-100 campaign-list bg-black 
    w-auto border-4 border-black bg-black rounded-md 
     m-4 drop-shadow-lg flex row flex-wrap justify-center">
    <div className="cardHolderHeader">
  <button  hidden={sessionStorage.getItem("admin_user") !== "true"} type="button"
      className=" ml-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={() => {history.push("/campaignform")}}>
      Add Campaign
  </button>



    <div className="">
      { 
      campaigns.map(campaign => < Card
      key={campaign.id}
      campaign={campaign} 
      handleDeleteCampaign={handleDeleteCampaign} 
      setCampaigns={setCampaigns} />)}

    </div>
    </div>
    </section>
   
    
  );
};