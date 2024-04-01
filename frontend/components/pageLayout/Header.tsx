import LogoIcon from "@/icons/LogoIcon";
import SearchIcon from "@/icons/SearchIcon";
import UserIcon from "@/icons/UserIcon";
import FavoriteIcon from "@/icons/FavoriteIcon";
import ShoppingBagIcon from "@/icons/ShoppingBagIcon";
import Typography from "@/lib/typography/typography.component";

export default function Header() {
  const links = [
    { name: 'Collection', url: '/collection' },
    { name: 'New In', url: '/new-in' },
    { name: 'Modiweek', url: '/modiweek' },
    { name: 'Plus Size', url: '/plus_size' },
    { name: 'Sustainability', url: '/sustainability' },
  ];

  return (
    <header className="w-full z-50 fixed">
      <div className="bg-primaryDark flex items-center justify-center py-1">
        <Typography textType={'overlineSM'} text={'Enjoy Free Shipping On All Orders'} color={'white'}/>
      </div>
      <div className="relative h-58 md:h-[80px] w-full px-4 md:px-20 border-b pt-4">
        <div className="flex justify-between items-center ">
          <a href={'/'}>
            <LogoIcon/>
          </a>
          <ul className="flex items-center space-x-6">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>
                  <Typography textType={'bodyLG'} text={link.name} color={'black'} hoverColor={'black'}/>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-6">
            <button>
              <SearchIcon/>
            </button>
            <button>
              <UserIcon/>
            </button>
            <button>
              <FavoriteIcon/>
            </button>
            <button>
              <ShoppingBagIcon/>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
