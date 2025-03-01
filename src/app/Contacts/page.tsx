import Link from "next/link"
import Navbar from "../components/navbar"

export default function Contact(){
    return (
        <div>
            <Navbar/>
            <h1>
                Hubungi saya disini
            </h1>
            <p>
                082172892090
            </p>
            <Link href="/">Kembali</Link>
        </div>
    )
}