import React from "react";
import { useHistory } from "react-router-dom";
import { getAllCampaigns, taskComplete } from "../modules/CampaignManager";

export const Card = ({ campaign, handleDeleteCampaign }) => {
  const history = useHistory();
  
  const reload = () => {
    getAllCampaigns()
}

  //return shows the event to the DOM
  const handleCheckboxComplete = () => {

    taskComplete(campaign).then(reload)
}

  return (
    <>
      <div  className=" text-white bg-gray-600 h-auto  w-80 p-4 border-8 border-yellow-300 rounded m-4 shadow-md ">
        <div className="cardHeader">
          <h3 className="card-title text-2xl">
            <span>{campaign.title}</span>
          </h3>
  {/* <div hidden={sessionStorage.getItem("admin_user") !== "true"} className="complete"><label for="complete">complete
                <input onChange={handleCheckboxComplete}type="checkbox" name="complete" id="complete"></input>
                </label> </div>  */}

          <div className="min-w-full">
        
            <p className="overflow-ellipsis min-w-full font-light"> 
            {campaign.templateEmail}</p>
            {/* <p className="text-sm font-bold">Created by {campaign.user.name}</p> */}

            <p>Issue: {campaign.issue}</p>
          </div>
        </div>

        <div
          hidden={sessionStorage.getItem("admin_user") !== "true"}
          className="flex justify-start"
        >
          <button hidden={sessionStorage.getItem("admin_user") !== "true"}
            className="mr-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => handleDeleteCampaign(campaign.id)}
          >
            {" "}
            Delete{" "}
          </button>
          <button hidden={sessionStorage.getItem("admin_user") !== "true"}
            className="ml-2 p-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="button"
            onClick={() => history.push(`campaign/${campaign.id}/edit`)}
          >
            Edit{" "}
          </button>
        </div>

        <button
          className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-52"
          type="button"
          onClick={() => history.push(`campaign/${campaign.id}/details`)}
        >
          View More
        </button>
      </div>
    </>
  );
};
