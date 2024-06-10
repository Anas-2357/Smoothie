import React from "react";
import { motion } from "framer-motion";
import images from "@/asset";
import Image from "next/image";

const Ab = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, y: [200, 0] }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};

function Decoration() {
    return (
        <>
            <div className="left_absolute">
                <Ab>
                    <motion.div
                        className="first_left"
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 10,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        <Image src={images.Berry2} />
                    </motion.div>
                </Ab>

                <Ab>
                    <motion.div
                        className="second_left"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{
                            opacity: [0, 1],
                            scale: [0, 1],
                            rotate: ["50deg", "20deg"],
                            y: -100,
                        }}
                    >
                        <Image src={images.Watermelon} />
                    </motion.div>
                </Ab>

                <Ab>
                    <motion.div
                        className="third_left"
                        animate={{
                            y: [0, -15, 0],
                            rotate: ["-12deg", "-10deg", "-12deg"],
                        }}
                        transition={{
                            duration: 6,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <Image src={images.Strawberry} />
                    </motion.div>
                </Ab>

                <Ab>
                    <motion.div
                        className="fourth_left"
                        animate={{
                            y: [0, -15, 0],
                            rotate: ["50deg", "40deg", "50deg"],
                        }}
                        transition={{
                            duration: 6,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <Image src={images.Mango3} />
                    </motion.div>
                </Ab>

                <Ab>
                    <motion.div
                        className="fifth_left"
                        animate={{
                            y: [0, -15, 0],
                            rotate: ["-30deg", "-28deg", "-30deg"],
                        }}
                        transition={{
                            duration: 6,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <Image src={images.KaleLeaf} />
                    </motion.div>
                </Ab>

                <Ab>
                    <motion.div
                        className="sixth_left"
                        animate={{
                            y: [0, -15, 0],
                            rotate: ["140deg", "142deg", "140deg"],
                        }}
                        transition={{
                            duration: 6,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <Image src={images.Watermelon} />
                    </motion.div>
                </Ab>
            </div>

            <div className="right_absolute">
                <Ab>
                    <motion.div
                        className="first_right"
                        animate={{ y: [-15, 0, -15] }}
                        transition={{
                            duration: 6,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <Image src={images.Mango2} />
                    </motion.div>
                </Ab>

                <Ab>
                    <motion.div
                        className="second_right"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <Image src={images.Berry1} />
                    </motion.div>
                </Ab>

                <Ab>
                    <motion.div
                        className="third_right"
                        animate={{
                            y: [-15, 0, -15],
                            rotate: ["90deg", "90deg"],
                        }}
                        transition={{
                            duration: 6,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <Image src={images.Chocolate2} />
                    </motion.div>
                </Ab>

                <Ab>
                    <motion.div
                        className="fourth_right"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <Image src={images.Berry2} />
                    </motion.div>
                </Ab>

                <Ab>
                    <motion.div
                        className="fifth_right"
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 40,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <Image src={images.Berry2} />
                    </motion.div>
                </Ab>

                <Ab>
                    <motion.div
                        className="sixth_right"
                        animate={{
                            y: [-25, -50, -25],
                            rotate: ["-30deg", "-35deg", "-30deg"],
                        }}
                        transition={{
                            duration: 6,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <Image src={images.Watermelon} />
                    </motion.div>
                </Ab>

                <Ab>
                    <motion.div
                        className="seventh_right"
                        animate={{
                            y: [-25, -40, -25],
                            rotate: ["-30deg", "-32deg", "-30deg"],
                        }}
                        transition={{
                            duration: 5,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <Image src={images.Chocolate2} />
                    </motion.div>
                </Ab>

                <Ab>
                    <motion.div
                        className="eighth_right"
                        animate={{
                            y: [-25, -15, -25],
                            rotate: ["0deg", "3deg", "0deg"],
                        }}
                        transition={{
                            duration: 8,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <Image src={images.Berry1} />
                    </motion.div>
                </Ab>
            </div>
        </>
    );
}

export default Decoration;
