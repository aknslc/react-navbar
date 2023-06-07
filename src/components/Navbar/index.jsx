import { useEffect } from "react";


const Navbar = ({ data }) => {

    useEffect(() => {
        console.log(data)
    }, [])

    const renderLinks = (links) => {
        const { text, link, css, functionality, children } = links;
        const hasChildren = children && children.length > 0;


        if (functionality === 'parentButton') {

            return (
                <li key={text} className="relative">
                    <a className="inline-block my-5 font-semibold " href={link}>{text}</a>
                    {hasChildren && (
                        <ul className={`ml-5 `}>
                            {children.map((child) => renderLinks(child))}
                        </ul>
                    )}
                </li>
            )

        } else if (functionality === 'mainButton') {
            return (
                <li key={text}>
                    <a className="" href={link}>{text}</a>
                </li>
            )
        } else if (functionality === 'childButton') {
            return (
                <li key={text} className="" >
                    <a className="font-light" href={link}>{text}</a>
                </li>
            )
        }


    };

    return (
        <nav className="bg-gray-200 ">
            <ul className="flex justify-between items-center ">
                {data.map((links) => (
                    renderLinks(links)
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
