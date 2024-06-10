import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import images from "@/asset";
import { useState } from "react";

function Shop() {
    const [firstHover, setFirstHover] = useState(false);
    const [secondHover, setSecondHover] = useState(false);
    const [thirdHover, setThirdHover] = useState(false);
    return (
        <div className="shop-sec">
            <div
                onMouseEnter={() => {
                    setFirstHover(true);
                }}
                onMouseLeave={() => {
                    setFirstHover(false);
                }}
                className="first-card card"
            >
                <div className="card-top">
                    <motion.div
                        initial={{ y: 300, opacity: 0.5, scale: 0.2, x: 0 }}
                        animate={
                            firstHover
                                ? {
                                      x: 120,
                                      y: 270,
                                      rotate: "50deg",
                                      opacity: 1,
                                      scale: 2,
                                  }
                                : {}
                        }
                        transition={{ duration: 0.3 }}
                        className="first-acc acc"
                    >
                        <Image src={images.Watermelon} />
                    </motion.div>
                    <motion.div
                        initial={{
                            y: 300,
                            opacity: 0.5,
                            scale: 0.2,
                            x: 0,
                            rotate: "-50deg",
                        }}
                        animate={
                            firstHover
                                ? {
                                      y: 150,
                                      x: -140,
                                      rotate: "-70deg",
                                      opacity: 1,
                                      scale: 1.7,
                                  }
                                : {}
                        }
                        transition={{ duration: 0.3 }}
                        className="second-acc acc"
                    >
                        <Image src={images.Strawberry} />
                    </motion.div>
                    <motion.div
                        initial={{ y: 300, opacity: 0.5, scale: 0.2, x: 0 }}
                        animate={
                            firstHover
                                ? {
                                      y: 50,
                                      x: 100,
                                      rotate: "0deg",
                                      opacity: 1,
                                      scale: 1.3,
                                  }
                                : {}
                        }
                        transition={{ duration: 0.3 }}
                        className="third-acc acc"
                    >
                        <Image src={images.Strawberry} />
                    </motion.div>
                    <motion.div
                        animate={
                            firstHover
                                ? { rotate: "3deg", y: -40, scale: 1.1 }
                                : {}
                        }
                        transition={{ duration: 0.14 }}
                        className="image"
                    >
                        <Image src={images.Smoothe1} />
                    </motion.div>
                </div>
                <motion.div
                    animate={firstHover ? { scale: 0.9 } : {}}
                    transition={{ duration: 0.2, delay: 0.08 }}
                    className="bgc"
                ></motion.div>
                <motion.div className="buttons">
                    <motion.button
                        animate={firstHover ? { y: 0 } : { y: 15 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="first-button"
                    >
                        Shop Now
                    </motion.button>
                    <motion.button
                        animate={firstHover ? { y: 0 } : { y: 15 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="second-button"
                    >
                        <div>+</div>
                    </motion.button>
                </motion.div>
            </div>

            <div
                onMouseEnter={() => {
                    setSecondHover(true);
                }}
                onMouseLeave={() => {
                    setSecondHover(false);
                }}
                className="second-card card"
            >
                <div className="card-top">
                    <motion.div
                        initial={{ y: 300, opacity: 0.5, scale: 0.2, x: 0 }}
                        animate={
                            secondHover
                                ? {
                                      x: 120,
                                      y: 270,
                                      rotate: "50deg",
                                      opacity: 1,
                                      scale: 1.3,
                                  }
                                : {}
                        }
                        transition={{ duration: 0.3 }}
                        className="first-acc acc"
                    >
                        <Image src={images.Banana2} />
                    </motion.div>
                    <motion.div
                        initial={{ y: 300, opacity: 0.5, scale: 0.2, x: 0 }}
                        animate={
                            secondHover
                                ? {
                                      y: 150,
                                      x: -140,
                                      rotate: "-20deg",
                                      opacity: 1,
                                      scale: 1.7,
                                  }
                                : {}
                        }
                        transition={{ duration: 0.3 }}
                        className="second-acc acc"
                    >
                        <Image src={images.Chocolate2} />
                    </motion.div>
                    <motion.div
                        initial={{ y: 300, opacity: 0.5, scale: 0.2, x: 0 }}
                        animate={
                            secondHover
                                ? {
                                      y: 50,
                                      x: 100,
                                      rotate: "30deg",
                                      opacity: 1,
                                      scale: 1.3,
                                  }
                                : {}
                        }
                        transition={{ duration: 0.3 }}
                        className="third-acc acc"
                    >
                        <Image src={images.Chocolate3} />
                    </motion.div>
                    <motion.div
                        animate={
                            secondHover
                                ? { rotate: "3deg", y: -40, scale: 1.1 }
                                : {}
                        }
                        transition={{ duration: 0.14 }}
                        className="image"
                    >
                        <Image src={images.Smoothe2} />
                    </motion.div>
                </div>
                <motion.div
                    animate={secondHover ? { scale: 0.9 } : {}}
                    transition={{ duration: 0.2, delay: 0.08 }}
                    className="bgc"
                ></motion.div>
                <motion.div className="buttons">
                    <motion.button
                        animate={secondHover ? { y: 0 } : { y: 15 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="first-button"
                    >
                        Shop Now
                    </motion.button>
                    <motion.button
                        animate={secondHover ? { y: 0 } : { y: 15 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="second-button"
                    >
                        <div>+</div>
                    </motion.button>
                </motion.div>
            </div>

            <div
                onMouseEnter={() => {
                    setThirdHover(true);
                }}
                onMouseLeave={() => {
                    setThirdHover(false);
                }}
                className="third-card card"
            >
                <div className="card-top">
                    <motion.div
                        initial={{ y: 300, opacity: 0.5, scale: 0.2, x: 0 }}
                        animate={
                            thirdHover
                                ? {
                                      x: 120,
                                      y: 270,
                                      rotate: "70deg",
                                      opacity: 1,
                                      scale: 1.3,
                                  }
                                : {}
                        }
                        transition={{ duration: 0.3 }}
                        className="first-acc acc"
                    >
                        <Image src={images.Berry1} />
                    </motion.div>
                    <motion.div
                        initial={{ y: 300, opacity: 0.5, scale: 0.2, x: 0 }}
                        animate={
                            thirdHover
                                ? {
                                      y: 150,
                                      x: -140,
                                      rotate: "-20deg",
                                      opacity: 1,
                                      scale: 1.3,
                                  }
                                : {}
                        }
                        transition={{ duration: 0.3 }}
                        className="second-acc acc"
                    >
                        <Image src={images.Berry2} />
                    </motion.div>
                    <motion.div
                        initial={{ y: 300, opacity: 0.5, scale: 0.2, x: 0 }}
                        animate={
                            thirdHover
                                ? {
                                      y: 50,
                                      x: 130,
                                      rotate: "-30deg",
                                      opacity: 1,
                                      scale: 1.7,
                                  }
                                : {}
                        }
                        transition={{ duration: 0.3 }}
                        className="third-acc acc"
                    >
                        <Image src={images.KaleLeaf} />
                    </motion.div>
                    <motion.div
                        animate={
                            thirdHover
                                ? { rotate: "3deg", y: -40, scale: 1.1 }
                                : {}
                        }
                        transition={{ duration: 0.14 }}
                        className="image"
                    >
                        <Image src={images.Smoothe4} />
                    </motion.div>
                </div>
                <motion.div
                    animate={thirdHover ? { scale: 0.9 } : {}}
                    transition={{ duration: 0.2, delay: 0.08 }}
                    className="bgc"
                ></motion.div>
                <motion.div className="buttons">
                    <motion.button
                        animate={thirdHover ? { y: 0 } : { y: 15 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="first-button"
                    >
                        Shop Now
                    </motion.button>
                    <motion.button
                        animate={thirdHover ? { y: 0 } : { y: 15 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="second-button"
                    >
                        <div>+</div>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}

export default Shop;
