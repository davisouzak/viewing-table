import logo from "../assets/Logo.svg"

export default function Logo() {
    return (
        <div className="logo h-full w-full flex items-center">
            <img src={logo} alt="logo" />
        </div>
    )
}