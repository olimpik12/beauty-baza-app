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
import PanelPoisk from './PanelPoisk';

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
		<PanelPoisk/>
 </Div>

</Group>
<Group title="Результаты поиска">
        <Cell
          photo="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"
          description="VKontakte"
          bottomContent={<Button>Посмотреть карточку</Button>}
          before={<Avatar src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" size={80}/>}
          size="l"
        >
          Артур Стамбульцян
        </Cell>
</Group>

	</Panel>
);


Poisk.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Poisk;
