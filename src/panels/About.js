import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, HeaderButton, platform, IOS, Footer, Group, List, Cell, Avatar } from '@vkontakte/vkui';
import '../style/style.css'
import image3 from '../img/278.png';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon24Download from '@vkontakte/icons/dist/24/download';
import Icon24Link from '@vkontakte/icons/dist/24/link';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';

const osName = platform();

const About = props => (
	<Panel id={props.id}>
		<PanelHeader
		left={<HeaderButton onClick={props.go} data-to="home">
			{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
		</HeaderButton>}
		>
			О сервисе
		</PanelHeader>
        <img className="Image" style={ { borderRadius: 20 } } src={ image3 } alt="Map"/>
        <Footer>BEAUTY-БАЗА. Поиск мастеров индустрии красоты</Footer>
        <Group>
            <List>
                <Cell multiline={true} target="_blank" href="https://vk.com/beauty_baza" before={ <Avatar style={ { background: '#5C9CE6' } } size={36}><Icon24Flash	fill="#fff" /></Avatar> } description="https://vk.com/beauty_baza">Наша группа в Нижнем Новгород</Cell>
                </List>
        </Group>
	</Panel>
);

About.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default About;
