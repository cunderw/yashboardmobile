import React from 'react'
import {Appbar} from 'react-native-paper'
// import AppDrawer from './AppDrawer'

type Props = {
  openAddAppModal: Function
  isEditMode: boolean
  enableEditMode: Function
  disableEditMode: Function
}

const Header: React.FC<Props> = _props => {
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={() => {}} />
      <Appbar.Content title="Title" />
    </Appbar.Header>
  )
}

export default Header
