import {Base_url} from './base_url'
import { commonRequest } from './commonRqst'


//register
export const empRegister=async(body,headers)=>{
    return commonRequest("POST",`${Base_url}/register`,body,headers)
}

//viewcontact
export const alldata=async()=>{
    return await commonRequest("GET",`${Base_url}/alldetails`)
}