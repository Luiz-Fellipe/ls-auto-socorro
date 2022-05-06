//Content
import { config } from './content';

//Assets
import Logo from '~/public/images/logo.svg';

//Styles
import { MyHeader, HeaderContentAni, NavList, NavItemAni } from './styles';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 0.6,
        bounce: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const liVariants = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <MyHeader>
      <HeaderContentAni
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={headerVariants}
      >
        <Link href="/">
          <a aria-label="retornar">
            <Image
              src={Logo}
              width="107"
              height="117"
              alt="logo auto socorro"
            />
          </a>
        </Link>
        <NavList>
          {config.content.map((i) => (
            <NavItemAni
              variants={liVariants}
              transition={{ duration: 0.4 }}
              key={i.id}
            >
              <Link href={i.url}>
                <a>{i.title}</a>
              </Link>
            </NavItemAni>
          ))}
        </NavList>
      </HeaderContentAni>
    </MyHeader>
  );
}
