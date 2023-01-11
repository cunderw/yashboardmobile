import React from 'react'
import {View} from 'react-native'
import {Card, Avatar} from 'react-native-paper'
import {Application, ApplicationStatus} from '../../models/Application'

type Props = {
  application: Application
}

const cardStyle = {
  margin: 10,
}

const statusIconStyle = {
  margin: 10,
}

const ApplicationCard: React.FC<Props> = props => {
  const {application} = props
  const rightContent = () => (
    <Avatar.Icon
      testID="statusIcon"
      size={32}
      style={statusIconStyle}
      icon={
        application.status === ApplicationStatus.OK
          ? 'checkbox-marked-circle'
          : 'alert-circle'
      }
    />
  )

  const card = () => (
    <Card mode="elevated" style={cardStyle}>
      <Card.Title
        title={application.name}
        subtitle={application.url}
        right={rightContent}
      />
    </Card>
  )
  return <View>{card()}</View>
}

export default ApplicationCard
