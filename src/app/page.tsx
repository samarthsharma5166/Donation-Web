import AimSection from "~/components/AimSection";
import BlogsSection from "~/components/BlogsSection";
import FeatureSection from "~/components/FeatureSection";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import HeroSection from "~/components/HeroSection";
import {  HydrateClient } from "~/trpc/server";

type SearchParams = Promise<{ lang: string }>
export default async function Home({ searchParams }: {searchParams: SearchParams}) {
  const searchParam = await searchParams;

  return (
    <HydrateClient>
      <Header/>
      <HeroSection/>
      <FeatureSection/>
      <AimSection searchParams={searchParam}/>
      <BlogsSection />
      <Footer searchParams={searchParam}/>
    </HydrateClient>
  );
}
