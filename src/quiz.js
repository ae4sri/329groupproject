const title = `
Quiz on security and privacy
`

const description = `
This is our quiz. Please take it only after you've finished the game.
`

const incorrectAnswer = `
This answer is incorrect. Please try again!
`



export const quiz =  {
  "quizTitle": title,
  "quizSynopsis": description,
  "questions": [
    {
      "question": "You are at your local Tim’s, and you want to use your laptop to browse the internet. You need to connect to the internet somehow. What do you do?",
      "questionType": "text",
      // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      "answerSelectionType": "single",
      "answers": [
        "You just connect to the Wi-Fi named IamHortonsWIFI and start using the internet.",
        "You make sure to turn on your VPN before starting to use the internet",
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": `Correct! Good job.`,
      "messageForIncorrectAnswer": incorrectAnswer,
      "explanation": `Correct! Public Wi-Fis might expose you to Hackers who would want to get a hold of your data. Even more the Wi-Fi you are connecting to could be a façade set up to lure preys. So, it is best that you keep your data a secret by using a VPN. This way your data on the internet would be encrypted and safer from preying eyes,
      `,
      "point": "1"
    },
    {
      "question": "You are now connected and would like to sign up for this new social platform, but you realize you need a mail account for that which you do not have. You have heard from a friend a mail provider by the name mymail so you google that name. You are faced with two similar options.",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "mymailusa.co.uk",
        "mymail.com"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": incorrectAnswer,
      "explanation": "Adversaries could pose as reputable names to lure you into their traps. You should be on the lookout for abnormalities like weird domain names and website layouts. Also try “googling” the website to obtain review that prove its authenticity.       ",
      "point": "1"
    },
    {
      "question": "You select the sign-up button, you enter a username and then you are asked to come up with a password what should you input?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Without even flinching, like a madman, you hit that keyboard making those keys *click*. You have entered the name of your favorite teddy bear. You always use his name for passwords.",
        "You come up with a new password that you haven’t used anywhere else"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": incorrectAnswer,
      "explanation": "You should avoid using the same passwords across multiple websites as when the data on one website is compromised your accounts would be in imminent danger",
      "point": "1"
    },
    {
      "question": "Your password is too short and there is this red bar with “easy” written on it. What should you change it to?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "mYpRP!4Te66y",
        "mypurpleteddyisthebest",
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": incorrectAnswer,
      "explanation": "Longer yet easier to remember passwords are the way to go as the number of characters to choose from for each letter would always be the same.",
      "point": "1"
    },
    {
      "question": "Now you are faced with a pop-up. It prompts you to set up something called a two-factor authentication. What should you do?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "It’s just more of that useless stuff that they make you fill out, just skip it already.",
        "Go ahead and follow the steps, must be something useful.",
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": incorrectAnswer,
      "explanation": "Two-factor authentication is an extra layer of protection, just to make sure everything is in order. In most cases, you’ll be prompted to confirm your login attempt by a text message to your cell so that even if someone guesses the name of your favorite teddy bear, they won’t be able to log in just yet. ",
      "point": "1"
    },
    {
      "question": "Great, you have created your account but that’s one more password to remember, what are you going to do?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Just remember it in your head.",
        "Write it on a post-it and slap it on your fridge.",
        "Use a password manager."
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": incorrectAnswer,
      "explanation": "Password managers let you keep your passwords organized without letting it stay on your fridge for everyone passing by to see. Paired with a two-factor authentication you can’t go wrong with this one.",
      "point": "1"
    },
    {
      "question": "You are looking at your inbox and you have received an e-mail from a Nigerian Prince in need of a couple thousand bucks so that he and his guard can fly back and claim the throne. He says that he will pay you pack “generously” once he reaches home.",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Pay him. After all the guy is a prince and has many gems laying around in his room back home...",
        "Click on that trash icon next to the e-mail you received from the prince, and block the email."
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": incorrectAnswer,
      "explanation": "Scammers and their like would pose as someone reputable or a recognized institution to trick you into their own interests.",
      "point": "1"
    },
    {
      "question": "Ok, you have dealt with that prince now you can create your social media account. By following the approach, you had for creating an e-mail account you create your myImage account, there is a field called personal information. What are you going to put there?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "You enter your personal information from your address to your children’s names and their birthday.",
        "You avoid entering information that not everyone should know."
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": incorrectAnswer,
      "explanation": "There was once a man whom after getting stabbed in an online shooter game went on a 6-month search to find the person from the opposing team and stabbed him upon finding his address. So, you should avoid putting “too much” on the web as there are endless possibilities for which they could be used for malicious intentions.",
      "point": "1"
    },
    {
      "question": "You would like to upgrade to a premium account on myImage so that you can use the platform for more than 30 minutes each day. You are asked to provide your card details.",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "You enter your credit card details and make the payment.",
        "You make sure that the website uses a secure connection, and if so, do the above."
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": incorrectAnswer,
      "explanation": "While providing sensitive details like your credit card number you should make sure that the website uses an encrypted connection by making sure that its address starts with https: (not http:). The “s” here stands for secure, this way your sensitive information would be encrypted and much harder to be intercepted.",
      "point": "1"
    },
    {
      "question": "Finally, you wonder whether if there is a desktop app for your myImage account, so you type “myImage Desktop App”. There is a result from a site called randomapps.com.",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Go ahead and download the app from the website.",
        "Look for an app provided through myImage’s website."
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": incorrectAnswer,
      "explanation": "You should avoid downloading apps from sources that you do not trust as hackers could use malicious software disguised as something entirely different to gain control of your device.",
      "point": "1"
    },


  ]
} 