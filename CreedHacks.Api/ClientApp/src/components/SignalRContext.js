import { useContext, useEffect } from "react";

const SignalRContext = React.createContext();
const useSignalRContext = () => useContext(SignalRContext);
const SignalProvider = ({children}) => {

    const { authData, authenticatedFinished, isAutheninticated } = useAuthContext();
    const [connectionState, setConnectionState] = useState({
        isConnected:false,
        isReconnecting:false,
        connection:null
    })
 useEffect ( () => {
    (async ()  => {
        if(!isAutheninticated || connectionState.isConnected || connectionState.isReconnecting){
            return;
        }
        const connection = getConnection('/cartHub');
        connection.onclose((err)=>{console.log(err); 
        setConnectionState((currentState)=>({...currentState, isConnected:false})
        )});

        connection.onreconnecting(()=>{
            setConnectionState(()=>{
                setConnectionState((currentState)=>({
                    ...currentState,
                    isReconnecting:true,
                    isConnected:false
                }))
            })
        })

        connection.onreconnected(async ()=> {
            setConnectionState((currentState) => ({...currentState, isConnected:true}));
            await sendMessage(connection, 'JoinGroup', authData?.diClaims?.email.toLowerCase());
        });

        try{
            await connection.start();
            await sendMessage(connection, 'JoinGroup', authData?.diClaims?.email.toLowerCase());
        }
        catch(err){
            console.log(err);
        }

        setConnectionState((currentState) => ({...currentState, connection, isConnected:true}));
    })();
 },[authenticatedFinished, isAutheninticated, authData, connectionState.isConnected]);

 return(
    <SignalRContext.Provider value={{...connectionState}}>{children}</SignalRContext.Provider>
 );
};

export default SignalProvider;
export {useSignalRContext, SignalRContext};