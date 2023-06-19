import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import { Global } from '@emotion/react'
import { reset } from './common/style/reset'
import Layout from './unit/common/layout/Layout'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Layout>
      <Router />
    </Layout>
  </React.StrictMode>
)
