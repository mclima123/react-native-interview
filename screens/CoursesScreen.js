import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  FlatList,
  Alert,
  RefreshControl,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {CustomHeaderButton, Item} from '../components/UI/CustomHeaderButton';
import CustomText from '../components/UI/CustomText';
import Colors from '../constants/Colors';
import CourseListItem from '../components/CourseListItem';
import ImageContainer from '../components/ImageContainer';

const CoursesScreen = props => {
  const [courses, setCourses] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const fetchCourses = async () => {
    setSearchFilter('');
    setRefreshing(true);
    setCourses([]);

    const apiCall = await fetch(
      'https://microservicos-teste.acin.pt/academy/public/courses',
    );

    if (!apiCall.ok) {
      Alert.alert('Error', response.error.message);
      return;
    }

    const response = await apiCall.json();
    setCourses(response);
    setRefreshing(false);
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <CustomHeaderButton>
          <Item title="options" iconName="subject" onPress={() => {}} />
        </CustomHeaderButton>
      ),
    });
  }, []);

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <ImageContainer />
          <View style={styles.searchFieldContainer}>
            <MaterialIcons
              name="search"
              size={30}
              color={Colors.primaryMedium}
            />
            <TextInput
              style={styles.searchField}
              placeholder="Search course"
              placeholderTextColor={Colors.primaryLight}
              onChangeText={text => setSearchFilter(text)}
              value={searchFilter}
            />
            {searchFilter.length > 0 && (
              <TouchableNativeFeedback onPress={() => setSearchFilter('')}>
                <MaterialIcons
                  style={{marginRight: 10}}
                  name="cancel"
                  size={30}
                  color={Colors.primaryMedium}
                />
              </TouchableNativeFeedback>
            )}
          </View>
        </View>
        <View style={styles.titleContainer}>
          <CustomText style={{fontSize: 18}}>Select Course</CustomText>
        </View>

        <View style={styles.listContainer}>
          {courses.length === 0 ? (
            <ActivityIndicator size={80} />
          ) : (
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={fetchCourses}
                />
              }
              style={styles.list}
              contentContainerStyle={{flexGrow: 1, padding: 5}}
              keyExtractor={(item, index) => String(item.id)}
              data={courses.filter(el =>
                el.title
                  .toLowerCase()
                  .includes(searchFilter.toLowerCase().trim()),
              )}
              renderItem={item => (
                <CourseListItem
                  course={item.item}
                  onPress={() => {
                    props.navigation.navigate('CourseDetails', {
                      course: item.item,
                    });
                  }}
                />
              )}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    paddingTop: 40,
  },
  searchFieldContainer: {
    height: 40,
    width: '100%',
    borderRadius: 3,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  searchField: {
    paddingHorizontal: 10,
    flex: 1,
    color: Colors.primaryLight,
  },
  titleContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.primaryLight,
    elevation: 3,
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
    flexGrow: 1,
  },
});

export default CoursesScreen;
