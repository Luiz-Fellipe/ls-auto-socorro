//Components
import { Title } from '../global/Title';
import { PhotosSlider } from './components/PhotosSlider';

//Styles
import { WrapperPhotosGallery, ContentPhotosGallery } from './styles';

export function SectionPhotosGallery() {
  return (
    <WrapperPhotosGallery>
      <ContentPhotosGallery>
        <Title value="Galeria de Fotos" />
        <p>Veja algumas imagens de transportes que já realizamos.</p>
        <PhotosSlider />
      </ContentPhotosGallery>
    </WrapperPhotosGallery>
  );
}
