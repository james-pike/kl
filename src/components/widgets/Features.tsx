import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";
import { ItemGrid } from "~/components/ui/ItemGrid";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

export default component$((props: Props) => {
  const {
    id,
    title = null,
    subtitle = null,
    highlight = null,
    items = [],
    isDark = false,
    classes = {},
  } = props;

  return (
    <section class="relative scroll-mt-16 bg-white dark:bg-gray-800" {...(id ? { id } : {})}>
    <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
      <slot name="bg">
        <div class={twMerge("absolute inset-0", isDark ? "bg-dark dark:bg-transparent" : "")}></div>
      </slot>
    </div>
    <div
      class={twMerge(
        "relative mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",
        classes?.container,
        isDark ? "dark" : ""
      )}
    >
      <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
        <div class="sm:mx-auto">
          <ItemGrid
            id="features-grid" // Unique ID for this instance
            items={items}
            classes={{
              container: "md:grid-cols-2",
              title: "md:text-[1.3rem]",
              icon: "text-white bg-primary-800 dark:bg-primary-800 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4",
              ...(classes?.items ?? {}),
            }}
          />
        </div>
      
      </div>
    </section>
  );
});