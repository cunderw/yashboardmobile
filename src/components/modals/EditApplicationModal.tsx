import React from 'react';
import {Modal, Alert, View, Text, TouchableOpacity} from 'react-native';
import {Button} from '../buttons/Button';
import {Application} from '../../models/Application';
import ModalStyle from '../../styles/ModalStyle';
import {DeleteApplication} from '../../data/YashBoard';
import {GoToButton} from '../buttons/Button';
import {useAppListUpdatedContext} from '../../contexts/AppListUpdateContext';
import {useAppSettingsContext} from '../../contexts/AppSettingsContext';

type Props = {
  application: Application;
  modalVisible: boolean;
  setModalVisible: Function;
};

const EditApplicationModal: React.FC<Props> = props => {
  const {yashboardUrl} = useAppSettingsContext();
  const {setAppListUpdated} = useAppListUpdatedContext();
  const {application, modalVisible, setModalVisible} = props;

  const handleEditButton = () => {
    setModalVisible(!modalVisible);
  };

  const handleDeleteButton = async () => {
    setModalVisible(!modalVisible);
    try {
      await DeleteApplication(yashboardUrl, application.id);
      setAppListUpdated(true);
      Alert.alert('Application Deleted');
    } catch (e) {
      Alert.alert('There was an error deleting the application.');
      console.error(e);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <TouchableOpacity
        style={ModalStyle.modalContainer}
        activeOpacity={1}
        onPressOut={() => {
          setModalVisible(false);
        }}>
        <View style={ModalStyle.centeredView}>
          <View style={ModalStyle.modalView}>
            <Text style={ModalStyle.modalText}>{application.name}</Text>
            <GoToButton
              testID={'edit-button'}
              screenName={'EditApplication'}
              title={'Edit'}
              onPress={handleEditButton}
              routeParams={{application}}
            />
            <Button
              testID="delete-button"
              title={'Delete'}
              onPress={handleDeleteButton}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default EditApplicationModal;
