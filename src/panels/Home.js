import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24List from '@vkontakte/icons/dist/24/list';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon24Info from '@vkontakte/icons/dist/24/info';
import image3 from '../img/278.png';

const Home = ({ id, go,}) => (
	<Panel id={id}>
		<PanelHeader>Главная</PanelHeader>

		<Group>
		<img className="Image" style={ { borderRadius: 20, marginRight: 8 } } src={ image3 } alt="Beauty-Baza"/>
		BEAUTY-БАЗА
		</Group>

		<Group title="Меню">
		<Div>
		 <Button before={<Icon24List/>} size="xl" level="2" onClick={go} data-to="poisk">
		Найти мастера в каталоге
		 </Button>
		</Div>
		<Div>
		 <Button before={<Icon24Place/>} size="xl" level="2" onClick={go} data-to="mapview">
		Найти мастера на карте
		 </Button>
		</Div>
		<Div>
		 <Button before={<Icon24Newsfeed/>} size="xl" level="2" onClick={go} data-to="profile">
		Я Мастер
		 </Button>
		</Div>
		<Div>
		 <Button before={<Icon24Info/>} size="xl" level="2" onClick={go} data-to="about">
		О проекте
		 </Button>
		</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
