/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {View} from 'react-native';

const App = () => {
  useEffect(() => {
    const idTimeout = setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
    return () => {
      clearTimeout(idTimeout);
    };
  }, []);

  return <View />;
};

export default App;
