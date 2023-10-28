import axios from "axios";

const url = "http://localhost:8000";

export const saveUserDataApi = async(data) => {
    try {
        return await axios.post(`${url}/users`,data);
    } catch (error) {
        console.log(`Error calling saveUserDataApi ${error}`);
    }
}

export const authenticateLogin = async(data) => {
    try {
        return await axios.post(`${url}/authenticatelogin`,data);
    } catch (error) {
        console.log(`Error calling authenticateLogin API ${error}`);
    }
}

export const payUsingPaytmApi = async(data) => {
   try {
     return await axios.post(` ${url}/payment`,data);
   } catch (error) {
        console.log(`Error calling payUsingPaytmApi${error}`);
   }

}