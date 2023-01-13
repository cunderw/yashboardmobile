import React, {useEffect} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {ApplicationStatus} from '../../models/Application';
import Icon from 'react-native-vector-icons/FontAwesome';
import ApplicationCardStyle from './ApplicationCardStyle';
import {useApplication} from '../../hooks/UseApplication';

type Props = {
  id: string;
  isRefreshing: boolean;
};

const ApplicationCard: React.FC<Props> = props => {
  const {id, isRefreshing} = props;
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
    <View testID="application-card">
      <TouchableWithoutFeedback
        onPress={() => {
          console.log('Pressed');
          console.log(application);
        }}>
        <View style={ApplicationCardStyle.mainCardView}>
          <View>
            <Text style={ApplicationCardStyle.mainText}>
              {application.name}
            </Text>
            <Text style={ApplicationCardStyle.subText}>{application.url}</Text>
          </View>
          <View style={ApplicationCardStyle.rightIcon}>
            {application.status === ApplicationStatus.OK ? (
              <Icon testID="status-icon" name="check" size={30} color="green" />
            ) : (
              <Icon testID="status-icon" name="times" size={30} color="red" />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ApplicationCard;
