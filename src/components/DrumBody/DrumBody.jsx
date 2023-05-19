import { useRef, useEffect, useState } from 'react';
import soundQ from '../util/Heater-1.mp3';
import soundW from '../util/Heater-2.mp3';
import soundE from '../util/Heater-3.mp3';
import soundA from '../util/Heater-4_1.mp3';
import soundS from '../util/Heater-6.mp3';
import soundD from '../util/Dsc_Oh.mp3';
import soundZ from '../util/Kick_n_Hat.mp3';
import soundX from '../util/RP4_KICK_1.mp3';
import soundC from '../util/Cev_H2.mp3';
import './DrumBody.scss'


function DrumBody() {

    const [audioValue, setAudioValue] = useState('')
    
    useEffect(() => {
        document.addEventListener('keydown', playSound, true);
        return () => document.removeEventListener
    })
    
    function playSound(e) {
        switch(e.key) {
            case 'q':
            return playSoundOne();
            case 'w':
            return playSoundTwo();
            case 'e':
            return playSoundThree();
            case 'a':
            return playSoundFour();
            case 's':
            return playSoundFive();
            case 'd':
            return playSoundSix();
            case 'z':
            return playSoundSeven();
            case 'x':
            return playSoundEight();
            case 'c':
            return playSoundNine();
            default:
            return null;
        }
    }

    const firstRef = useRef(null); 
    const secondRef = useRef(null); 
    const thirdRef = useRef(null); 
    const fourthRef = useRef(null);
    const fifthRef = useRef(null);
    const sixthRef = useRef(null); 
    const seventhRef = useRef(null); 
    const eighthRef = useRef(null); 
    const ninethRef = useRef(null);
    
    function playSoundOne(e) {
        firstRef.current.play();
        setAudioValue(`${e.target.id}`)
    }

    function playSoundTwo(e) {
        secondRef.current.play();
        setAudioValue(`${e.target.id}`)
    }

    function playSoundThree(e) {
        thirdRef.current.play();
        setAudioValue(`${e.target.id}`)
    }

    function playSoundFour(e) {
        fourthRef.current.play();
        setAudioValue(`${e.target.id}`)
    }
    function playSoundFive(e) {
        fifthRef.current.play();
        setAudioValue(`${e.target.id}`)
    }
    function playSoundSix(e) {
        sixthRef.current.play();
        setAudioValue(`${e.target.id}`)
    }
    function playSoundSeven(e) {
        seventhRef.current.play();
        setAudioValue(`${e.target.id}`)
    }
    function playSoundEight(e) {
        eighthRef.current.play();
        setAudioValue(`${e.target.id}`)
    }
    function playSoundNine(e) {
        ninethRef.current.play();
        setAudioValue(`${e.target.id}`)
    }
    
    return (
        <div className="drum-wrapper" id="drum-wrapper">
            <div className="left" id="drum-machine">
            <button onClick={playSoundOne} type='button' id="Heater-1" className="drum-pad">
                Q
                <audio ref={firstRef} src={soundQ} id="Q" className="clip">Q</audio>
            </button>
            <button onClick={playSoundTwo} type='button' id="Heater-2" className="drum-pad">
                W
                <audio ref={secondRef} src={soundW} id="W" className="clip">W</audio>
            </button>
            <button onClick={playSoundThree} type='button' id="Heater-3" className="drum-pad">
                E
                <audio ref={thirdRef} src={soundE} id="E" className="clip">E</audio>
            </button>
            <button onClick={playSoundFour} type='button' id="Heater-4_1" className="drum-pad">
                A
                <audio ref={fourthRef} src={soundA} id="A" className="clip">A</audio>
            </button>
            <button onClick={playSoundFive} type='button' id="Heater-6" className="drum-pad">
                S
                <audio ref={fifthRef} src={soundS} id="S" className="clip">S</audio>
            </button>
            <button onClick={playSoundSix} type='button' id="Dsc_Oh" className="drum-pad">
                D
                <audio ref={sixthRef} src={soundD} id="D" className="clip">D</audio>
            </button>
            <button onClick={playSoundSeven} type='button' id="Kick_n_Hat" className="drum-pad">
                Z
                <audio ref={seventhRef} src={soundZ} id="Z" className="clip">Z</audio>
            </button>
            <button onClick={playSoundEight} type='button' id="RP4_KICK" className="drum-pad">
                X
                <audio ref={eighthRef} src={soundX} id="X" className="clip">X</audio>
            </button>
            <button onClick={playSoundNine} type='button' id="Cev_H2" className="drum-pad">
                C
                <audio ref={ninethRef} src={soundC} id="C" className="clip">C</audio>
            </button>
            </div>
            <div id="display" className="right">
            <strong className="song-id">{audioValue}</strong>
            </div>
        </div>
    )
}

export default DrumBody;