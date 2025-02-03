import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is DataHack event ?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Consectetur et id sit suscipit sed. Ac arcu justo scelerisque nulla dolor lacus dui quis in. Eros vitae augue lectus nulla ultricies donec. Nunc ut quis ut ultricies.',
    },
    {
      question: 'What is DataHack event ?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Consectetur et id sit suscipit sed. Ac arcu justo scelerisque nulla dolor lacus dui quis in. Eros vitae augue lectus nulla ultricies donec. Nunc ut quis ut ultricies.',
    },
    {
      question: 'What is DataHack event ?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Consectetur et id sit suscipit sed. Ac arcu justo scelerisque nulla dolor lacus dui quis in. Eros vitae augue lectus nulla ultricies donec. Nunc ut quis ut ultricies.',
    },
    {
      question: 'What is DataHack event ?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Consectetur et id sit suscipit sed. Ac arcu justo scelerisque nulla dolor lacus dui quis in. Eros vitae augue lectus nulla ultricies donec. Nunc ut quis ut ultricies.',
    },
    {
      question: 'What is DataHack event ?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Consectetur et id sit suscipit sed. Ac arcu justo scelerisque nulla dolor lacus dui quis in. Eros vitae augue lectus nulla ultricies donec. Nunc ut quis ut ultricies.',
    },
    {
      question: 'What is DataHack event ?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Consectetur et id sit suscipit sed. Ac arcu justo scelerisque nulla dolor lacus dui quis in. Eros vitae augue lectus nulla ultricies donec. Nunc ut quis ut ultricies.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full p-12">
        <div
          className="border-2 border-transparent p-12 rounded-lg"
          style={{
            borderImage: 'linear-gradient(90deg, #6F06C1, #4EA4F9, #36D9FF) 1',
          }}
        >
          <div className="space-y-2 mb-4 text-center">
            <h2 className="text-2xl font-bold text-Monotone-White">FAQ</h2>
            <h2 className="text-lg font-semibold text-Primary-300">// Questions</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-md shadow-sm p-3">
                <div className="flex justify-between items-center border-b border-gray-500 pb-2">
                  <li className="text-sm font-semibold text-Monotone-White">
                    {index + 1}. {faq.question}
                  </li>
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
  );
};

export default FAQ;
