import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import '../style/style.css'

const osName = platform();

const MapView = props => (
	<Panel id={props.id}>
	<PanelHeader
		left={<HeaderButton onClick={props.go} data-to="home">
			{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
		</HeaderButton>}
		>
			Карта
		</PanelHeader>
		<YMaps>
			<Map className="mapview" width="100vw" height="100vh" defaultState={{ center: props.state.pos, zoom: 9 }} >
				<Placemark geometry={props.state.pos} />
			</Map>
    </YMaps>
	</Panel>
);

MapView.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default MapView;
