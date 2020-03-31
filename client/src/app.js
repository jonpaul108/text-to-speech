import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import styles from './css/app.css';
import {postData, fetchData, getData} from './utils/fetch';


const App = () => {
    const [text, setText] = useState([])

    const getData = async function () {
        let newData = [];
        await axios.get('/home')
            .then((res) => {
                newData = [...res.data];
                console.log('made call for get Data', newData);
            })
            .catch((err) => {
                console.log(err);
            })
            setText(newData);
        };

    useEffect(() => {
          getData();  
    }, []);



    // const postString = useEffect(() => {
    //    axios.post(`audioData`, {
    //        data: 'Hello. I\'m here to retrieve data.',
    //    }) 
    //    .then((response) => {
    //        console.log('in response: ', response);
    //         const newText = [...text];
    //         newText.push(response.data);
    //         setText(newText)
    //         console.log('updated state: ', text);
    //      })
    //      .catch((err) => {
    //          console.log('There was a problem: ', err);
    //      })
    // })
    
    const myAudio = useRef();
    console.log('myAudio', myAudio);
    const playAudio = (ref) => {
        if (myAudio.current !== null) {
            myAudio.current.play();
        }
    }

    return <div className={styles.app}>{
        text.map((el) => {
            return (
            <div>
                <audio type='audio' controls ref={myAudio} src={el.sound} onClick={() => {playAudio()}}/>
                <div>{el.text}</div>
             </div>
            )
    })}</div>
}

export default App;