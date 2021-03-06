/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



import moment from 'moment';
import timezone from 'moment-timezone';
import formatTime from 'moment-format';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Welcome = () => {
  return (
      <Text>Welcome to C308 Web Frameworks</Text>
  );
}

class MyFirstApp extends React.Component {
  render() {
    return <Text>My first React Native app</Text>
  }
}

const SemModule = (props) => {
  return (
      <Text>{props.day} - {props.modCode}</Text>
  );
}

class Eats extends React.Component {
  render() {
    return (
        <Text>{this.props.name} {'\n'} {this.props.location}</Text>
    );
  }
}



class Clock extends React.Component {
  render() {
    var a = moment.tz('Asia/Singapore');

    return (
        <Text>{this.props.a}</Text>

    );
  }
}



console.log("Listing semester modules and recommended eats");


const App: () => React$Node = () => {
  console.log("I am a console statement!");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
              <Text>Welcome to C308 Web Frameworks</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>


              <Welcome/>
              <MyFirstApp/>
              <Text>My Modules this semester:</Text>
              <SemModule day="Monday" modCode="C273"/>
              <SemModule day="Tuesday" modCode="C308"/>
              <Text>Recommended Eats @ RP</Text>
              <Eats name="Chicken Chop Shop: "  location="South Canteen South Agora"/>
              <Clock a />











            </View>
            <View style={styles.sectionContainer}>


              <Text style={styles.sectionDescription}>

              </Text>
            </View>
            <View style={styles.sectionContainer}>

              <Text style={styles.sectionDescription}>

              </Text>
            </View>
            <View style={styles.sectionContainer}>

              <Text style={styles.sectionDescription}>

              </Text>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
