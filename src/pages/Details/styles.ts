import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  animatedView: { flex: 1 },
  header: {
    elevation: 6,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  description: {
    flex: 1,
    marginRight: 10,
    fontSize: 16,
    flexGrow: 1,
    flexWrap: 'wrap',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    elevation: 5,
  },
  avatar: {
    elevation: 7,
    marginRight: -60,
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 20,
  },
  container: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 20,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventsContainer: {
    marginTop: 30,
  },
  events: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 1,
  },
});
