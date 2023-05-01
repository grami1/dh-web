import Typography from "@mui/material/Typography";

import classes from "./welcome.module.css";
import { useSession } from "next-auth/react";

export default function WelcomePage() {
  const { data: session } = useSession();
  const name = session ? session.user?.name : "";
  return (
    <div className={classes.welcome}>
      <Typography variant="h5">Welcome {name} to your Digital Home!</Typography>
    </div>
  );
}
