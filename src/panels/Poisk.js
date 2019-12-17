import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Select, Cell, Button, Avatar, Search, List } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import PanelPoisk from './PanelPoisk';

import './Poisk.css';


const osName = platform();

const Poisk = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Поиск мастеров
		</PanelHeader>
<Group>
 <Div>
		<PanelPoisk/>
 </Div>

</Group>
<List title="Результаты поиска">
        <Cell
          photo="https://sun1-86.userapi.com/c845321/v845321561/207aab/XuC_Bty9geU.jpg"
          description="Маникюр, Педикюр"
          bottomContent={<Button onClick={go} data-to="master">Смотреть карточку</Button>}
          before={<Avatar src="https://sun1-86.userapi.com/c845321/v845321561/207aab/XuC_Bty9geU.jpg" size={80}/>}
          size="l"
        >
          Мария Иванова
        </Cell>
				<Cell
          photo="https://sun1-86.userapi.com/c845321/v845321561/207aab/XuC_Bty9geU.jpg"
          description="Маникюр, Педикюр, Наращивание ресниц, Ботокс"
          bottomContent={<Button onClick={go} data-to="master">Смотреть карточку</Button>}
          before={<Avatar src="https://sun1-86.userapi.com/c845321/v845321561/207aab/XuC_Bty9geU.jpg" size={80}/>}
          size="l"
        >
          Светлана Петрова
        </Cell>
</List>

	</Panel>
);


Poisk.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Poisk;
