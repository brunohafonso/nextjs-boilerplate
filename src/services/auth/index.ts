import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import LinkedinProvider from 'next-auth/providers/linkedin';
import EmailProvider from 'next-auth/providers/nodemailer';

import { env } from '@/config';
import { PrismaAdapter } from '@auth/prisma-adapter';

import { prisma } from '../database';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  debug: false,
  pages: {
    signIn: '/auth/sign-in',
    signOut: '/auth',
    newUser: '/dashboard/home',
  },
  cookies: {
    sessionToken: {
      name: `${env.COOKIE_AUTH_PREFIX}.session-token`,
    },
    callbackUrl: {
      name: `${env.COOKIE_AUTH_PREFIX}.callback-url`,
    },
    csrfToken: {
      name: `${env.COOKIE_AUTH_PREFIX}.csrf-token`,
    },
  },
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        ...token,
      };
    },
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          user,
        };
      }

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: env.EMAIL_SERVER,
      from: env.EMAIL_FROM,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
      allowDangerousEmailAccountLinking: true,
    }),
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    LinkedinProvider({
      clientId: env.LINKEDIN_CLIENT_ID,
      clientSecret: env.LINKEDIN_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  // events: {
  //   createUser: async (message) => {
  //     await createStripeCustomer({
  //       name: message.user.name as string,
  //       email: message.user.email as string,
  //     })
  //   },
  // },
});
