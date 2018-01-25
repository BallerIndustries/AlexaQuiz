'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this:  const APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
const APP_ID = undefined;

//This is the message a user will hear when they ask Alexa for help in your skill.
const HELP_MESSAGE = "I am a fake girlfriend app!";


const assLoadOfData = {
    "INITIAL": {
        type: "NPC_MESSAGE",
        content: "Erm. Hello? I'm Alice's friend Ellie… Your sister asked me to call you and ask you if you could pick us up?",
        next: "2"
    },

    "2": {
        type: "PLAYER_MESSAGES",
        content: [
            {
                message: "What has my sister done now?",
                tag: "ANNOYED",
                next: "3"
            },
            {
                message: "What happened? Why hasn't she just called me?",
                tag: "WORRIED",
                next: "4"
            }
        ]
    },

    "3": {
        type: "NPC_MESSAGE",
        content: "Don't be mad, we just went out clubbing and just missed the last bus home.",
        next: "5"
    },

    "4": {
        type: "NPC_MESSAGE",
        content: "We were at the club and her mobile died… she is sorry.",
        next: "5"
    },


};

function getInitialInteraction() {
    return assLoadOfData["INITIAL"]
}

function getInteraction(interactionId) {
    return assLoadOfData[interactionId]
}

// [ANNOYED]
// [WORRIED]
// [RESIGNED]
// [CARING]
// [RESPONSIBLE]
// [DISMISSIVE]
// [CURIOUS]
// [BLUNT]
// [TEASING]
// [APOLOGETIC]
// [GRATEFUL]
// [HAPPY]

function getFirstItemInSlot(slots)
{
    for (let slot in slots)
    {
        if (slots[slot].value !== undefined)
        {
            const value = slots[slot].value;
            return value;
        }
    }

    return null;
}




//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    "LaunchRequest": function() {
        this.response.speak("")
            .listen('What did you say cunt?');
        this.emit(":responseReady");
    },

    "StartIntent": function() {
        const interaction = getInitialInteraction();
        this.attributes["current_interaction"] = interaction.next;

        this.response.speak(interaction.content);
        this.emit(":responseReady");
    },

    "ReplyIntent": function() {

        // Grab the last interaction we were on
        const currentInteraction = this.attributes["current_interaction"];

        // Pull emotion out of the REQUEST.
        const emotion = getFirstItemInSlot(this.event.request.intent.slots);

        // Get the next interaction.
        const nextInteraction = currentInteraction.content.find(x => x.tag === emotion);

        // Synthesize next interaction
        this.response.speak(nextInteraction.content);
        this.emit(":responseReady");
    },
    "AMAZON.HelpIntent": function() {
        this.response.speak(HELP_MESSAGE).listen(HELP_MESSAGE);
        this.emit(":responseReady");
    },
    "Unhandled": function() {
        this.response.speak("Sorry didn't catch that.").listen("Sorry didn't catch that");
        this.emit(":responseReady");
    }
};
exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};