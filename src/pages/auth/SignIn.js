import * as yup from "yup";
import { useFormik } from "formik";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// import Header from "../header/Header";
import { Typography, Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { isSignin } from "../../helpers/util";
import ToastConfig from "../../components/toast/toast";
import { Loading } from "../../components/icons/Loading";
import MuiTextField from "../../components/MuiTextField";

function SignIn(props) {


  useFormik()
    return (
        <>
          {/* <Header noOptions={true} /> */}
    
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <h2 style={{ textAlign: "center" }}>Log in</h2>
            <Card
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: matches ? "" : "20vw",
                padding: 40,
                margin: "auto",
              }}
            >
              <CardContent>
                <Grid
                  container
                  spacing={4}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center">
                      <Grid item>
                        <Typography variant="h4">
                          {" "}
                          Welcome to the Restly
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item xs={12}>
                        <Typography>Email</Typography>
                        <MuiTextField
                          id="Email"
                          value={formik.values.Email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.Email && Boolean(formik.errors.Email)
                          }
                          helperText={formik.touched.Email && formik.errors.Email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>Password</Typography>
                        <MuiTextField
                          id="Password"
                          type="password"
                          isProtected="true"
                          value={formik.values.Password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.Password &&
                            Boolean(formik.errors.Password)
                          }
                          helperText={
                            formik.touched.Password && formik.errors.Password
                          }
                        />
                      </Grid>
                      <Grid item xs={12} display={"none"}>
                        <Typography style={{ textAlign: "right" }}>
                        I forgot my password
                        </Typography>{" "}
                      </Grid>
                    </Grid>
                  </Grid>
    
                  <Grid item xs={12}>
                    {!isLoading ? (
                      <Grid container justifyContent="center" alignItems="center">
                        <Grid item>
                          <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            type="submit"
                          >
                            Sign in
                          </Button>
                        </Grid>
                      </Grid>
                    ) : (
                      <Loading />
                    )}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
        </>
      );
}

export default SignIn;