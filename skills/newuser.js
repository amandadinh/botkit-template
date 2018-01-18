module.exports = function (controller) {

    controller.hears([/^newuser$/], "direct_message,direct_mention", function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            convo.ask("Enter the full name of the new employee [First Last]", [
                {
                    var NewUserNameString = convo.extractResponse('fullname');
                    var NewUserSplit = newUserNameString.split(' ', 2)
                    var NewUserFirst = NewUserSplit[1];
                    callback: function (response, convo) {
                        convo.gotoThread("success");
                    },
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        convo.say("Sorry, I don't know this color. Try another one...");
                        convo.repeat();
                        convo.next();
                    }
                }
            ], { key: "fullname" });

            // Success thread
            convo.addMessage(
                "Cool, I love '{{responses.NewUserFirst}}' too",
                "success");
        });
    });
};

