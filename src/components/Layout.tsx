import React, {ReactNode} from 'react'
import Header from './Header'
import {ScrollView, View} from 'react-native'

type Props = {
  children: ReactNode
  openAddAppModal: Function
  isEditMode: boolean
  enableEditMode: Function
  disableEditMode: Function
}

const Layout: React.FC<Props> = props => {
  return (
    <ScrollView>
      <Header
        openAddAppModal={props.openAddAppModal}
        isEditMode={props.isEditMode}
        enableEditMode={props.enableEditMode}
        disableEditMode={props.disableEditMode}
      />
      <View>{props.children}</View>
    </ScrollView>
  )
}

export default Layout
