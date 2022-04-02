const title = `
Quiz on security and privacy
`

const description = `
This is our quiz. Please take it only after you've finished the game.
`

const incorrectAnswer = `
This answer is incorrect. Please try again!
`

const incorrectAnswer1 = `
You should not be so reckless when connecting to public Wi-Fi networks! 
Verify you're connecting to the actual Wi-Fi offered by the institution. Maybe you can find a flier, 
or ask an employee. 
Some other ways to protect yourself would be to use VPN, which would act as a tunnel of sorts to protect your data.
Another good practise would be to use websites that begin with 'https'. This stands for Hypertext Transfer Protocol Secure. Essentially, data
from these sites encrypt data between your browser and the website, not allowing attackers to see your personal
data being sent back and forth.
`

const incorrectAnswer2 = `
Try again. Trust me, you'll get it right this time!
`

const incorrectAnswer3 = `
This probably isn't the best idea... Surely your teddy bear's name isn't a very strong password?
`

const incorrectAnswer4 = `
Actually, length > complexity when it comes to password security. Try clicking the other answer for more
of an explanation!
`

const incorrectAnswer5 = `
Not exactly. Try again!
`

const incorrectAnswer6 = `
Maybe consider using some form of technology to help you remember your password?
`

const incorrectAnswer7 = `
You're a good person for deciding to help him out! Albeit a bit gullible...
`

const incorrectAnswer8 = `
In a perfect world, maybe... But do you really want ANYONE to have access to all that information about you (and your children)?
`

const incorrectAnswer9 = `
That'd actually be quite dangerous... You wouldn't want your card details stolen by someone creeping over a bad connection, would you?
`

const incorrectAnswer10 = `
Downloading a program from some random website surely isn't the best idea, is it?
`
const correctAnswer = "Correct answer. Good job!"

export const quiz =  {
  "quizTitle": title,
  "quizSynopsis": description,
  "questions": [
    {
      "question": "You're at your local Tim Hortons, and you want to use your laptop to browse the internet. How should you make sure to stay safe when connected to Tim Horton's Wifi?",
      "questionType": "text",
      // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      "answerSelectionType": "multiple",
      "answers": [
        "You just connect to the Wi-Fi named and start using the internet. What could Tim Horton's be up to?",
        "Verify you're connecting to the right network.",
        "Use a VPN.",
        "Use sites with that begin with 'https'"

      ],
      "correctAnswer": [2,3,4],
      "messageForCorrectAnswer": correctAnswer,
      "messageForIncorrectAnswer": incorrectAnswer1,
      "explanation": `Correct! Public Wi-Fis might expose you to Hackers who would want to get a hold of your data. Even more the Wi-Fi you are connecting to could be a façade set up to lure preys. So, it is best that you keep your data a secret by using a VPN. This way your data on the internet would be encrypted and safer from preying eyes,
      `,
      "point": "1"
    },
    {
      "question": "You've successfully connected to Tim Horton's Wi-Fi network, and would like to sign up for a new social media platform, myImage. Two websites appear at the top when you google 'myImage', which one is more likely to be the actual platform?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "mymailusa.co.uk",
        "mymail.com"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": correctAnswer,
      "messageForIncorrectAnswer": incorrectAnswer2,
      "explanation": "Adversaries could pose as reputable names to lure you into their traps. You should be on the lookout for abnormalities like weird domain names and website layouts. Before clicking either link though, a good practise would be to simply google the name of both sites; perhaps you could find something to help figure out which site is legitimate.",
      "point": "1"
    },
    {
      "question": "You select the sign-up button, you enter a username and then you are asked to come up with a password what should you input?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Without even flinching, like a madman, you hit that keyboard making those keys *click*. You have entered the name of your favorite teddy bear. You always use his name for passwords.",
        "You come up with a new password that you haven’t used anywhere else, something long that uses several types of characters."
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": correctAnswer,
      "messageForIncorrectAnswer": incorrectAnswer3,
      "explanation": "You should avoid using the same passwords across multiple websites, as when the data on one website is compromised all your accounts would be in imminent danger. Data leaks happen all the time!",
      "point": "1"
    },
    {
      "question": "Which of these two passwords is harder to crack?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "mYpRP!4Te66y",
        "mypurpleteddyisthebest",
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": correctAnswer,
      "messageForIncorrectAnswer": incorrectAnswer4,
      "explanation": "Longer, yet easier to remember passwords are the way to go as the number of characters to choose from for each letter would always be the same.",
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
      "messageForCorrectAnswer": correctAnswer,
      "messageForIncorrectAnswer": incorrectAnswer5,
      "explanation": "Two-factor authentication is an extra layer of protection, that protect you from attackers even if they have your password! In most cases, you’ll be prompted to confirm your login attempt by a text message to your cell so that even if someone guesses the name of your favorite teddy bear, they won’t be able to log in just yet. ",
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
      "messageForCorrectAnswer": correctAnswer,
      "messageForIncorrectAnswer": incorrectAnswer6,
      "explanation": "Password managers let you keep your passwords organized without letting it stay on your fridge for everyone passing by to see. Paired with a two-factor authentication you can’t go wrong with this one. Some trusted password managers include 1Password, BitWarden, and KeyPass. Make sure to do your research on what you decide to use!",
      "point": "1"
    },
    {
      "question": "You are looking at your inbox and you have received an e-mail from a Nigerian Prince in need of a couple thousand bucks so that he and his guard can fly back and claim back his throne! He claims he'll pay you back generously once he's returned to power.",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Pay him. After all the guy is a prince and has many gems laying around in his room back home...",
        "Click on that trash icon next to the e-mail you received from the prince, and block the email."
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": correctAnswer,
      "messageForIncorrectAnswer": incorrectAnswer7,
      "explanation": "Scammers and the like will pose as someone reputable, or as recognized institution to trick you into their own interests. Be vigilant; if it's too good to be true, it probably is.",
      "point": "1"
    },
    {
      "question": "Now that you've dealt with the prince, you can finally create your myImage account. After signing up, myImage asks you to enter some personal details for your profile. What are you going to put there?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "You enter your personal information. From your address, to your children’s names and birthdate.",
        "You avoid entering information that not everyone should know."
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": correctAnswer,
      "messageForIncorrectAnswer": incorrectAnswer8,
      "explanation": "There was once a man whom after getting stabbed in an online shooter game went on a 6-month search to find the person from the opposing team. The man stabbed him in REAL LIFE upon finding his address. So, you should avoid putting too much on the web as there are endless possibilities for which they could be used for malicious intentions.",
      "point": "1"
    },
    {
      "question": "You'd like to upgrade to a premium account on myImage so that you can use the platform for more than 30 minutes each day. In order to pay, you're asked to provide your credit card's details.",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Without checking anything, enter your credit card details and make the payment.",
        "You make sure that the website uses a secure connection, and check the legitimacy of whatever payment processing platform myImage uses. If everything checks out, then make the payment."
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": correctAnswer,
      "messageForIncorrectAnswer": incorrectAnswer9,
      "explanation": "While providing sensitive details like your credit card number you should make sure that the website uses an encrypted connection by making sure that its address starts with https: (not http:). The “s” here stands for secure, this way your sensitive information would be encrypted and much harder to be intercepted.",
      "point": "1"
    },
    {
      "question": "At last, you wonder whether if there is a desktop app for your myImage account, so you google “myImage Desktop App”. There seems to be a desktop app, but not created by myImage, but by some random website.",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Go ahead and download the unofficial app from the website.",
        "Look for an app provided through myImage’s website."
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": correctAnswer,
      "messageForIncorrectAnswer": incorrectAnswer10,
      "explanation": "You should avoid downloading apps from sources that you do not trust as hackers could use malicious software disguised as something entirely different to gain control of your device. These types of threats go by the name 'Trojan'.",
      "point": "1"
    },


  ]
} 