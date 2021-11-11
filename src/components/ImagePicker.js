/** react */
import React, {useState, useContext, useEffect} from 'react';
/** react-native */
import {StyleSheet} from 'react-native';
/** External Packages */
import FastImage from 'react-native-fast-image';
const ImagePicker = ({
    heightImage,
    widthImage,
}) => {
  const [source, setSource] = useState(require('../assets/YourLocalExpert.png'));
  return (
    <React.Fragment>
      {source && (
        
        <FastImage
          style={{height:heightImage,width:widthImage}}
          source={source}
          resizeMode={FastImage.resizeMode.cover}
          onError={() => {
            setSource(require('../assets/YourLocalExpert.png'));
          }}
        />
      )}
    </React.Fragment>
  );
};

// const styles = StyleSheet.create({
//   headerImage: {
//     width: width,
//     height: height,
//     // marginBottom: 10,
//   },
// });

export default ImagePicker;
