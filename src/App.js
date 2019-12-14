import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Poisk from './panels/Poisk';
import MapView from './panels/MapView';
import About from './panels/About';
import Profile from './panels/Profile';
import Master from './panels/Master';


const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	menu (e) {
		if(e.state) {
			this.setState( { activePanel: e.state.panel } );
		} else {
			this.setState( { activePanel: 'home', search: '' } );
			window.history.pushState( { panel: 'home' }, `home` );
		}
	}

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Poisk id='poisk' go={go} />
			<MapView id='mapview' go={go} />
			<About id='about' go={go} />
			<Profile id='profile' fetchedUser={fetchedUser} go={go} />
			<Master id='master' fetchedUser={fetchedUser} go={go} />
		</View>
	);
}

export default App;
