"use client"

import { api } from "@/lib/api-client"


const AnalyticsPage = () => {

  const {data,isLoading,isError} = api.getTodo.useQuery({
    queryKey: ['todos'],
  });

    return (
      <div className="w-[60%] mx-auto mt-10 min-h-full">
        <h1>{isLoading ? 'Loading...' : JSON.stringify(data?.body)}</h1>
      </div>
    )
  }
    
  export default AnalyticsPage