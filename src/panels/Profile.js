import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Select, Textarea, FormLayout, Input, Checkbox, FixedLayout } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Icon24Note from '@vkontakte/icons/dist/24/note';
import Icon24DoneOutline from '@vkontakte/icons/dist/24/done_outline';
import { YMaps, Map, Placemark } from 'react-yandex-maps';


const osName = platform();


const Profile =({ id, go, fetchedUser }) => (
	<Panel id={id} >
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Личный кабинет
		</PanelHeader>
    {fetchedUser &&
    <Group title="Личный кабинет мастера">
      <Cell
        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
        description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
      >
        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
      </Cell>
     </Group>}
	<Group style={{paddingBottom: 60}} >
   <FormLayout>
	 <Div top="Какие услуги вы предоставляете?">
	 <Checkbox>Маникюр</Checkbox>
	 <Checkbox>Педикюр</Checkbox>
	 <Checkbox>Наращивание ресниц</Checkbox>
	 </Div>
	 <Textarea top="Напишите о своих услугах" />
	 <Input top="Мобильный телефон" placeholder="+7" />
	 <Input top="Город"/>
	 <Input top="Адрес. Улица, номер дома"/>
	 </FormLayout>
	</Group>

	<FixedLayout style={{background: '#ffffff'}} vertical="bottom">
	 <Div style={{display: 'flex'}}>
		<Button size="l" level="2" before={<Icon24DoneOutline/>} stretched style={{ marginRight: 8 }}>Сохранить</Button>
		<Button stretched before={<Icon24Note/>} size="l" level="1" onClick={go} data-to="master">Карточка</Button>
	 </Div>
	 </FixedLayout>

	</Panel>
);


Profile.propTypes = {
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

export default Profile;
