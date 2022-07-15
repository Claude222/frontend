import React from 'react';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons
} from './IconList';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
// import icoMoonConfig from '../../assets/shareIcon/selection.json';
// const CustomIcon = createIconSetFromIcoMoon(
//   icoMoonConfig,
//   'icomoon',
//   'icomoon.ttf',
// );
export const Icon = ({type, ...props}) => {
  switch (type) {
    case 'antdesign':
      return <AntDesign {...props} />;
    case 'entypo':
      return <Entypo {...props} />;
    case 'evilicons':
      return <EvilIcons {...props} />;
    case 'feather':
      return <Feather {...props} />;
    case 'ionicons':
      return <Ionicons {...props} />;
    case 'materialicons':
      return <MaterialIcons {...props} />;
    case 'fontAwesome5':
      return <FontAwesome5 {...props} />;
    case 'fontAwesome':
      return <FontAwesome {...props} />;
    case 'materialCommunityIcons':
      return <MaterialCommunityIcons {...props} />;
    // case 'custom':f
    //   return <CustomIcon {...props} />;
  }
  return <FontAwesome {...props} />;
};
