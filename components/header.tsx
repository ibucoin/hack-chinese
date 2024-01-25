import Logo from "./logo";

const Header = () => {
    const scrolled = true
    return (
       <div className={`fixed top-0 w-full flex  justify-center ${
        scrolled ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl":"bg-white/0"} z-30 transition-all`}>
            <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
                <Logo></Logo>
            </div>
       </div>
    )
}

export default Header;