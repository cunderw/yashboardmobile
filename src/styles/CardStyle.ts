import {StyleSheet} from 'react-native';

const CardStyle = StyleSheet.create({
  mainCardView: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 8,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  mainText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  subText: {
    color: 'gray',
    fontSize: 12,
  },
  rightIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default CardStyle;
