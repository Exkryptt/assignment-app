'use client';

import { useEffect, useState } from 'react';
import { Box, Button, AppBar, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

export default function Header() {
<<<<<<< Updated upstream
  const [role, setRole] = useState(null); //store the user's role
=======
  const [role, setRole] = useState(null); // Store the user's role
>>>>>>> Stashed changes

  useEffect(() => {
    const fetchSession = async () => {
      try {
<<<<<<< Updated upstream
        const res = await fetch('/api/check-session'); //call the session check API
        const data = await res.json();

        if (res.ok && data.role) {
          setRole(data.role); //set the user's role (manager or customer)
=======
        const res = await fetch('/api/check-session'); // Call the session check API
        const data = await res.json();

        if (res.ok && data.role) {
          setRole(data.role); // Set the user's role (manager or customer)
>>>>>>> Stashed changes
        }
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };

    fetchSession();
  }, []);

  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Krispy Kreme App
          </Typography>
          {role && (
            <Button
              component={Link}
<<<<<<< Updated upstream
              href={role === 'manager' ? '/manager-dashboard' : '/dashboard'} //dynamic link based on role
=======
              href={role === 'manager' ? '/manager-dashboard' : '/dashboard'} // Dynamic link based on role
>>>>>>> Stashed changes
              color="inherit"
            >
              DASHBOARD
            </Button>
          )}
          <Button component={Link} href="/view_cart" color="inherit">
            VIEW CART
          </Button>
          <Button component={Link} href="/login" color="inherit">
            LOGIN
          </Button>
          <Button component={Link} href="/register" color="inherit">
            REGISTER
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


