import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Select, FixedLayout, Button, List, InfoRow } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Icon24Phone from '@vkontakte/icons/dist/24/phone';
import Icon24Discussions from '@vkontakte/icons/dist/24/discussions';


const osName = platform();

const Master =({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="profile">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Карточка мастера
		</PanelHeader>
    {fetchedUser &&
    <Group title="Информация о мастере и его услугах">
      <Cell
        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
        description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
      >
        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
      </Cell>
    </Group>}

      <Group style={{paddingBottom: 60}} title="Информация о Мастере">
        <List>
          <Cell>
            <Div top="Услуги">
              Маникюр, Педикюр, Наращивание ресниц
            </Div>
          </Cell>
          <Cell>
            <Div title="Об услугах">
              Низкие цены, принимаю дома
            </Div>
          </Cell>
          <Cell>
            <Div title="Мобильный телефон">
              +79999999999
            </Div>
          </Cell>
					<Cell>
            <Div title="Город">
              Москва
            </Div>
          </Cell>
					<Cell>
            <Div title="Адрес">
              Проспект Ленина 7
            </Div>
          </Cell>
        </List>
      </Group>

		<FixedLayout style={{background: '#ffffff'}} vertical="bottom">
		 <Div style={{display: 'flex'}}>
			<Button size="l" level="1" before={<Icon24Discussions/>} stretched style={{ marginRight: 8 }} component="a" href="https://vk.com/im?sel=541972947">Написать</Button>
			<Button stretched before={<Icon24Phone/>} size="l" level="1" component="a" href="tel:+79999999999" >Позвонить</Button>
		 </Div>
		 </FixedLayout>

	</Panel>
);


Master.propTypes = {
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

export default Master;
