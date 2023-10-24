const data_object = [
    {
        description: "Embrace each moment with gratitude and positivity, knowing that every day is a chance for new beginnings."
    },
    {
        description: "You are capable of achieving great things. Trust in your abilities and let your determination guide you towards success."
    },
    {
        description: "Spread kindness wherever you go, and you'll inspire others to create a more compassionate and understanding world."
    },
    {
        description: "Challenges are opportunities for growth. Face them with courage and resilience, and you'll emerge stronger than before."
    },
    {
        description: "Celebrate your progress, no matter how small, and remember that every step forward is a step in the right direction."
    },
    {
        description: "Let go of worries from the past and uncertainties about the future. Focus on the present, where true joy can be found."
    },
    {
        description: "Your positive attitude is a powerful force that can brighten even the darkest of days. Share your light with the world."
    },
    {
        description: "Believe in your dreams and aspirations. With dedication and perseverance, you can turn them into your reality."
    },
    {
        description: "Surround yourself with those who uplift and support you. Together, you can create a community of love and encouragement."
    },
    {
        description: "Embrace the journey of self-discovery and growth, knowing that every step you take brings you closer to your true self."
    },
    {
        description: "In the world of finance, discipline is key. Make decisions based on calculated risks and comprehensive research for successful outcomes."
    },
    {
        description: "Sports teach us the values of teamwork, perseverance, and dedication. Through sports, individuals can discover their true potential and build character."
    },
    {
        description: "Nature has the power to heal and rejuvenate. Spending time outdoors can help restore balance and foster a deeper connection with the world around us."
    },
    {
        description: "Nurture your creative side by exploring various forms of art. Creativity allows for self-expression and provides a unique perspective on the world."
    },
    {
        description: "Music has the ability to evoke emotions and transcend language barriers. It serves as a universal language that unites people from diverse backgrounds."
    },
    {
        description: "Traveling opens doors to new cultures and experiences. It broadens horizons and encourages a deeper understanding of the world and its inhabitants."
    },
    {
        description: "Education is the foundation for personal and societal growth. It equips individuals with the necessary skills and knowledge to contribute positively to society."
    },
    {
        description: "Laughter is the best medicine for the soul. It lightens the spirit and creates bonds, fostering a sense of joy and well-being in daily life."
    },
    {
        description: "Forgiveness is a powerful act of compassion and healing. It liberates the mind and soul, allowing individuals to move forward with a sense of peace and closure."
    },
    {
        description: "Perseverance is the key to overcoming obstacles and achieving success. It instills resilience and determination, propelling individuals toward their goals."
    },
    {
        description: "Innovation drives progress and leads to transformative change. Embrace innovation to create a better future for generations to come."
    },
    {
        description: "Community involvement fosters a sense of belonging and promotes collective growth. Engage with your community to create a positive impact on society."
    },
    {
        description: "Sustainable practices are essential for preserving our planet. Adopt eco-friendly habits to ensure a greener and healthier environment for future generations."
    },
    {
        description: "Volunteering is a selfless act that benefits both individuals and communities. Offer your time and skills to make a meaningful difference in the lives of others."
    },
    {
        description: "Healthy living encompasses physical, mental, and emotional well-being. Prioritize your health to lead a fulfilling and balanced life."
    },
    {
        description: "Technology has revolutionized the way we live and work. Embrace the power of technology to drive innovation and create a more interconnected world."
    },
    {
        description: "Diversity and inclusion promote a harmonious society that values and respects people from all walks of life. Embrace diversity to foster unity and understanding."
    },
    {
        description: "Personal growth is a transformative journey of self-discovery and empowerment. It involves introspection, setting meaningful goals, and embracing change. Through continuous learning and self-improvement, individuals can unlock their full potential and cultivate a sense of purpose. It requires resilience, patience, and a willingness to step outside one's comfort zone."
    },
    {
        description: "Mindfulness is the practice of being fully present in the moment, cultivating awareness and appreciation for the world around us. It encourages a deeper connection with oneself and others, fostering emotional well-being and inner peace. By embracing mindfulness, individuals can reduce stress, improve focus, and enhance overall life satisfaction."
    },
    {
        description: "Perseverance is the unwavering determination to overcome challenges and achieve one's goals. It is the driving force that propels individuals forward in the face of adversity, instilling resilience and a sense of accomplishment. With perseverance, obstacles become opportunities for growth, leading to personal development and success in various endeavors."
    },
    {
        description: "Effective communication is the cornerstone of building strong relationships and fostering a harmonious environment. It involves active listening, clear expression, and empathy, creating a space for understanding and collaboration. Through effective communication, individuals can resolve conflicts, convey ideas with clarity, and cultivate a sense of trust and mutual respect."
    },
    {
        description: "Empathy is the ability to understand and share the feelings of others, fostering compassion and connection in human interactions. It encourages kindness, tolerance, and a deeper appreciation of diverse perspectives, promoting a more inclusive and supportive society. With empathy, individuals can build meaningful relationships and contribute to a more empathetic and understanding world."
    }
];

const userOriginalInput = null;
let obj_data = []

let parent = document.querySelector(".data-card")

// hiding the answer card.
let answerCard = document.querySelector(".answer-card")
answerCard.style.display = "none";


// function for random number.
function generate_random_num() {
    return Math.floor(Math.random() * 32)
}

// function for getting data from object.
function get_data() {
    let randomNumber = generate_random_num()
    let data = data_object[randomNumber].description
    let splited_data = data.split(" ")
    obj_data = splited_data
    return splited_data
}


// function for displaying the data.
function display_data(){
    let parent_element = document.querySelector(".text-box")
    let text_data_arr = get_data()

    text_data_arr.forEach((word) => {
        let new_element =  document.createElement("p")
        new_element.innerText = word
        parent_element.appendChild(new_element)
    })
}

// function for splitting user's input.

function split_user_input() {
    let userInput = document.querySelector('input').value
    let splited_value = userInput.split(" ")
    let splited_words = []
    for(let i = 0; i<splited_value.length; i++) {
        if(splited_value[i] != "") {
            splited_words.push(splited_value[i])
        }
    }
    return splited_words
}

// function for removing the default element.
function remove_element() {
    parent.style.display = "none"
}

 // function for displaying answer data.
 function answer_data(userInput) { 
    let answerCard = document.querySelector(".answer-text-box")
    while (answerCard.firstChild) {
        answerCard.removeChild(answerCard.firstChild);
    }
    userInput.forEach((word) => {
        let new_element = document.createElement("p")
        new_element.innerText = word
        answerCard.appendChild(new_element)
        if (!obj_data.includes(word)){
            new_element.style.color = "red"
        }else{
            new_element.style.color = "green"

        }
    })
 }

 // function for analyzing the user input.
 let percentageScore;
 let correctWords;
 let totalWordsWritten;
 function input_analyzer() {
    parent_answerText = document.querySelector("answer-text-box")
    correctWords = -1
    totalWordsWritten = 0
    splited_value = split_user_input()

    for (var i =0; i<=splited_value.length; i++) {
        if(splited_value[i] === obj_data[i]){
            correctWords++
            totalWordsWritten++
        }else{
            totalWordsWritten++
        }
    }
    percentageScore = (correctWords / obj_data.length) * 100;
    return percentageScore.toFixed(0)
}

// function for submiting the data.
let userInput;
let userScore;
let score_h2 = document.querySelector("#score")
function submit_function() {
    // data of the user input.
    userInput = split_user_input()

    //removing the previous element.
    remove_element()

    // displaying the answer card.
    answer_data(userInput)
    answerCard.style.display = "flex"

    // analyzing the user input.
    userScore = input_analyzer()

    // manupulating the score
    score_h2.innerText = `Score: ${userScore}%`

}
display_data()

// function for resetting all data.
function reset_all() {
    timeStart = 0
    wpmCount = 0 
    timeTaken = 0
    timeTakenInMin = 0
    correctWords = -1
    percentageScore = 0
    answerCard.style.display = "none"
    parent.style.display = "flex"
    data_card = document.querySelector(".text-box")
    while (data_card.firstChild) {
        data_card.removeChild(data_card.firstChild);
    }
    let userInput = document.querySelector('input')
    userInput.value = ""
    display_data()
}