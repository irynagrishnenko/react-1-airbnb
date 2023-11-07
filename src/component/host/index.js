import "./index.css";

import Heading from "../heading";

export default function Host({
  imageSrc,
  name,
  phone,
  response_time,
  response_rate,
  info,
}) {
  return (
    <div className="host">
      <div className="host__title">
        <img
          className="host__img"
          height={24}
          width={24}
          src={imageSrc}
          alt="Host"
        />
        <div className="host__data">
          <Heading>Господар – {name}</Heading>

          <div className="host__sub-block">
            <span className="host__sub-value">{phone}</span>

            <span className="host__sub-value">{response_time}</span>

            <span className="host__sub-value">
              {response_rate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <span>{info}</span>
    </div>
  );
}
