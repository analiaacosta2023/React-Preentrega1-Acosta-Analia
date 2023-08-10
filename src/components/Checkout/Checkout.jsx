import React from 'react'
import {
    Box,
    Container,
    TextField,
    Button,
    Typography,
    Card,
    CardContent,
    Grid,
  } from "@mui/material";

function Checkout() {
  return (
    <Container maxWidth="sm">
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" align="center">
        Checkout
      </Typography>
    </Box>

    <Card variant="outlined" sx={{ mt: 2 }}>
      <CardContent>
        <Box component="form">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Credit Card Number"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            inputProps={{ maxLength: 16 }}
          />

          <TextField
            label="CVV"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            inputProps={{ maxLength: 3 }}
          />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Expiry Month"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                inputProps={{ min: 1, max: 12 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Expiry Year"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                inputProps={{ min: 2023 }}
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            Pay Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  </Container>
  )
}

export default Checkout