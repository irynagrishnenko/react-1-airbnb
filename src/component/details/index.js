import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import people from "./people.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bathroom from "./bathroom.svg";

export default function Details({ ...rest }) {
  return (
    <Box shadow className="details">
      <Heading border>Деталі властивості:</Heading>

      <List {...rest} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="details__list">
      <ListItem imageSrc={people}>
        <span>{guests}</span>
        <span>гості</span>
      </ListItem>

      <ListItem imageSrc={bedroom}>
        <span>{bedrooms}</span>
        <span>спальня</span>
      </ListItem>

      <ListItem imageSrc={bed}>
        <span>{beds}</span>
        <span>ліжко</span>
      </ListItem>

      <ListItem imageSrc={bathroom}>
        <span>{baths}</span>
        <span>ванна кімната</span>
      </ListItem>
    </ul>
  );
}
