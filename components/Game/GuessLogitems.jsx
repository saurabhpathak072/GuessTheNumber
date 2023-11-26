import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/Contants/Colors'

const GuessLogitems = ({roundNumber, guess}) => {
  return (
    <View style={styles.listItem}>
        <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

export default GuessLogitems

const styles = StyleSheet.create({
    listItem:{
        borderColor: Colors.primaryGradient,
        borderWidth: 1,
        borderRadius: 40,
        padding:12,
        marginVertical: 8,
        backgroundColor: Colors.secondarGradient,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:0, height:0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText:{
        fontFamily:"open-sans"
    }
});