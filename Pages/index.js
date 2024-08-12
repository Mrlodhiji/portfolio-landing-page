import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </>
  );
}
import Head from 'next/head';

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Portfolio Landing Page</title>
//         <meta name="description" content="A portfolio landing page created with Next.js" />
//       </Head>
//       {/* Components */}
//     </>
//   );
// }