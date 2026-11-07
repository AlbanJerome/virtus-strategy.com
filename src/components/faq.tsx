import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  VIRTUS_FAQ_GROUPS,
  type FaqEntry,
  type FaqGroup,
} from "@/lib/virtus-faq-data";

export type { FaqEntry, FaqGroup };
export { VIRTUS_FAQ_GROUPS };

type FaqProps = {
  groups: FaqGroup[];
};

export function Faq({ groups }: FaqProps) {
  const items = groups.flatMap((group) => group.items);

  return (
    <div className="max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => {
          const value = `faq-${index}`;
          return (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-base font-medium text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
