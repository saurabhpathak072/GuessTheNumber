import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Colors } from "../../utils/Contants/Colors";

const NumberContainer = ({children}) => {
    const {height, width} = useWindowDimensions();
	return (
		<View style={[styles.constainer,{margin:width< 450?12:6, padding:width< 450?12:6}]}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
};

NumberContainer.propTypes = {};

const styles = StyleSheet.create({
    constainer:{
        borderWidth: 4,
        borderColor:Colors.secondarGradient,
        // padding: 24,
        // margin:24,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        
    },
    numberText:{
        color:Colors.secondarGradient,
        fontSize: 36,
        // fontWeight:'bold',
        fontFamily:'open-sans-bold',
    }
})

export default NumberContainer;
