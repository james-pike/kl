import { component$ } from "@builder.io/qwik";
import Carousel from "../ui/Carousel";
import { Card } from "../ui/Card";
import { LuSparkles, LuUsers } from '@qwikest/icons/lucide';

export default component$(() => {
  return (
    <Card.Root class="">
      <section class="min-h-[80vh] flex items-center">
        <div class="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
          <div class="bg-gradient-to-r from-gray-200 to-gray-50 dark:from-gray-950 dark:to-gray-900 h-full flex items-center px-8">
            <div class="w-full">
              <h1 class="text-4.5xl md:text-7xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200 animate-hero-text">
                <span class="text-secondary-800">KasLords</span> <br class="hidden lg:block" />
                Of The <span class="text-secondary-800">BlockDag</span> <br class="hidden lg:block" />
              </h1>
              <div class="max-w-3xl mx-auto lg:max-w-none">
                <p class="text-xl text-muted mb-5 dark:text-slate-300 animate-hero-subtitle">
                  Own a piece of this legendary saga, forged in the fires of creativity and secured on the BlockDag—join the KasLords and claim your dominion today!
                </p>
                <div class="max-w-xs sm:max-w-md animate-hero-buttons m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-3 lg:justify-start lg:m-0 lg:max-w-7xl">
                  <div class="flex w-full sm:w-auto">
                    <a class="btn btn-primary sm:mb-0 w-full" href="https://www.kaspa.com/nft/collections/Kaslords">
                      <LuSparkles class="w-5 h-5 mr-2" /> Mint KasLords
                    </a>
                  </div>
                  <div class="flex w-full sm:w-auto">
                    <a class="btn btn-secondary sm:mb-0 w-full" href="https://t.me/+pHZ9UA7XIDA2YmIx">
                      <LuUsers class="w-5 h-5 mr-2" /> Join The Clan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-full w-full flex items-center justify-center">
            <div class="max-w-[800px] max-h-[600px] w-full h-full aspect-[4/3] relative">
              <Carousel />
            </div>
          </div>
        </div>
      </section>
    </Card.Root>
  );
});
