import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { useHistory } from "react-router-dom";

function WelcomePage() {
  const history = useHistory();
  function handleGuestClick() {
    history.push("/guestdash");
  }
function handleAdminClick() {
    history.push("/login")
}
  return (
    <Box component="span" m={1}>
      {/* <Button /> */}
      <Box>
        <h3>Complaints App</h3>
        <Box m={5}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PersonIcon />}
            onClick={handleGuestClick}
          >
            Guest User
          </Button>
        </Box>
        <Box m={5}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<VerifiedUserIcon />}
            onClick={handleAdminClick}
          >
            Admin Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default WelcomePage;
