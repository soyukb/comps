import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Can I use React on a projact?",
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
    },
    {
      id: 2,
      label: "Can I use React on a projact?",
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
    },
    {
      id: 3,
      label: "Can I use React on a projact?",
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
