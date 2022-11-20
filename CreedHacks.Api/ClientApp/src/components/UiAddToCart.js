import { useEffect } from "react";
import { addToCart } from '../helpers/httpCaller';
import useSpeechToText from 'react-hook-speech-to-text';
import { useNavigate } from "react-router-dom";

export const UiAddToCart = () => {
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
            interimResults: true // Allows for displaying real-time speech results
          }
      });
      
      let history = useNavigate();

      useEffect(() => {
        console.log(results);
        sendAmountAndRedirectToCart(results[results.length-1]?.transcript);
      }, [isRecording]);

      if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

    const sendAmountAndRedirectToCart = async (transcriptNo) => {
        
        transcriptNo.match(/^\d+|\d+\b|\d+(?=\w)/g)
           .map(function (v) {return +v;});

        console.log(transcriptNo[0]);
        await addToCart({
            id: 1, 
            img: "https://www.auchan.ro/public/images/h92/heb/h00/apa-plata-dorna-2-l-9309752459294.jpg", 
            price: 6, 
            title: "APA PLATA IZVORUL ALB",
            amount: transcriptNo[0]});
        
            history("/");
    }

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
     <h1>Recording: {isRecording.toString()}</h1>
     <h1 style={{ alignSelf: 'center' , textAlign:'center', display:'block'}}>Speak or Type to introduce the amount</h1>
     <br/>
     <img style={{ alignSelf: 'center', display:'block', width:"200px"}} onClick={isRecording ? stopSpeechToText  : startSpeechToText} src="https://cdn.icon-icons.com/icons2/2770/PNG/512/voice_microphone_icon_176686.png" />
     <br/>
     <h2 style={{ alignSelf: 'center', display:'block' }}>Apa Plata Dorna Izvorul Alb</h2>
     <img  style={{ alignSelf: 'center', display:'block' }} class="flex-container" src="https://www.auchan.ro/public/images/h92/heb/h00/apa-plata-dorna-2-l-9309752459294.jpg"/>
     </div>
  );
};