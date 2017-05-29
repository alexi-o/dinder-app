import { Navigation } from 'react-native-navigation';

import Login from './views/Login.js';
import Main from './views/Main.js';

export default() => {
	Navigation.registerComponent('Login', () => Login);
	Navigation.registerComponent('Main', () => Main);

	Navigation.startTabBasedApp({
		tabs: [
			{
				label: 'Login',
				screen: 'Login',
				icon: require('./images/login.png'),
				iconSelected: require('./images/login.png'),
				title: 'Login'
			},
			{
				label: 'Main',
				screen: 'Main',
				icon: require('./images/home.png'),
				iconSelected: require('./images/home_selected.png'),
				title: 'Main'	
			}
		]
	});
}