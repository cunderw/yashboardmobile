import React from 'react';
import {Modal, Alert, View, Text, Button, TouchableOpacity} from 'react-native';
import {Application} from '../../models/Application';
import ModalStyle from '../../styles/ModalStyle';
import {DeleteApplication} from '../../data/Applications';
import {GoToButton} from '../buttons/GoToButton';

type Props = {
  application: Application;
  modalVisible: boolean;
  setModalVisible: Function;
  setHasAppListUpdated: Function;
};

const EditApplicationModal: React.FC<Props> = props => {
  const {application, modalVisible, setModalVisible, setHasAppListUpdated} =
    props;

  const handleEditButton = () => {
    setModalVisible(!modalVisible);
  };

  const handleDeleteButton = async () => {
    setModalVisible(!modalVisible);
    try {
      await DeleteApplication(application.id);
      setHasAppListUpdated(true);
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
              screenName={'EditApplication'}
              title={'Edit'}
              onPress={handleEditButton}
            />
            <Button title={'Delete'} onPress={handleDeleteButton} />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default EditApplicationModal;
