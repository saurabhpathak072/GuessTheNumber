import React from "react";
import PropTypes from "prop-types";
import { Image, View, StyleSheet, Text, useWindowDimensions, ScrollView } from "react-native";
import Title from "../components/UI/Title";
import { Colors } from "../utils/Contants/Colors";
import PrimaryButton from "../components/UI/PrimaryButton";

const GameOverScreen = ({roundNumber, userNumber, onStartNewGame, isFailed}) => {
	const {height,width} = useWindowDimensions();
	let imageSize = 300;
	if(width < 380){
		imageSize = 150;
	}
	if(height < 400){
		imageSize =100;
	}
	const imageStyle={
		height:imageSize,
		width:imageSize,
		borderRadius: imageSize/2
	}
	return (
		<ScrollView style={styles.screen}>
		<View style={styles.rootContainer}>
			<Title>GameOverScreen</Title>
			<View style={[styles.imageContainer,imageStyle]}>
				<Image
					style={styles.image}
					source={require("../assets/images/success.png")}
				/>
			</View>
			{isFailed ?<Text style={styles.summaryText}>
				Your Phone Failed to Guess
				<Text style={styles.highlightedText}> {userNumber} </Text>
				number in 
				<Text style={styles.highlightedText}> {roundNumber} </Text> rounds.
			</Text> :<Text style={styles.summaryText}>
				Your Phone needed
				<Text style={styles.highlightedText}> {roundNumber} </Text>
				round to Guess the number
				<Text style={styles.highlightedText}> {userNumber}</Text>.
			</Text>}
			
      <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
		</View>
		</ScrollView>
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
		// width: 300,
		// height: 300,
		// borderRadius: 150,
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
	screen:{
		flex:1
	}
});

export default GameOverScreen;
