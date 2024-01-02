import  styles  from './AnimatedLetters.module.scss';

const AnimatedLetters = ({ strArray }) => {
console.log(styles);
    return (
        <span className={styles.parent}>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${styles["textAnimate"]} ${styles["delay_"+i]} animate__animated animate__bounceIn`}> 
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters;