import { Route, Routes } from "react-router"
import { Main } from '../components/adminCheck/MainLoginpage';
import AddFlat from "../components/addFlat/AddFlat";
import { Home } from "../components/home/Home";
import { Detail } from "../components/detailPage/Detail";

export const Rout = () =>{
    return(<>
        <Routes>
        <Route  />
        <Route path="/adminCheck" element={<Main/>}/>
        <Route path="/addFlat" element={<AddFlat/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Detail/:id" element={<Detail/>}/>
        </Routes>
        </>)
}