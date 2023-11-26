import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./utils/Contants/Colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
	const [userinput, setUserinput] = useState(null);
	const [isGameOver, setIsGameOver] = useState(true)

	const pickedNumberHandler = (pickedNumber) => {
		setIsGameOver(false);
		setUserinput(pickedNumber);
	};

	const gameOverHandler=()=>{
		setIsGameOver(true)
	}

	let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

	if (userinput) {
		screen = <GameScreen usernumber={userinput} onGameOver={gameOverHandler}/>;
	}
	if(isGameOver && userinput){
		screen = <GameOverScreen />
	}
	return (
		<LinearGradient colors={[Colors.primaryGradient, Colors.secondarGradient]} style={styles.rootScreen}>
			<ImageBackground
				source={require("./assets/images/background.png")}
				resizeMode='cover'
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
        <SafeAreaView style={styles.rootScreen}>
				{screen}
        </SafeAreaView>
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
