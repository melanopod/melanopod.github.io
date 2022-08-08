import { useState } from "react";
import { FaDiscord, FaSpotify, FaTwitter, FaYoutube } from 'react-icons/fa';

import SocialButtonRow from "./components/SocialButtonRow";
import SocialButton from "./components/SocialButton";
import PageWrapper from "./PageWrapper";
import SpinningPanda from "./components/SpinningPanda";

function Page() {
  return (
    <PageWrapper>
      <div className="flex flex-row anim-enlargeXs sm:overflow-hidden overflow-auto">
        <div className="sm:w-full lg:flex-grow xl:w-1/2 sm:flex flex-col sm:items-center sm:justify-center h-screen">
          <div className="md:p-36 p-8 md:space-y-20 space-y-6 mt-12 md:mt-0">
            <h1 className="font-black lg:text-7xl md:text-6xl text-4xl">hey! i'm <span className="text-mlp-accent">melano</span></h1>
            <p className="md:text-4xl text-2xl w-full md:w-9/12 xl:w-full font-normal">
              My name is melano - I enjoy history,
              music and darts. I'm also a
              I also own a <a className="underline underline-offset-4" href="https://discord.gg/2uY7VCANjj">discord server.</a> I hope to see you around!
            </p>
            <div className="space-y-6">
              <SocialButtonRow>
                <SocialButton
                  displayIcon={ <FaDiscord size="45px"/> }
                  link="https://discord.gg/2uY7VCANjj"
                  text="melano#0001"
                  key="discord"
                />
                <SocialButton
                  displayIcon={ <FaTwitter size="45px"/> }
                  link="https://twitter.com/melanopod"
                  text="@melanopod"
                  key="twitter"
                />
              </SocialButtonRow>
              <SocialButtonRow>
                <SocialButton
                  displayIcon={ <FaSpotify size="45px"/> }
                  link="https://open.spotify.com/user/1csewnt3hdzg577xhnmrtp0ip"
                  text="@melanopod"
                  key="spotify"
                />
                <SocialButton
                  displayIcon={ <FaYoutube size="45px"/> }
                  link="https://youtube.com/channel/UCyku6nOddVJhSGiYrw17n5A"
                  text="melanopod"
                  key="youtube"
                />
              </SocialButtonRow>
            </div>
          </div>
        </div>
        <div className="w-1/2 hidden xl:flex items-center ml-auto translate-x-8">
          <SpinningPanda/>
          <div className="absolute w-60vh h-60vh right-0">
            <div className='bg-mlp-circ w-full h-full rounded-full anim-enlargeSm'></div>
          </div>
          <div className="absolute w-60vh h-60vh right-0 scale-150">
            <div className='bg-mlp-circ w-full h-full rounded-full anim-compact'></div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Page
