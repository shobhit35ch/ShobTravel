
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface BlogContentProps {
  content: string;
  slug?: string;
}

export const BlogContent = ({ content, slug }: BlogContentProps) => {
  const isLakeAtitlan = content.includes("Lake Atitlan");
  
  return (
    <div className="prose prose-lg max-w-none">
      {content.split('\n\n').map((paragraph, index) => (
        <p key={index} className="text-primary/80 mb-4">
          {paragraph}
        </p>
      ))}

      {/* Insert boat image after the 5th paragraph for Lake Atitlan article */}
      {slug === "guatemala-lake-atitlan-2024" && (
        <div className="my-8">
          <img 
            src="/lovable-uploads/2be0e9f8-1ba3-4f39-b815-8e3a3122348d.png" 
            alt="Boat trip on Lake Atitlan with mountain view" 
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-center text-primary/60 mt-2">
            Boat commuting between towns on Lake Atitlan with a stunning view of the volcano
          </p>
        </div>
      )}

      {isLakeAtitlan && (
        <div className="my-8 p-4 bg-accent/10 rounded-lg">
          <h3 className="text-xl font-display text-primary mb-3">Lake Atitlan Quick Tips</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="safety">
              <AccordionTrigger className="text-primary">Safety Considerations</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-primary/80">
                  <li>Lake Atitlan is generally safer than Guatemala City</li>
                  <li>Exercise normal caution as in any new country</li>
                  <li>Experiences vary - the author traveled with friends</li>
                  <li>Consider staying near Panajachel for convenience</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="budget">
              <AccordionTrigger className="text-primary">Budget Tips</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-primary/80">
                  <li>Use points for flights (author paid only $87 USD round trip)</li>
                  <li>EVERYTHING is negotiable - basic Spanish is helpful</li>
                  <li>Jet skiing + canoe + paddle boarding: ~$80 USD</li>
                  <li>WhatsApp is essential for booking activities</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="activities">
              <AccordionTrigger className="text-primary">Must-Do Activities</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-primary/80">
                  <li>Jet skiing on the lake - author's #1 recommendation</li>
                  <li>Take tuk-tuks around the area</li>
                  <li>Consider staying at Casa Verapaz near Panajachel</li>
                  <li>Enjoy the calm waters and mountain views</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="transport">
              <AccordionTrigger className="text-primary">Transportation</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-primary/80">
                  <li>Boat taxis are the main way to travel between towns</li>
                  <li>Tuk-tuks are perfect for getting around within towns</li>
                  <li>If arriving at Guatemala City, expect a 3-hour drive to the lake</li>
                  <li>Always negotiate prices before getting in any transport</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  );
};
