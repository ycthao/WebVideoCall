import React from "react";
import { Typography, AppBar } from "@material-ui/core";

import VideoPlayers from "./components/VideoPlayers";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

const App = () => {
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Video Chat
        </Typography>
      </AppBar>
      {/* VideoPlayer */}
      {/* Options -> Notifications */}
    </div>
  );
};

export default App;
