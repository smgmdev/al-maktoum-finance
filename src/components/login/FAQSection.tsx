import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How to win UAE Golden Visa?",
    answer: "Sign up to register your interest for an Al Maktoum Finance account. When Al Maktoum Finance launches its online banking services, create your account and deposit your salary for 3 consecutive months. An automatic draw will be held among all eligible customers. The winner will receive a UAE Golden Visa valid for 10 years.",
  },
  {
    question: "Why Al Maktoum Finance?",
    answer: "Al Maktoum Finance follows a modern online payment system infrastructure to facilitate online payments and transfers quickly and smoothly. We present an advanced, fully compliant payments and banking solution, seamlessly integrating fiat and digital assets into a unified and intuitive platform. Utilizing a collaborative multi-partner strategy, we empower both individuals and businesses with innovative financial tools.",
  },
  {
    question: "What are Fiat Assets?",
    answer: "Fiat assets represent traditional money that has been declared legal tender by a government. These include currencies like the US dollar (USD), the euro (EUR), and the British pound (GBP). Fiat money is not backed by physical commodities but by the trust in the issuing government.",
  },
  {
    question: "What are Digital Assets?",
    answer: "Digital assets are any assets that exist in digital form and are exchanged or stored on a blockchain. These include cryptocurrencies (e.g. Bitcoin, Ethereum), stablecoins (e.g. USDC, USDT), Central Bank Digital Currencies (CBDCs), and non-fungible tokens (NFTs). They are decentralized, traceable, and offer new models of value storage and transfer.",
  },
  {
    question: "What is Tokenization?",
    answer: "Tokenization is the process of converting ownership of a physical or digital asset into a blockchain-based token. It allows for easier transferability, fractional ownership, increased liquidity, and reduced transaction costs. Real estate, art, shares, and more can be tokenized to enable more efficient investment access.",
  },
  {
    question: "What is a Custody Account?",
    answer: "A custody account is a secure account where digital or fiat assets are held by a qualified custodian on behalf of the customer. It is designed to safeguard assets from misuse, theft, or mismanagement. Al Maktoum Finance partners with licensed custodians to ensure the highest standards of protection and regulatory compliance.",
  },
  {
    question: "What documents do I need to open a personal account?",
    answer: "Opening a personal account with Al Maktoum Finance is simple, fully online, and takes just a few minutes. You will need a valid government-issued ID and a proof of address (such as a utility bill). Our streamlined onboarding process follows strict KYC/AML protocols while making it easy for you to get started quickly.",
  },
  {
    question: "How much does it cost to open an account on Al Maktoum Finance?",
    answer: "There is no cost to open a personal account with Al Maktoum Finance. Account maintenance and transaction fees may apply depending on the services you use. A detailed fee schedule is available in our platform.",
  },
  {
    question: "What are the exchange fees?",
    answer: "Al Maktoum Finance applies competitive real-time exchange rates based on market data. We work with liquidity providers to offer fair pricing with full transparency. All rates are visible in the platform before executing a transaction, and we do not apply hidden fees or spreads.",
  },
  {
    question: "What is a Qualified Custodian?",
    answer: "A Qualified Custodian is a financial institution legally authorized to hold assets on behalf of clients. This includes banks, brokers, and trust companies that meet strict regulatory requirements. In the context of digital assets, qualified custodians are responsible for the secure storage and segregation of client funds, protecting them in the event of bankruptcy or insolvency.",
  },
  {
    question: "Who are Al Maktoum Finance customers?",
    answer: "Al Maktoum Finance serves individuals, freelancers, SMEs, and corporates that seek flexible and secure financial solutions combining fiat and digital assets. Our target customers span the Middle East, Asia Pacific, and African countries—from digital asset beginners to sophisticated investors and business users operating globally across multiple jurisdictions.",
  },
  {
    question: "Are customers' assets secure?",
    answer: "Yes. Al Maktoum Finance is a security-first platform. We combine institutional-grade custody, end-to-end encryption, multi-signature protocols, and 24/7 monitoring. Our team includes cybersecurity experts with years of experience in banking, defense, and blockchain security. Customer assets are never commingled and are protected against unauthorized access.",
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
            Al Maktoum Finance FAQs
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-0">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200 py-0"
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
