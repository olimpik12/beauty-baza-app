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

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Главная</PanelHeader>
		{fetchedUser &&
		<Group title="Добро пожаловать!">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group title="Меню">
		<Div>
		 <Button before={<Icon24List/>} size="xl" level="2" onClick={go} data-to="poisk">
		Найти мастера в каталоге
		 </Button>
		</Div>
		<Div>
		 <Button size="xl" level="2" onClick={go} data-to="mapview">
		Найти мастера на карте
		 </Button>
		</Div>
		<Div>
		 <Button size="xl" level="2" onClick={go} data-to="profile">
		Я Мастер (Личный кабинет)
		 </Button>
		</Div>
		<Div>
		 <Button size="xl" level="2" onClick={go} data-to="about">
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
