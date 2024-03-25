import { api } from '~/trpc/server';

import ColumnHeader from './columnHeader';
import AddTask from './addTaskButton';
import Task from './task';

export interface IColumn {
  id: string;
  title: string;
} 

export default async function Column({
    id,
    title,
}: IColumn) {
  const tasks = await api.tasks.getByStatusId({statusId: id});

  return (
    <div className="shrink-0 min-w-80 basis-1/4 p-4 bg-stone-100 border-r">
      <ColumnHeader id={id} title={title} />
      {
        tasks.map(task => <Task key={task.id} id={task.id} title={task.title} description={task.description}/>)
      }
      <AddTask statusId={id} />
    </div>
  )
};
