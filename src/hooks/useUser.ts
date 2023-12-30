import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useUser = (nameUser: string) => {
  const { data, error, isLoading, mutate } = useSWR(`/api/admin?query${nameUser}`, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useUser;