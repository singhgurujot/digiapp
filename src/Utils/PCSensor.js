// Api
import { useState } from 'react';
import { DynamoDB } from 'aws-sdk';
import api from './AxiosSetup';
import { useDispatch, useSelector } from 'react-redux';
import { savePCSensorData } from '../Redux/slices/pcSensorSlice';

const getPCURL = (txid) => `/${txid}/pc/sensor`;
const getAllPCURL = (clientId) => `/client/${clientId}/particle-counters`;

const useParticleCounter = () => {
    const dispatch = useDispatch()
    const { pcSensors } = useSelector((data) => data.pcSensor);

    const getAllPCSensors = async (clientId) => {
        dispatch(setLoader(true));
        try {
            const res = await api.get(getAllPCURL(clientId));
            dispatch(savePCSensorData(res.data.Items?.filter((item) => !item.deleted)))
        } catch (err) {
            console.log('getAllPCSensors ::::', err)
        }
        dispatch(setLoader(false));
    };
    return {
        getAllPCSensors,
        pcSensors,
    };
};

export default useParticleCounter;
