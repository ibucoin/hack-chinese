import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return ( 
        <>
        <Link href={"/"} className="flex items-center font-bold">
            <Image src={"/logo.png"} alt="Hack-Chinese Logo" width="40" height="40" className="mr-4  rounded-sm object-contain" />
            <p className="text-xl">HACK CHINESE</p>
        </Link>
        </>
     );
}
 
export default Logo;