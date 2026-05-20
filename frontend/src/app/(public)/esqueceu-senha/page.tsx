'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Alert, Typography } from '@mui/material';

import AuthCard from '@/components/auth/AuthCard';
import AuthDivider from '@/components/auth/AuthDivider';
import AuthLayout from '@/components/auth/AuthLayout';

import AppButton from '@/components/ui/AppButton';
import AppInput from '@/components/ui/AppInput';

export default function EsqueceuSenhaPage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  function validateEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit() {
    const isValid = validateEmail(email);

    if (!isValid) {
      setEmailError(true);
      setEmailSent(false);

      return;
    }

    setEmailError(false);

    // futuramente aqui vai chamada da API
    setEmailSent(true);
  }

  return (
    <AuthLayout imageSrc="/esqueceu-senha.svg">
      <AuthCard title="Recuperar senha">
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: 'var(--font-xs)',
            lineHeight: 1.5,
            color: 'var(--medium-gray)',
            mb: '2rem',
          }}
        >
          Insira o endereço de e-mail registrado com a sua conta e selecione
          &quot;Enviar&quot;. Um e-mail será enviado ao seu endereço com um link
          para renovar a sua senha.
        </Typography>

        {emailSent && (
          <Alert severity="success" sx={{ mb: '2rem' }}>
            Link de recuperação enviado com sucesso.
          </Alert>
        )}

        <AppInput
          label="E-mail*"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          helperText={emailError ? 'Digite um e-mail válido.' : ''}
        />

        <AppButton sx={{ mt: '4rem' }} onClick={handleSubmit}>
          Enviar
        </AppButton>

        <AuthDivider />

        <Typography
          component={Link}
          href="/login"
          sx={{
            display: 'block',
            textAlign: 'center',
            fontSize: 'var(--font-sm)',
            color: 'var(--muted-text-color)',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          Voltar para o login
        </Typography>
      </AuthCard>
    </AuthLayout>
  );
}