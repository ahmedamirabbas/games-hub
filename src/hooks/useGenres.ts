import useData from './useData';

export interface Genre {
  id: number;
  name: string;
}

const useGernes = () => useData<Genre>('/genres');

export default useGernes;
