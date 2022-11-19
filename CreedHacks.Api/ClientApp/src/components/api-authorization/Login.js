import React, { useState } from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
export const Login = () => {
  
  const signInClick = () => 
  {

  };
  const setPass = () => 
  {

  };

  const setUser = () => 
  {

  };

  return (
    <Grid style={{ marginTop: "50px" }} >
      <div style={{ maxWidth: "500px", margin: "auto" }} >
        <Grid align='center'>
          <h2>Sign In</h2>
        </Grid>
        <div style={{ marginTop: "30px" }} >
          <TextField onChange={e => setUser(e.target.value)} style={{ height: "100px" }} label='Username' placeholder='Enter username' variant="outlined" fullWidth />
          <TextField onChange={e => setPass(e.target.value)} style={{ height: "100px" }} label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth />
          <Button onClick={signInClick} style={{ maxWidth: "100px" }} type='submit' color='primary' variant="contained" fullWidth>Sign in</Button>

        </div>
      </div>
    </Grid>
  )
}
