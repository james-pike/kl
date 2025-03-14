import { component$, useSignal } from "@builder.io/qwik";
import { Modal } from "../ui/Modal";
import { Button, buttonVariants } from "../ui/Button";
import { LuX, LuArrowLeft, LuChevronRight } from "@qwikest/icons/lucide";
import { cn } from "@qwik-ui/utils";
import { Logo } from "../common/Logo";
import { Badge } from "../ui/Badge";
import IconHamburger from "../icons/IconHamburger";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const show = useSignal(false);
  const isServicesSection = useSignal(false);
  const location = useLocation();

  // Menu items array structure
  const menuItems = [
    { title: "Home", href: "/", badge: null },
    { title: "About", href: "/about/", badge: null },
  
    { 
      title: "Services", 
      href: "/services/",
      hasSubmenu: true,
      subitems: [
        { title: "Web Design", href: "/services/web-design" },
        { title: "Development", href: "/services/development" },
        { title: "SEO", href: "/services/seo" }
      ]
    },
    { 
      title: "Portfolio", 
      href: "/gallery/", 
      badge: <Badge class="absolute -top-0.1 left-14.5 bg-primary-300 text-white text-xs px-1 py-0 rounded">New</Badge> 
    },
    { 
      title: "Reviews", 
      href: "/reviews/", 
      badge: <Badge class="absolute -top-0.1 left-14.5 bg-primary-300 text-white text-xs px-1 py-0 rounded">New</Badge> 
    },
    { title: "Technology", href: "/technology/", badge: null },
    { title: "FAQ", href: "/faq/", badge: null },
    { title: "Contact Us", href: "/contact/", badge: null }
  ];

  // Get services subitems safely
  const servicesItem = menuItems.find(item => item.hasSubmenu);
  const servicesSubitems = servicesItem?.subitems ?? [];

  return (
    <>
      <Modal.Root bind:show={show}>
        <div class="flex items-center hover:bg-primary-100 dark:hover:bg-gray-700">
          <Modal.Trigger class=" rounded-sm p-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <IconHamburger class="w-8 h-8 md:w-5 md:h-5 md:inline-block" />
          </Modal.Trigger>
        </div>
        <Modal.Panel position={"left"} class="dark:bg-gray-950 border-0">
          {/* Header */}
          <div class="border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-850 p-1">
            <Modal.Title class="pt-1">
              <a href="/">
                <Logo />
              </a>
            </Modal.Title>
            <Modal.Description class="text-md font-medium px-2 py-1 text-gray-700 dark:text-gray-200">
KasLords Of The BlockDag            </Modal.Description>
          </div>

          {/* Navigation Content */}
          

          {/* Close Button */}
          <Modal.Close
            class={cn(
              buttonVariants({ size: "icon", look: "link" }),
              "absolute right-4 top-4 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900"
            )}
            type="submit"
          >
            <LuX class="h-6 w-6" />
          </Modal.Close>
        </Modal.Panel>
      </Modal.Root>
    </>
  );
});