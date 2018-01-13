1) Figure out what all these handlers do.

handlers.LaunchRequest
    Sets state to START, and calls emitWithState("Start");

handlers.QuizIntent
    Sets state to QUIZ, and calls emitWithState("Quiz");

handlers.AnswerIntent
    Sets state to START, and calls emitWithState("AnswerIntent");

handlers.AMAZON.HelpIntent
    Alexa reads out the HELP_MESSAGE, if reprompted will play HELP_MESSAGE.

handlers.Unhandled
    Same code as handlers.LaunchRequest.

startHandlers.Start
    Alexa reads out the WELCOME_MESSAGE, if reprompted, will play HELP_MESSAGE.

startHandlers.AnswerIntent
    Reads out some information about a state, or if that state does not exist, reads out an error message.

startHandlers.QuizIntent
    Sets state to QUIZ, and then jumps into the Quiz handler.

startHandlers.AMAZON.PauseIntent
    Alexa reads out the EXIT_SKILL_MESSAGE

startHandlers.AMAZON.StopIntent
    Alexa reads out the EXIT_SKILL_MESSAGE

startHandlers.AMAZON.CancelIntent
    Alexa reads out the EXIT_SKILL_MESSAGE

startHandlers.AMAZON.HelpIntent
    Alexa reads out the HELP_MESSAGE

startHandlers.Unhandled
    Jumps into the Start handler

quizHandlers.Quiz
    Clears out response, counter and quiz_score variables from this.attributes. Effectively clearing the session.

quizHandlers.AskQuestion



quizHandlers.AnswerIntent


quizHandlers.AMAZON.RepeatIntent


quizHandlers.AMAZON.StartOverIntent


quizHandlers.AMAZON.StopIntent


quizHandlers.AMAZON.PauseIntent


quizHandlers.AMAZON.CancelIntent


quizHandlers.AMAZON.HelpIntent


quizHandlers.Unhandled



2) What does emitWithState do?
    Redirects to another handler. For example, this.emitWithState("Quiz") will trigger the "Quiz" handler

3) What is the "Unhandled" intent? A catch all? Look it up online.
    The default STATE

4) What does this line do? this.response.speak(HELP_MESSAGE).listen(HELP_MESSAGE);
    Alexa reads out HELP_MESSAGE, and if prompted to speak again, reads out HELP_MESSAGE again.

5) What does it mean to emit ":responseReady"?
    Sends the response to the device.

6) What is this.attributes?
    A key/value map containing data you need to persist during the session


