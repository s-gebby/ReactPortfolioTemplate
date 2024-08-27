import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0, 73, 138)", "rgb(65, 150, 54)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Silas",
    lastName: "Gebhart",
    initials: "SJG", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Freelance Software Engineer"
        },
        {
            emoji: "📧",
            text: <a href="mailto:silasgebhart12@gmail.com">silasgebhart12@gmail.com</a>
        }
    ],
    socials: [
        {
            link: "https://github.com/s-gebby",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/silas-gebhart-079502193/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/SilasGebhart",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "What's up! I'm Silas. I'm a Full Stack Software Engineer. I studied software engineering with Flatiron Bootcamp but am mainly self taught. I'm always looking for new opportunities to learn and grow as a developer. I'm passionate about creating clean, efficient, and user-friendly software. Currently, I love working with React, TailwindCSS, and Node.js. I'm excited to continue learning and growing as a developer and contributing to meaningful projects.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'html5', 'tailwindCSS', 'node.js'],
            exposedTo: ['figma', 'python', 'bootstrap']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'gym',
            emoji: '🏋️‍♂️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Omni-View Explorer 🌎",
            live: "https://omniview.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Blackjack 🎰",
            live: "https://blackjackfun.netlify.app/",
            source: "https://github.com/s-gebby/blackJackGame",
            image: mock2
        },
        {
            title: "Snake Game 🐍",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Get Jacked 💪",
            live: "https://jackedfit.netlify.app/",
            source: "https://github.com/s-gebby/fitness-app",
            image: mock4
        },
        {
            title: "Accountability Project: Coming Soon",
            live: "#",
            source: "https://github.com/s-gebby"
        }
    ]
}