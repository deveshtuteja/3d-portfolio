import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-[#1c1c24] p-10 rounded-3xl xs:w-[320px] w-full flex flex-col justify-between"
  >
    <div>
      <p className="text-white font-black text-[48px] leading-none">"</p>
      <p className="text-white tracking-wider text-[18px] mt-2">
        {testimonial}
      </p>
    </div>

    <div className="mt-7 flex justify-between items-center gap-1">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[16px] flex items-center">
          <span className="text-[#915eff] mr-2">@</span>
          {name}
        </p>
        <p className="mt-1 text-secondary text-[12px]">
          {designation} of {company}
        </p>
      </div>

      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-10 h-10 rounded-full object-cover"
      />
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-[#17151c] rounded-[20px]`}>
      <div
        className={`bg-[#151030] rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} uppercase`}>
            WHAT OTHERS SAY
          </p>
          <h2 className={`${styles.sectionHeadText} text-[#915eff]`}>
            Testimonials.
          </h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center gap-7`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
