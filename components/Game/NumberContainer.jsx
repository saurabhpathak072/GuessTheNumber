import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/Contants/Colors";

const NumberContainer = ({children}) => {
	return (
		<View style={styles.constainer}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
};

NumberContainer.propTypes = {};

const styles = StyleSheet.create({
    constainer:{
        borderWidth: 4,
        borderColor:Colors.secondarGradient,
        padding: 24,
        margin:24,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
        color:Colors.secondarGradient,
        fontSize: 36,
        fontWeight:'bold'
    }
})

export default NumberContainer;
