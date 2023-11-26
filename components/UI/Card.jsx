import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/Contants/Colors'

const Card = ({children}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 24,
		padding: 16,
		marginTop: 36,
		backgroundColor: Colors.backgroundColor,
		borderRadius: 10,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 1,
	},
})