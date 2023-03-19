import 'react';

declare module 'react' {
  type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;
}
