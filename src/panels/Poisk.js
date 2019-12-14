import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Select } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import './Poisk.css';


const osName = platform();

const Poisk = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Поиск мастеров
		</PanelHeader>
<Group title="Введите критерии поиска">
 <Div>
		<Select placeholder="Выберите услугу">
  <option value="m">Маникюр</option>
  <option value="f">Педикюр</option>
    </Select>
 </Div>

</Group>

	</Panel>
);

connect.send("VKWebAppJoinGroup", {"group_id": 181509241});

Poisk.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Poisk;