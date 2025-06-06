import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { Tabs } from '../ui/Tabs';
import { Card } from '../ui/Card';

// Define the single wizard image for the entire set
const wizardImage = {
  src: '/images/elf.jpg',
  alt: 'Elf Avatar',
  description: "A radiant forest goddess whose beauty rivals starlight, her arrows strike with divine precision.",
  rarity: 20,
};

// Define the wizard objects with categories, images, and metadata
const wizardCategories = [
  {
    category: 'Weapon',
    images: [
      {
        src: '/images/moonblade.png',
        alt: 'Moon Blade',
        title: 'Moon Blade',
        description: 'Lunar blade radiates mystic moonlight.',
        rarity: 15,
      },
      {
        src: '/images/elvenbow.png',
        alt: 'Elven Bow',
        title: 'Elven Bow',
        description: 'Elven bow ensures pinpoint accuracy.',
        rarity: 20,
      },
      {
        src: '/images/mithrodinsword.png',
        alt: 'Mithrodin Sword',
        title: 'Mithrodin Sword',
        description: 'Mithril sword boasts unbreakable might.',
        rarity: 20,
      },
      {
        src: '/images/mysticspear.png',
        alt: 'Mystic Spear',
        title: 'Mystic Spear',
        description: 'Arcane spear surges with energy.',
        rarity: 15,
      },
      {
        src: '/images/spiritstaff.png',
        alt: 'Spirit Staff',
        title: 'Spirit Staff',
        description: 'Ethereal staff summons ghostly forces.',
        rarity: 5,
      },
      {
        src: '/images/crescentscepter.png',
        alt: 'Crescent Moon Scepter',
        title: 'Crescent Moon Scepter',
        description: 'Crescent scepter channels lunar power.',
        rarity: 0.4,
      },
    ],
  },
  {
    category: 'Outfit',
    images: [
      {
        src: '/images/naturegown.png',
        alt: 'Nature Gown',
        title: 'Nature Gown',
        description: 'Forest gown pulses with vitality.',
        rarity: 25,
      },
      {
        src: '/images/moonlightarmor.png',
        alt: 'Moonlight Armor',
        title: 'Moonlight Armor',
        description: 'Lunar armor shields with radiance.',
        rarity: 10,
      },
      {
        src: '/images/royalattire.png',
        alt: 'Royal Attire',
        title: 'Royal Attire',
        description: 'Regal attire exudes majestic aura.',
        rarity: 15,
      },
      {
        src: '/images/leafrobe.png',
        alt: 'Leaf Robe',
        title: 'Leaf Robe',
        description: 'Verdant robe thrives with nature.',
        rarity: 25,
      },
      {
        src: '/images/embergown.png',
        alt: 'Verdent Ember Gown',
        title: 'Verdent Ember Gown',
        description: 'Emerald gown flickers with flames.',
        rarity: 25,
      },
      {
        src: '/images/goldgown.png',
        alt: 'Gold Celestial Raiment',
        title: 'Gold Celestial Raiment',
        description: 'Golden raiment shines with divinity.',
        rarity: 0.4,
      },
    ],
  },
  {
    category: 'Accessory',
    images: [
      {
        src: '/images/naturependant.png',
        alt: 'Nature Pendant',
        title: 'Nature Pendant',
        description: 'Earthy pendant hums with vigor.',
        rarity: 20,
      },
      {
        src: '/images/moonstones.png',
        alt: 'Moonstore Earrings',
        title: 'Moonstore Earrings',
        description: 'Lunar earrings sparkle with charm.',
        rarity: 15,
      },
      {
        src: '/images/teargemstone.png',
        alt: 'Tear Gemstone',
        title: 'Tear Gemstone',
        description: 'Mystic gemstone weeps with light.',
        rarity: 25,
      },
      {
        src: '/images/spiritnecklace.png',
        alt: 'Spirit Necklace',
        title: 'Spirit Necklace',
        description: 'Spectral necklace binds ghostly essence.',
        rarity: 10,
      },
      {
        src: '/images/wisdomowl.png',
        alt: 'Spirit Necklace',
        title: 'Wisdom Owl Seeker',
        description: 'Kaspian seeker owl of wisdom.',
        rarity: 5,
      },
      {
        src: '/images/celestialcollar.png',
        alt: 'Celestial Collar',
        title: 'Celestial Collar',
        description: 'Starry collar gleams with power.',
        rarity: 0.4,
      },
    ],
  },
  {
    category: 'Head',
    images: [
      {
        src: '/images/bloodstonediaden.png',
        alt: 'Bloodstone Diaden',
        title: 'Bloodstone Diaden',
        description: 'Crimson diaden throbs with energy.',
        rarity: 25,
      },
      {
        src: '/images/flowercrown.png',
        alt: 'Flower Crown',
        title: 'Flower Crown',
        description: 'Floral crown blooms with grace.',
        rarity: 15,
      },
      {
        src: '/images/solaracrown.png',
        alt: 'Solara Crown',
        title: 'Solara Crown',
        description: 'Solar crown blazes with might.',
        rarity: 10,
      },
      {
        src: '/images/blossomcrown.png',
        alt: 'Verdent Blossom Crown',
        title: 'Verdent Blossom Crown',
        description: 'Lush crown sprouts verdant blossoms.',
        rarity: 25,
      },
      {
        src: '/images/goldendiaden.png',
        alt: 'Golden Leaf Diaden',
        title: 'Golden Leaf Diaden',
        description: 'Golden diaden sprouts radiant leaves.',
        rarity: 0.4,
      },
    ],
  },
];

export const ElfTabs = component$(() => {
  // Signal to track the active tab index
  const activeTab = useSignal(0);
  // Signal to track the selected image object (to access metadata)
  const selectedImage = useSignal<{ src: string; alt: string; title: string; description: string; rarity: number } | null>(
    wizardCategories[0]?.images[0] || null
  );

  // Update selectedImage when activeTab changes
  useTask$(({ track }) => {
    track(() => activeTab.value);
    if (wizardCategories[activeTab.value]?.images[0]) {
      selectedImage.value = wizardCategories[activeTab.value].images[0];
    }
  });

  // Function to determine rarity class and color
  const getRarityClass = (rarity: number) => {
    if (rarity <= 1) {
      return { text: 'legendary', color: 'text-orange-400' };
    } else if (rarity <= 5.1) {
      return { text: 'rare', color: 'text-yellow-400' };
    } else if (rarity <= 15.1) {
      return { text: 'uncommon', color: 'text-blue-400' };
    } else {
      return { text: 'common', color: 'text-green-400' };
    }
  };

  return (
    <div class="flex w-full space-x-0 sm:space-x-2">
      {/* Far Left: Single wizard image (outside tabs, 1/4 width) */}
      <div class="hidden sm:block w-1/4 space-y-2 h-full items-end flex">
        <Card.Content class="space-y-2 p-0">
          <div class="flex items-center justify-center">
            <img
              src={wizardImage.src}
              alt={wizardImage.alt}
              class="max-w-full max-h-full rounded-sm object-contain mx-auto"
            />
          </div>
          <p class="text-xs p-2 pt-0 text-gray-400">{wizardImage.description}</p>
        </Card.Content>
      </div>

      {/* Right 3/4: Tabs and content */}
      <div class="w-full sm:w-3/4 m-0">
        <Tabs.Root class="w-full">
          {/* Dynamically generate tabs */}
          <Tabs.List class="grid w-full grid-cols-4 p-0">
            {wizardCategories.map((wizard, index) => (
              <Tabs.Tab class="py-1" key={index} onClick$={() => (activeTab.value = index)}>
                {wizard.category}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {/* Dynamically generate panels */}
          {wizardCategories.map((wizard, index) => (
            <Tabs.Panel key={index}>
              <Card.Content class="p-0">
                {/* Mobile: Stack showcase above grid; Desktop: Side-by-side */}
                <div class="flex flex-col sm:flex-row sm:space-x-3 w-full m-0">
                  {/* Showcase: Selected image preview with metadata */}
                  <div class="w-full mx-auto space-y-1 sm:space-y-2 sm:order-2 p-3">
                    <div
                      class={`p-2 border rounded h-48 flex flex-col items-center justify-center w-full ${
                        selectedImage.value
                          ? 'border-secondary-800 shadow-[0_0_8px_2px_rgba(136,153,255,0.6)]'
                          : 'border-gray-700'
                      }`}
                    >
                      {selectedImage.value ? (
                        <div class="text-center flex flex-col items-center">
                          <img
                            src={selectedImage.value.src}
                            alt={selectedImage.value.alt}
                            class="max-w-full max-h-24 object-contain mx-auto mb-2"
                          />
                          <div class="text-sm">
                            <div class="font-semibold">{selectedImage.value.title}</div>
                            <div class="text-gray-500">{selectedImage.value.description}</div>
                            <div class="text-gray-400 pt-1">
                              Class Rarity: {selectedImage.value.rarity}% -{' '}
                              {selectedImage.value.rarity != null && (
                                <span class={getRarityClass(selectedImage.value.rarity).color}>
                                  {getRarityClass(selectedImage.value.rarity).text}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <span class="text-gray-500">Select an image to preview</span>
                      )}
                    </div>
                  </div>
                  {/* Grid: Image thumbnails */}
                  <div class="w-full mx-auto space-y-1 sm:space-y-2 sm:order-1 p-3 pt-0 md:p-3 md:px-0">
                    <div class="flex items-center h-48 w-full">
                      <div class="grid grid-cols-3 grid-rows-2 gap-2.5 w-full h-full">
                        {wizard.images.map((img, imgIndex) => (
                          <button
                            key={imgIndex}
                            class={`p-1 border-2 rounded flex items-center justify-center w-full h-full ${
                              selectedImage.value?.src === img.src
                                ? 'border-secondary-800 shadow-[0_0_8px_2px_rgba(136,153,255,0.6)]'
                                : 'border-gray-700'
                            }`}
                          >
                            <img
                              src={img.src}
                              alt={img.alt}
                              class="max-w-[5rem] max-h-[5rem] object-contain mx-auto"
                              onClick$={() => (selectedImage.value = img)}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Content>
            </Tabs.Panel>
          ))}
        </Tabs.Root>
      </div>
    </div>
  );
});