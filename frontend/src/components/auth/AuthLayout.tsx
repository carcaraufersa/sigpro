import Image from 'next/image';

import { Box } from '@mui/material';

type Props = {
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
};

export default function AuthLayout({
  children,
  imageSrc = '/svg-students.svg',
  imageAlt = 'Auth image',
}: Props) {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '87.5rem',

          padding: {
            xs: '1.5rem',
            sm: '2rem',
            md: '3rem',
            lg: '4rem',
          },

          display: 'flex',

          flexDirection: {
            xs: 'column',
            md: 'column',
            lg: 'row',
          },

          alignItems: 'center',
          justifyContent: 'center',

          gap: {
            xs: '1.5rem',
            md: '2rem',
            lg: '3rem',
          },
        }}
      >
        {children}

        <Box
          sx={{
            flex: 1,

            display: {
              xs: 'none',
              lg: 'flex',
            },

            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={520}
            height={520}
            style={{ height: 'auto' }}
          />
        </Box>
      </Box>
    </main>
  );
}