import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How do I open an Al Maktoum Business account?",
    answer: "Opening an Al Maktoum Business account is quick and easy. Simply download our app or visit our website, provide your business details, verify your identity, and you'll be ready to start managing your finances in minutes.",
  },
  {
    question: "Is Al Maktoum Business a bank?",
    answer: "Al Maktoum Finance is a licensed financial institution that offers banking services including multi-currency accounts, international transfers, and business expense management. Your funds are protected and held securely.",
  },
  {
    question: "Am I eligible for an Al Maktoum Business account?",
    answer: "Al Maktoum Business is available to registered businesses, freelancers, and self-employed individuals. You'll need to provide valid business documentation and complete our verification process.",
  },
  {
    question: "Is Al Maktoum Business the right choice for my business?",
    answer: "Al Maktoum Business is ideal for companies that operate internationally, need multi-currency support, or want to streamline their expense management. We offer competitive rates and powerful tools for businesses of all sizes.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-500 mb-3">Have questions?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Al Maktoum Business FAQs
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200 py-2"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-black hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Disclaimer */}
        <div className="mt-16 space-y-4 text-sm text-gray-500">
          <p>
            Fees and{" "}
            <Link to="#" className="underline hover:text-black transition-colors">
              T&Cs apply
            </Link>
            . Currency exchange at the interbank rate is subject to your plan's allowance.
          </p>
          <p>
            ¹Based on the average reduction in spending volume for Al Maktoum Business customers when using our spend control features in the first 3 months of 2024. This percentage is illustrative of savings that could be achieved, but is not guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
