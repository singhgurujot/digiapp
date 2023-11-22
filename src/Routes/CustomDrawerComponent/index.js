import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AppImages from '../../Themes/appImages';
import {styles} from './style';
import AppConstant from '../../Themes/appConstant';
import {useNavigation} from '@react-navigation/native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import {
  adminArray,
  managerArray,
  superUserArray,
  userArray,
} from '../../JSON/dashBoardData';

const CustomDrawerComponent = ({state, navigation}) => {
  const {userInfo} = useSelector(data => data.dashBoardData);
  const userRole = userInfo?.Items[0]?.role?.S;

  const __onChangeTab = (item, index) => {
    if (userRole == 'user') {
      if (index == 0) {
        navigation.navigate('DashBoard');
      }
      // else if (index == 1)
      // {
      //   navigation.navigate('Alarm');
      // }
    }

    if (userRole == 'manager') {
      if (index == 0) {
        navigation.navigate('DashBoard');
      }
      // else if (index == 1)
      // {
      //   navigation.navigate('Alarm');
      // }
      else if (index == 1) {
        navigation.navigate('Sensors');
      }
    }

    if (userRole == 'admin') {
      if (index == 0) {
        navigation.navigate('DashBoard');
      }
      // else if (index == 1)
      // {
      //   navigation.navigate('Alarm');
      // }
      else if (index == 1) {
        navigation.navigate('Sensors');
      }
    }

    if (userRole == 'superuser') {
      if (index == 0) {
        navigation.navigate('DashBoard');
      }
      // else if (index == 1)
      // {
      //   navigation.navigate('Alarm');
      // }
      else if (index == 1) {
        navigation.navigate('Sensors');
      }
    }
  };

  const _renderTabIcon = data => {
    if (data.selectedTab) {
      return data.icon2;
    } else return data.icon;
  };

  const getDrawerArray = () => {
    switch (userRole) {
      case 'user':
        return userArray(state);
      case 'manager':
        return managerArray(state);
      case 'superuser':
        return superUserArray(state);
      default:
        return adminArray(state);
    }
  };

  return (
    <View style={styles.customMainView}>
      <View style={styles.iconAndBrand}>
        <Image source={AppImages.brandIcon} style={styles.brandIcon} />
        <Text style={styles.digitracker}>{AppConstant.digitracker}</Text>
      </View>
      {getDrawerArray().map((data, index) => {
        return (
          <TouchableOpacity
            style={styles.iconAndScreen}
            key={index}
            onPress={() => {
              __onChangeTab(data, index);
            }}>
            <View>{_renderTabIcon(data)}</View>
            <Text
              style={[
                styles.screenName,
                {color: data.selectedTab ? '#2F3F9F' : '#757575'},
              ]}>
              {data.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomDrawerComponent;
