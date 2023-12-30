'use client'
import { Toaster } from 'react-hot-toast';
import type { AppProps } from 'next/app'
import RegisterModal from '@/components/Account/RegisterModal'
import LoginModal from '@/components/Account/LoginModal'
import { SessionProvider } from 'next-auth/react';
import Button from '@/components/Button';

export default function App( ) {
  return (
    <>
    <RegisterModal/>
    </>
  )
}