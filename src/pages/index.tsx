//Components

import { SectionAboutUs } from '~/components/SectionAboutUs';
import { SectionHome } from '~/components/SectionHome';
import { SectionWhatWeTransport } from '~/components/SectionWhatWeTransport';

export default function Home() {
  return (
    <main>
      <SectionHome />
      <SectionAboutUs />
      <SectionWhatWeTransport />
    </main>
  );
}
