import React from 'react'
import {View} from 'react-native'
import {Button, Card, ProgressBar, MD3Colors, Avatar} from 'react-native-paper'
import {ApplicationStatus} from '../models/Application'

type Props = {
  appId: string
  isEditMode: boolean
  useApplication: Function
}

const cardStyle = {
  margin: 10,
}

const statusIconStyle = {
  margin: 10,
}

const ApplicationCard: React.FC<Props> = props => {
  const {application, isError, isLoading} = props.useApplication(props.appId)
  // const [showUpdateApplication, setShowUpdateApplication] = useState(false)

  if (isError) return <ProgressBar progress={0.5} color={MD3Colors.error50} />
  if (isLoading) return <ProgressBar progress={0.5} color={MD3Colors.error50} />

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
      {props.isEditMode ?? (
        <Card.Actions>
          <Button>Edit</Button>
        </Card.Actions>
      )}
    </Card>
  )
  return <View>{card()}</View>
}

export default ApplicationCard
