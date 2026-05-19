'use client';

import { Button, ButtonProps } from '@mui/material';

export default function AppButton(props: ButtonProps) {
  return (
    <Button
      fullWidth
      variant="contained"
      disableElevation
      {...props}
      sx={{
        mt: '2rem',
        height: '2.75rem',

        borderRadius: 'var(--radius-md)',
        backgroundColor: 'var(--secondary-color)',

        textTransform: 'none',
        fontWeight: 600,
        fontSize: 'var(--font-md)',

        '&:hover': {
          opacity: 0.9,
          backgroundColor: 'var(--secondary-color)',
        },

        ...props.sx,
      }}
    />
  );
}