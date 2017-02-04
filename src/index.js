import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './redux/configureStore'
import { Provider } from 'react-redux'
import Route from './routes'
import './index.less'


const store = configureStore()

ReactDOM.render(
  (
    <Provider store={store}>
      {Route}
    </Provider>
  ),
  document.getElementById('root')
)