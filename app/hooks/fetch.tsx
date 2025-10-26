"use client"
import * as React from "react"

export const Fetch = (
  // url:string
) => {

    const [facilities,setFacilities] = React.useState<{ image: string }[]>([])
    const [services,setServices] = React.useState<{ offer: string,content:string,image:string,other:string[] }[]>([])

    React.useEffect(() => {
      const getFacilities = async () => {
       try{
          const resp = await fetch("/data/data.json");
          const data = await resp.json()
          setFacilities(data.facilities)
          setServices(data.services)
       }catch(e){
        console.log(e)
       }
      }
      getFacilities()
    // },[url])
    },[])

  return {facilities,services}
}
