import Image from "next/image";
import style from './home.module.css'

const Home = () => {
  return <div className={style.container}>
    <div className={style.textContainer}>
      <h1 className={style.title}>Creative Thoughts Agency.</h1>
      <p className={style.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime praesentium totam vitae
        fugit quos eveniet delectus a, ab illo dolorem deleniti possimus nobis voluptate.
      </p>
      <div className={style.buttons}>
        <button className={style.button}>Learn More</button>
        <button className={style.button}>Contact</button>
      </div>
      <div className={style.brands}>
        <Image src='/brands.png' alt="" fill className={style.brandImage} />
      </div>
    </div>
    <div className={style.imageContainer}>
      <Image src='/hero.gif' alt="" fill className={style.heroImg}/>
    </div>
  </div>;
};

export default Home;