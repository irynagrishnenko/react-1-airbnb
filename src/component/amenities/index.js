import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import poolImg from "./pool.svg";
import gymImg from "./gym.svg";
import breakfastImg from "./breakfast.svg";
import wifiImg from "./wifi.svg";
import parkingImg from "./parking.svg";
import petsImg from "./pets.svg";
import shuttleImg from "./shuttle.svg";
import conciergeImg from "./concierge.svg";
import serviceImg from "./service.svg";
import childrenImg from "./children.svg";

export default function Amenities({ ...rest }) {
  return (
    <Box shadow className="amenities">
      <Heading border>Зручності</Heading>

      <List {...rest} />
    </Box>
  );
}

function List({
  pool,
  gym,
  breakfast,
  wifi,
  parking,
  pets,
  shuttle,
  concierge,
  service,
  children,
}) {
  return (
    <ul className="amenities__list">
      <ListItem imageSrc={poolImg}>
        <span className={` ${pool ? "" : "value__line"}`}>Басейн</span>
      </ListItem>
      <ListItem imageSrc={gymImg}>
        <span className={` ${gym ? "" : "value__line"}`}>Спортивний зал</span>
      </ListItem>
      <ListItem imageSrc={breakfastImg}>
        <span className={` ${breakfast ? "" : "value__line"}`}>
          Безкоштовний сніданок
        </span>
      </ListItem>
      <ListItem imageSrc={wifiImg}>
        <span className={` ${wifi ? "" : "value__line"}`}>
          Безкоштовний Wi-Fi
        </span>
      </ListItem>
      <ListItem imageSrc={parkingImg}>
        <span className={` ${parking ? "" : "value__line"}`}>
          Безкоштовний вуличний паркінг
        </span>
      </ListItem>
      <ListItem imageSrc={petsImg}>
        <span className={` ${pets ? "" : "value__line"}`}>
          Дозволено розміщення з домашніми тваринами
        </span>
      </ListItem>
      <ListItem imageSrc={shuttleImg}>
        <span className={` ${shuttle ? "" : "value__line"}`}>
          Трансфер до/з аеропорту
        </span>
      </ListItem>
      <ListItem imageSrc={conciergeImg}>
        <span className={` ${concierge ? "" : "value__line"}`}>
          Консьєрж-сервіс
        </span>
      </ListItem>
      <ListItem imageSrc={serviceImg}>
        <span className={` ${service ? "" : "value__line"}`}>
          Обслуговування номерів
        </span>
      </ListItem>
      <ListItem imageSrc={childrenImg}>
        <span className={` ${children ? "" : "value__line"}`}>
          Підходить для дітей
        </span>
      </ListItem>
    </ul>
  );
}
