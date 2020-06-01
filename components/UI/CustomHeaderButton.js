import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HeaderButtons, HeaderButton} from 'react-navigation-header-buttons';

import Colors from '../../constants/Colors';

const MaterialHeaderButton = props => (
  <HeaderButton
    IconComponent={MaterialIcons}
    iconSize={23}
    color={Colors.primaryText}
    {...props}
  />
);

export const CustomHeaderButton = props => {
  return (
    <HeaderButtons HeaderButtonComponent={MaterialHeaderButton} {...props} />
  );
};
export {Item} from 'react-navigation-header-buttons';
