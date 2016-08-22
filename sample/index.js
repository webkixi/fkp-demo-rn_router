/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Toast from 'react-native-root-toast';
global.Toast = Toast;
import Demo from './aaa';
import {route} from 'fkp-react-native-router';

export default class start extends Component {
    render(){
        return (
            route.init( {
                aaa: require('./aaa').default,
                bbb: require('./bbb').default,
                ccc: require('./ccc').default,
                ddd: require('./ddd').default,
            })
            .start('aaa', {message:'aaa'})
        )
    }
}
