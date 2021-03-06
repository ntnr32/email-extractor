import React from 'react'

type NavBarProps = {
    brandName: string
}

type MenuItem = {
    name: string,
    key: string,
    url: string
}

const Nav: React.FunctionComponent<NavBarProps> = ({ brandName }) => {

    const menuItems: Array<MenuItem> = [{
        key: "1",
        name: "github",
        url: "https://github.com/ntnr32/email-extractor"
    }]

    return (
        <section className="navbar">
            <nav className="w-full relative py-3 mb-3 shadow-lg bg-transparent">
                <div className="flex  items-center justify-between">
                    <div className="w-full flex justify-between md:w-auto px-4">
                        <div className="flex text-white">
                            <svg className="w-8 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase" href="/">
                                {brandName}
                            </a>
                        </div>
                        {/* <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none" type="button">
                            <svg className="w-8 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button> */}
                    </div>
                    <div className="flex flex-row flex-grow items-center">
                        <ul className="flex flex-col md:flex-row list-none ml-auto">
                            {
                                menuItems && menuItems.map(x => <li className="px-4" key={x.key}>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={x.url}
                                        className="px-3 py-2 flex text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    >
                                        {x.name}
                                    </a>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Nav;
