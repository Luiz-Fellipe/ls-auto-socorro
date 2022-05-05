//Components
import { SectionAboutUs } from '~/components/SectionAboutUs';
import { SectionHome } from '~/components/SectionHome';
import { SectionPhotosGallery } from '~/components/SectionPhotosGallery';
import { SectionWhatWeTransport } from '~/components/SectionWhatWeTransport';

export default function Home() {
  return (
    <main>
      <SectionHome />
      <SectionAboutUs />
      <SectionWhatWeTransport />
      <SectionPhotosGallery />
    </main>
  );
}
