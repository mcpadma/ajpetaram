import React, { useState } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import {Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const styles = () => ({
  card: {
    // maxWidth: 420,
    // marginTop: 50
  },
  container: {
    display: "Flex",
    justifyContent: "center"
  },
  actions: {
    float: "right"
  }
});
// const form = props => {
function Login(props) {
  const classed = useStyles();
 const history = useHistory();
  //const [toNext, setToNext] = useState(false);
  //const history = props;

  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  function handleFormSubmit() {
    //history.push("/admindash");
    //setToNext(true);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <h1>Welcome to login</h1>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={10} >
          <form onSubmit={handleSubmit}>
            <Card className={classes.card}>
              <CardContent>
                <TextField
                  id="userName"
                  label="User Name"
                  value={values.userName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.userName ? errors.userName : ""}
                  error={touched.userName && Boolean(errors.userName)}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="password"
                  label="Password"
                  value={values.password}
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.password ? errors.password : ""}
                  error={touched.password && Boolean(errors.password)}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                />
              </CardContent>
              <CardActions className={classes.actions}>
                <Button
                  type="submit"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={handleFormSubmit}
                >
                  SUBMIT
                </Button>
                <Button color="secondary" onClick={handleReset}>
                  CLEAR
                </Button>
              </CardActions>
            </Card>
            {/* {toNext ? <Redirect to="/Next" /> : null} */}
          </form>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}
const LoginForm = withFormik({
  mapPropsToValues: ({ userName, password }) => {
    return {
      userName: userName || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    userName: Yup.string().required("Required"),
    password: Yup.string()
      .min(8, "Password must contain at least 8 characters")
      .required("Enter your password")
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      //history.push('/admindash');
    }, 1000);
  }
})(Login);

export default withStyles(styles)(LoginForm);
