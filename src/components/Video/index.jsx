import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.scss';
import { CgClose } from 'react-icons/cg';

const Video = ({ setShowMenu, VideoURL }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the video container exists and the clicked target is not within the video container
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        setShowMenu(false); // Close the modal
      }
    };

    // Add event listener for detecting outside clicks
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowMenu]);


  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className={styles.video_container}
      >
        {/* Close icon */}
        <div className={styles.icon_container} onClick={() => setShowMenu(false)}>
          <CgClose />
        </div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={styles.video}
        >
          <video
            ref={videoRef}
            width="560"
            height="315"
            controls
            disablePictureInPicture
          >
            <source src={VideoURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Video;
