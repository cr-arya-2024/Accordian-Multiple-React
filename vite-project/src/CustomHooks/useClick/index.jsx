import { useEffect } from "react";

export default function useOutsideClick(ref, handler) {
    function listener(event) {
        if (!ref.current || ref.current.contains(event.target)) {
        //   console.log(!ref.current);
          
            return
        }
        handler(event)
    }
    useEffect(() => {
       listener
        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)
        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }
    },[handler, ref])
}