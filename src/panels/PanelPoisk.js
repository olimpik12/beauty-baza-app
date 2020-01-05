import React from "react";
import PropTypes from "prop-types";
import { Select, Input, Cell } from "@vkontakte/vkui";

const PanelPoisk = () => (
  <div>
    <Cell>
      <Select placeholder="Выберите услугу">
        <option value="m">маникюр</option>
        <option value="f">педикюр</option>
      </Select>
    </Cell>
    <Cell>
      <Input value="город" />
    </Cell>
  </div>
);

PanelPoisk.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default PanelPoisk;
