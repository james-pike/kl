interface ItemProps {
  class?: string;
}

export default (props: ItemProps) => {
  const { class: className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={`icon icon-tabler icon-brand-tailwind ${className || "w-5 h-5"}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
 <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
  );
};

