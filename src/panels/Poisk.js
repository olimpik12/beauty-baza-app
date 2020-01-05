import React from "react";
import PropTypes from "prop-types";
import { platform, IOS, Cell, Button, Avatar, List } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import PanelPoisk from "./PanelPoisk";

import "./Poisk.css";

const Spisok = (go, props) => {
  return (
    <Cell
      photo="https://sun1-86.userapi.com/c845321/v845321561/207aab/XuC_Bty9geU.jpg"
      description="тест"
      bottomContent={
        <Button onClick={go} data-to="master">
          Смотреть карточку
        </Button>
      }
      before={
        <Avatar
          src="https://sun1-86.userapi.com/c845321/v845321561/207aab/XuC_Bty9geU.jpg"
          size={80}
        />
      }
      size="l"
    >
      {`${props.s.first_name} ${props.s.last_name}`}
    </Cell>
  );
};

const osName = platform();

const Poisk = ({ id, go }) => {
  let s = [
    { usluga: "Маникюр", first_name: "Мария", last_name: "Иванова" },
    { usluga: "Педикюр", first_name: "Наташа", last_name: "Петрова" },
    { usluga: "Шугаринг", first_name: "Юля", last_name: "Сидорова" }
  ];

  let spisokElements = s.map(s => (
    <Spisok
      usluga={s.usluga}
      first_name={s.first_name}
      last_name={s.last_name}
    />
  ));

  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <HeaderButton onClick={go} data-to="home">
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </HeaderButton>
        }
      >
        Поиск мастеров
      </PanelHeader>
      <Group>
        <Div>
          <PanelPoisk />
        </Div>
      </Group>
      <List title="Результаты поиска">{spisokElements}</List>
    </Panel>
  );
};

Poisk.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default Poisk;
