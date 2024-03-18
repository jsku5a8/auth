import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://api.elchocrud.pro/api/v1/61db5ab98bc8fb920a2a06dad38968db/mytodolists',
  }),
  endpoints: (builder) => ({
    getTodoLists: builder.query({
      query: () => '',
    }),
    addTodoList: builder.mutation({
      query: (newList) => ({
        url: '',
        method: 'POST',
        body: newList,
      }),
    }),

    deleteTodoList: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});
export const {
  useGetTodoListsQuery,
  useAddTodoListMutation,
  useDeleteTodoListMutation,
} = api;
