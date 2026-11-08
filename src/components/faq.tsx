import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HOME_FAQ_GROUPS,
  SERVICES_FAQ_GROUPS,
  VIRTUS_FAQ_GROUPS,
  type FaqEntry,
  type FaqGroup,
} from "@/lib/virtus-faq-data";

export type { FaqEntry, FaqGroup };
export { HOME_FAQ_GROUPS, SERVICES_FAQ_GROUPS, VIRTUS_FAQ_GROUPS };

type FaqProps = {
  groups: FaqGroup[];
};

export function Faq({ groups }: FaqProps) {
  const items = groups.flatMap((group) => group.questions);

  return (
    <div className="max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => {
          const value = `faq-${index}`;
          return (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-base font-medium text-foreground">
                {item.q}
              </AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
