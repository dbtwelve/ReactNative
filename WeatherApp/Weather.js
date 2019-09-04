import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4da0b0","#d39d38"],
        title: "Haze",
        subtitle: "Just don't go outside",
        location: "",
    },
    Thunder: {
        iconName:"weather-hail",
        gradient: ["#89f7fe","#66a6ff"],
        title: "Thunder",
        subtitle: "",
        location: "",
    },
    Rain: {
        iconName:"weather-rainy",
        gradient: ["#00c6eb","#005bea"],
        title: "Rain",
        subtitle: "Take Umbrella",
        location: "",
    },
    Snow: {
        iconName:"weather-snowy",
        gradient: ["#7de2fc","#b9b6e5"],
        title: "Snow",
        subtitle: "",
        location: "",
    },
    Drizzle: {
        iconName:"weather-hail",
        gradient: ["#89f7fe","#66a6ff"],
        title: "Dizzle",
        subtitle: "",
        location: "",
    },
    Clear: {
        iconName:"weather-sunny",
        gradient: ["#ff7300","#fef253"],
        title: "Clear",
        subtitle: "",
        location: "",
    },
    Clouds: {
        iconName:"weather-cloudy",
        gradient: ["#d7d2cc","#304352"],
        title: "Cloud",
        subtitle: "",
        location: "",
    }
}

export default function Weather({temp, condition}) {
    console.log("Weather: ",temp, condition)
    return ( 
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}>
              <StatusBar barStyle="light-content"></StatusBar>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                size={96} 
                name={weatherOptions[condition].iconName} 
                color="white"></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}</Text>
                <Text style={styles.title}>{weatherOptions[condition].location}</Text>
                
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
         
    );      
};

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunder","Rain","Snow","Drizzle","Clear","Clouds"])
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600"
    },
    textContainer: {
        paddingHorizontal: 20,
        paddingVertical : 0,
        alignItems: "flex-start"
    }
});