import React, { Component } from 'react';
import { ActivityIndicator,Alert,View} from 'react-native';
import { Container, Header, Content, List,Text} from 'native-base';
import DataItem from '../../component/dataItem'
import { getArticles } from '../../services/news';
// import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import Modal from '../../component/modal';
import { article_url } from '../../config/rest_config';


export default class Tab2 extends Component {
  
  constructor(props){
      super(props);

      this.state = {
          isLoading: true,
          data: null,
          setModalVisible: false,
          modalArticleData: {}
      }
  }


hanldeItemDataonPress = (articleData) => {
  this.setState({
    setModalVisible: true,
    modalArticleData: articleData
  })
}
handleModalClose = () => {
  this.setState({
    setModalVisible: false,
    modalArticleData: {}
  })
}
  componentDidMount(){
      getArticles('business').then(data => {
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
                <DataItem onPress={this.hanldeItemDataonPress} data={item} />
              )
        }} />
     )

    return (
      <Container>
        <Content>
          {view}
        </Content>
        <Modal 
          showModal = {this.state.setModalVisible}
          articleData= {this.state.modalArticleData}
          onClose={this.handleModalClose}       
        />
      </Container>
    );
  }
}