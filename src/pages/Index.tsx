import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import QuickFacts from '@/components/home/QuickFacts';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import CTABanner from '@/components/home/CTABanner';
import ServicesPreview from '@/components/home/ServicesPreview';
import TownsReference from '@/components/home/TownsReference';
import RecommendedPartner from '@/components/home/RecommendedPartner';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cape Cod Plumbing Guide | Local Plumbing Resources & Tips</title>
        <meta
          name="description"
          content="Your trusted Cape Cod plumbing resource. Expert tips, local insights, and professional guidance for homeowners in Falmouth, Mashpee, Sandwich, and beyond."
        />
        <meta
          name="keywords"
          content="Cape Cod plumbing, plumbing tips, frozen pipes, older home plumbing, Falmouth plumbing, Mashpee plumbing"
        />
        <link rel="canonical" href="https://capecodplumbingguide.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Cape Cod Plumbing Guide',
            description: 'Local plumbing resources and tips for Cape Cod homeowners',
            url: 'https://capecodplumbingguide.com/',
            publisher: {
              '@type': 'Organization',
              name: 'Cape Cod Plumbing Guide',
              sameAs: 'https://bluepacificcapecod.com/plumbing-falmouth-ma/',
            },
          })}
        </script>
      </Helmet>
      <Layout>
        <Hero />
        <TrustBar />
        <QuickFacts />
        <FeaturedArticles />
        <CTABanner />
        <ServicesPreview />
        <TownsReference />
        <RecommendedPartner />
      </Layout>
    </>
  );
};

export default Index;
