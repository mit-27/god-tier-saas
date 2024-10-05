"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import Cookies from 'js-cookie';



const AnalyticsPage = () => {


  const onCallApi = async () => {

    const response = await axios.get(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("access_token")}`,
                    },
                }
            );

    console.log('Response is: ', JSON.stringify(response.data));


  }

  

    return (
      <div className="w-[60%] mx-auto mt-10 min-h-full">
        <h1>Analytics</h1>
        <Button onClick={() => onCallApi()}>Check API</Button>
      </div>
    )
  }
    
  export default AnalyticsPage