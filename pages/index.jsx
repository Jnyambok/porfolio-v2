import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';


export default function HomePage() {
  return (
    <> 
      <div className={styles.container}>
        
        <div className={styles.background}>
          <h1>AI</h1>
          <h1>Research</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Julius Nyerere Nyambok</h1>
            <h6 className={styles.bio}>Machine Learning Engineer/Cloud Solutions Architect</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='Research' className='Research'>
                      Python
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      SQL
                    </span>
                    <span key='MIM' className='MIM'>
                      Azure
                    </span>
                    <span key='LLMs' className='LLMs'>
                      LLMs
                    </span>
                    <span key='GenAI' className='GenAI'>
                      Data Visualization
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                      PyTorch
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      Tensorflow
                    </span>
                    <span key='Apache-Spark' className='Apache-Spark'>
                      Cloud Computing
                    </span>
                    <span key='SQL' className='SQL'>
                      Data Engineering
                    </span>
                    <span key='MLOps' className='MLOps'>
                      MLOps
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Cross Industry Standard for Data Mining (CRISP-DM)
                    </span>
                    <span key='Bots' className='Bots'>
                      Machine Learning
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/resume">
              <button className={styles.button}>Resume</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me.jpg"
                width={300}
                height={300}
                alt="Julius' Picture"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
