import {Image} from 'react-native';
import AppImages from '../Themes/appImages';
import {styles} from '../Routes/CustomDrawerComponent/style';

export const dashboardData = [
  {
    id: '10582984_1',
    name: 'Incubator',
    tempAvl: true,
    avgTemp: '32.3°C',
    min: '32',
    max: '40',
    ring: 'false',
    lastUpdate: '3 minutes ago',
  },
  {
    id: '10582984_2',
    tempAvl: true,
    name: 'Glycol Probe R..',
    avgTemp: '30.2°F',
    min: '29',
    max: '37',
    ring: 'false',
    lastUpdate: '3 minutes ago',
  },
  {
    id: '9147185_1',
    tempAvl: true,
    name: 'Air Probe Refr...',
    avgTemp: '42.3°F',
    min: '36',
    max: '50',
    lastUpdate: '1 minutes ago',
    ring: 'false',
  },
  {
    id: '3027268_0',
    tempAvl: true,
    name: 'Server Room A..',
    avgTemp: '74.7°F',
    min: '30',
    max: '80',
    ring: 'true',
    lastUpdate: '60 Seconds ago',
  },
  {
    id: '12935612_0',
    tempAvl: true,
    name: 'Warehouse Te...',
    avgTemp: '74.3°F',
    min: '30',
    ring: 'true',
    max: '90',
    lastUpdate: '1 minutes ago',
  },
  {
    id: '12935612_1',
    tempAvl: true,
    name: 'Warehouse Hu...',
    avgTemp: '62.2°F',
    ring: 'true',
    min: '35',
    max: '65',
    lastUpdate: '5 minutes ago',
  },
  {
    id: '10540289_0',
    tempAvl: false,
    name: 'Pressure Probe',
    ring: 'true',
    avgTemp: 'Not AV. WC',
    min: '-0.04',
    max: '-0.01',
    lastUpdate: '6 months ago',
  },
  {
    id: '10540289_1',
    tempAvl: false,
    topbg: true,
    name: 'Pressure Probe',
    ring: 'true',
    avgTemp: 'Not AV. WC',
    min: '-0.04',
    max: '-0.01',
    lastUpdate: '6 months ago',
  },
  {
    id: '12935612_1',
    tempAvl: true,
    name: 'Warehouse Humidity',
    ring: 'true',
    avgTemp: '62.2°F',
    min: '35',
    max: '65',
    lastUpdate: '3 minutes ago',
  },
];

export const sensorsData = [
  {
    id: 1,
    mainId: '10582984_1',
    name: 'Incubator',
    location: 'Main Office',
    rangeMin: 'Min / 32',
    rangeMix: 'Max / 40',
    onHold: 'true',
  },
  {
    id: 2,
    mainId: '12935612_1',
    name: 'Warehouse H..',
    location: 'Main Office',
    rangeMin: 'Min / 32',
    rangeMix: 'Max / 40',
    onHold: 'true',
  },
  {
    id: 3,
    mainId: '10582984_1',
    name: 'Server Room ..',
    location: 'Main Office',
    rangeMin: 'Min / 32',
    rangeMix: 'Max / 40',
    onHold: 'true',
  },
  {
    id: 4,
    mainId: '12935612_1',
    name: 'Warehouse H..',
    location: 'Main Office',
    rangeMin: 'Min / 32',
    rangeMix: 'Max / 40',
    onHold: 'true',
  },
  {
    id: 5,
    mainId: '10582984_1',
    name: 'Incubator',
    location: 'Main Office',
    rangeMin: 'Min / 32',
    rangeMix: 'Max / 40',
    onHold: 'true',
  },
  {
    id: 6,
    mainId: '10582984_1',
    name: 'Incubator',
    location: 'Main Office',
    rangeMin: 'Min / 32',
    rangeMix: 'Max / 40',
    onHold: 'false',
  },
  {
    id: 7,
    mainId: '12935612_1',
    name: 'Warehouse H..',
    location: 'Main Office',
    rangeMin: 'Min / 32',
    rangeMix: 'Max / 40',
    onHold: 'false',
  },
  {
    id: 8,
    mainId: '10582984_1',
    name: 'Server Room ..',
    location: 'Main Office',
    rangeMin: 'Min / 32',
    rangeMix: 'Max / 40',
    onHold: 'true',
  },
  {
    id: 9,
    mainId: '12935612_1',
    name: 'Warehouse H..',
    location: 'Main Office',
    rangeMin: 'Min / 32',
    rangeMix: 'Max / 40',
    onHold: 'true',
  },
];

export const dropdownDashBoard = [
  {label: 'All', value: 'All'},
  {label: 'Main office', value: 'Main office'},
  {label: 'All', value: 'All'},
  {label: 'Main office', value: 'Main office'},
  {label: 'All', value: 'All'},
  {label: 'Main office', value: 'Main office'},
  {label: 'All', value: 'All'},
  {label: 'Main office', value: 'Main office'},
];

export const userArray = state => {
  return [
    {
      no: 1,
      name: 'Dashboard',
      icon: <Image source={AppImages.dashBoard} style={styles.dashBoard} />,
      icon2: (
        <Image source={AppImages.activeDashboard} style={styles.dashBoard} />
      ),
      selectedTab: state.index == 0 ? true : false,
    },
    // {
    //   no: 2,
    //   name: 'Alarm',
    //   icon: <Image source={AppImages.alarmIcon} style={styles.alarm} />,
    //   icon2: <Image source={AppImages.activeAlarm} style={styles.alarm} />,
    //   selectedTab: state.index == 1 ? true : false,
    // },
  ];
};

export const managerArray = state => [
  {
    no: 1,
    name: 'Dashboard',
    icon: <Image source={AppImages.dashBoard} style={styles.dashBoard} />,
    icon2: (
      <Image source={AppImages.activeDashboard} style={styles.dashBoard} />
    ),
    selectedTab: state.index == 0 ? true : false,
  },
  // {
  //   no: 2,
  //   name: 'Alarm',
  //   icon: <Image source={AppImages.alarmIcon} style={styles.alarm} />,
  //   icon2: <Image source={AppImages.activeAlarm} style={styles.alarm} />,
  //   selectedTab: state.index == 1 ? true : false,
  // },
  {
    no: 2,
    name: 'Sensors',
    icon: <Image source={AppImages.sensors} style={styles.sensors} />,
    icon2: <Image source={AppImages.activeSensors} style={styles.sensors} />,
    selectedTab: state.index == 2 ? true : false,
  },
];

export const superUserArray = state => [
  {
    no: 1,
    name: 'Dashboard',
    icon: <Image source={AppImages.dashBoard} style={styles.dashBoard} />,
    icon2: (
      <Image source={AppImages.activeDashboard} style={styles.dashBoard} />
    ),
    selectedTab: state.index == 0 ? true : false,
  },
  // {
  //   no: 2,
  //   name: 'Alarm',
  //   icon: <Image source={AppImages.alarmIcon} style={styles.alarm} />,
  //   icon2: <Image source={AppImages.activeAlarm} style={styles.alarm} />,
  //   selectedTab: state.index == 1 ? true : false,
  // },
  {
    no: 2,
    name: 'Sensors',
    icon: <Image source={AppImages.sensors} style={styles.sensors} />,
    icon2: <Image source={AppImages.activeSensors} style={styles.sensors} />,
    selectedTab: state.index == 1 ? true : false,
  },
];

export const adminArray = state => [
  {
    no: 1,
    name: 'Dashboard',
    icon: <Image source={AppImages.dashBoard} style={styles.dashBoard} />,
    icon2: (
      <Image source={AppImages.activeDashboard} style={styles.dashBoard} />
    ),
    selectedTab: state.index == 0 ? true : false,
  },
  // {
  //   no: 2,
  //   name: 'Alarm',
  //   icon: <Image source={AppImages.alarmIcon} style={styles.alarm} />,
  //   icon2: <Image source={AppImages.activeAlarm} style={styles.alarm} />,
  //   selectedTab: state.index == 1 ? true : false,
  // },
  {
    no: 2,
    name: 'Sensors',
    icon: <Image source={AppImages.sensors} style={styles.sensors} />,
    icon2: <Image source={AppImages.activeSensors} style={styles.sensors} />,
    selectedTab: state.index == 1 ? true : false,
  },
];
