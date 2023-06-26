import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL,
  }),
  reducerPath: 'adminApi',
  tagTypes: ['User', 'Image', 'Users'],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `user/${id}`,
      providesTags: ['User'],
    }),
    getImage: build.query({
      query: () => 'image',
      providesTags: ['Image'],
    }),
    getUsers: build.query({
      query: () => 'user',
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetUserQuery, useGetImageQuery, useGetUsersQuery } = api;
