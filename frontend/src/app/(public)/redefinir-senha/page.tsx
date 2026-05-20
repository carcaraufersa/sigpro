'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Box, Typography } from '@mui/material';
import { CircleCheckBig } from 'lucide-react';

import AuthCard from '@/components/auth/AuthCard';
import AuthDivider from '@/components/auth/AuthDivider';
import AuthLayout from '@/components/auth/AuthLayout';
import PasswordInput from '@/components/auth/PasswordInput';

import AppButton from '@/components/ui/AppButton';

export default function RedefinirSenhaPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [success, setSuccess] = useState(false);

  function validatePassword(password: string) {
    return password.length >= 6;
  }

  function handleSubmit() {
    const isPasswordValid = validatePassword(password);
    const passwordsMatch = password === confirmPassword;

    setPasswordError(!isPasswordValid);
    setConfirmPasswordError(!passwordsMatch);

    if (!isPasswordValid || !passwordsMatch) {
      setSuccess(false);
      return;
    }

    // futura chamada API
    setSuccess(true);
  }

  return (
    <AuthLayout imageSrc="/esqueceu-senha.svg">
      <AuthCard title={success ? 'Senha redefinida' : 'Redefinição de senha'}>
        {!success ? (
          <>
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: 'var(--font-xs)',
                lineHeight: 1.5,
                color: 'var(--medium-gray)',
                mb: '2rem',
              }}
            >
              Por favor, insira abaixo a sua nova senha de acesso ao sistema.
            </Typography>

            <PasswordInput
              label="Nova senha*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              helperText={passwordError ? 'A senha deve ter pelo menos 6 caracteres.' : ''}
            />

            <PasswordInput
              label="Confirmar nova senha*"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={confirmPasswordError}
              helperText={confirmPasswordError ? 'As senhas não coincidem.' : ''}
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
                fontSize: 'var(--font-xs)',
                color: 'var(--medium-gray)',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Voltar para o Login
            </Typography>
          </>
        ) : (
          <>
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: 'var(--font-xs)',
                lineHeight: 1.5,
                color: 'var(--medium-gray)',
                mb: '2rem',
              }}
            >
              A sua senha de acesso ao sistema foi redefinida com sucesso. Por favor,
              volte para a tela de Login.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mb: '3rem' }}>
              <CircleCheckBig
                size={72}
                color="var(--success-color)"
                strokeWidth={2.5}
              />
            </Box>

            <AppButton component={Link} href="/login">
              Login
            </AppButton>
          </>
        )}
      </AuthCard>
    </AuthLayout>
  );
}