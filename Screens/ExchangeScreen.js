import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'


export default class ExchangeScreen extends React.Component{
    constructor() {
        super()
        this.state = {
            userId: firebase.auth().currentUser.email,
            productName: "",
            aboutTheProduct: "",
            reasonToRequest: "",
            insteadof: ""
        }
    }
    createUniqueId() {
        return Math.random().toString(36).substring(7);
    }
    RequestforExchange = (productName, reasonToRequest) => {
        var userId = this.state.userId;
        var randomRequestId = this.createUniqueId;
        db.collection("requested_products").add({
            "user1_id": userId,
            "reason_to_request": reasonToRequest,
            "request_id": randomRequestId, 
            "instead_of": insteadof
        });
        this.setState({
            productName: "",
            reasonToRequest: ""
        });
        return Alert.alert("Request Submitted Successfully!")
    }
    render() {
        return (
            <View style = {{flex:1}}>
                <MyHeader title="Submit your Request" navigation={this.props.navigation} />
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                    <TextInput
                        style={styles.formTextInput}
                        placeholder="Enter your Product Name eg,clothes, rice, wheat"
                        onChangeText={(text) => {
                            this.setState({productName: text})
                        }}
                        value={this.state.productName}
                    />
                    <TextInput
                        style={[styles.formTextInput, { height: 300 }]}
                        multiline={true}
                        numberOfLines={5}
                        placeholder={"What do you want instead of" + this.state.productName + "eg,clothes, rice, wheat"}
                        onChangeText={(text) => { this.setState({ insteadof: text }) }}
                        value={this.state.insteadof}
                    />
                    <TouchableOpacity
                        style={styles.formTextInput}
                        onPress={()=>{this.RequestforExchange(this.state.productName, this.reasonToRequest)}}
                    >
                        <Text>Request</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )
  