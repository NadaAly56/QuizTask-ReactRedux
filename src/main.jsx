import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/Error.jsx'
import Results from './components/Results.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path:'finish',
    element: <Results />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
