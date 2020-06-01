import React from 'react';
import {View, StyleSheet, TouchableNativeFeedback, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../constants/Colors';
import CustomText from './UI/CustomText';

const CourseListItem = props => {
  const course = props.course;

  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View style={styles.mainContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri:
                'https://www.partnerscom.com.br/wp-content/uploads/2019/07/business-plan.jpg',
            }}
            style={{width: '100%', height: '100%', backgroundColor: 'gray'}}
            resizeMode="cover"
          />
        </View>
        <CustomText numberOfLines={1} style={styles.courseTitle}>
          {course.title}
        </CustomText>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={30}
          color="white"
          style={styles.icon}
        />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 5,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
  },
  imgContainer: {
    width: '20%',
    backgroundColor: 'gray',
    height: '100%',
  },
  courseTitle: {flex: 1, paddingHorizontal: 10},
  icon: {padding: 10},
});

export default CourseListItem;
