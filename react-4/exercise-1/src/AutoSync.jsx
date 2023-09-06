import { useEffect } from "react"

const syncRate = (rate) => {
    useEffect(() => {
        setRate(rate);
    },[])
}
export default syncRate;