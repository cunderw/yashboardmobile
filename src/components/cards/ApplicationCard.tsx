import React, {useEffect, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useApplication} from '../../hooks/UseApplication';
import {ApplicationStatus} from '../../models/Application';
import EditApplicationModal from '../modals/EditApplicationModal';
import ApplicationCardStyle from './ApplicationCardStyle';
import {useNavigation} from '@react-navigation/native';
import {useAppSettingsContext} from '../../contexts/AppSettingsContext';

type Nav = {
  navigate: (value: string, rouateParams: any) => void;
};

type Props = {
  id: string;
  isRefreshing: boolean;
};

const ApplicationCard: React.FC<Props> = props => {
  const {yashboardUrl} = useAppSettingsContext();
  const {id, isRefreshing} = props;
  const {application, isError, isLoading, refresh} = useApplication(
    yashboardUrl,
    id,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<Nav>();

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
      <EditApplicationModal
        application={application}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('AppView', {application: application});
        }}
        onLongPress={() => {
          setModalVisible(true);
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
