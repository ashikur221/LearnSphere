import ApartSection from '@/components/home/ApartSection'
import Banner from '@/components/home/Banner'
import BannerGallery from '@/components/home/BannerGallery'
import CertifiedSection from '@/components/home/CertifiedSection'
import FuturesSection from '@/components/home/FuturesSection'
import JenniferSection from '@/components/home/JenniferSection'
import MissionSection from '@/components/home/MissionSection'
import NewsLetter from '@/components/home/NewsLetter'
import Testimonial from '@/components/home/Testimonial'
import { useFetchHomePageData } from '@/hooks/CMShook'


const Home = () => {

  const { data, isLoading } = useFetchHomePageData();
  console.log(data);

  return (
    <div className=''>
      <Banner data={data} isLoading={isLoading} />

      <BannerGallery data={data} isLoading={isLoading} />
      <FuturesSection />
      <ApartSection />
      <CertifiedSection />
      <JenniferSection />
      <Testimonial />
      <NewsLetter />
      <MissionSection />
    </div>
  )
}

export default Home