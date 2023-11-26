import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../utils/Contants/Colors'

const Title = props => {
  return (
    <Text style={styles.title}>Opponent's Guess</Text>
  )
}

Title.propTypes = {
    children: PropTypes.node
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.whiteText,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.whiteText,
        padding: 12
      }
})

export default Title