import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="h-20 flex justify-between items-center px-10 bg-[#F4F6F7]">
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={100}
                    height={80}
                    className="h-20 w-auto shrink-0"
                />
            </Link>
            <div className="flex space-x-4">
                <Link href="/" className="navbar-link">
                    HOME
                </Link>
                <Link href="/about" className="navbar-link">
                    ABOUT
                </Link>
                <Link href="/register" className="navbar-link">
                    REGISTER
                </Link>
                <Link href="/login" className="navbar-link">
                    LOGIN
                </Link>
                <Link href="/contact" className="navbar-link bg-primary text-white px-4 rounded-md">
                    CONTACT
                </Link>
            </div>
        </nav>
    );  
}