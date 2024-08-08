import { Metadata } from 'next';
import Link from 'next/link';

import { AuthForm } from './components/AuthForm';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
};

export default function SignIn() {
  return (
    <>
      <div className="relative lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign in to your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to sign in to your account
            </p>
          </div>
          <AuthForm />
          <p className="flex gap-0.5 px-8 text-center text-sm text-muted-foreground">
            <span>Not a member?</span>
            <Link
              href="/auth/sign-up"
              className="underline underline-offset-4 hover:text-primary"
            >
              Create an account for free
            </Link>
            <span>.</span>
          </p>
        </div>
      </div>
    </>
  );
}
