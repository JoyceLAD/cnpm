//Lay tat ca thong tin nguoi dung co trong CSDL
import useSWR from 'swr'
import fetcher from '@/libs/fetcher'
const useUsers = () =>{
    const {data, isLoading, error, mutate} = useSWR('/api/admin/searchAllUser',fetcher)
    return{
        data,
        isLoading,
        error,
        mutate
    }
}

export default useUsers