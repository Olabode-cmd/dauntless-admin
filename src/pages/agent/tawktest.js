import AgentLayout from '../../dashboard/AgentLayout';
import React, { useState, useEffect, useCallback } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


export default function HomePage() {
    const onLoad = () => {
        console.log('onLoad works!');
    };

    return (
        <AgentLayout>

            <div className="flex flex-wrap py-6">

                <div className="w-full lg:w-12/12 bg-gray-300 dark:bg-gray-800 py-6 px-6 rounded-3xl">
                    <div className="flex flex-row justify-between">
                        <p className='dark:text-gray-100 text-black text-2xl pb-6 font-bold'>Chats</p>
                    </div>
                    <section className="container mx-auto p-6 font-mono">
                        {/* <button onClick={handleMinimize}> Minimize the Chat </button> */}

                        <TawkMessengerReact
                            propertyId="62a3f92c7b967b117993f16e"
                            widgetId="1g588alp4"
                            onLoad={onLoad} />
                    </section>
                </div>
            </div>


        </AgentLayout>
    );
}