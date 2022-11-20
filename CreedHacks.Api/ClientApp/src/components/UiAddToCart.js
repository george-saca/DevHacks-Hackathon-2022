import { useEffect } from "react";
import { addToCart } from '../helpers/httpCaller';
import useSpeechToText from 'react-hook-speech-to-text';
import { useNavigate } from "react-router-dom";
import MicIcon from '@material-ui/icons/Mic';
import { Wrapper } from "./Product.styles.js";

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
     <h4>Recording: {isRecording.toString()}</h4>
     <h2 style={{ alignSelf: 'center' , textAlign:'center', display:'block'}}>Speak to introduce the amount</h2>
     <br/>

     <Wrapper>
     <MicIcon style={{ marginTop: '10px', alignSelf: 'center', flexDirection: 'row', width:"100px", height:"100%"}} onClick={isRecording ? stopSpeechToText  : startSpeechToText} src="https://cdn.icon-icons.com/icons2/2770/PNG/512/voice_microphone_icon_176686.png" />
     <img style={{ alignSelf: 'center', flexDirection: 'row', maxHeight:'500px', width:"400px", height:"500px"}} class="flex-container" src="https://www.auchan.ro/public/images/h92/heb/h00/apa-plata-dorna-2-l-9309752459294.jpg"/>
      <div>
        <h3>Apa Plata Dorna Izvorul Alb</h3>
        <h3>6 lei</h3>
      </div>
    </Wrapper>
     </div>
  );
};