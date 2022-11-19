import { TextField } from "@material-ui/core";

export const UiAddToCart = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
     <h1 style={{ alignSelf: 'center' , textAlign:'center', display:'block'}}>Speak or Type to introduce the amount</h1>
     <br/>
     <img style={{ alignSelf: 'center', display:'block', width:"200px"}} src="https://cdn.icon-icons.com/icons2/2770/PNG/512/voice_microphone_icon_176686.png" />
     <br/>
     <TextField id="filled-basic" label="Amount" variant="filled" style={{ alignSelf: 'center' , width:"100px", display:'block'}} InputLabelProps={{shrink: true}}/>
     <h2 style={{ alignSelf: 'center', display:'block' }}>Apa Plata Dorna Izvorul Alb</h2>
     <img  style={{ alignSelf: 'center', display:'block' }} class="flex-container" src="https://www.auchan.ro/public/images/h92/heb/h00/apa-plata-dorna-2-l-9309752459294.jpg"/>
     </div>
  );
};