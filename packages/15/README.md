# react redux ts 使用 demo

除了正常使用外，多出的操作是要导出 store 的类型、dispatch 的类型。

```ts
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
```

然后要在原本 `redux` 中 `useDispatch` 和 `useSelector` 的调用方法上面包一层。

```ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

然后再使用的时候，使用 `useAppDispatch` 和 `useAppSelector` 来代替之前的方法。
