import * as React from "react";
import Typography from "@mui/material/Typography";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import classes from "./weather-item.module.css";
import SvgIcon from "@mui/material/SvgIcon";

export enum ICON_TYPES {
  CONDITION = "condition",
  TEMPERATURE = "temperature",
  WIND = "wind",
  HUMIDITY = "humidity",
}

export default function WeatherItem(props) {
  const { iconType, value, iconUrl } = props;
  const formattedIconUrl = `https:${iconUrl}`;

  let itemIcon;
  let itemText;
  switch (iconType) {
    case ICON_TYPES.CONDITION:
      itemIcon = <img src={formattedIconUrl} alt="condition" />;
      itemText = value;
      break;
    case ICON_TYPES.TEMPERATURE:
      itemIcon = <ThermostatIcon />;
      itemText = `${value} C`;
      break;
    case ICON_TYPES.WIND:
      itemIcon = <AirIcon />;
      itemText = `${value} mph`;
      break;
    case ICON_TYPES.HUMIDITY:
      itemIcon = <WaterDropIcon />;
      itemText = `${value} %`;
      break;
    default:
      itemIcon = <SvgIcon />;
      itemText = "Unknown";
      break;
  }

  return (
    <div className={classes.condition}>
      <div className={classes.icon}>{itemIcon}</div>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        {itemText}
      </Typography>
    </div>
  );
}
