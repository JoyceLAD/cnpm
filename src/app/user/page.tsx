'use client'
import React from 'react'
import Banner  from '@/components/Banner'
import CardItem from '@/components/CardItem'
import useSearchComic from '@/hooks/useSearchComic'
import { ClipLoader } from "react-spinners";

const HomePage = () => {
    // const s = '658fcd92f79fff39281928d6'
    // const {data: fetchComic, isLoading, isValidating} = useSearchComic(s as string)
    // if(!fetchComic){
    //     return (
    //         <div className="flex justify-center items-center h-full">
    //           <ClipLoader color="lightblue" size={80} />
    //         </div>
    //       )
      
    // }
     return(
        
        <>
            <div>
                
                <Banner/>
                {/* <CardItem
                data={fetchComic} */}
                
                {/* /> */}
            </div>
        </>
    )

}
export default HomePage;