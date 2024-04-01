import Typography from "@/lib/typography/typography.component";
import InstagramIcon from "@/icons/InstagramIcon";
import FacebookIcon from "@/icons/FacebookIcon";
import PinterestIcon from "@/icons/PinterestIcon";
import TickTokIcon from "@/icons/TicTokIcon";

export default function Footer() {
  const footerLinks = [
    {
      name: 'About Modimal',
      links: [
        { name: 'Collection', url: '/collection' },
        { name: 'Sustainability', url: '/sustainability' },
        { name: 'Privacy Policy', url: '/privacy_policy' },
        { name: 'Support System', url: '/support_system' },
        { name: 'Terms & Conditions', url: '/terms_conditions' },
        { name: 'Copyright Notice', url: '/copyright_notice' },
      ]
    },
    {
      name: 'Help & Support',
      links: [
        { name: 'Orders & Shipping', url: '/orders_shipping' },
        { name: 'Returns & Refunds', url: '/returns_refunds' },
        { name: 'FAQs', url: '/faqs' },
        { name: 'Contact Us', url: '/contact_us' },
      ]
    },
    {
      name: 'Join Up',
      links: [
        { name: 'Modimal Club', url: '/modimal_club' },
        { name: 'Careers', url: '/careers' },
        { name: 'Visit Us', url: '/visit_us' },
      ]
    },
  ];

  return (
    <footer className="bg-neutralGray flex items-start space-x-20 px-20 py-10 justify-between">
      <div className="flex flex-col">
        <Typography
          textType={'heading5'}
          text={'Join our club, get 15% off for your Birthday'}
          color={'white'}
          className="mb-6"
        />
        <Typography
          textType={'overlineSM'}
          text={'By Submittng your email, you agree to receive advertising emails from Modimal.'}
          color={'white'}
          className="mb-[100px]"
        />

        <div className="flex items-center space-x-4 mb-10">
          <InstagramIcon/>
          <FacebookIcon/>
          <PinterestIcon/>
          <TickTokIcon/>
        </div>
        <Typography textType={'captionMD'} text={'2023 modimal. All Rights Reserved.'} color={'grayLight'}/>
      </div>

      <div className="flex items-start space-x-14">
        {footerLinks.map((footerLink, index) => (
          <div key={index} className="flex flex-col">
            <Typography textType={'heading5'} text={footerLink.name} color={'white'} className="mb-6"/>
            {footerLink.links.map((link, index) => (
              <a key={index} href={link.url}>
                <Typography
                  textType={'bodyLG'}
                  text={link.name}
                  color={'white'}
                  hoverColor={'white'}
                  className="mb-2"
                />
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}
