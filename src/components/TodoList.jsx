import { useState } from 'react';
import {
  useAddTodoListMutation,
  useDeleteTodoListMutation,
  useGetTodoListsQuery,
} from '../api/api';

const TodoList = () => {
  const { data: todolists = [], error, refetch } = useGetTodoListsQuery();
  const [newListname, setnewListName] = useState('');
  const [addTodoList] = useAddTodoListMutation();
  const [deleteTodoList] = useDeleteTodoListMutation();
  const handleTodoList = async () => {
    if (newListname) {
      await addTodoList({ name: newListname });
      setnewListName('');
      refetch();
    }
  };

  console.log(todolists, 'sss');

  const handleDeleteTodoList = async (id) => {
    await deleteTodoList(id);
    refetch();
  };
  if (error) {
    return <div>Error fetching data</div>;
  }
  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todolists.map((list) => (
          <li key={list.id}>
            {list.name}
            <button onClick={() => handleDeleteTodoList(list._id)}>
              delete
            </button>
          </li>
        ))}
        <div>
          <input
            type="text"
            value={newListname}
            onChange={(e) => setnewListName(e.target.value)}
          />
          <button onClick={handleTodoList}>add</button>
        </div>
      </ul>
    </div>
  );
};

export default TodoList;
