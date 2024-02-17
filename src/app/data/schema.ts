import { z } from 'zod'

export const taskSchema = z.object({
	id: z.string(),
	title: z.string(),
	status: z.string(),
	label: z.string(),
	priority: z.string(),
})

export type TaskType = z.infer<typeof taskSchema>
