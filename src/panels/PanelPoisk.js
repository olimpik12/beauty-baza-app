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


const osName = platform();


const PanelPoisk = props => (
	<Div>
	  <Select placeholder="Выберите услугу">
  <option value="m">Маникюр</option>
  <option value="f">Педикюр</option>
    </Select>
		<FormLayout>
                <SelectMimicry
                  top="Выберите страну"
                  placeholder="Не выбрана"
                  onClick={() => this.setState({ activeView: 'countries' })}
                >{this.state.country}</SelectMimicry>

                <SelectMimicry
                  top="Выберите город"
                  placeholder="Не выбран"
                  disabled
                />
   </FormLayout>
	</Div>
);

PanelPoisk.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};


export default PanelPoisk;
