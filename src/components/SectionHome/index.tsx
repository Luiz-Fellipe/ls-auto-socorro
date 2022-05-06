//Libs
import Image from 'next/image';
import Link from 'next/link';
//images
import LogoWhatsapp from '~/public/images/whatsapp.svg';

//Styles
import { WrapperHome, ContentHome, BodyHome, FooterHome } from './styles';

export function SectionHome() {
  const number = '5562985334022';
  const message =
    'Olá LS Auto Socorro, Peguei seu número através do site. Está Disponível ?';

  return (
    <WrapperHome id="home">
      <ContentHome>
        <BodyHome>
          <h1>
            ATENDIMENTO EM <span>TODO O BRASIL</span>
          </h1>

          <p>
            Nós atendemos em todo o território nacional com o máximo de
            <strong> segurança e agilizade.</strong>
          </p>

          <Link href="#fale-conosco">
            <a>FALE CONOSCO</a>
          </Link>
        </BodyHome>
      </ContentHome>
      <FooterHome>
        <Link
          href={`https://api.whatsapp.com/send?phone=${number}&text=${message}`}
        >
          <a aria-label="retornar" target="_blank">
            <span>(62) 98533-4022</span>
          </a>
        </Link>
        <Image
          width="24px"
          height="28px"
          src={LogoWhatsapp}
          alt=" logo do whatsapp"
        />
      </FooterHome>
    </WrapperHome>
  );
}
