import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {ApplicationStatus} from '../../models/Application';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  id: string;
  useApplication: Function;
  isRefreshing: boolean;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainCardView: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
    borderRadius: 4,
    shadowColor: Colors.shadow,
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
  nameText: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  urlNext: {
    color: Colors.gray,
    fontSize: 12,
  },
  statusIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

const ApplicationCard: React.FC<Props> = props => {
  const {id, useApplication, isRefreshing} = props;
  const {application, isError, isLoading, refresh} = useApplication(id);

  useEffect(() => {
    console.debug('Refreshing Application: ' + application.name, application);
    refresh(application, {
      revalidate: true,
    });
  }, [isRefreshing, refresh, application]);

  if (isError) {
    return <View />;
  }

  if (isLoading) {
    return <View />;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log('Pressed');
        console.log(application);
      }}>
      <View style={styles.mainCardView}>
        <View>
          <Text style={styles.nameText}>{application.name}</Text>
          <Text style={styles.urlNext}>{application.url}</Text>
        </View>
        <View style={styles.statusIcon}>
          {application.status === ApplicationStatus.OK ? (
            <Icon testID="statusIcon" name="check" size={30} color="green" />
          ) : (
            <Icon testID="statusIcon" name="times" size={30} color="red" />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ApplicationCard;
