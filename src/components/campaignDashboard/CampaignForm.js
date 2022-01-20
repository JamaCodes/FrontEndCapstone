import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { addCampaign } from '../modules/CampaignManager';


export const CampaignForm = () => {
    

//useState will hold the event name, date, and location
    const [Campaign, setCampaign] = useState({
        userId: "",
        title: "",
        templateEmail: "",
        issue:"",
        status: false
    });

    const currentUser = parseInt(sessionStorage.getItem("organizer_user"))
    console.log((currentUser), 'current user')

    

    const history = useHistory();
//makes copy of object and allows us to add our event, date, and location
    const handleControlledInputChange = (Event) => {
        
        const newCampaign = { ...Campaign }
        let selectedVal = Event.target.value
        if (Event.target.id.includes(" ")) {
            selectedVal = parseInt(selectedVal)
        }
        newCampaign[Event.target.id] = selectedVal
        // update state
        newCampaign.userId = currentUser
        setCampaign(newCampaign)
    }


//saves the event and 'redirects' user back to event page to see events
    const handleClickSaveCampaign = (Event) => {
        // const currentUser = parsedInt(sessionStorage.getItem("organzier_user"))
        

        Event.preventDefault() //Prevents the browser from submitting the form

            addCampaign(Campaign)
                .then(() => history.push("/"))
    }
//return gives us the event form and allows us to add an event
    return (
        <div className="container mx-auto mt-56">
        <div className="container mx-auto h-auto  ml-96 md:grid md:grid-cols-2 md:gap-6">
        <form className="shadow bg-yellow-400
         overflow-hidden sm:rounded-md">
            <h2 className="ml-5 mt-5 text-lg font-medium leading-6 text-gray-900">New Campaign</h2>
            <fieldset>
                <div className="bg-yellow-400
                 px-4 py-5 bg-white sm:p-6">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Campaign Title" value={Campaign.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="w- bg-yellow-400
                 px-4 py-1 bg-white sm:p-6">
                    <label htmlFor="issue" className="block text-sm font-medium text-gray-700">Template Email</label>
                    <textarea  type="text" id="templateEmail" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Template Email" value={Campaign.templateEmail} />
                </div>
            </fieldset>
            <fieldset>
                <div className="bg-yellow-400
                 px-4 py-5 bg-white sm:p-6" >
                    <label htmlFor="issue" className="block text-sm font-medium text-gray-700">Issue </label>
                    <input type="text" id="issue" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Link" value={Campaign.issue}/>
                </div>
            </fieldset>
            <button className=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 ml-48 mb-5"
                onClick={handleClickSaveCampaign}>
                Save Campaign
            </button>
        </form>
        </div>
        </div>
    )
};
