'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Checkbox, FormControlLabel, Typography } from '@mui/material';

import AuthLayout from '@/components/auth/AuthLayout';
import AuthCard from '@/components/auth/AuthCard';
import AuthDivider from '@/components/auth/AuthDivider';
import PasswordInput from '@/components/auth/PasswordInput';

import AppButton from '@/components/ui/AppButton';
import AppInput from '@/components/ui/AppInput';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function validateEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function validatePassword(password: string) {
    return password.length >= 6;
  }

  function handleSubmit() {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    setEmailError(!isEmailValid);
    setPasswordError(!isPasswordValid);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    // simulação login
    console.log({ email, password });

    sessionStorage.setItem('loginSuccess', 'true');

    router.push('/dashboard');
  }

  return (
    <AuthLayout>
      <AuthCard title="Login">
        <AppInput
          label="E-mail*"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          helperText={emailError ? 'Digite um e-mail válido.' : ''}
        />

        <PasswordInput
          label="Senha*"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          helperText={passwordError ? 'A senha deve ter pelo menos 6 caracteres.' : ''}
        />

        <FormControlLabel
          control={
            <Checkbox
              size="small"
              sx={{
                padding: 0,
                mr: '0.5rem',
                color: 'var(--secondary-color)',
                '&.Mui-checked': { color: 'var(--secondary-color)' },
              }}
            />
          }
          label={
            <Typography
              sx={{
                fontSize: 'var(--font-sm)',
                color: 'var(--text-color-default)',
              }}
            >
              Manter-me conectado
            </Typography>
          }
          sx={{ mt: '0.75rem', ml: 0, alignItems: 'center' }}
        />

        <AppButton onClick={handleSubmit}>
          Entrar
        </AppButton>

        <AuthDivider />

        <Typography
          component={Link}
          href="/esqueceu-senha"
          sx={{
            display: 'block',
            textAlign: 'center',
            fontSize: 'var(--font-sm)',
            color: 'var(--dark-gray)',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          Esqueceu a senha?
        </Typography>
      </AuthCard>
    </AuthLayout>
  );
}