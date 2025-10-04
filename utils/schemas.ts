import { z } from 'zod'

export const profileSchema = z.object({
    firstName: z.string().min(2, { message: 'Firstname must be at least 2 characters' }),
    lastName: z.string().min(2, { message: 'Lastname must be at least 2 characters' }),
    userName: z.string().min(2, { message: 'Username must be at least 2 characters' })
})

const validateImage = () => {
    const maxFileSize = 1024 * 1024
    return z.instanceof(File)
        .refine((file) => {
            return file.size <= maxFileSize
        }, 'File size must be less than 1MB')
}

export const imageSchema = z.object({
    image: validateImage()
})

export const landmarkSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'ชื่อต้องมากกว่า 2 อักขระ' })
        .max(30, { message: 'ชื่อต้องน้อยกว่า 30 อักขระ' }),
    category: z.string(),
    description: z
        .string()
        .min(2, { message: 'รายละเอียดต้องมากกว่า 2 อักขระ' })
        .max(200, { message: 'รายละเอียดต้องน้อยกว่า 200 อักขระ' }),
    price: z.coerce.number().int().min(0, { message: 'ราคาต้องมากกว่า 0' }),
    province: z.string(),
    lat: z.coerce.number(),
    lng: z.coerce.number(),
})

export const validateWithZod = <T>(schema: z.ZodType<T>, data: unknown): T => {
    const result = schema.safeParse(data)
    if (!result.success) {
        // code
        const errors = result.error.issues.map((issue) => issue.message)
        throw new Error(errors.join(','))
    }
    return result.data
}