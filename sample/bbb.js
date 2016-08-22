import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Button from 'react-native-button'
import {page} from 'fkp-react-native-router';

let _Page;
let _Intent;

class Bbb extends Component {
    componentDidMount() {
        Toast.show(_Intent.message);
    }

    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Text>
                        i'm Bbb
                    </Text>
                </View>
              <Button
                  containerStyle={styles.button}
                  style={{fontSize: 20, color: '#fff'}}
                  styleDisabled={{color: 'red'}}
                  onPress={() => {
                      _Page.back()
                  }}>
                  Go Back!
              </Button>
            </View>
        )
    }
}

export default function start(id){
    return page.new({
        trigger: function(self, intent){
            _Page = this;
            _Intent = intent;
            return <Bbb />
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
