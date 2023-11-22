import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setLoader } from '../Redux/slices/commonSlice';
import api from './AxiosSetup';
import { updateData } from '../Redux/slices/dashBoardSlice';

const useSensorInfo = () => {
    const dispatch = useDispatch()
    const getAllSensors = useCallback(
        (clientId) => {
            dispatch(setLoader(true));
            api
                .get(`/client/${clientId.S}/sensors`)
                .then((res) => {
                    dispatch(setLoader(false));
                    dispatch(updateData({ data: res?.data?.Items, key: "sensorListData" }));
                })
                .catch((err) => {
                    dispatch(setLoader(false));
                    console.log('getAllSensors error::', err)
                });
        },
        [dispatch]
    );

    const closeAlarm = useCallback(
        (item, holdSensor) => {
            let body = {
                alarmOn: !holdSensor,
                hasEscalation: item?.hasEscalation?.BOOL,
                alarmType: item?.alarmType?.S,
            };
            api
                .patch(`/${item?.txid?.S}/sensor`, body)
                .then((response) => {
                    // console.log('closeAlarm response::::', response);
                    dispatch(setLoader(false));
                    if (response.data.Attributes) {
                        return response.data.Attributes;
                    } else {
                        alert(response.data.message);
                    }
                })
                .catch((err) => {
                    dispatch(setLoader(false));
                    console.log('closeAlarm error::', err)
                });
        },
        [dispatch]
    );


    const stopAlarm = useCallback(
        (item, message, userInfo) => {
            let userName = `${userInfo?.Items[0]?.firstName?.S} ${userInfo?.Items[0]?.lastName?.S}`;
            let payload = {
                closedBy: {
                    S: userName,
                },
                escalation: {
                    N: "1",
                },
                txid: {
                    S: item?.txid?.S,
                },
                closedAt: {
                    N: Date.now().toString(),
                },
                createdAt: {
                    N: item?.createdAt?.N.toString(), //item?.createdAt?.N
                },
                alarmType: {
                    S: item?.alarmType?.S,
                },
                hasEscalation: {
                    BOOL: item?.hasEscalation?.BOOL,
                },
                alarmOn: {
                    BOOL: false,
                },
                message: {
                    S: message,
                },
                alarmId: {
                    N: Date.now().toString(),
                },
                lastEscalation: {
                    N: "0",
                },
            };
            api
                .patch(`/${item?.txid?.S}/alarm`, payload)
                .then((response) => {
                    dispatch(setLoader(false));
                    if (response?.data?.Attributes) {
                        return response.data.Attributes;
                    } else {
                        alert(response?.data?.Message)
                    }
                })
                .catch((err) => {
                    dispatch(setLoader(false));
                    console.log('stopAlarm error::', err)
                });
        },
        [dispatch]
    );

    const sensorOnHold = useCallback(
        (item, holdSensor, sensorList) => {
            dispatch(setLoader(true));
            let body = {
                name: item?.name?.S,
                rangeMin: item?.rangeMin?.N,
                rangeMax: item?.rangeMax?.N,
                unit: item?.unit?.S,
                location: item?.location?.S,
                onHold: !holdSensor,
                gateway: item?.gateway?.S,
                modifiedAt: item?.modifiedAt?.N,
                heartbeat: item?.heartbeat?.N,
                lastHeartbeat: item?.lastHeartbeat?.N,
                coef: item?.coef?.N,
                clientId: item?.clientId?.S,
                txid: item?.txid?.S,
            };
            api
                .patch(`/${item?.txid?.S}/sensor`, body)
                .then((response) => {
                    dispatch(setLoader(false));
                    let txid = response?.data?.Attributes?.txid?.S
                    const updatedSensorList = [...sensorList];
                    const index = updatedSensorList.findIndex(
                        (element) => element.txid.S === txid
                    );
                    if (index !== -1) {
                        updatedSensorList[index] = response?.data?.Attributes;
                        dispatch(updateData({ data: updatedSensorList, key: "sensorListData" }));
                    }
                })
                .catch((err) => {
                    dispatch(setLoader(false));
                    console.log('stopAlarm error::', err)
                });
        },
        [dispatch]
    );

    return {
        getAllSensors,
        closeAlarm,
        stopAlarm,
        sensorOnHold,
    };
};

export default useSensorInfo;
