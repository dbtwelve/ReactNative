import React from 'react';
import {Alert} from "react-native"
import Loading from "./Loading"
import Weather from "./Weather"
import * as Location from "expo-location"
import axios from "axios"


export default class extends React.Component {
  state ={
    isLoading: true,
    //parseTemp: 0
  }
  parseString = require('react-native-xml2js').parseString;

  

  getWeather = async(latitude,longitude) => {
    const { data } = await axios.get(`http://www.kma.go.kr/wid/queryDFS.jsp?gridx=${latitude}&gridy=${longitude}`);
    let parseTemp = 0;
    let parseCondition = "";
    this.parseString(data, function (err, result){
      //console.log(result); 
      //console.log(result.wid.body[0].data[0].wfEn[0]); 
      parseTemp = Math.round(result.wid.body[0].data[0].temp[0]);
      parseCondition = result.wid.body[0].data[0].wfEn[0];
      //this.setState({isLoading: false, temp: Math.round(result.wid.body[0].data[0].temp[0]), condition: "Haze"});
    })
    this.setState({isLoading: false, temp: parseTemp, condition: parseCondition});
    
  }

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude,longitude} } = await Location.getCurrentPositionAsync();
      //console.log(await Location.getCurrentPositionAsync());
      this.getWeather(latitude,longitude);
      //this.setState({isLoading: false});
    } catch (error) {
      Alert.alert("GPS Can't find you", "So sad");
    }
    
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp, condition} = this.state;
    console.log("State :", this.state);
    return isLoading ? <Loading></Loading> : <Weather temp={Math.round(temp)} condition={condition}></Weather>;
  }
  
}

