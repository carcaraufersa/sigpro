'use client';

import { TextField, TextFieldProps } from '@mui/material';

export default function AppInput(props: TextFieldProps) {
  return (
    <TextField
      fullWidth
      variant="filled"
      margin="normal"
      size="small"
      {...props}
      sx={{
        '& .MuiFilledInput-root': {
          backgroundColor: 'var(--light-gray)',
          borderTopLeftRadius: 'var(--radius-sm)',
          borderTopRightRadius: 'var(--radius-sm)',

          '&:before': {
            borderBottom: '2px solid var(--dark-gray)',
          },

          '&:after': {
            borderBottom: '2px solid var(--secondary-color)',
          },

          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '2px solid var(--dark-gray)',
          },
        },

        '& .MuiInputLabel-root': {
          fontSize: 'var(--font-sm)',
          color: 'var(--medium-gray)',
        },

        ...props.sx,
      }}
    />
  );
}