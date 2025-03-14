import { component$, useSignal } from "@builder.io/qwik";
import { Modal } from "../ui/Modal";
import { buttonVariants } from "../ui/Button";
import { LuX} from "@qwikest/icons/lucide";
import { cn } from "@qwik-ui/utils";
import { Logo } from "../common/Logo";
\import IconHamburger from "../icons/IconHamburger";

export default component$(() => {
  const show = useSignal(false);
  

  // Menu items array structure


  // Get services subitems safely

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