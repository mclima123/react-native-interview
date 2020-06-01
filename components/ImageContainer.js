import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const ImageContainer = props => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{
          uri:
            'https://www.partnerscom.com.br/wp-content/uploads/2019/07/business-plan.jpg',
        }}
        style={{width: '100%', height: '100%', backgroundColor: 'gray'}}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 130,
    width: 230,
    marginBottom: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default ImageContainer;
