import { component$ } from "@builder.io/qwik";
import { Headline } from "../ui/Headline";
import { Card } from "../ui/Card";

const battleImg = "/images/game.jpeg";
const statsImg = "/images/game2.jpeg";

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
  const { title = "", subtitle = "", highlight = "", classes = {} } = props;

  return (
    <div class="w-full">
      <div class="w-full">
        <Card.Root class="bg-gray-900">
          <section
            id="game"
            class="scroll-mt-16 w-full pt-10 md:pt-12 lg:pt-12 px-4 md:px-0"
          >
            <Headline
              title={title}
              subtitle={subtitle}
              highlight={highlight}
              classes={classes?.headline}
            />
            <div class="grid grid-cols-1 md:grid-cols-1">
              <div class="relative">
                <img
                  src={battleImg}
                  width={1200}
                  height={400}
                  class="w-full bg-gray-500 object-cover dark:bg-slate-700"
                />
                <div class="absolute inset-0 pointer-events-none hidden lg:block"
                  style="box-shadow: inset 0 0 80px 40px rgb(17 24 39), inset 0 0 160px 80px rgb(17 24 39 / 0.6);"
                />
              </div>
              <div class="md:hidden flex justify-center bg-gray-900 pt-6 pb-4 px-2">
                <img
                  src={statsImg}
                  class="object-contain rounded-2xl"
                />
              </div>
            </div>
          </section>
        </Card.Root>
      </div>
    </div>
  );
});
