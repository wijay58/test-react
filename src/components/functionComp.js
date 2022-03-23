import {useState,useEffect} from 'react';

function Comp() {
    const [vari, setVari] = useState("component");
    useEffect(()=> {
        setVari("Saint Tropez")
    },[])
    return (
        <h1>Welcome to the {vari}</h1>
    )
}
export default Comp;