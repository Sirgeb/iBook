import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../assets/colors';

const { width: screenWidth } = Dimensions.get("screen");

export const form = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary
  }, 
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: 20
  },
  headerText: {
    color: colors.white,
    fontSize: 28
  },
  headerSubText: {
    color: colors.secondary
  },
  input: {
    backgroundColor: colors.white,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: colors.secondary,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: screenWidth / 1.5
  },
  btn: {
    width: screenWidth / 1.5,
    paddingVertical: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    backgroundColor: colors.secondary,
    alignItems: 'center',
  },
  footerTextContainer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerText: {
    color: colors.white
  },
  footerTextLink: {
    color: colors.secondary
  },
  validationError: {
    color: colors.red,
    marginTop: -10,
    backgroundColor: colors.clay,
    paddingHorizontal: 10
  }
});
