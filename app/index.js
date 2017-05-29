import { Navigation } from 'react-native-navigation';

import Favorites from './views/Favorites.js';
import Main from './views/Main.js';
import Login from './views/Login.js';

export default() => {
	Navigation.registerComponent('Favorites', () => Favorites);
	Navigation.registerComponent('Main', () => Main);
	Navigation.registerComponent('Login', () => Login);

	Navigation.startTabBasedApp({
		tabs: [
			{
				screen: 'Login',
				icon: require('./images/login.png'),
				title: 'Login'
			},
			{
				screen: 'Main',
				icon: require('./images/home.png'),
				title: 'Main'
			},
			{
				screen: 'Favorites',
				icon: require('./images/heart.png'),
				title: 'Favorites'	
			}
		]
	});
}