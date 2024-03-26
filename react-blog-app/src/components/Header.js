import './component-styles/header.css'
export default function Header() {
    return (
        <header className="header">
            <a className='app-logo' href="/">BlogApp</a>
            <nav>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </nav>
        </header>
    )
}