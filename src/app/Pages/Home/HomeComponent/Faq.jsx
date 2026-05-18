import {
  ArrowsRotateLeft,
  Box,
  ChevronDown,
  CreditCard,
  PlanetEarth,
  Receipt,
  ShoppingBag,
} from "@gravity-ui/icons";
import { Accordion } from "@heroui/react";

const items = [
  {
    content:
      "Browse our courses, enroll in your desired program, and start learning instantly. You may need to complete your profile before accessing full course materials.",
    icon: <ShoppingBag className="w-5 h-5 text-indigo-500" />,
    title: "How do I enroll in a course?",
  },
  {
    content:
      "Yes, you can switch or unenroll from a course before completing it. Some courses may have progress limitations depending on instructor settings.",
    icon: <Receipt className="w-5 h-5 text-indigo-500" />,
    title: "Can I change or cancel my course enrollment?",
  },
  {
    content:
      "We support multiple payment options including credit/debit cards, mobile banking, and popular online payment gateways depending on your region.",
    icon: <CreditCard className="w-5 h-5 text-indigo-500" />,
    title: "What payment methods are available for courses?",
  },
  {
    content:
      "Course access depends on the plan you choose. Some courses are free, while premium courses require a one-time or subscription payment.",
    icon: <Box className="w-5 h-5 text-indigo-500" />,
    title: "Do I need to pay for every course?",
  },
  {
    content:
      "Yes, you can access our platform from anywhere in the world as long as you have an internet connection. Some content may vary by region.",
    icon: <PlanetEarth className="w-5 h-5 text-indigo-500" />,
    title: "Can I learn from anywhere?",
  },
  {
    content:
      "If you're not satisfied with a course, you can request a refund within 30 days of purchase, depending on our refund policy terms.",
    icon: <ArrowsRotateLeft className="w-5 h-5 text-indigo-500" />,
    title: "What is your refund policy?",
  },
];

export function Surface() {
  return (
    // min-h-screen এবং flex দিয়ে পুরো কম্পোনেন্টটিকে স্ক্রিনের একদম মাঝখানে আনা হয়েছে
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center py-16 px-4">
      
      {/* Header Section */}
      <div className="max-w-3xl w-full text-center mb-10">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-indigo-500 font-bold">
          Support & Help Center
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-3 text-gray-900 dark:text-white tracking-tight">
          Frequently Asked{" "}
          <span className="inline-block text-indigo-500 md:block">Questions</span>
        </h2>
      </div>

      {/* Accordion Container */}
      {/* max-w-2xl দিয়ে এটার সাইজ একটু বাড়ানো হয়েছে যেন দেখতে সুন্দর লাগে */}
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-2 sm:p-4">
        <Accordion className="w-full" variant="splitted">
          {items.map((item, index) => (
            <Accordion.Item 
              key={index}
              className="border-b border-gray-100 dark:border-gray-700 last:border-none"
            >
              <Accordion.Heading>
                <Accordion.Trigger className="w-full flex items-center justify-between py-4 px-4 text-left font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-750 rounded-xl transition-all duration-200 group">
                  <div className="flex items-center gap-3">
                    {item.icon ? (
                      <span className="flex-shrink-0 transition-transform group-hover:scale-110 duration-200">
                        {item.icon}
                      </span>
                    ) : null}
                    <span className="text-sm sm:text-base">{item.title}</span>
                  </div>
                  
                  <Accordion.Indicator className="text-gray-400 group-hover:text-indigo-500 transition-colors duration-200">
                    <ChevronDown className="w-5 h-5" />
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              
              <Accordion.Panel>
                <Accordion.Body className="px-11 pb-4 pt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.content}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

    </div>
  );
}