import  styles  from './AnimatedLetters.module.scss';

const AnimatedLetters = ({ letterClass, strArray, index }) => {

    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${styles[letterClass]} _${i + index}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters;