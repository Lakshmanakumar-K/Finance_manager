import axios from "axios"


const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_BE_URL,
    timeout: 10000
});



export const signUpAPI = async (formData) => {
    try {
        const response = await apiInstance.post("/auth/signup", formData);
        return (response.data.msg);
    }
    catch (e) {
        console.log(e);
        const { response } = e;
        const { msg } = response.data;
        throw new Error(msg);
    }
}

export const signInAPI = async (formData) => {
    try {
        const response = await apiInstance.post("/auth/signin", formData);
        return (response.data);
    }
    catch (e) {
        const { response } = e;
        const { msg } = response.data;
        throw new Error(msg);
    }
}

export const transactionAPI = async (transDetailsWithUserId) => {
    try {
        const response = await apiInstance.post("/transactions", transDetailsWithUserId);
        return (response.data);
    }
    catch (e) {
        const { response } = e;
        const { msg } = response.data;
        throw new Error(msg)
    }
}

export const getTransactionsAPI = async (userId) => {

    try {
        const response = await apiInstance.get(`/transactions/${userId}`);
        return (response.data);
    }
    catch (e) {
        const { response } = e;
        const { msg } = response.data;
        throw new Error(msg)
    }
}

export const getTransYearFilterAPI = async (details) => {
    try {
        const response = await apiInstance.post("/transactions/filter/year", details);
        return (response.data);
    }
    catch (e) {
        const { response } = e;
        const { msg } = response.data;
        throw new Error(msg);
    }
}

export const getTransYearMonthFilterAPI = async (details) => {
    try {
        const response = await apiInstance.post("/transactions/filter/year/month", details);
        return (response.data);
    }
    catch (e) {
        const { response } = e;
        const { msg } = response.data;
        throw new Error(msg);
    }
}

export const getTransCustomFilterAPI = async (details) => {
    try {
        const response = await apiInstance.post("/transactions/filter/custom", details);
        return (response.data);
    }
    catch (e) {
        const { response } = e;
        const { msg } = response.data;
        throw new Error(msg);
    }
}

export const transactionUpdateAPI = async (userDetails) => {
    
    try {
        const response = await apiInstance.post("/transactions/update", userDetails);
        return(response.data);
    }
    catch (e) {
        const { response } = e;
        const { msg } = response.data;
        throw new Error(msg);
    }
}

export const transactionDeleteAPI = async (transactionDetails) => {
    
    try {
        const response = await apiInstance.post("/transactions/delete", transactionDetails);
        return(response.data);
    }
    catch (e) {
        const { response } = e;
        const { msg } = response.data;
        throw new Error(msg);
    }
}