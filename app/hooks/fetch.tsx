"use client"
import * as React from "react"

export const Fetch = (url:string) => {

    const [facilities,setFacilities] = React.useState<{ image: string }[]>([])
    const [services,setServices] = React.useState<{ offer: string,content:string,image:string,other:string[] }[]>([])

    React.useEffect(() => {
      const getFacilities = async () => {
        const resp = await fetch(url);
        const data = await resp.json()
        setFacilities(data)
        setServices(data)
      }
      getFacilities()
    },[url])

  return {facilities,services}
}
