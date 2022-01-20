const remoteURL = "http://localhost:8088"
const MailgunUrl = "http://localhost:9099"
export const getCampaignById = (campaignId) => {
  //be sure your a have good data and related to a location and customer
  return fetch(`${remoteURL}/campaigns/${campaignId}`)
  .then(res => res.json())
}

export const getAllCampaigns= () => {
  return fetch(`${remoteURL}/campaigns?_expand=user`)
  .then(res => res.json())
}
export const getAllCouncilMembers= () => {
  return fetch(`${remoteURL}/councilmembers`)
  .then(res => res.json())
}
export const findCouncilMember= (firstName) => {
  return fetch(`${remoteURL}/councilmembers?q=${firstName}`)
  .then(res => res.json())
}
export const taskComplete = (campaign) => {
	campaign.status = true
	  return fetch(`http://localhost:8088/campaign/${campaign.id}`, {
		  method: "PATCH",
		  headers: {
			  "Content-Type": "application/json"
		  },
		  body: JSON.stringify(campaign.status)
	  }).then(data => data.json());
  }

export const deleteCampaign = (id) => {
  return fetch(`${remoteURL}/campaigns/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const addCampaign = (newCampaign) => {
  return fetch(`${remoteURL}/campaigns`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newCampaign)
  }).then(response => response.json())
}

export const addEmail = (email) => {
  
  return fetch(`http://localhost:9099/email`, {
      
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(email)
  }).then(response => response.json())
}

export const saveEmail = (newEmail) => {
  return fetch(`${remoteURL}/emails`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmail)
  }).then(response => response.json())
}



export const update = (editedCampaign) => {
  return fetch(`${remoteURL}/campaigns/${editedCampaign.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedCampaign)
  }).then(data => data.json());
}
