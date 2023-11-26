import React from "react";
import PropTypes from "prop-types";
import { Image, View, StyleSheet, Text } from "react-native";
import Title from "../components/UI/Title";
import { Colors } from "../utils/Contants/Colors";
import PrimaryButton from "../components/UI/PrimaryButton";

const GameOverScreen = ({roundNumber, userNumber, onStartNewGame}) => {
	return (
		<View style={styles.rootContainer}>
			<Title>GameOverScreen</Title>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/success.png")}
				/>
			</View>
			<Text style={styles.summaryText}>
				Your Phone needed
				<Text style={styles.highlightedText}> {roundNumber} </Text>
				round to Guess the number
				<Text style={styles.highlightedText}> {userNumber}</Text>.
			</Text>
      <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
		</View>
	);
};

GameOverScreen.propTypes = {};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		overflow: "hidden",
		borderWidth: 3,
		margin: 36,
		borderColor: Colors.backgroundColor,
	},
	image: {
		height: "100%",
		width: "100%",
	},
	summaryText: {
		fontFamily: "open-sans",
		fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
	},
	highlightedText: {
		fontFamily: "open-sans-bold",
		color: Colors.primaryGradient,
	},
});

export default GameOverScreen;
