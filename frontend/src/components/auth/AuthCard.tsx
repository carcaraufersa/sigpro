import Image from 'next/image';

import {
  Box,
  Paper,
  Typography,
} from '@mui/material';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function AuthCard({
  title,
  children,
}: Props) {
  return (
    <Paper
      elevation={3}
      sx={{
        width: '100%',
        maxWidth: '26.25rem',
        padding: '2.5rem 2rem',

        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--accent)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: '1.5rem',
        }}
      >
        <Image
          src="/svg-logo-ufersa.svg"
          alt="UFERSA"
          width={220}
          height={80}
          priority
          style={{ height: 'auto' }}
        />
      </Box>

      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          color: 'var(--text-color-default)',
          mb: '1.75rem',
        }}
      >
        {title}
      </Typography>

      {children}
    </Paper>
  );
}