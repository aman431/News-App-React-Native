const { Component } = require("react");
import React from 'react';
import {ListItem, List, Thumbnail, Body, Text, Button,Left,Right, View} from 'native-base';
import Time from './Time';

class DataItems extends Component{

    constructor(props){
        super(props);
        this.data = props.data;
    }

    render(){
        return(
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: this.data.urlToImage !== null ? this.data.urlToImage : 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}} />
              </Left>
              <Body>
                <Text numberOfLines={2}>{this.data.title}</Text>
                <Text note numberOfLines={2}>{this.data.description}</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0}}>
                  <Text note>{this.data.source.name}</Text>
                  <Text time={this.data.publishedAt} />
                </View>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
        );
    }
}

export default DataItems;