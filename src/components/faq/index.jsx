import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);


  const faqs = [
    {
      question: 'What is DataHack event ?',
      answer: 'DataHack 2025 is a 3-day datathon where teams tackle real-world challenges using AI and data science to develop innovative solutions and compete for top prizes.',
    },
    {
      question: 'Who can participate in DataHack?',
      answer: 'Everyone with a passion for data can join. No matter your skill level, if you love data, you\'re welcome!',
    },
    {
      question: 'How does the competition work?',
      answer: 'Teams of 5 get real datasets and choose from six challenges of varying difficulty. Points are awarded based on performance, with winners decided by total score.',
    },
    {
      question: 'Where and when is the event held?',
      answer: 'The event takes place at l’ecole supérieure Nationale d’informatique from February 20-22, 2025',
    },
    {
      question: 'Are there workshops and mentoring?',
      answer: 'Yes! Experts and mentors will guide participants through workshops and offer support throughout the event to help teams improve their solutions.',
    },
    {
      question: 'What prizes and opportunities are available?',
      answer: 'Winners receive exciting prizes, and participants gain networking opportunities with companies, mentors, and sponsors, plus a chance to showcase their skills',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen   z-10 flex items-center justify-center">
      <div className="max-w-3xl w-full md:p-12 ">
      <div className="p-[2px] bg-gradient-to-r from-[#6F06C1] via-[#4EA4F9] to-[#36D9FF] rounded-lg">
        <div className=" bg-black rounded-lg p-6">
  
 
          <div className="space-y-2 mb-4 text-center">
            <h2 className="text-2xl font-bold text-Monotone-White">FAQ</h2>
            <h2 className="text-lg font-semibold text-Primary-300">// Questions</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-md shadow-sm p-3">
                <div className="flex justify-between items-center border-b border-gray-500 pb-2">
                  <div className="text-sm font-semibold text-Monotone-White">
                    {index + 1}. {faq.question}
                  </div>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="text-Primary-500 text-xl focus:outline-none"
                  >
                    {activeIndex === index ? '-' : '+'}
                  </button>
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-Neutral-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        
        </div>
        </div>
       
      </div>
    </div>

  );
};

export default FAQ;
