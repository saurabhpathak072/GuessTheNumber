import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./utils/Contants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
	const [userinput, setUserinput] = useState(null);
	const [isGameOver, setIsGameOver] = useState(true);
	const [guessRounds, setGuessRounds] = useState(0);

	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	const pickedNumberHandler = (pickedNumber) => {
		setIsGameOver(false);
		setUserinput(pickedNumber);
	};

	const gameOverHandler = (numberOfRounds) => {
		setIsGameOver(true);
		setGuessRounds(numberOfRounds)
	};

	const startNewGameHandler = () => {
		setUserinput(null);
		setGuessRounds(0);
	};

	let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

	if (userinput) {
		screen = <GameScreen usernumber={userinput} onGameOver={gameOverHandler} />;
	}
	if (isGameOver && userinput) {
		screen = (
			<GameOverScreen
				userNumber={userinput}
				roundNumber={guessRounds}
				onStartNewGame={startNewGameHandler}
			/>
		);
	}
	return (
		<LinearGradient
			colors={[Colors.primaryGradient, Colors.secondarGradient]}
			style={styles.rootScreen}
		>
			<ImageBackground
				source={require("./assets/images/background.png")}
				resizeMode='cover'
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
