import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Add({ ...rest }) {
  return (
    <Box shadow className="add">
      <Heading border>Додаткові властивості</Heading>

      <List {...rest} />
    </Box>
  );
}

function List({ rules, cancel, transport, languages, offers, instructions }) {
  return (
    <ul className="add__list">
      <ListItem title="Правила дому">
        <span>{rules}</span>
      </ListItem>
      <ListItem title="Політика скасування">
        <span>{cancel}</span>
      </ListItem>
      <ListItem title="Місцевий транспорт">
        <span>{transport}</span>
      </ListItem>
      <ListItem title="Мови хоста">
        <span>{languages}</span>
      </ListItem>
      <ListItem title="Спеціальні пропозиції:">
        <span>{offers}</span>
      </ListItem>
      <ListItem title="Інструкції щодо реєстрації">
        <span>{instructions}</span>
      </ListItem>
    </ul>
  );
}
