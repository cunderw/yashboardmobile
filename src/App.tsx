import React, {useState} from 'react'
import {SafeAreaView} from 'react-native'
import Layout from './components/Layout'
import Applications from './components/Applications'
import {SafeAreaProvider} from 'react-native-safe-area-context'
// import {pass} from './pass'

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [addAppModalOpen, setAppModalOpen] = useState(false)
  const [isEditMode, setEditMode] = useState(false)
  const openAddAppModal = () => setAppModalOpen(true)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const closeAddAppModal = () => setAppModalOpen(false)
  const enableEditMode = () => setEditMode(true)
  const disableEditMode = () => setEditMode(false)

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Layout
          openAddAppModal={openAddAppModal}
          enableEditMode={enableEditMode}
          disableEditMode={disableEditMode}
          isEditMode={isEditMode}>
          <Applications isEditMode={isEditMode} />
        </Layout>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App
