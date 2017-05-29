import React, { Component } from 'react';
import { Navigator } from 'react-native'
import Main from '../views/Main'
import Login from '../views/Login'

class AppNavigator extends Component {

  renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "Login":
        return (
          <Login
            {...globalNavigatorProps} />
        )

      case "Main":
        return (
          <Main
            {...globalNavigatorProps}
            data = {route.data} />
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        renderScene={this.renderScene}
        configureScene={(route) => Navigator.SceneConfigs.FloatFromRight } />
    )
  }

}

module.exports = AppNavigator