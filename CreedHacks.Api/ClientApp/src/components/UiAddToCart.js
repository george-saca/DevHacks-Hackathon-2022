import { useEffect } from "react";
import { addToCart } from '../helpers/httpCaller';
import useSpeechToText from 'react-hook-speech-to-text';
import { useNavigate } from "react-router-dom";
import MicIcon from '@material-ui/icons/Mic';
import { Wrapper } from "./UiAddToCart.styles.js";

export const UiAddToCart = () => {

  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
  var SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
  var quantities = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const speechRecognitionList = new SpeechGrammarList();
  var grammar = '#JSGF V1.0; grammar quantities; public <color> = ' + quantities.join(' | ') + ' ;'
  speechRecognitionList.addFromString(grammar, 1);

  const {
    error,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
    speechRecognitionProperties: {
      lang: 'en-US',
      interimResults: true, // Allows for displaying real-time speech results
      grammars: speechRecognitionList
    }
  });

  let history = useNavigate();

  useEffect(() => {
    console.log(results);
    sendAmountAndRedirectToCart(results[results.length - 1]?.transcript);
  }, [isRecording]);

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  const sendAmountAndRedirectToCart = async (transcriptNo) => {

    transcriptNo.match(/^\d+|\d+\b|\d+(?=\w)/g)
      .map(function (v) { return +v; });

    console.log(transcriptNo[0]);
    await addToCart({
      id: 1,
      img: "https://www.auchan.ro/public/images/h92/heb/h00/apa-plata-dorna-2-l-9309752459294.jpg",
      price: 6,
      title: "APA PLATA IZVORUL ALB",
      amount: transcriptNo[0]
    });

    history("/");
  }

  return (
    <Wrapper>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* <h1>Recording: {isRecording.toString()}</h1> */}
        <h2 style={{ alignSelf: 'center', textAlign: 'center', display: 'block' }}>Speak to introduce the amount</h2>
        <br />
        <MicIcon style={{ alignSelf: 'center', display: 'block', width: "120px", height: "100px" }} onClick={isRecording ? stopSpeechToText : startSpeechToText} src="https://cdn.icon-icons.com/icons2/2770/PNG/512/voice_microphone_icon_176686.png" />
        <img class="flex-container" src="https://www.auchan.ro/public/images/h92/heb/h00/apa-plata-dorna-2-l-9309752459294.jpg" />
        <h3 style={{ alignSelf: 'center', display: 'block' }}>Apa Plata Dorna Izvorul Alb</h3>
      </div>
    </Wrapper>
  );
};