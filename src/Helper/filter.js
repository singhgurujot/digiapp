export const updateSensorData = (data, array, clientDetails) => {
  if (clientDetails) {
    const updateData = array.filter(item => item.location.S == data);
    return updateData;
  } else {
    const updateData = array.filter(item => item.clientId.S == data);
    console.log('data in updated in name array ==>', updateData);
    return updateData;
  }
};
