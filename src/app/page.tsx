import AimSection from "~/components/AimSection";
import BlogsSection from "~/components/BlogsSection";
import FeatureSection from "~/components/FeatureSection";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeroSection from "~/components/HeroSection";
import {  HydrateClient } from "~/trpc/server";

export default async function Home({ searchParams }: { searchParams: { lang?: string | null} }) {


  return (
    <HydrateClient>
      <Header/>
      <HeroSection/>
      <FeatureSection/>
      <AimSection searchParams={searchParams}/>
      <BlogsSection />
      <Footer searchParams={searchParams}/>
    </HydrateClient>
  );
}
