import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextInput, View, StyleSheet, Alert, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import { validateNumber } from "../utils/utils";
import { Colors } from "../utils/Contants/Colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";

const StartGameScreen = (props) => {
	const [inputNumber, setInputNumber] = useState(null);
	const handleInputNumberChange = (number) => {
		setInputNumber(number);
	};
	const handleContineue = () => {
		if (!validateNumber(inputNumber)) {
			Alert.alert("Invalid Number", "Enter Valid number", [
				{ text: "Okay", style: "destructive", onPress: handleReset },
			]);
			return;
		}
		props.onPickedNumber(inputNumber);
	};
	const handleReset = () => {
		setInputNumber("");
	};
	return (
		<ScrollView style={styles.screen}>
		<KeyboardAvoidingView style={styles.screen}>

		
		<View style={styles.rootContainer}>
			<Title>Guess my Number</Title>

			<Card>
				<InstructionText>Please Enter a Number</InstructionText>
				<TextInput
					onSubmitEditing={handleContineue}
					onChangeText={handleInputNumberChange}
					maxLength={2}
					keyboardType='number-pad'
					value={inputNumber}
					style={styles.numberInput}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={handleContineue}>Continue</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={handleReset}>Cancel</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
		</KeyboardAvoidingView>
		</ScrollView>
	);
};

StartGameScreen.propTypes = {};

const styles = StyleSheet.create({
	screen:{
		flex: 1
	},
	rootContainer: {
		marginTop: 100,
		flex: 1,
		alignItems: "center",
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.secondarGradient,
		borderBottomWidth: 2,
		color: Colors.secondarGradient,
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
});

export default StartGameScreen;
