'use client'
import { CircularProgress } from "@mui/material"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Page = async () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/flight')
    }, [])

    return (
        <div>
            <div className="bg-customWhite left-0 top-0 bottom-0 right-0 fixed opacity-60 z-[1000]" />
            <div className="fixed left-0 right-0 -top-20 bottom-0 flex justify-center items-center z-[10000000]">
                <div className="flex flex-col items-center gap-4">
                <p className="text-blue-primary font-bold text-lg">WellCome To Flytoday</p>
                <CircularProgress size={120} />
                </div>
            </div>
        </div>
    )


}

export default Page