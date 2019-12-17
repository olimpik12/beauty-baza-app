import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import {FixedLayout, PanelHeader, Button, Group, Cell, Avatar, Div } from '@vkontakte/vkui';
import Icon24List from '@vkontakte/icons/dist/24/list';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon24Info from '@vkontakte/icons/dist/24/info';
import image4 from '../img/1120.png';
import '../style/style.css'

const Home = ({ id, go,}) => (
	<Panel id={id}>
		<PanelHeader>Главная</PanelHeader>
   <FixedLayout vertical="top">
		<Group style={ { background: '#35b8ff' } }>
		<center><img className="ImageH" src={image4} alt="Beauty-Baza"/></center>
		</Group>
		</FixedLayout>
		<Group>
		<Div>
		Сервис для тех, кто ищет своего мастера по ногтям, причёскам, ресницам, макияжу и многому другому.
		</Div>
		</Group>

		<Group title="Меню сервиса:">
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
