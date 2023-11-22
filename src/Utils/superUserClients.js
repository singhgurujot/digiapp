import { useContext, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from './AxiosSetup';
import { saveSuperClientData, saveSuperClientNameList } from '../Redux/slices/superUserClientsSlice';


const useClients = () => {
    const dispatch = useDispatch()
    const { superClient } = useSelector((data) => data.superClients);

    const getClients = useCallback(() => {
        api
            .get('/client/all')
            .then((res) => {
                // console.log('getClients', res);
                let payload = res.data.Items.sort((a, b) => a.clientId.S.localeCompare(b.clientId.S))
                let filterClientNameArr = payload.map((item) => ({
                    label: item.name.S,
                    value: item.clientId.S,
                }));
                filterClientNameArr.unshift({ label: "All", value: "All" });
                dispatch(saveSuperClientNameList(filterClientNameArr))
                dispatch(saveSuperClientData(payload))
            })
            .catch((err) => {
                console.log('getClients error::', err)
            });
    }, [dispatch]);
    return {
        getClients,
        superClient,
    };
};

export default useClients;
