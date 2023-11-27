import { StyleSheet, ImageBackground, SafeAreaView, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./utils/Contants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export default function App() {
	const [userinput, setUserinput] = useState(null);
	const [isGameOver, setIsGameOver] = useState(true);
	const [guessRounds, setGuessRounds] = useState(0);
	const [failed, setFailed] = useState(false);

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

	const gameOverHandler = (numberOfRounds, failed=false) => {
		setIsGameOver(true);
		setGuessRounds(numberOfRounds);
		setFailed(failed);
	};

	const startNewGameHandler = () => {
		setUserinput(null);
		setGuessRounds(0);
		setFailed(false);
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
				isFailed={failed}
			/>
		);
	}
	return (
		<>
		<StatusBar networkActivityIndicatorVisible={true} style='light'/>
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
		</>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
		overflow:'scroll'
	},
	backgroundImage: {
		opacity: 0.15,
	},
	scrollView: {
	flex:1,
		marginHorizontal: 20,
	  },
});
