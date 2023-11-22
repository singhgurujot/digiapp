import axios from 'axios';
import { DynamoDB } from 'aws-sdk';
import { Auth } from 'aws-amplify';
import { baseUrl } from './constant';
import { DataManager } from '../Helper/dataManager';

const api = axios.create({
    baseURL: baseUrl
});

// Middleware after sent request
api.interceptors.response.use(
    (response) => {
        const newResponse = response;

        if (response.config.method === 'get') {
            const data = response.data.Items;
            const formattedData = data.map((item) => item);
            const haveMapping =
                formattedData.length > 0 && Object.values(formattedData[0]).every((el) => el === undefined);

            newResponse.data.Items = haveMapping ? data : formattedData;
        }

        return newResponse;
    },
    (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
            DataManager.removeData();
        }

        return Promise.reject(error);
    }
);

export default api;

// Middleware before sent request
api.interceptors.request.use(async (config) => {
    const res = await Auth.currentSession();
    const token = res?.idToken?.jwtToken;
    const userId = res?.accessToken?.payload?.username;
    const accessToken = await DataManager.getAccessToken();
    if (token !== accessToken) {
        DataManager.setAccessToken(token);
        DataManager.set_UserId(userId);
    }
    config.headers.Authorization = token;
    return config;
});
