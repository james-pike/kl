import { Slot, component$, type PropsOf } from '@builder.io/qwik';
import { Tabs as HeadlessTabs } from '@qwik-ui/headless';
import { cn } from '@qwik-ui/utils';
import { Card } from './Card';

const Root = (props: PropsOf<typeof HeadlessTabs.Root>) => (
  <HeadlessTabs.Root
    {...props}
    tabListComponent={List}
    tabComponent={Tab}
    tabPanelComponent={Panel}
  />
);

const List = component$<PropsOf<typeof HeadlessTabs.List>>((props) => {
  return (
    <Card.Content>
      <HeadlessTabs.List
        {...props}
        class={cn(
          'flex flex-nowrap overflow-x-auto sm:grid sm:overflow-visible scrollbar-hide border-base bg-muted p-0 text-muted-foreground shadow-sm',
          props.class,
        )}
      >
        <Slot />
      </HeadlessTabs.List>
    </Card.Content>
  );
});

const Tab = component$<PropsOf<typeof HeadlessTabs.Tab>>((props) => {
  return (
    <HeadlessTabs.Tab
      {...props}
      class={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=selected]:border-base data-[state=selected]:bg-gray-700 data-[state=selected]:text-foreground data-[state=selected]:shadow-inner flex-shrink-0',
        props.class,
      )}
    >
      <Slot />
    </HeadlessTabs.Tab>
  );
});


const Panel = component$<PropsOf<typeof HeadlessTabs.Panel>>((props) => {
  return (
    <HeadlessTabs.Panel
      {...props}
      class={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        props.class,
      )}
    >
      <Slot />
    </HeadlessTabs.Panel>
  );
});

export const Tabs = {
  Root,
  List,
  Tab,
  Panel,
};