'use client';

import { GithubIcon, Linkedin, Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';

import { GoogleIcon } from '@/components/icons/Google';
import { Button } from '@/components/ui/button';

import { socialLoginConfig } from './config';

interface ISocialLoginProviders {
  isLoading: boolean;
}

export const SocialLoginProviders = ({ isLoading }: ISocialLoginProviders) => {
  async function handleSignInWithProvider(
    provider: 'google' | 'github' | 'linkedin',
  ) {
    await signIn(provider, {
      callbackUrl: '/dashboard/home',
    });
  }

  if (!socialLoginConfig.isEnabled || !socialLoginConfig.providers.length) {
    return null;
  }

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        {socialLoginConfig.providers.includes('google') && (
          <Button
            className="w-full"
            variant="outline"
            type="button"
            disabled={isLoading}
            onClick={() => handleSignInWithProvider('google')}
          >
            {isLoading ? (
              <Loader2 className="mr-2 size-4 animate-spin" />
            ) : (
              <GoogleIcon className="mr-2 size-4" />
            )}{' '}
            Google
          </Button>
        )}
        {socialLoginConfig.providers.includes('linkedin') && (
          <Button
            className="w-full"
            variant="outline"
            type="button"
            disabled={isLoading}
            onClick={() => handleSignInWithProvider('linkedin')}
          >
            {isLoading ? (
              <Loader2 className="mr-2 size-4 animate-spin" />
            ) : (
              <Linkedin className="mr-2 size-4" />
            )}{' '}
            Linkedin
          </Button>
        )}
        {socialLoginConfig.providers.includes('github') && (
          <Button
            className="w-full"
            variant="outline"
            type="button"
            disabled={isLoading}
            onClick={() => handleSignInWithProvider('github')}
          >
            {isLoading ? (
              <Loader2 className="mr-2 size-4 animate-spin" />
            ) : (
              <GithubIcon className="mr-2 size-4" />
            )}{' '}
            GitHub
          </Button>
        )}
      </div>
    </>
  );
};
