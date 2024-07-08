import React from 'react'
import ReactDOM from 'react-dom/client'
import{RouterProvider} from 'react-router-dom'
import Linkingpage from './Linkingpage'
import {Provider} from 'react-redux'
import appStore from '../utilities/appStore'


ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
      <Provider store={appStore}>
    <RouterProvider router={Linkingpage}/>
    </Provider>
 // </React.StrictMode>
)
