import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Shop</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        My first Shop
      </AppBar>
      <Toolbar>
        <Typography>Shop</Typography>
      </Toolbar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography position="center">Made by me :D</Typography>
      </footer>
    </div>
  );
}
