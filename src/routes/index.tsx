import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Menu from "~/components/sections/Menu";

import { Card } from "~/components/ui/Card";
import { HeroHeadline } from "~/components/ui/HeroHeadline";
import { SITE } from "~/config.mjs";





export default component$(() => {
  return (
    <>
    {/* <Hero/> */}
      <div class="flex flex-col gap-2">

<Card.Root class="py-8 px-4">
<div class="flex flex-col">
            <HeroHeadline title="KasLords Of The BlockDag"
              subtitle="Transform your online presence with our custom web design and development services. 
          We help business create stunning, fast, and secure websites."
              classes={{
                title: "text-4.5xl" // Overrides the default "text-4xl md:text-5xl"
              }}>
            </HeroHeadline>
            <div class=" sm:max-w-md  grid grid-cols-1 pt-4 gap-3 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-7xl">

              <a class="btn2" href="/">Mint KasLords

              </a>
              <a class="btn2" href="/">Check Rarity

              </a>
            </div>
          </div>
</Card.Root>


        <Menu title="Item Rarity Checker"
          subtitle="Browse the six KasLord character types and their inventory items."
          highlight="Rarity Guide"
        />





       


      


      </div>




    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
