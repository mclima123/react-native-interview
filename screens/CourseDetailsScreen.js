import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {CustomHeaderButton, Item} from '../components/UI/CustomHeaderButton';
import Colors from '../constants/Colors';
import CustomText from '../components/UI/CustomText';
import ImageContainer from '../components/ImageContainer';

const renderModule = (module, tab) => {
  return (
    <View key={module.order}>
      <CustomText style={styles.contentText}>
        {'    '.repeat(tab)}
        {module.order}. {module.name}
      </CustomText>
      {module.object ? renderModule(module.object, tab + 1) : null}
    </View>
  );
};

const CourseDetailsScreen = props => {
  const course = props.route.params.course;

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <CustomHeaderButton>
          <Item title="options" iconName="subject" onPress={() => {}} />
        </CustomHeaderButton>
      ),
    });
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <ImageContainer />
        <CustomText style={styles.courseTitle}>{course.title}</CustomText>
      </View>
      <View style={styles.descriptionTitle}>
        <CustomText style={{fontSize: 18}}>Course Description</CustomText>
      </View>
      <ScrollView>
        <View style={styles.contentContainer}>
          <CustomText style={styles.contentTitle}>Modules</CustomText>
          {course.modules.map(el => renderModule(el, 0))}
          <View style={styles.divider} />
          <CustomText style={styles.contentTitle}>Observation</CustomText>
          <CustomText style={styles.contentText}>
            Type: {course.observation.type}
          </CustomText>
          <CustomText style={styles.contentText}>
            Minumum Qualification: {course.observation.minimumQualification}
          </CustomText>
          <CustomText style={styles.contentText}>
            Duration: {course.observation.duration}
          </CustomText>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.primaryMedium,
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  descriptionTitle: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.primaryDark,
    elevation: 4,
  },
  courseTitle: {
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  contentContainer: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  contentTitle: {
    fontSize: 18,
    color: Colors.primaryDark,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  contentText: {
    color: Colors.secondarytext,
    marginVertical: 2,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.secondarytext,
    marginVertical: 15,
  },
});

export default CourseDetailsScreen;
