import React, { useState } from 'react'
import Navbar from '../Navbar'
import styles from './index.module.scss';

import Video from '../Video';

const langs = [
  { titleAr: 'العـــربيـة', titleEn: "Arabic", img: '1.png', lang: 'ar', videoURL: 'http://drramzy-001-site1.gtempurl.com/video_en.mp4' },
  { titleAr: 'الإنجليزية', titleEn: "English", img: '2.png', lang: 'en', videoURL: 'http://drramzy-001-site1.gtempurl.com/video_en.mp4' },
  { titleAr: 'الفرنسـية', titleEn: "Français", img: '3.png', lang: 'fr', videoURL: 'http://drramzy-001-site1.gtempurl.com/video_fr.mp4' },
  { titleAr: 'الصـينيـة', titleEn: "汉语", img: '4.png', lang: 'ch', videoURL: 'http://drramzy-001-site1.gtempurl.com/video_en.mp4' },
  { titleAr: 'الـروسيـة', titleEn: "Русский", img: '5.png', lang: 'ru', videoURL: 'http://drramzy-001-site1.gtempurl.com/video_ru.mp4' },
  { titleAr: 'الإسبانية', titleEn: "Español", img: '6.png', lang: 'es', videoURL: 'http://drramzy-001-site1.gtempurl.com/video_es.mp4' },
  { titleAr: 'الإيطالية', titleEn: "Italian", img: 'it.png', lang: 'it', videoURL: 'http://drramzy-001-site1.gtempurl.com/video_it.mp4' },

]

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [VideoURL, setVideoURL] = useState(false);

  const handleClick = (idx) => {
    setVideoURL(langs[idx].videoURL)
    setShowMenu(true)
  }
  return (
    <>
      <Navbar />

      <section id='langs' className={styles.langs}>
        <div className="container">


          <div className={styles.sec_container}>
            <div className={styles.header}>
              <div className={styles.box}>
                <div className={styles.icon}>
                  <img src="/assets/svgs/langs.svg" alt="" />
                </div>
                <p>اخــــــتـــر لغــتــــــــك</p>

              </div>

              <div className={styles.box}>
                <p>Choose your language</p>
              </div>
            </div>


            <div className={styles.boxes_container}>
              {langs.map((lang, idx) =>
                <div className={styles.box} key={idx}
                  /* onClick={() => setShowMenu(true)} */
                  onClick={() => handleClick(idx)}
                >
                  <p>{lang.titleAr}</p>
                  <img src={`/assets/imgs/${lang.img}`} alt={lang.titleEn} />
                  <p>{lang.titleEn}</p>

                </div>
              )}
            </div>

          </div>
        </div>
      </section>



      {showMenu &&
        <Video setShowMenu={setShowMenu} VideoURL={VideoURL} />
      }

    </>
  )
}

export default Home