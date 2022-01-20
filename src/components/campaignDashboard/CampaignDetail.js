import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { getMyLawmaker } from "../modules/apiManager";
import { findCouncilMember, getCampaignById, saveEmail } from "../modules/CampaignManager";
import { addEmail } from "../modules/CampaignManager";
import { FindMyLawmaker } from "./find";

const currentUser = parseInt(sessionStorage.getItem("organizer_user"));
const currentUserEmail = sessionStorage.getItem("user-email");
export const CampaignDetail = () => {
  const { campaignId } = useParams();
  const [campaign, setCampaign] = useState({
    title: "",
    campaignId: 0,
    templateEmail: "",
    issue: "",
    userId: currentUser,
  });
  
  const [savedEmail, setSavedEmail] = useState({
    campaignId: parseInt(campaignId),
    userId: currentUser,
    councilMemberId: null,
  });

  const [email, setNewEmail] = useState({
    from: currentUserEmail,
    to: " ",
    subject: campaign.issue,
    text: campaign.templateEmail,
  });
  // const [councilMembers, setCouncilMembers] = useState([]);
  const [address, setAddress] = useState({});

  const [rep, setRep] = useState({});

  const [repId, setRepId] = useState(null);
  const [repEmail, setRepEmail] = useState(null);

  const history = useHistory();

  useEffect(() => {
    //getCampaignById(id) from CampaignManager and hang on to the data; put it into state
    console.log("useEffect", campaignId);
    getCampaignById(campaignId).then((campaign) => {
      setCampaign({
        title: campaign.title,
        templateEmail: campaign.templateEmail,
        issue: campaign.issue,
      });
    });
  }, [campaignId]);


  useEffect(() => {
        //splitting apiResponse into array matching by first name setRepId
    if (rep.officials) {
      const [firstName] = rep.officials[5].name.split(" ");
      findCouncilMember(firstName).then((r) => setRepId(r[0].id))

      setRepId(repId)
      console.log(repId, "set rep id")
    }
  }, [rep]);

  useEffect(() => {
    //splitting apiResponse into array matching by first name setRepId
if (rep.officials) {
  const [firstName] = rep.officials[5].name.split(" ");
  findCouncilMember(firstName).then((r) => setRepEmail(r[0].email_address))
 
}
}, [rep]);


  useEffect (() => {
    //waiting for repId change to change state of email add RepId
    const newEmail = { ...email };
    console.log(repEmail, "stand alone useeffect")
    newEmail.from = currentUserEmail;
    newEmail.to = repEmail;
    newEmail.text = campaign.templateEmail
    newEmail.subject = campaign.title
    setNewEmail(newEmail);
    console.log(newEmail, "issa email")
  }, [repEmail])

  console.log(repEmail);

  useEffect (() => {
    //waiting for repId change to change state of email add RepId
    const newSavedEmail = { ...savedEmail };
   
    newSavedEmail.councilMemberId = repId;
    setSavedEmail(newSavedEmail);
    console.log(newSavedEmail, " email json")
  }, [repId])

  // useEffect(() => {
  //   getAllCouncilMembers().then(councilMembers => setCouncilMembers(councilMembers))
  //   }, []);
debugger
  const handleClickSendEmail = (Event) => {
    Event.preventDefault(); //Prevents the browser from submitting the form

    addEmail(email).then(() => history.push("/"));
    saveEmail(savedEmail);
    
  };
  

  const handleClickAddress = (event, address) => {
    console.log(event);
    event.preventDefault(); //Prevents the browser from submitting the form

    getMyLawmaker(address)
      .then((rep) => setRep(rep))
  };
  console.log(rep);
  const handleAddressInputChange = (event) => {
    event.preventDefault();

    /* When changing a state object or array,
  always create a copy, make changes, and then set state.*/
    const newAddress = { ...address };
    let selectedVal = event.target.value;
    // forms always provide values as strings. But we want to save the ids as numbers.
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal);
    }
    /* enewEmail is an object with properties.
  Set the property to the new value
  using object bracket notation. */
    newAddress[event.target.id] = selectedVal;
    // update state
    setAddress(newAddress);
  };

  return (
    <section className=" ml-100 campaign-list 
    w-auto border-4 border-black bg-gray-500 rounded-md 
     m-4 drop-shadow-lg  flex-wrap justify-center">
      <form className="addressForm">
        <h1 className="text-white ml-2 text-3xl mb-5">Find Your Lawmaker</h1>
        <fieldset>
          <div className="form-group ml-2 w-30">
            <label htmlFor="address">address</label>
            <input className=" w-50"
              type="text"
              id="address"
              onChange={handleAddressInputChange}
              required
              autoFocus
              className="form-control"
              placeholder="address City,State Zipcode"
              value={address.address}
            />
          </div>
        </fieldset>
        <button
          className="ml-1 m-4 py-4 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={(event) => handleClickAddress(event, address.address)}
        >
          find my lawmaker
        </button>
        <div className="text-white text-center  text-l">
          <FindMyLawmaker rep={rep} />
        </div>
      </form>
      <div className="bg-gray-100 rounded-lg w-96 h-96 overflow-auto">
        <h3 className="campaign__title text-xl">{campaign.title}</h3>
        <div className="campaign__templateEmail}">{campaign.templateEmail}</div>
        {/* What's up with the question mark???? See below.*/}
        {/* <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button> */}
      </div>
        <button
          className="ml-60 mt-5 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleClickSendEmail}
        >
          Send Email
        </button>
    </section>
  );
};
