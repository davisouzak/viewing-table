import Logo from "../Logo/Logo"

export default function Header() {
    return (
        <header className="bg-white sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-gray-500 h-20 shadow-lg">
            <Logo />
        </header>
    )
}