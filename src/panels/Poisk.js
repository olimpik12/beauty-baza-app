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

const Spisok = (id_vk, go, props) => {


	return <Cell
		photo="https://sun1-86.userapi.com/c845321/v845321561/207aab/XuC_Bty9geU.jpg"
		description={props.usluga}
		bottomContent={<Button onClick={go} data-to="master" id_vk={id_vk}>Смотреть карточку</Button>}
		before={<Avatar src="https://sun1-86.userapi.com/c845321/v845321561/207aab/XuC_Bty9geU.jpg" size={80}/>}
		size="l"
	>
		{props.first_name} {props.last_name}
	</Cell>;
}


const osName = platform();

const Poisk = (id, go, props) => {

	let spisok = [
	{usluga: 'Маникюр', id_vk: 1, first_name: 'Мария', last_name: 'Иванова'  },
	{usluga: 'Педикюр', id_vk: 2, first_name: 'Наташа', last_name: 'Петрова'  },
	{usluga: 'Шугаринг', id_vk: 3, first_name: 'Юля', last_name: 'Сидорова'  }

]

		let spisokElements = spisok.map( s => <Spisok usluga={s.usluga}  first_name={s.first_name} last_name={s.last_name} id_vk={s.id_vk} /> );


	return <Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="home">
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

			  {spisokElements}

</List>

	</Panel>
};


Poisk.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Poisk;
