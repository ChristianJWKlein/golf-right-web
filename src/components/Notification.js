import React, { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';

export default function Notification() {
  const [notify, setNotify] = useState(false);
  return (
    <Snackbar open={notify.isOpen} autoHideDuration={1000}>
      <Alert variant='outlined' severity={notify.type}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
}
