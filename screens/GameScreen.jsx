import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	Alert,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import Title from "../components/UI/Title";
import { generateRandomBetween } from "../utils/utils";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogitems from "../components/Game/GuessLogitems";

const GameScreen = ({ usernumber, onGameOver }) => {
	let min = 1,
		max = 100;
	const initialGuess = generateRandomBetween(min, max, usernumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRound, setGuessRound] = useState([initialGuess]);

	useEffect(() => {
		if (usernumber == currentGuess) {
			onGameOver(guessRound.length);
		}
		if(guessRound.length > 5){
			onGameOver(guessRound.length, true);
		}
		return () => {
			(min = 1), (max = 100);
		};
	}, [usernumber, currentGuess, onGameOver]);

	useEffect(() => {
		(min = 1), (max = 100);
	}, []);

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
		setGuessRound((prevGuessRpund) => [newGuess, ...prevGuessRpund]);
	};
	const { height, width } = useWindowDimensions();

	let content = (
		<>
			<NumberContainer>{currentGuess}</NumberContainer>

			<Card>
				<InstructionText
					style={[
						styles.instructionText,
						{ marginBottom: width < 450 ? 24 : 12 },
					]}
				>
					Higher or Lower?
				</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<View>

						<PrimaryButton onPress={guessRandomNumber.bind(this, "decrease")}>
							<Ionicons name={"md-remove"} size={24} color={"white"} />
						</PrimaryButton>
						</View>
					</View>
					<View style={styles.buttonContainer}>
						<View>

						<PrimaryButton onPress={guessRandomNumber.bind(this, "increate")}>
							<Ionicons name={"md-add"} size={24} color={"white"} />
						</PrimaryButton>
						</View>
					</View>
				</View>
			</Card>
		</>
	);

	if (width > 500) {
		content = (
			<>
				
				<View style={styles.buttonContainerWide}>
					<View >
						<PrimaryButton onPress={guessRandomNumber.bind(this, "decrease")}>
							<Ionicons name={"md-remove"} size={24} color={"white"} />
						</PrimaryButton>
					</View>
					<NumberContainer>{currentGuess}</NumberContainer>
					<View >
						<PrimaryButton onPress={guessRandomNumber.bind(this, "increate")}>
							<Ionicons name={"md-add"} size={24} color={"white"} />
						</PrimaryButton>
					</View>
				</View>
				
			</>
		);
	}
	return (
		// <ScrollView disableScrollViewPanResponder={true} style={styles.scrollView}>
		<View
			style={[
				styles.screen,
				{ marginTop: width < 450 ? 36 : 18 },
				{ padding: width < 450 ? 12 : 6 },
			]}
		>
			<Title>Opponent's Guess</Title>
			{content}
			<View style={styles.listContainer}>
				{/* {guessRound.map((guess, index) => {
					return <Text key={index}>{guess}</Text>;
				})} */}
				<FlatList
					nestedScrollEnabled
					data={guessRound}
					renderItem={(itemData) => (
						<GuessLogitems
							roundNumber={guessRound.length - itemData.index}
							guess={itemData.item}
						/>
					)}
					keyExtractor={(item) => item}
				/>
			</View>
		</View>
		// </ScrollView>
	);
};

GameScreen.propTypes = {};

const styles = StyleSheet.create({
	screen: {
		flex: 3,
		// padding: 24,
		alignItems: "center",
		// marginTop: 36,
		overflow: "scroll",
	},
	buttonsContainer: {
		flexDirection: "row",
		alignItems:'center'
	},
	buttonContainer: {
		flex: 1,
	},
	instructionText: {
		// marginBottom: 24,
	},
	listContainer: {
		flex: 1,
		padding: 16,
	},
	scrollView: {
		flex: 0.5,
		marginHorizontal: 20,
	},
	buttonContainerWide: {
		flexDirection: "row",
alignItems:'center',
justifyContent:'center'
	},
});

export default GameScreen;
