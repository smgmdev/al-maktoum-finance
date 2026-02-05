import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Why Al Maktoum Finance?",
    answer: "Al Maktoum Finance presents an advanced, fully compliant financial services solution, seamlessly integrating traditional and digital banking into a unified and intuitive platform. Utilizing a collaborative multi-partner strategy, we empower both individuals and businesses with innovative financial tools.",
  },
  {
    question: "What documents do I need to open a personal account?",
    answer: "Opening a personal account with Al Maktoum Finance is fully online and fast. You will need a valid government-issued ID, a proof of address (such as a utility bill), and in some cases, a short video verification. The onboarding process follows strict KYC/AML protocols and usually takes just a few minutes to complete.",
  },
  {
    question: "How much does it cost to open an account?",
    answer: "There is no cost to open a personal account with Al Maktoum Finance. Account maintenance and transaction fees may apply depending on the services you use. A detailed fee schedule is available on our platform.",
  },
  {
    question: "How do I deposit money into my account?",
    answer: "You can deposit money into your Al Maktoum Finance account by transferring currency via bank wire (local or international transfers). Our system supports major currencies and provides seamless deposit experiences through our partner banking rails.",
  },
  {
    question: "How do I withdraw money from my account?",
    answer: "Withdrawals from your Al Maktoum Finance account can be made through bank transfers. You can send funds to your traditional bank account via local or international wire transfers. All withdrawal requests are subject to verification and security checks.",
  },
  {
    question: "What are the exchange rates?",
    answer: "Al Maktoum Finance applies competitive real-time exchange rates based on market data. We work with liquidity providers to offer fair pricing with full transparency. All rates are visible in the platform before executing a transaction, and we do not apply hidden fees or spreads.",
  },
  {
    question: "Is Al Maktoum Finance a bank?",
    answer: "Al Maktoum Finance is not an FDIC-insured depository institution or bank. We operate as a financial services platform in partnership with licensed banks and custodians. While we prioritize security and compliance, we work with regulated partners to ensure the highest standards of protection.",
  },
  {
    question: "Are customers' assets secure?",
    answer: "Yes. Al Maktoum Finance is a security-first platform. We combine institutional-grade security, end-to-end encryption, and 24/7 monitoring. Our team includes cybersecurity experts with years of experience in banking and financial security. Customer assets are protected against unauthorized access.",
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
      </div>
    </section>
  );
};

export default FAQSection;
