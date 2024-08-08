export type socialLoginProviders = 'github' | 'linkedin' | 'google';

interface ISocialLoginConfig {
  isEnabled: boolean;
  providers: socialLoginProviders[];
}

export const socialLoginConfig: ISocialLoginConfig = {
  isEnabled: true,
  providers: ['github', 'linkedin', 'google'],
} as const;
