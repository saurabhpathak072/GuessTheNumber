import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/UI/Title";
import { generateRandomBetween } from "../utils/utils";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import {Ionicons} from "@expo/vector-icons"

const GameScreen = ({ usernumber, onGameOver }) => {
	let min = 1,
		max = 100;
	const initialGuess = generateRandomBetween(min, max, usernumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (usernumber === currentGuess) {
			onGameOver();
		}
	}, [usernumber, currentGuess, onGameOver]);

	const guessRandomNumber = (direction) => {
		if (
			(direction === "decrease" && currentGuess < usernumber) ||
			(direction === "increate" && currentGuess > usernumber)
		) {
			Alert.alert("Invalid Number", "Please don't lie", [
				{ text: "Okay", style: "cancel" },
			]);
			return;
		}

		if (direction === "decrease" && currentGuess > usernumber) {
			max = currentGuess;
		} else if (direction === "increase" && currentGuess < usernumber) {
			min = currentGuess + 1;
		}

		const newGuess = generateRandomBetween(min, max, currentGuess);
		setCurrentGuess(newGuess);
	};
	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>

			<Card>
				<InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={guessRandomNumber.bind(this, "decrease")}>
							<Ionicons name={'md-remove'} size={24} color={'white'}/>
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={guessRandomNumber.bind(this, "increate")}>
						<Ionicons name={'md-add'} size={24} color={'white'}/>
						</PrimaryButton>
					</View>
				</View>
			</Card>
			<View>
				<Text>LOG ROUNDS</Text>
			</View>
		</View>
	);
};

GameScreen.propTypes = {};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,

		marginTop: 36,
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
	instructionText:{
		marginBottom: 24
	}
});

export default GameScreen;
