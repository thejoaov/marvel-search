import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  list: {
    width: '100%',
    // height: '100%',
  },
  header: {
    marginVertical: 12,
    marginHorizontal: 20,
    justifyContent: 'center',
    maxWidth: 400,
  },
  search: {
    fontSize: 16,
  },
  column: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnText: { fontSize: 16 },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
  },
  pageButtonText: {
    fontSize: 16,
  },
});
