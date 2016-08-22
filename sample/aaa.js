/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import Button from 'react-native-button'
import {page, router} from 'fkp-react-native-router';

let _Page;
let _Intent;

class Aaa extends Component {
    componentDidMount() {
        Toast.show('开始页面数据: '+_Intent.message)
    }

  render() {
    return (
      <View style={styles.container}>
        <Button
            containerStyle={styles.button}
            style={{fontSize: 20, color: '#fff'}}
            styleDisabled={{color: 'red'}}
            onPress={() => {
                _Page.router('bbb', {message: 'from aaa jump to bbb'})
            }}>
            Jump to bbb!
        </Button>
        <Button
            containerStyle={styles.button}
            style={{fontSize: 20, color: '#fff'}}
            styleDisabled={{color: 'red'}}
            onPress={() => {
                router('ccc', {message: 'from aaa jump to ccc'})
            }}>
            Jump to ccc!
        </Button>
        <Button
            containerStyle={styles.button}
            style={{fontSize: 20, color: '#fff'}}
            styleDisabled={{color: 'red'}}
            onPress={() => {
                router('ddd', {message: 'from aaa jump to ddd'})
            }}>
            Jump to ddd!
        </Button>
      </View>
    );
  }
}

export default function start(id){
    return page.new({
        trigger: function(self, intent){
            _Page = this;
            _Intent = intent;
            return <Aaa />
        }
    })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  button:{
      margin: 5,
      padding:10,
      width: 200,
      height:45,
      overflow:'hidden',
      borderRadius:4,
      backgroundColor: '#26e889',
      alignItems: 'center',
      justifyContent: 'center'
  }
});
