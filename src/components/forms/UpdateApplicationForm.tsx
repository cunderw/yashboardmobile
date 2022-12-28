import React from 'react'
import {View} from 'react-native'
// import { useApplication } from '../../hooks/UseApplication'

type Props = {
  appId: string
}

const UpdateApplication: React.FC<Props> = _props => {
  // const { application, isError, isLoading } = useApplication(props.appId)
  // const [name, setName] = useState(application?.name)
  // const [url, setUrl] = useState(application?.url)
  // const [livenessUrl, setLiveNessUrl] = useState(application?.livenessUrl)
  // const [apiKey, setApiKey] = useState(application?.apiKey)
  // const [keyParam, setKeyParam] = useState(application?.keyParam)
  // const [error, setError] = useState('')
  // const [message, setMessage] = useState('')
  // const updateApplication = (id: string) => {
  //   if (!name) {
  //     setError('Name is required')
  //     return
  //   }
  //   if (!url) {
  //     setError('URL is required')
  //     return
  //   }
  //   const data = {
  //     id,
  //     name,
  //     url,
  //     livenessUrl,
  //     apiKey,
  //     keyParam,
  //   }
  //   fetch('/api/applications/', {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(response => response.json())
  //     .then(() => {
  //       setMessage('App updated successfully')
  //     })
  // }
  // const deleteApplication = async (id: string) => {
  //   const data = {
  //     id,
  //   }
  //   fetch('/api/applications/', {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(response => response.json())
  //     .then(() => {
  //       setMessage('App updated successfully')
  //     })
  // }
  // if (isError || application === undefined) return <div>failed to load</div>
  // if (isLoading) return <div>loading...</div>
  // return (
  //   <Container maxWidth="sm">
  //     {' '}
  //     {error && <Alert severity="error">{error}</Alert>}
  //     {message && <Alert severity="success">{message}</Alert>}
  //     <Box
  //       component="form"
  //       sx={{
  //         '& > :not(style)': { m: 1, width: '25ch' },
  //       }}
  //       noValidate
  //       autoComplete="off"
  //     >
  //       <TextField
  //         variant="outlined"
  //         id="name-input"
  //         label="Name"
  //         value={name}
  //         onChange={e => setName(e.target.value)}
  //       />
  //       <TextField
  //         variant="outlined"
  //         id="url-input"
  //         label="URL"
  //         value={url}
  //         onChange={e => setUrl(e.target.value)}
  //       />
  //       <TextField
  //         variant="outlined"
  //         id="liveness-url-input"
  //         label="Liveness URL"
  //         value={livenessUrl ?? ''}
  //         onChange={e => setLiveNessUrl(e.target.value)}
  //       />
  //       <TextField
  //         variant="outlined"
  //         id="api-key-input"
  //         label="API Key"
  //         value={apiKey ?? ''}
  //         onChange={e => setApiKey(e.target.value)}
  //       />
  //       <TextField
  //         variant="outlined"
  //         id="key-param-input"
  //         label="API Key Param"
  //         value={keyParam ?? ''}
  //         onChange={e => setKeyParam(e.target.value)}
  //       />
  //       <Button
  //         variant="contained"
  //         onClick={() => updateApplication(application.id)}
  //       >
  //         Update
  //       </Button>
  //       <Button
  //         variant="contained"
  //         onClick={() => deleteApplication(application.id)}
  //       >
  //         Delete
  //       </Button>
  //     </Box>
  //   </Container>
  // )

  return <View />
}

export default UpdateApplication
