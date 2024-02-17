import TABLE_DATA from '@/data/tasks.json'
import { z } from 'zod'

import { columns } from '@/components/tasks/columns'
import { DataTable } from '@/components/tasks/data-table'
import { TaskType, taskSchema } from '@/data/schema'
import { TabsContent } from '@radix-ui/react-tabs'
import { useEffect, useState } from 'react'

async function readTasks() {
	const tasks = TABLE_DATA

	return z.array(taskSchema).parse(tasks)
}

export const Tasks_Tab = () => {
	const [tasks, setTasks] = useState<TaskType[] | null>(null)

	const getTasks = async () => {
		const res = await readTasks()
		setTasks(res)
	}

	useEffect(() => {
		getTasks()
	}, [])

	return (
		<TabsContent value='tasks'>
			<DataTable data={tasks!} columns={columns} />
		</TabsContent>
	)
}
