import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/Contants/Colors'

const InstructionText = ({children, style}) => {
  return (

      <Text style={[styles.instructionText, style]}>{children}</Text>
   
  )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText: {
		fontSize: 24,
		color: Colors.secondarGradient,
	},
})