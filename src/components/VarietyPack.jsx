import React from "react";
import { motion } from "framer-motion";
import images from "@/asset";
import Image from "next/image";
import { useState } from "react";

function VarietyPack() {
    const [packHover, setPackHover] = useState(false);
    return (
        <div className="variety-pack">
            <div
                className="pack-container"
                onMouseEnter={() => setPackHover(true)}
                onMouseLeave={() => setPackHover(false)}
            >
                <div className="pack-bg">
                    <motion.div
                        animate={packHover ? { height: "90%" } : {}}
                        transition={{ duration: 0.15 }}
                    ></motion.div>
                </div>
                <div className="pack-top">
                    <div className="pack-left">
                        <h2>VARIETY PACK</h2>
                        <p>
                            All of our delicious flavors in one handy box.
                            Includes two each of our Greenfest, Very Berry, and
                            Choconana smoothies.
                        </p>
                    </div>
                    <div className="pack-right">
                        <motion.div
                            className="pack-first-image pack-image"
                            animate={
                                packHover
                                    ? {
                                          scale: 1.1,
                                          rotate: "-10deg",
                                          x: -30,
                                          y: -20,
                                      }
                                    : {}
                            }
                        >
                            <Image src={images.Smoothe1} />
                        </motion.div>
                        <motion.div
                            className="pack-second-image pack-image"
                            animate={
                                packHover
                                    ? {
                                          scale: 1.2,
                                          rotate: "3deg",
                                          x: 0,
                                          y: 20,
                                      }
                                    : {}
                            }
                        >
                            <Image src={images.Smoothe2} />
                        </motion.div>
                        <motion.div
                            className="pack-third-image pack-image"
                            animate={
                                packHover
                                    ? {
                                          scale: 1,
                                          rotate: "10deg",
                                          x: 20,
                                          y: -10,
                                      }
                                    : {}
                            }
                        >
                            <Image src={images.Smoothe4} />
                        </motion.div>
                    </div>
                </div>
                <div className="pack-bottom">
                    <motion.button
                        animate={packHover ? { y: -5 } : { y: "0.7rem" }}
                        transition={{ delay: 0.1 }}
                    >
                        <div>+</div>
                    </motion.button>
                    <motion.button
                        animate={packHover ? { y: -5 } : { y: "0.7rem" }}
                        transition={{ delay: 0.1 }}
                    >
                        SHOP NOW
                    </motion.button>
                </div>
            </div>
        </div>
    );
}

export default VarietyPack;
