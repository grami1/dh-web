import Typography from "@mui/material/Typography";

import classes from "./welcome.module.css";

export default function WelcomePage() {
  return (
    <div className={classes.welcome}>
      <Typography variant="h5">Welcome to your Digital Home!</Typography>
    </div>
  );
}
