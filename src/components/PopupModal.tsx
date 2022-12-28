import React, {ReactNode} from 'react'
import {View} from 'react-native'
type Props = {
  children: ReactNode
  open: boolean
  handleClose: Function
  title: string
}

const PopupModal: React.FC<Props> = _props => {
  //const { open, handleClose, children, title } = props
  //const close = () => handleClose()
  //return (
  //  <Modal open={open} onClose={close}>
  //    <Box sx={style}>
  //      <Typography variant="h3" component="div">
  //        {title}
  //      </Typography>
  //      {children}
  //    </Box>
  //  </Modal>
  //)
  return <View />
}

export default PopupModal
