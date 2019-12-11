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
import classNames from '../../lib/classNames';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import FormField from '../FormField/FormField';
import { SelectProps } from '../Select/Select';

import persik from '../img/persik.png';
import './Persik.css';

export interface PersikProps extends SelectProps {
  multiline?: boolean;
}

const osName = platform();

const Persik: FunctionComponent<Omit<PersikProps, 'value'>> = ({
 className,
 tabIndex,
 placeholder,
 children,
 alignment,
 status,
 getRootRef,
 multiline,
 disabled,
 ...restProps
}: SelectMimicryProps) => {
 return (

const Persik = props => (
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
 <FormField
      {...restProps}
      tabIndex={disabled ? null : tabIndex}
      className={classNames('Select', 'Select--mimicry', {
        'Select--not-selected': !children,
        'Select--multiline': multiline,
        'Select--disabled': disabled,
        [`Select--align-${alignment}`]: !!alignment
      }, className)}
      getRootRef={getRootRef}
      status={status}
    >
      <div className="Select__container">
        <div className="Select__title">{children || placeholder}</div>
        <Icon24Dropdown />
      </div>
    </FormField>

	);
};

</Group>

	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

Persik.defaultProps = {
  tabIndex: 0
};

export default Persik;
