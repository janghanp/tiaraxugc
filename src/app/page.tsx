"use client";

import Introduction from "@/components/Introduction";
import UgcVideos from "@/components/UgcVideos";
import Services from "@/components/Services";
import TrustedBy from "@/components/TrustedBy";
import StickyCTAButton from "@/components/StickyCTAButton";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <>
      <div className={" w-full min-h-screen py-16"}>
        <div className={"w-full max-w-6xl mx-auto"}>
          <Introduction />
          <AboutMe />
          <UgcVideos />
          <Services />
          <TrustedBy />
          <StickyCTAButton />
        </div>
      </div>
    </>
  );
}
