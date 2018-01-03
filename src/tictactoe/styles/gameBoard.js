import { StyleSheet } from 'react-native'
import them from '../../../static/colors/colors';
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  board: {
    width: 312,
    height: 312,
    borderWidth: 3,
    borderColor: them.text
  },
  line: {
    position: 'absolute',
    width: 3,
    height: 306,
    backgroundColor: them.text,
    transform: [
      {translateX: 100}
    ]
  }
})
