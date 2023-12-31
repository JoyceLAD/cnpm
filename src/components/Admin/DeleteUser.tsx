import useUser from "@/hooks/useUser";
import Input from "../Input";
import { ChangeEvent, useState } from "react";
import SearchButton from "../ButtonSearch";

const SearchUser = () =>{
    const [Search, setSearch] = useState('')

    const {data: users =[], isLoading,error,mutate} = useUser(Search)

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) =>{
        setSearch(event.target.value)
    }
    

    return(
        <>
        <Input
        type="text"
        placeholder="Search User"
        value={Search}
        onChange={handleSearch}
        label="Seacrh User"
        />
        <SearchButton/>
        {users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex flex-row gap-4">
            <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">{user.username}</p>
                <p className="text-neutral-400 text-sm">@{user.id}</p>
            </div>
            </div>
        ))}        
        </>
    )

}
export default SearchUser