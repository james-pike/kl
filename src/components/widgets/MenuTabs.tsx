import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Tabs } from '../ui/Tabs';
import { Card } from '../ui/Card';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import LogoClouds from '../sections/LogoClouds';



const teaItems = [
  { title: 'Matcha', description: 'Rich and bold espresso shot.', price: '$3.50', image: '/images/tea1.webp' },
  { title: 'Green Tea', description: 'Rich and bold espresso shot.', price: '$4.50', image: '/images/tea2.webp' },
  { title: 'Black Tea', description: 'Rich and bold espresso shot.', price: '$4.00', image: '/images/tea3.webp' },
  { title: 'Earl Gray', description: 'Rich and bold espresso shot.', price: '$4.75', image: '/images/tea4.webp' },
];

export default component$(() => {
  const selectedIndex = useSignal(0); 

  useVisibleTask$(({ track }) => {
    track(() => selectedIndex.value); // Watch for tab changes

  });

  return (
    <Tabs.Root selectedClassName='bg-white' class="max-w-5xl mx-auto" selectedIndex={selectedIndex.value} onSelectedIndexChange$={(index) => (selectedIndex.value = index)}>
      {/* Responsive Tabs List sticky top-[92px] z-10 */}
      <Tabs.List class="flex whitespace-nowrap overflow-x-auto overflow-y-hidden scrollbar-hidden shadow-md snap-x snap-mandatory">
  <Tabs.Tab class="px-4 py-2 flex-shrink-0 snap-start">Wizard</Tabs.Tab>
  <Tabs.Tab class="px-4 py-2 flex-shrink-0 snap-start">Elf</Tabs.Tab>
  <Tabs.Tab class="px-4 py-2 flex-shrink-0 snap-start">Warrior</Tabs.Tab>
  <Tabs.Tab class="px-4 py-2 flex-shrink-0 snap-start">Dragon</Tabs.Tab>
  <Tabs.Tab class="px-4 py-2 flex-shrink-0 snap-start">Assasin</Tabs.Tab>
  <Tabs.Tab class="px-4 py-2 flex-shrink-0 snap-start">Orc</Tabs.Tab>
</Tabs.List>

      {/* Coffee Menu Panel */}
      <Tabs.Panel>
  
      
        <LogoClouds/>
  
    
      </Tabs.Panel>

      <Tabs.Panel>
  
      
  <LogoClouds/>


</Tabs.Panel>

<Tabs.Panel>
  
      
  <LogoClouds/>


</Tabs.Panel>

      {/* Tea Panel */}
      <Tabs.Panel>

  
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {teaItems.map((item, index) => (
                <div key={index} class="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                  <img width={1024} height={1024} src={item.image} alt={item.title} class="w-full h-40 object-cover" />
                  <div class="p-3">
                    <h3 class="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p class="text-sm text-gray-600 mt-1">{item.description}</p>
                    <p class="text-lg font-bold text-primary mt-2">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
      
      
      </Tabs.Panel>

      {/* Bistro Panel */}
      <Tabs.Panel>
       
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>Make changes to your account here.</Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="name">Name</Label>
              <Input id="name" value="Pedro Duarte" />
            </div>
            <div class="space-y-1">
              <Label for="username">Username</Label>
              <Input id="username" value="~peduarte" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save changes</Button>
          </Card.Footer>
      
      </Tabs.Panel>

      {/* Dessert Panel */}
      <Tabs.Panel>
      
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>Make changes to your account here.</Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="name">Name</Label>
              <Input id="name" value="Pedro Duarte" />
            </div>
            <div class="space-y-1">
              <Label for="username">Username</Label>
              <Input id="username" value="~peduarte" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save changes</Button>
          </Card.Footer>
     
      </Tabs.Panel>
    </Tabs.Root>
  );
});