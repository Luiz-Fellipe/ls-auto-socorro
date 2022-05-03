//Components

import { SectionAboutUs } from '~/components/SectionAboutUs';
import { SectionHome } from '~/components/SectionHome';

export default function Home() {
  return (
    <main>
      <SectionHome />
      <SectionAboutUs />
    </main>
  );
}
