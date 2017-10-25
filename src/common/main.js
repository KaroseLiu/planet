import React from 'react'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import {
  ApolloProvider,
} from 'react-apollo'

import theme from '../themes/theme'

const history = createBrowserHistory()

export default class Main extends React.Component {
  static propTypes = {
    routes: PropTypes.any.isRequired,
  }
  shouldComponentUpdate() {
    return false
  }
  render() {
    return (
      <ApolloProvider>
        <ThemeProvider theme={theme}>
          <div style={{ height: '100%' }}>
            <Router history={history} children={this.props.routes} />
          </div>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}
