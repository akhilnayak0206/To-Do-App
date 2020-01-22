import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { Provider } from 'react-redux';
import store from './store/store';
import MainView from './MainView';
import { Root } from 'native-base';
const statusBarHeight = Constants.statusBarHeight;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.safeArea}>
          <Root>
            <MainView />
          </Root>
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 0
  }
});
