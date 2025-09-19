import Navbar from "../component/Navbar";
import Card from "./componentss/Card";

export default function about() {
    return (
        <>
        <Navbar></Navbar>
    <div className="pt-10 px-10">
        <Card title="Komponen 1" description="Ini adalah komponen pertama"/>
    </div> 
    <div className="pt-10 px-10">
        <Card title="Komponen 2" description="Ini adalah komponen kedua"/>
    </div>
    </>
    );
}