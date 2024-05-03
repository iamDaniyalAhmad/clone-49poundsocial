import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  const question = [
    {
      index: 1,
      q: "What Is social media management?",
      a: "Social media management involves creating post visuals, captions and hashtags and scheduling content to be posted on social media platforms such as Facebook, Instagram, Twitter, and LinkedIn.",
    },
    {
      index: 2,
      q: "Why do I need social media management for my business?",
      a: "Having effective social media management is crucial for establishing and sustaining an online presence, connecting with your audience, and expanding your brand. Furthermore, it plays a key role in raising brand awareness, driving traffic to your website, generating leads, and ultimately increasing sales.",
    },
    {
      index: 3,
      q: "What services do you offer as part of social media management?",
      a: "First, we design visuals, craft captions, curate hashtags, and schedule posts upon client approval. Additionally, our social media management services encompass content creation, scheduling, analytics, and tailored strategy development.",
    },
    {
      index: 4,
      q: "Can I see examples of the content you create?",
      a: "Absolutely! We'd be happy to share examples of our previous work to give you an idea of the quality and style of content we create for our clients.",
    },
    {
      index: 5,
      q: "Can I provide input or feedback on the content you create?",
      a: "Yes, we encourage collaboration and welcome your input and feedback on the content we create. Your satisfaction is our priority, and we'll work closely with you to ensure the content aligns with your brand voice and goals.",
    },
    {
      index: 6,
      q: "Do you offer social media advertising services?",
      a: "Yes, we provide social media advertising services to help boost your reach, engagement, and conversions on platforms like Facebook & Instagram. We'll develop targeted ad campaigns tailored to your objectives and budget.",
    },
    {
      index: 7,
      q: "How do I get started with your social media management services?",
      a: "Getting started is easy! Simply reach out to us via BOOK CALL or email using the contact us link to schedule a consultation. We'll discuss your goals, needs, and budget, and tailor a social media management plan that works for you.",
    },
    {
      index: 8,
      q: "What sets your social media management services apart from others?",
      a: "Our personalised approach, attention to detail, commitment to client satisfaction, and results-driven strategies set us apart. We prioritise building long-term partnerships with our clients and helping them achieve their social media goals.",
    },
  ];
  return (
    <div className="bg-[#f7b141] pb-32">
      <div className="container">
        <div className="pt-5 md:flex md:pt-52 row">
          <div className="w-[50%] md:w-[40%] mx-auto pb-12">
            <img src="images/faq.webp" width={350}  alt="FAQ" className="mt-32" />
          </div>
          <div className=" md:w-[50%]">
            {question.map((ques, index) => (
              <Accordion key={index} content={ques}  />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
