import React, { useEffect, useRef } from "react";
import { MdVerified } from "react-icons/md";
import { useAnimation, useInView, motion } from "framer-motion";
import A from "./images/A.png";
const Review = () => {
  const { innerWidth: Width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);
  return (
    <>
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="max-w-2xl mx-auto rounded shadow-md bg-white p-6 my-8  space-y-4 text-center xl:col-span-2 xl:text-left"
          >
            <h2 className="text-4xl font-bold text-blue-500">
              Tại sao các bạn nên tham gia các hoạt động của chúng tôi
            </h2>
            <p className="text-gray-500">
              Đây là một số nhận xét của một số thành viên trong CLB
            </p>
          </motion.div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, x: -75, y: -45 },
                    visible: { opacity: 1, x: 0, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="p-6 rounded-lg shadow-lg bg-white mt-6"
                >
                  <p>
                    I recently used the services of this agency, and I am
                    thrilled with the results. The team went above and beyond to
                    ensure that my needs were met. From the initial consultation
                    to the final delivery, their professionalism and attention
                    to detail were evident. They were prompt in responding to my
                    queries and kept me informed throughout the process. The end
                    product exceeded my expectations, and I highly recommend
                    their services to anyone looking for top-notch quality and
                    exceptional customer care.
                  </p>
                  <div className="flex justify-between items-center mt-4 space-x-4">
                    <div className="flex">
                      <img
                        src={A}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full "
                      />
                      <div className="flex-col ml-4">
                        <p className="text-lg font-semibold block">Sam Smith</p>
                        <p className="text-sm text-gray-400 block">Asus</p>
                      </div>
                    </div>

                    <div className="flex">
                      <MdVerified
                        size={Width < 631 ? 35 : 40}
                        className="text-blue-500 ml-2"
                      />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, x: -75, y: 45 },
                    visible: { opacity: 1, x: 0, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="p-6 rounded-lg shadow-lg bg-white "
                >
                  <p>
                    I cannot say enough good things about this agency. The level
                    of workmanship they displayed was truly impressive. They
                    understood my vision perfectly and executed it flawlessly.
                    Not only that, but their customer service was outstanding.
                    They were patient, attentive.
                  </p>
                  <div className="flex items-center justify-between mt-4 space-x-4">
                    <div className="flex">
                      <img
                        src={A}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full "
                      />
                      <div className="flex-col sm:ml-2 ">
                        <p className="text-lg font-semibold block">
                          Benjamin Mitchell
                        </p>
                        <p className="text-sm text-gray-400 block">Razer</p>
                      </div>
                    </div>
                    <div className="flex">
                      <MdVerified
                        size={Width < 631 ? 35 : 40}
                        className="text-blue-500 ml-2"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="grid content-center gap-4">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, x: 75, y: -45 },
                    visible: { opacity: 1, x: 0, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.7, delay: 0.55 }}
                  className="p-6 rounded-lg shadow-lg bg-white"
                >
                  <p>
                    I have had the pleasure of working with this agency, and I
                    can confidently say that they are a reliable and trustworthy
                    partner. From the moment I engaged their services, they
                    demonstrated a high level of professionalism and expertise.
                    They listened to my requirements attentively and provided
                    valuable insights and suggestions.
                  </p>
                  <div className="flex justify-between items-center mt-2 space-x-4">
                    <div className="flex">
                      <img
                        src={A}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full "
                      />
                      <div className="flex-col ml-4">
                        <p className="text-lg font-semibold block">
                          Olivia Johnson
                        </p>
                        <p className="text-sm text-gray-400 block">Microsoft</p>
                      </div>
                    </div>
                    <div className="flex">
                      <MdVerified
                        size={Width < 631 ? 35 : 40}
                        className="text-blue-500 ml-2"
                      />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, x: 75, y: 45 },
                    visible: { opacity: 1, x: 0, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.8, delay: 0.75 }}
                  className="p-6 rounded-lg shadow-lg bg-white"
                >
                  <p>
                    I recently engaged this agency for their services, and I am
                    extremely pleased with the outcome. Their attention to
                    detail is second to none. They meticulously handled every
                    aspect of the project, ensuring that nothing was overlooked.
                    The level of care and precision they put into their work is
                    truly remarkable. The team was professional, responsive, and
                    dedicated to delivering a top-notch experience.
                  </p>
                  <div className="flex justify-between items-center mt-4 space-x-4">
                    <div className="flex">
                      <img
                        src={A}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full "
                      />
                      <div className="flex-col ml-4">
                        <p className="text-lg font-semibold block">
                          Sophia Davis
                        </p>
                        <p className="text-sm text-gray-400 block">Dell</p>
                      </div>
                    </div>
                    <div className="flex">
                      <MdVerified
                        size={Width < 631 ? 35 : 40}
                        className="text-blue-500 ml-2"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
