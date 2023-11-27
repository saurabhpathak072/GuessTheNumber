import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../utils/Contants/Colors'

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

Title.propTypes = {
    children: PropTypes.node
}

const styles = StyleSheet.create({
    title:{
      fontFamily:'open-sans-bold',
        fontSize: 24,
        // fontWeight: 'bold',
        color: Colors.whiteText,
        textAlign: 'center',
        borderWidth: 0,
        borderColor: Colors.whiteText,
        padding: 12,
        maxWidth: '80%',
        width: 300,
      }
})

export default Title