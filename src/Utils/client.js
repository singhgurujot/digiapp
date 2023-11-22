import axios from 'axios';
import { useContext, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from './constant';
import api from './AxiosSetup';
import { saveClientData } from '../Redux/slices/clientSlice';


const useClient = () => {
    const dispatch = useDispatch()
    const { client } = useSelector((data) => data.client);

    const getClient = useCallback(
        (clientId) => {
            api
                .get(`/client?clientId=${clientId}`)
                .then((res) => {
                    dispatch(saveClientData(res.data.Items[0]))
                })
                .catch((err) => {
                    console.log('getClient error::::', err)
                });
        },
        [dispatch]
    );

    return {
        getClient,
        client,
    };
};

export default useClient;
