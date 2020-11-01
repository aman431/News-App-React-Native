import React, { Component } from 'react';
import {Text} from 'native-base';
import moment from 'moment';

export default class Time extends Component {
    constructor(props){
        super(props);
        this.data = props.time
    }

    render() {
        const time = moment(this.data || moment.now() ).fromNow();

        return (
            <div>
                <Text note style={{marginHorizontal:10}}>{time}</Text>
            </div>
        );
    }
}