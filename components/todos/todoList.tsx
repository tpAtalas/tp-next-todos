import { DATA_PATHNAME_IMAGE } from '@data/dataArrayOfObjects';
import { TypesPathnameImage } from '@lib/types';
import { atomPathnameImage } from '@states/misc';
import { selectorFilterTodoIds } from '@states/todos';
import { SmoothTransition } from '@ui/transitions/smoothTransition';
import Image from 'next/image';
import { Fragment as TodosFragment } from 'react';
import { useRecoilValue } from 'recoil';
import { Todo } from './todo';

export const TodoList = () => {
  const todoIds = useRecoilValue(selectorFilterTodoIds);
  const todoIdsReversed = [...todoIds].reverse();
  const imagePath = useRecoilValue(atomPathnameImage);
  const image = DATA_PATHNAME_IMAGE.find((item) => item.path === imagePath) || ({} as TypesPathnameImage);

  return (
    <TodosFragment>
      <ul>
        {todoIdsReversed.length !== 0 ? (
          <SmoothTransition>
            {todoIdsReversed.map((todo, index) => (
              <li key={todo._id?.toString()}>
                <Todo
                  todo={todo}
                  index={index}
                />
              </li>
            ))}
          </SmoothTransition>
        ) : (
          <SmoothTransition>
            <div className='mt-7 flex flex-col items-center justify-center'>
              <div className='flex h-full min-h-[300px] flex-col items-center justify-end'>
                <Image
                  width={300}
                  height={100}
                  src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${image.path}`}
                  alt={image.alt}
                />
              </div>
              <div className='mb-2 text-lg'>{image.title}</div>
              <div className='max-w-xs text-center text-sm tracking-wide text-slate-400 sm:max-w-md'>
                {image.description}
              </div>
            </div>
          </SmoothTransition>
        )}
      </ul>
    </TodosFragment>
  );
};
