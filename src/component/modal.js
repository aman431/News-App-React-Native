// import React, { Component } from 'react';
// import { Dimensions, Modal, Share } from 'react-native';
// import {Container, Header, Content, Body, Left, Icon, Right, Title, Button} from 'native-base';
// import {WebView} from 'react-native-webview';
// const webViewHeight = Dimensions.get('window').height - 100;

// // create a component
// class ModalComponent extends Component {

//     constructor(props) {
//         super(props);
//     }

//     handleClose = () => {
//         return this.props.onClose();
//     }

//     handleShare = () => {
//         const {url, title} = this.props.articleData;
//         message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
//         return Share.share(
//             {title, message, url: message},
//             {dialogTitle:`Share ${title}`}
//         );
//     }

//     render() {
//         const { showModal, articleData } = this.props;
//         const { url } = articleData;
//         if( url != undefined ) {
//         return (
//             <Modal
//                 animationType="slide"
//                 transparent
//                 visible={showModal}
//                 onRequestClose={this.handleClose}
//             >
//                 <Container style={{margin:15, marginBottom:0, backgroundColor:'#fff'}}>
//                     <Header style={{backgroundColor:'#009387'}}>
//                         <Left>
//                             <Button onPress={this.handleClose} transparent>
//                                 <Icon name="close" style={{color: 'white', fontSize: 12}}/>
//                             </Button>
//                         </Left>
//                         <Body>
//                             <Title children={articleData.title} style={{color: 'white'}}/>
//                         </Body>
//                         <Right>
//                             <Button onPress={this.handleShare} transparent>
//                                 <Icon name="share" style={{color: 'white', fontSize: 12}}/>
//                             </Button>
//                         </Right>
//                     </Header>
//                     <Content contentContainerStyle={{height: webViewHeight}}>
//                         <WebView source={{uri:url}} style={{flex: 1}}
//                         onError={this.handleClose} startInLoadingState
//                         scalesPageToFit
//                         />
//                     </Content>
//                 </Container>
//             </Modal>
//         );
//         } else {
//             return null;
//         }
//     }
// }

// //make this component available to the app
// export default ModalComponent;


import React,{Component} from 'react';
import { Dimensions,Modal, Share } from 'react-native';
import { Container, Header, Content, Body, Left, Right, Title, Button, Icon } from 'native-base';
import { WebView } from 'react-native-webview';

const webViewHeight = Dimensions.get('window').height - 100;
// const webViewHeight = Dimensions.get('window').height - 56;

class ModalComponent extends Component {

    constructor(props){
        super(props);
    }
// #009387
    handleClose = () => {
        return this.props.onClose();
    }
    handleShare = () => {
        const {url,title} =  this.props.articleData;
        const message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle: `Share ${title}`}
        );
    }
    render(){
        const {showModal, articleData} = this.props;
        console.log(showModal);
        console.log(articleData.url);
        const {url} = this.props.articleData;
        // const {url} = articleData;
        if(url != undefined){
        return (
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}
            >
                <Container style={{marginBottom:0,backgroundColor:'white'}}>
                    <Header style={{backgroundColor:'tomato'}}>
                        <Left>
                            {/* <Button onPress={this.handleClose} style={{backgroundColor:'none', border:'none', borderRadius: 4}}> */}
                                <Icon name="close" onPress={this.handleClose} style={{color:'white', fontSize: 25, marginLeft:20}}/>
                            {/* </Button> */}
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={{ color:'white', marginLeft:25}}></Title>
                        </Body>
                        <Right>
                            {/* <Button onPress={this.handleShare}> */}
                                <Icon name="share" onPress={this.handleShare} style={{color:'white', fontSize: 25, marginRight:20}}/>
                            {/* </Button> */}
                        </Right>
                    </Header>
                    <Content  contentContainerStyle={{height: webViewHeight}}>
                        <WebView source={{uri:url}} style={{flex: 1}} 
                        onError={this.handleClose} startInLoadingState
                        scalesPageToFit
                        />
                    </Content>
                </Container>
            </Modal>
        );
        } else {
            return null
        }
    }
}

export default ModalComponent;