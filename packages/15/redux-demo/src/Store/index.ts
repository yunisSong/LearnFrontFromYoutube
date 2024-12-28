import { configureStore } from '@reduxjs/toolkit';

import counterReduce from './Counter';

const store = configureStore({
  reducer: {
    counter: counterReduce,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
