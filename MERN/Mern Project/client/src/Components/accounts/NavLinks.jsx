import { MdOutlineAccountCircle } from 'react-icons/md'
import { AiFillCar, AiFillCarryOut } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'

const links = [
    {
        name: "My Profile",
        icon: <MdOutlineAccountCircle className="h-5 w-5" />,
        href: "profile"
    },
    {
        name: "My Reservations",
        icon: <AiFillCarryOut className="h-5 w-5" />,
        href: "reservations"
    },
    {
        name: "My cars",
        icon: <AiFillCar className="h-5 w-5" />,
        href: "cars"
    },

];

const NavLinks = () => {
    const { subpage } = useParams();
    console.log(subpage);
    return <nav className='flex items-center space-x-5'>
        {links.map((link, index) => (
            <Link
                key={index}
                to={`/account/${link.href}`}
                className={`${subpage === link.href ? 'bg-blue-500' : subpage === undefined && index === 0 ? 'bg-blue-500 text-white text-center' : ''}
                w-fit flex items-center space-x-1 px-3 py-2 rounded-xl`}>
                <i>{link.icon}</i>
                <span className='text-xs'>{link.name}</span>

            </Link>
        ))}
    </nav>
}

export default NavLinks