import React, { useRef } from "react";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function Index() {
    const onLoad = () => {
        console.log('onLoad works!');
    };

 return(
     <TawkMessengerReact
         propertyId="62a3f92c7b967b117993f16e"
         widgetId="1g588alp4"
         onLoad={onLoad} />
 )
}

export default Index;