import React from "react";
import { motion } from "framer-motion";
import images from "@/asset";
import Image from "next/image";

function Servings() {
    return (
        <div className="servings">
            <motion.div className="servings_content">
                <h2 className="servings_heading">
                    3 SERVINGS OF FRUITS & VEGGIES
                </h2>
                <div className="servings_para_container">
                    <p className="servings_para">
                        NO FILLERS.
                        <br />
                        NO PRESERVATIVES.
                        <br />
                        NO ARTIFICIAL ANYTHING.
                        <br />
                        JUST FRESH-FROM-THE-BLENDER DELICIOUSNESS, BOTTLED UP &
                        READY TO GO!
                    </p>
                    <div className="servings_SVG_container">
                        <motion.svg
                            animate={{ rotate: [30, 0, 30] }}
                            transition={{
                                duration: "8",
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            id="Layer_1"
                            data-name="Layer 1"
                            version="1.1"
                            viewBox="0 0 325.37 310.9"
                        >
                            <path
                                fill="#77dbfc"
                                class="cls-1"
                                d="M169.98,19.73l29.33-14.34c8.05-3.93,17.76-.78,21.96,7.13l15.3,28.84c2.4,4.52,6.75,7.69,11.8,8.57l32.15,5.64c8.82,1.55,14.82,9.81,13.57,18.68l-4.57,32.32c-.72,5.07.95,10.19,4.51,13.87l22.7,23.46c6.23,6.44,6.23,16.65,0,23.09l-22.7,23.46c-3.56,3.68-5.22,8.8-4.51,13.87l4.57,32.32c1.25,8.87-4.75,17.13-13.57,18.68l-32.15,5.64c-5.04.88-9.4,4.05-11.8,8.57l-15.3,28.84c-4.2,7.91-13.91,11.07-21.96,7.13l-29.33-14.34c-4.6-2.25-9.98-2.25-14.58,0l-29.33,14.34c-8.05,3.93-17.76.78-21.96-7.13l-15.3-28.84c-2.4-4.52-6.75-7.69-11.8-8.57l-32.15-5.64c-8.82-1.55-14.82-9.81-13.57-18.68l4.57-32.32c.72-5.07-.95-10.19-4.51-13.87l-22.7-23.46c-6.23-6.44-6.23-16.65,0-23.09l22.7-23.46c3.56-3.68,5.22-8.8,4.51-13.87l-4.57-32.32c-1.25-8.87,4.75-17.13,13.57-18.68l32.15-5.64c5.04-.88,9.4-4.05,11.8-8.57l15.3-28.84c4.2-7.91,13.91-11.07,21.96-7.13l29.33,14.34c4.6,2.25,9.98,2.25,14.58,0Z"
                            />
                        </motion.svg>
                    </div>
                </div>
                <div className="nutritional_content">
                    <Image src={images.Sugar} />
                    <Image src={images.Protein} />
                    <Image src={images.Fiber} />
                </div>
            </motion.div>
        </div>
    );
}

export default Servings;
