import React, {useState} from 'react'
import {SafeAreaView} from 'react-native'
import Layout from './components/Layout'
import Applications from './components/Applications'

const App = () => {
  const [addAppModalOpen, setAppModalOpen] = useState(false)
  const [isEditMode, setEditMode] = useState(false)
  const openAddAppModal = () => setAppModalOpen(true)
  // const closeAddAppModal = () => setAppModalOpen(false)
  const enableEditMode = () => setEditMode(true)
  const disableEditMode = () => setEditMode(false)
  console.log(addAppModalOpen)
  return (
    <SafeAreaView>
      <Layout
        openAddAppModal={openAddAppModal}
        enableEditMode={enableEditMode}
        disableEditMode={disableEditMode}
        isEditMode={isEditMode}>
        <Applications isEditMode={isEditMode} />
      </Layout>
    </SafeAreaView>
  )
}

export default App
