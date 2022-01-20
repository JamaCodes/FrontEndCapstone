import React from "react";

export const EmailCard = ({ email }) => {


  //return shows the event to the DOM

  return (
    <>
      <div className=" ml-96 h-auto  w-96 p-4 border-4 rounded bg-yellow-100 m-4 shadow-md ">
        <div className="cardHeader">
       
          <h3 className="card-title">
            <span>{email.campaign.title}</span>
          </h3>

          <div className="min-w-full">
            <p className="overflow-ellipsis min-w-full font-light"> 
            {email.campaign.templateEmail}</p>
      

          </div>
        </div>

  
      </div>
    </>
  );
};
