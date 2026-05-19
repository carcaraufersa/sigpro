import {
  Box,
  Divider,
  Typography,
} from '@mui/material';

type Props = {
  text?: string;
};

export default function AuthDivider({
  text = 'ou',
}: Props) {
  return (
    <Box sx={{ mt: '1.125rem', mb: '0.875rem' }}>
      <Divider
        sx={{
          '&::before, &::after': {
            borderColor: 'var(--divider-color)',
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 'var(--font-xs)',
            color: 'var(--dark-gray)',
            px: '0.625rem',
          }}
        >
          {text}
        </Typography>
      </Divider>
    </Box>
  );
}