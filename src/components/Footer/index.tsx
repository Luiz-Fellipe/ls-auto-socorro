//Components
import Image from 'next/image';
import Link from 'next/link';

//Assets
import Logo from '~/public/images/logo.svg';
import { config } from '../Header/content';

//Styles
import { WrapperFooter, LogoContainer } from './styles';

export function Footer() {
  return (
    <WrapperFooter>
      <LogoContainer>
        <Image
          src={Logo}
          width="107"
          height="117"
          alt="logo auto socorro"
          layout="fill"
        />
      </LogoContainer>

      <nav>
        <ul>
          {config.content.map((item) => (
            <li key={item.id}>
              <Link href={item.url}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <span>Todos os Direitos Reservados 2022 - LS Auto Socorro</span>
      <span>CNPJ: 46.226.020/0001-86</span>
    </WrapperFooter>
  );
}
