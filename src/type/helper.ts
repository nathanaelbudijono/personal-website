export type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T;
export type Merge<P, T> = Omit<P, keyof T> & T;
export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
