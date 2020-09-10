import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

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

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   }
// }));

const styles = () => ({
  root: {
    flexGrow: 1
  },

  card: {
    // maxWidth: 420,
    //marginTop: 50
  },
  container: {
    display: "Flex",
    justifyContent: "center"
  },
  actions: {
    float: "right"
  }
});

function LoginFormik(props) {
  //const classed = useStyles();
  const { history } = props;
  const { classes } = props;
  return (
    <Formik
      initialValues={{
        userName: "",
        password: ""
      }}
      validationSchema={Yup.object().shape({
        userName: Yup.string().required("Required"),
        password: Yup.string()
          .min(8, "Password must contain at least 8 characters")
          .required("Enter your password")
      })}
      onSubmit={fields => {
        alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        history.push("/admindash");
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <h1>Welcome to login</h1>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs></Grid>
              <Grid item xs={10}>
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
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                      >
                        SUBMIT
                      </Button>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={handleReset}
                      >
                        CLEAR
                      </Button>
                    </CardActions>
                  </Card>
                </form>
              </Grid>
              <Grid item xs></Grid>
            </Grid>
          </div>
        );
      }}
    </Formik>
    // render is another property for formik similar to validation and initial values to
    // give props inside the code is splitted
    //   render={({ errors, status, touched }) => (
    //     <Form>
    //       <div className="form-group">
    //         <label htmlFor="firstName">First Name</label>
    //         <Field
    //           name="firstName"
    //           type="text"
    //           className={
    //             "form-control" +
    //             (errors.firstName && touched.firstName ? " is-invalid" : "")
    //           }
    //         />
    //         <ErrorMessage
    //           name="firstName"
    //           component="div"
    //           className="invalid-feedback"
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="lastName">Last Name</label>
    //         <Field
    //           name="lastName"
    //           type="text"
    //           className={
    //             "form-control" +
    //             (errors.lastName && touched.lastName ? " is-invalid" : "")
    //           }
    //         />
    //         <ErrorMessage
    //           name="lastName"
    //           component="div"
    //           className="invalid-feedback"
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="email">Email</label>
    //         <Field
    //           name="email"
    //           type="text"
    //           className={
    //             "form-control" +
    //             (errors.email && touched.email ? " is-invalid" : "")
    //           }
    //         />
    //         <ErrorMessage
    //           name="email"
    //           component="div"
    //           className="invalid-feedback"
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="password">Password</label>
    //         <Field
    //           name="password"
    //           type="password"
    //           className={
    //             "form-control" +
    //             (errors.password && touched.password ? " is-invalid" : "")
    //           }
    //         />
    //         <ErrorMessage
    //           name="password"
    //           component="div"
    //           className="invalid-feedback"
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="confirmPassword">Confirm Password</label>
    //         <Field
    //           name="confirmPassword"
    //           type="password"
    //           className={
    //             "form-control" +
    //             (errors.confirmPassword && touched.confirmPassword
    //               ? " is-invalid"
    //               : "")
    //           }
    //         />
    //         <ErrorMessage
    //           name="confirmPassword"
    //           component="div"
    //           className="invalid-feedback"
    //         />
    //       </div>
    //       <div className="form-group">
    //         <button type="submit" className="btn btn-primary mr-2">
    //           Register
    //         </button>
    //         <button type="reset" className="btn btn-secondary">
    //           Reset
    //         </button>
    //       </div>
    //     </Form>
    //   )}
    // />
  );
}

export default withStyles(styles)(LoginFormik);
