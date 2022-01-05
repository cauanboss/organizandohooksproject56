import { useCallback, useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { Button } from '../Button';
import { CounterContext } from '../../contexts/ExempleProvider/context';
import { decrementCounter, incrementCounter } from '../../contexts/ExempleProvider/actions';

export const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;
  console.log(counterState);

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  const increment = useCallback(() => {
    incrementCounter(counterDispatch);
  }, [counterDispatch]);

  const decrement = useCallback(() => {
    decrementCounter(counterDispatch);
  }, [counterDispatch]);

  return (
    <div>
      <Button onClick={increment} text="Increment" counter={counterState.counter} />
      <Button onClick={decrement} text="Decrement" counter={counterState.counter} />

      <h1>{counterState.counter}</h1>

      <h1>POSTS</h1>
      {postsState?.loading && (
        <p>
          <strong>Carregando posts....</strong>
        </p>
      )}
      {postsState?.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
