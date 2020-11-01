import React, { Component } from 'react';
import { ActivityIndicator,Alert,View} from 'react-native';
import { Container, Header, Content, List,Text} from 'native-base';
import DataItem from '../../component/dataItem'
import { getArticles } from '../../services/news';
// import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


export default class ListThumbnailExample extends Component {
  
  constructor(props){
      super(props);
      this.state = {
          isLoading: true,
          data: null
      }
  }

  componentDidMount(){
      getArticles().then(data => {
          this.setState({
              isLoading: false,
              data: data
          });
      }, error => {
          Alert.alert('Error', 'Something went Wrong');
      })
  }

  render() {
    // console.log(this.state.data);
    // console.log(this.state.isLoading);
    let view = this.state.isLoading ? (
        <View>
            <ActivityIndicator animating={this.state.isLoading} color="#00f0ff"/>
            <Text style={{marginTop:10,textAlign: "center"}}>Please Wait..</Text>
        </View>
     ) :  (
        <List
          dataArray = {this.state.data}
          renderRow = {(item) => {
              return (
                <DataItem data={item} />
              )
        }} />
     )

    return (
      <Container>
        <Content>
          {view}
        </Content>
      </Container>
    );
  }
}