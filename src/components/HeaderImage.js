/** react */
import React, {useState, useContext, useEffect} from 'react';
/** react-native */
import {StyleSheet} from 'react-native';
// import {AuthContext} from '../providers/AuthProvider';
// import {DataContext} from '../providers/DataProvider';
/** External Packages */
import FastImage from 'react-native-fast-image';
const HeaderImage = () => {
  // const {token} = useContext(AuthContext);
  // const {schoolLogo} = useContext(DataContext);
  const [source, setSource] = useState(require('../assets/YourLocalExpert.png'));
  // useEffect(() => {
  //   function init() {
  //     if (token) {
  //       setSource({uri: schoolLogo});
  //     } else {
  //       setSource(require('../assets/Hands_Graduate.png'));
  //     }
  //   }
  //   init();
  // }, [schoolLogo, token]);
  return (
    <React.Fragment>
      {source && (
        <FastImage
          style={styles.headerImage}
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

const styles = StyleSheet.create({
  headerImage: {
    width: 60,
    height: 50,
    // marginBottom: 10,
  },
});

export default HeaderImage;
