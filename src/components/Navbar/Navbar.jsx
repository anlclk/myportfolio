
export default function Navbar() {
    return(
        <nav className="navbar bg-gray-300 py-7 bottom-0">
            <ul className="flex gap-10 px-5 justify-between">
                <li><a href="#" className="text-lg">Anıl Çelik</a></li>
                <li>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="fill-black-200">
                        <path d="M120-80v-80h720v80H120Zm0-240v-80h720v80H120Zm0-240v-80h720v80H120Zm0-240v-80h720v80H120Z"/>
                    </svg>
                  </a>
                </li>
            </ul>
        </nav>
    );
}