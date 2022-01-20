//Author: Jama Mohamed Purpose: shows the list of all emails on the dom

import React, { useState, useEffect } from 'react';
import { EmailCard }  from "./cards"
import { getAllEmails } from '../modules/emailmanager';

export const EmailList = () => {
  const [emails, setEmails] = useState([]);
  const currentUser = parseInt(sessionStorage.getItem("organizer_user"))


  const getEmails = () => {
    // After the data comes back from API, we
    //  use the setEmails function to update state
    return getAllEmails().then(emailsFromApi => {
      setEmails(emailsFromApi)
    });
  };

  
  useEffect(() => {
    getEmails();
  }, []);

  
  return (
    <>
  


    <div className="container-cards ml-40">
      <h1 className="text-white text-center ml-24 text-2xl"> Emails Sent </h1>
      {emails.map(email => 
       {if (currentUser !== email.userId){ 
        return ""
     }
      else{
      return < EmailCard
      key={email.id}
      email={email}  />
      }
    }
      )}

    </div>
   
    </>
  );
};