// Messages tailored to each feeling
const messages = {
    now: "You made it baby, I am so so so excited that you made it here and I've been waiting for this for sooo long. Here is something I made for when you leave and so that we can be close with each other even with the distance. Whenever you feel a certain way, open one of these messages, and I hope it'll make you feel better. The message should tell you to send me something, and once you do that, I will change the message so that the next time you feel that way, you'll get a different one. I love you so much baby and I hope we will have a good week 💜", 
    happy: "I am so glad you are happy baby. Please text me why you are happy. Hopefully I am the reason why you're happy because that would make me happy too. I wish that I could be there and be happy with you but for some reason I'm stuck being busy. I love you sooooo much baby and I hope that you can always be this happy 😊",
    sad: "I'm sooo sorry you are feeling sad baby. Just take a deep breath, and just know that everything is going to be okay. I am sorry you're feeling this way and if there's anything I can do to help please let me know. Text me a sad face and I will send you something special to try to make you feel better baby. I love you so much and I hope that you feel better soon. I pinky I will try my best to cheer you up 💖",
    stressed: "Take a deep breath baby, control your breathing, and try to sit somewhere quiet. Close your eyes and imagine yourself in your favorite place. Everything is going to be okay, and whatever it is you're stressed about, it will resolve itself and you will figure it out baby. You can do this, I am so very proud of you for all that you've done and everything will fall into place. Here is a video you can check out and text me what it says ;) https://www.youtube.com/watch?v=z2Nwh4X4hwA 🌸",
    excited: "Yippee yippee yipeeeee! I am so excited that you are excited baby. I don't know why you are so excited but please text me why. You being excited makes me excited because I love sharing the same excitement for things with you. Whatever it is please tell me now so I can say those first three words to you back :). I really want to know and be excited with you babyyyy 🎉",
    unsure: "I'm sorry you're feeling like this baby. I know things might be a bit rough right now and you are unsure of things, but just know that I always love you baby, no matter what. I love you and I want to be with you and I am so so so grateful that I get to call you mine. I can't wait till our distance is gone so we can be right next to each other baby. I'm sorry you're feeling this way, and whenever you are ready, please talk to me on why you are unsure about things. We can talk it out and hopefully can be happy with each other again. I believe in us and we will get through this baby 🖤",
    miss:" I miss you sosososooo much baby. I'm sorry that you miss me and I know I might be hard to reach right now but I pinky I am still thinking about you. We will talk soon baby I promise and although it will be over the phone, I want to hear everything you have to talk about and I will tell you everything so that we will at least be a bit closer. Hopefully you see this when we will see each other soon and we can be together again. I love you so much, I miss you so much and I can't wait to talk to you and see you baby. Send me this emoji 🥺 and I will send you a video of me so you don't miss me as much.",
    laugh:"I want to call you and be goofy and silly so that you laugh baby. But if I'm busy, send me this emoji and I will send you a bunch of tiktoks/reels to watch that will crack you up 😅 PUMPKINNN PUMPKINNN",
    mad:"I know you're mad at me right now baby and I want to appologize sincerely. I am sorry for making a mistake and making you angy at me but just know that I stil love you. I hope that you can forgive me for what I did, and not be angy at me anymore even though you are sexy when angy. I will give you some space, and when you are ready to talk to me send this emoji baby, 😡 I love you so much and I hope that you forgive me and can be happy with me again. I love you babyy. ",
    love:"I love you soooooo much baby. You are my favorite ever and you are the best thing that has happened to me. You make me so happy and want to become a better person for me and for you. I love you to the moon and back. I love you forever. I love you always. I love being with you. I love every part of you. I love growing with you. You make me the happiest guy everrrr. I love love love love love you so much baby. 😘",
    sick:"I am so sorry that you are feeling sick baby. I wish I can be there to take care of you and make you feel better. I want you to lay in bed if you can, or sit down somewhere and drink lotsss of water baby. Make sure your tummy is filled with good food and your body has energy to make you feel better. Send this emoji baby and I will try to make you feel better no matter what. I hope you get better soon baby, I love you. 🤒"



    // Add more feelings and messages here
};

function displayMessage() {
    // Get the selected feeling
    const feeling = document.getElementById("feelingSelect").value;
    const messageDisplay = document.getElementById("messageDisplay");

    // Display the message if it exists, otherwise show a default message
    messageDisplay.textContent = messages[feeling];
}

// Paths of images to use in the collage
const images = [
    'wiyah1.png', 'wiyah2.png', 'wiyah3.png',
    'wiyah4.png', 'wiyah5.png', 'wiyah6.png',
    'wiyah7.png', 'wiyah8.png', 'wiyah9.png', 'wiyah10.png'
];

function shuffleImages() {
    // Get all collage cells
    const cells = document.querySelectorAll('.collage-cell');
    
    // Shuffle images array randomly
    const shuffledImages = images.sort(() => Math.random() - 0.5);
    
    // Assign each shuffled image to a cell
    cells.forEach((cell, index) => {
        cell.style.backgroundImage = `url(${shuffledImages[index]})`;
    });
}

// Set an initial delay to sync with fade-out, then shuffle every 10 seconds
setTimeout(() => {
    shuffleImages(); // Initial shuffle to sync with fade-out timing
    setInterval(shuffleImages, 10000); // Keep shuffling every full fade cycle
}, 5000); // Initial delay set to halfway (fade-out point) of the 10s cycle
