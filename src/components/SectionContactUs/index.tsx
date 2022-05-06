//Components
import { Title } from '../global/Title';
import Link from 'next/link';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

//Styles
import {
  WrapperContactUs,
  ContentContactUs,
  SocialMediaContainer,
  PhonesContainer,
} from './styles';
import { Form } from './Form';

export function SectionContactUs() {
  const number = '5562985334022';
  const message =
    'Olá LS Auto Socorro, Peguei seu número através do site. Está Disponível ?';

  return (
    <WrapperContactUs>
      <ContentContactUs>
        <Title value="Fale Conosco" />
        <span>
          Entre em contato conosco através dos nossos canais de atendimento:
        </span>
        <h3>Telefones: </h3>

        <PhonesContainer>
          <Link href="tel:5562985334022">
            <a>
              (62) 98533-4022
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </Link>

          <Link href="tel:5562993726586">
            <a>(62) 99372-6586</a>
          </Link>
        </PhonesContainer>

        <h3>Email:</h3>
        <span>lsautosocorro@gmail.com</span>

        <h3>Redes Sociais:</h3>
        <SocialMediaContainer>
          <Link
            href={`https://api.whatsapp.com/send?phone=${number}&text=${message}`}
          >
            <a>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </Link>
        </SocialMediaContainer>

        <span>Ou envie uma mensagem através do formulário:</span>

        <Form />
      </ContentContactUs>
    </WrapperContactUs>
  );
}
