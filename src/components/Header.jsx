import React from 'react'
import { motion } from 'framer-motion'
import images from '@/asset'
import Image from 'next/image'

function Header() {
  return (

    <div className="header">
          <div className="header-content">
            <div className="header-left">
              <h1>A Better Smoothie is Here</h1>
              <h2>Delicious smoothies without any of the prep. Made with real fruits & veggies plus plant protein!</h2>
              <motion.button
              whileHover={{scale: 1.1}}
              >Shop Now </motion.button>
            </div>
            <div className="header-right">
              <motion.div className="header-star"
                animate={{rotate: '360deg'}}
                transition={{duration: 60,repeat: Infinity, ease: 'linear'}}
                >
                <Image src={images.Star}/>
              </motion.div>
              <div className="header-image">
                <motion.div 
                initial={{scale: 0.9, x: 170, y: 20, rotate: '16deg'}}   
                animate={{y:[0, 20, 0]}}
                transition={{duration: 6, repeat: Infinity, ease: 'easeInOut'}}
                className="image-1">
                  <Image src={images.Smoothe1} />
                </motion.div>
                <motion.div 
                initial={{scale: 0.95, x: -170, y: -20, rotate: '-12deg'}}       
                animate={{y:[-20, 0, -20], x:[-180, -170, -180], rotate:['-12deg', '-10deg', '-12deg']}}
                transition={{duration: 6, repeat: Infinity, type: "easeInOut"}}         
                className="image-2">
                  <Image src={images.Smoothe2} />
                </motion.div>
                <motion.div     
                animate={{y:[0, -20, 0], rotate:['0deg', '2deg', '0deg']}}
                transition={{duration: 6, repeat: Infinity, type: "easeInOut"}}                    
                className="image-3">
                  <Image src={images.Smoothe4} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Header