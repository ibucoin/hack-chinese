import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return ( 
        <>
        <Link href={"/"} className="flex items-center font-bold">
            <Image src={"/next.svg"} alt="Hack-Chinese Logo" width="30" height="30" className="mr-4  rounded-sm object-contain" />
            <p className="text-xl">HACK CHINESE</p>
        </Link>
        </>
     );
}
 
export default Logo;