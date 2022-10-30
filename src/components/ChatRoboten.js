import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { Segment } from 'semantic-ui-react';

const ChatRoboten = () => {
    const steps = [

        {
            id: '1',
            message: 'Välkommen blivande långrunkare. Vad heter du?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hej {previousValue}, ha en trevlig runk!',
            end: true,
          },

      ];



  return (
    <>
        <Segment>
            <ChatBot steps={steps} className="d-flex justify-content-center" />
        </Segment> 
    </>
  )
}

export default ChatRoboten