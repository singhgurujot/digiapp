import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerComponent from './CustomDrawerComponent';
import DashBoard from '../Screens/Dashboard';
import Alarm from '../Screens/Alarm';
import Sensors from '../Screens/Sensors';
const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="DashBoard"
      screenOptions={{
        headerShown: false,
        drawerStyle: { marginTop: 48 },
      }}
      drawerContent={props => <CustomDrawerComponent {...props} />}>
      <Drawer.Screen name="DashBoard" component={DashBoard} />
      {/* <Drawer.Screen name="Alarm" component={Alarm} /> */}
      <Drawer.Screen name="Sensors" component={Sensors} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
