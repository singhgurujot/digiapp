import axios from "axios";
import { saveUserInfo } from "../Redux/slices/dashBoardSlice";
import { DataManager } from "./dataManager";
import { filterAndSortSensors } from "./senser";
import { setLoader } from "../Redux/slices/commonSlice";
// import { DynamoDB } from 'aws-sdk';
import * as AWS from "aws-sdk";
import { allSensorData, particularCounterData } from "../JSON/arrayJson";

const baseUrl = "https://3c5ak88r8b.execute-api.us-east-2.amazonaws.com/prod";

export const apiMethods = {
  async getUserData(access_Token, userId, dispath, navigation, data) {
    try {
      const url = `${baseUrl}/user?userId=${userId}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: access_Token,
        },
      });
      console.log("getUserData", response);
      dispath(setLoader(false));
      DataManager.setUserInfo(JSON.stringify(response.data));
      dispath(saveUserInfo(response.data));
      navigation.navigate("DrawerNav");
    } catch (error) {
      dispath(setLoader(false));
      console.error("error in data", error);
    }
  },

  async getSensorsData(access_Token, userInfo, dispath, navigation) {
    const clientId = userInfo?.Items[0]?.clientId?.S;
    try {
      const url = `${baseUrl}/client/${clientId}/sensors`;
      const response = await axios.get(url, {
        headers: {
          Authorization: access_Token,
        },
      });
      console.log("getSensorsData", response);
      dispath(setLoader(false));
      let sensors = response.data.Items;
      let filteredSensors = sensors
        .filter((data) => data.deleted.BOOL !== true)
        .sort((a, b) => (a.txid.S > b.txid.S ? 1 : -1));
      return filteredSensors;
      // return allSensorData.Items;
    } catch (err) {
      dispath(setLoader(false));
      console.log("error in respons of sensor ==>", err);
      DataManager.removeData();
      navigation.navigate("Login");
      alert("Session expired, please login again!");
    }
  },

  async getClientDetails(access_Token, role, userInfo) {
    console.log("getClientDetails----", userInfo);
    const clientId = userInfo?.Items[0]?.clientId?.S;
    try {
      const url =
        role == "superuser"
          ? `${baseUrl}/client/all`
          : `${baseUrl}/client?clientId=${clientId}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: access_Token,
        },
      });
      return response.data.Items;
    } catch (err) {
      console.log("error in respons of sensor ==>", err);
    }
  },

  // async stopAlarmApi(id, dispath) {
  //   try {
  //     const url = `${baseUrl}/${id}/sensor`;
  //     const response = await axios.get(url, {
  //       headers: {
  //         Authorization: access_Token,
  //       },
  //     });
  //     console.log('stopAlarmApi', response);
  //     // return response.data.Items;
  //   } catch (err) {
  //     console.log('error in respons of sensor ==>', err);
  //   }
  // },

  async putSensorOnHold(access_Token, item, holdSensor, dispatch) {
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
    try {
      const url = `${baseUrl}/${item?.txid?.S}/sensor`;
      const response = await axios.patch(url, body, {
        headers: {
          Authorization: access_Token,
        },
      });
      dispatch(setLoader(false));
      if (response.data.Attributes) {
        return response.data.Attributes;
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      dispatch(setLoader(false));
    }
  },

  async closeAlarm(access_Token, item, holdSensor, dispatch) {
    // dispatch(setLoader(true));
    let body = {
      alarmOn: !holdSensor,
      hasEscalation: item?.hasEscalation?.BOOL,
      alarmType: item?.alarmType?.S,
    };
    console.log("closeAlarm----body", body);
    try {
      const url = `${baseUrl}/${item?.txid?.S}/sensor`;
      const response = await axios.patch(url, body, {
        headers: {
          Authorization: access_Token,
        },
      });
      console.log("closeAlarm response", response);
      dispatch(setLoader(false));
      if (response.data.Attributes) {
        return response.data.Attributes;
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.log("closeAlarm err", err);
      dispatch(setLoader(false));
    }
  },

  async stopAlarm(access_Token, item, message, dispatch, userInfo) {
    let userName = `${userInfo?.Items[0]?.firstName?.S} ${userInfo?.Items[0]?.lastName?.S}`;
    console.log("stopAlarm", item);
    dispatch(setLoader(true));
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

    // const payload = {
    //   alarmId: Date.now(),
    //   alarmType: item?.alarmType?.S,
    //   alarmOn: false,
    //   closedAt: Date.now(),
    //   closedBy: userName,
    //   createdAt: Date.now(), //item?.createdAt?.N
    //   escalation: 0,
    //   lastEscalation: 0,
    //   message: message,
    //   txid:item?.txid?.S,
    // };
    console.log("stopAlarm body", payload);
    // let convertPayload=AWS.DynamoDB.Converter.marshall(payload)
    try {
      const url = `${baseUrl}/${item?.txid?.S}/alarm`;
      const response = await axios.post(url, payload, {
        headers: {
          Authorization: access_Token,
        },
      });
      console.log("stopAlarm Success", response);
      dispatch(setLoader(false));
      if (response?.data?.Attributes) {
        return response.data.Attributes;
      } else {
        // alert(response?.data?.Message)
      }
    } catch (err) {
      console.log("stopAlarm error", err);
      dispatch(setLoader(false));
    }
  },
  async getParticularCounters(access_Token) {
    try {
      const url = `${baseUrl}/client/HealthCare/particle-counters`;
      const response = await axios.get(url, {
        headers: {
          Authorization: access_Token,
        },
      });
      console.log("data in respons of apiParticular counter ==>", response);
      return response.data.Items;
      // return particularCounterData.Items;
      // return allSensorData.Items;
    } catch (err) {
      console.log("error in respons of particularCounters  ==>", err);
    }
  },
};
