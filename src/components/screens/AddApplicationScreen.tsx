import React from 'react'
import {View} from 'react-native'

const AddApplicationScreen: React.FC = () => {
  // const [name, setName] = useState('')
  // const [url, setUrl] = useState('')
  // const [livenessUrl, setLiveNessUrl] = useState('')
  // const [apiKey, setApiKey] = useState('')
  // const [keyParam, setKeyParam] = useState('')
  // const [error, setError] = useState('')
  // const [message, setMessage] = useState('')

  // const addApplication = () => {
  //   if (!name) {
  //     setError('Name is required')
  //     return
  //   }
  //   if (!url) {
  //     setError('URL is required')
  //     return
  //   }
  //   const data = {
  //     name,
  //     url,
  //     livenessUrl,
  //     apiKey,
  //     keyParam,
  //   }
  //   fetch('/api/applications', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(response => response.json())
  //     .then(() => {
  //       setName('')
  //       setUrl('')
  //       setLiveNessUrl('')
  //       setApiKey('')
  //       setKeyParam('')
  //       setMessage('App added successfully')
  //     })
  // }

  //return (
  //  <Container maxWidth="sm">
  //    {' '}
  //    {error && <Alert severity="error">{error}</Alert>}
  //    {message && <Alert severity="success">{message}</Alert>}
  //    <Box
  //      component="form"
  //      sx={{
  //        '& > :not(style)': { m: 1, width: '25ch' },
  //      }}
  //      noValidate
  //      autoComplete="off"
  //    >
  //      <TextField
  //        variant="outlined"
  //        id="name-input"
  //        label="Name"
  //        value={name}
  //        onChange={e => setName(e.target.value)}
  //      />
  //      <TextField
  //        variant="outlined"
  //        id="url-input"
  //        label="URL"
  //        value={url}
  //        onChange={e => setUrl(e.target.value)}
  //      />
  //      <TextField
  //        variant="outlined"
  //        id="liveness-url-input"
  //        label="Liveness URL"
  //        value={livenessUrl}
  //        onChange={e => setLiveNessUrl(e.target.value)}
  //      />
  //      <TextField
  //        variant="outlined"
  //        id="api-key-input"
  //        label="API Key"
  //        value={apiKey}
  //        onChange={e => setApiKey(e.target.value)}
  //      />
  //      <TextField
  //        variant="outlined"
  //        id="key-param-input"
  //        label="Key Param"
  //        value={keyParam}
  //        onChange={e => setKeyParam(e.target.value)}
  //      />
  //      <Button variant="contained" onClick={() => addApplication()}>
  //        Submit
  //      </Button>
  //    </Box>
  //  </Container>
  //)

  return <View />
}

export default AddApplicationScreen
