
import { settings } from '../../settings'
const remoteURL = "https://www.googleapis.com/civicinfo/v2/representatives"



export const getMyLawmaker = (address) => {
    //be sure your a have good data and related to a location and customer
    return fetch(`${remoteURL}?address=${address}&includeOffices=true&levels=administrativeArea2&roles=legislatorLowerBody&roles=legislatorUpperBody&key=${settings.apiKey}`)
    .then(res => res.json())
  }


