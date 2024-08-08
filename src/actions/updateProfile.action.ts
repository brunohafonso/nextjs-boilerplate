'use server';

import { auth } from '@/services/auth';
import { prisma } from '@/services/database';

interface updateProfilePayload {
  name: string;
}

export const updateProfile = async ({ name }: updateProfilePayload) => {
  const session = await auth();
  await prisma.user.update({
    where: {
      id: session?.user?.id,
    },
    data: {
      name,
    },
  });
};
