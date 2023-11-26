import React from "react";
import PropTypes from "prop-types";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/Contants/Colors";


const PrimaryButton = ({ children, onPress }) => {
	const pressHandler = () => {
		onPress();
	};
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnerContainer, styles.pressed]
						: styles.buttonInnerContainer
				}
   
				onPress={pressHandler}
				android_ripple={{ color: Colors.Buttons.primaryButtonRippleColor }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};

PrimaryButton.propTypes = {
	children: PropTypes.node,
};

const styles = StyleSheet.create({
	buttonOuterContainer: {
		overflow: "hidden",
		borderRadius: 30,
		margin: 4,
	},
	buttonInnerContainer: {
		backgroundColor: Colors.Buttons.primaryButtonBackgroundColor,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 8,
	},
	buttonText: {
		color: Colors.Buttons.primarybuttonText,
		textAlign: "center",
	},
	pressed: {
		opacity: 0.75,
	},
});

export default PrimaryButton;
