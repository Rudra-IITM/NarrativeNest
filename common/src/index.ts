import z from 'zod';

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(3).optional(),
});

export type SignInInput = z.infer<typeof signInSchema>

export const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export type SignUpInput = z.infer<typeof signUpSchema>

export const createPostSchema = z.object({
    title: z.string().min(3),
    content: z.string().min(3),
});

export type CreatePostInput = z.infer<typeof createPostSchema>

export const updatePostSchema = z.object({
    title: z.string().min(3),
    content: z.string().min(3),
    id: z.string().uuid(),
});

export type UpdatePostInput = z.infer<typeof updatePostSchema>