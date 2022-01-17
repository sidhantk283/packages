import { mount } from 'marketing/MarketingApp';
import React,{ useRef, useEffect } from 'react';

export default ()=>{
    const ref = useRef(null)
    console.log(ref)
    console.log(ref.current)
    useEffect(() => {
        mount(ref.current)
    })

    return <div ref={ref}></div>
}