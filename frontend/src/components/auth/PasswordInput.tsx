'use client';

import { useState } from 'react';

import {
  IconButton,
  InputAdornment,
} from '@mui/material';

import { Eye, EyeOff } from 'lucide-react';

import AppInput from '@/components/ui/AppInput';

type Props = {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
};

export default function PasswordInput({
  label,
  value,
  onChange,
  error,
  helperText,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AppInput
      label={label}
      type={showPassword ? 'text' : 'password'}

      value={value}
      onChange={onChange}

      error={error}
      helperText={helperText}

      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword
                  ? <EyeOff size={18} />
                  : <Eye size={18} />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}