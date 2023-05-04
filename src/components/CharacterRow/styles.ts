import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
  },
  container: {
    // height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  imageContainer: {
    backgroundColor: '#0553',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 75,
    height: 75,
    borderRadius: 75,
    backgroundColor: '#0553',
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
  },
});
