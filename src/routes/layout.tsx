import { component$, Slot } from "@builder.io/qwik";

import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";

export default component$(() => {
  return (
    <>
      <Header />
      <main class="bg-gray-900">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
