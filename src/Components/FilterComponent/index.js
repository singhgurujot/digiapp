
import { useSelector } from 'react-redux';
import OtherFilterView from './OtherFilterView';
import SuperUserFilterView from './SuperUserFilterView';
const SUPER_USER = 'superuser'

function FilterComponent({ sensorListData, pcSensors, filterList, clientNameList, clientFloorsList }) {
    const {
        userInfo,
    } = useSelector((data) => data.dashBoardData);
    const role = userInfo?.Items[0]?.role?.S;
    // const role = SUPER_USER;
    if (role === 'superuser') {
        return <SuperUserFilterView sensorListData={sensorListData} pcSensors={pcSensors} clientNameList={clientNameList} clientFloorsList={clientFloorsList} />;
    }
    return <OtherFilterView sensorListData={sensorListData} pcSensors={pcSensors} filterList={filterList} />;
}

export default FilterComponent;
