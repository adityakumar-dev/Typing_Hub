import { useContext, useState, useEffect, useRef } from "react";
import DataContext from "../Data/GlobalContext";
import getParagraphApi from '../Apis/getParagraph.api';
import '../App.scss';

function AppParagraph() {
    const { data, setData } = useContext(DataContext);
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getParagraphApi();
                setData(result[0].split(''));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [setData]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.key;
            const allowedKeys = /^[a-zA-Z0-9\s.,!?'"]$/;
            let maxLines = 4;
            const lineLength = Math.floor(data.length / maxLines);
            console.log(data.slice(0, lineLength * maxLines));
            if (key.length === 1 && allowedKeys.test(key)) {
                setTypedText((prevText) => prevText + key);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }

            if (key === 'Backspace') {
                setTypedText((prevText) => prevText.slice(0, -1));
                setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);


    const getBackgroundColors = (index) => {
        if (index < typedText.length) {
            if (data[index] === " " && typedText[index] !== " ") {
                return 'red';
            }
        }
        return '';
    };

    const getClass = (index) => {
        if (index < typedText.length) {
            return typedText[index] === data[index] ? 'word correct' : 'word error';
        } else {
            return 'word';
        }
    };
    return (
        <div className="container-fluid ">

            {data ? (
                <div className="display-3 paragraph-text px-md-5 lh-lg ">
                    <div className="scrollable-container " ref={scrollRef}>
                        {data.map((char, index) => (
                            <span key={index} className={getClass(index)} style={{ backgroundColor: getBackgroundColors(index) }}>
                                {char}

                            </span>
                        ))}

                    </div>
                </div>
            ) : (
                <div className="text-white px-md-5 paragraph-text">Loading...</div>
            )}
        </div>
    );
}

export default AppParagraph;