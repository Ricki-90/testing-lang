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
            message: 'Hej {previousValue}, har du runkat något idag?',
            trigger: '4',
          },
          {
            id: '4',
            user: true,
            trigger: '5',
          },
          {
            id: '5',
            message: 'Det är inte alls bra. Är du en långrunkare eller inte. Ja eller Nej?',
            trigger: '6',
          },
          {
            id: '6',
            user: true,
            trigger: '7',
          },
          {
            id: '7',
            message: 'Ha en trevlig runk',
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