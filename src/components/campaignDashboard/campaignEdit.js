//Author: Purpose: gives user a form to edit 

import React, { useState, useEffect } from "react"
import { getCampaignById, update } from "../modules/CampaignManager";
import { useParams, useHistory } from "react-router"

export const CampaignEditForm = () => {
  const [campaign, setCampaign] = useState({ title: "", templateEmail:"", issue: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {campaignId} = useParams();
  const history = useHistory();
//prepares data to be changed
  const handleFieldChange = event => {
    const stateToChange = { ...campaign };
    stateToChange[event.target.id] = event.target.value;
    setCampaign(stateToChange);
  };
//processes changed data

  const updateExistingCampaign = event => {
    event.preventDefault()
    setIsLoading(true);

    
    const editedCampaign = {
    
      id: campaignId,
      name: campaign.title,
      templateEmail: campaign.templateEmail,
      issue: campaign.issue
    };

 update(editedCampaign)
    .then(() => history.push("/")
    )
  }
//takes the new info and updates the previous data to the new data
  useEffect(() => {
  getCampaignById(campaignId)
      .then(campaign => {
        setCampaign(campaign);
        setIsLoading(false);
      });
  }, [campaignId]);
//return displays the edit form so an event can be edited
  return (
    <div className="text-white">
      <form>
        <fieldset>
        <label htmlFor="Title">Title </label>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="title"
              value={campaign.title}
            />
          
            
           
            <label htmlFor="issue">Issue</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="issue"
              value={campaign.issue}
            />
            <label htmlFor="templateEmail">Template Email</label>
            <textarea 
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="templateEmail"
              value={campaign.templateEmail}
            />
            
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingCampaign}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}