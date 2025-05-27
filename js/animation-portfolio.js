const content = [
    [11, "yt", "zaLEhOlRQgk?si=b5oqcuTnqAmfFzji", "Ball Bounce Animation", "A simple ball bouncing animation that I did on paper."],
    [11, "yt", "tEef2yYtqBA?si=RQ_Ff-PXo8vV6f91", "GIF Animation", "A way above expectations GIF."],
    [11, "yt", "ZBcTkaCUSnc?si=VZYLwEQFc2JdL349", "Digital Ball Bounce Animation", "A simple ball bouncing animation that I did digitally."],
    [11, "yt", "KWkJ2_JbfJg?si=TvxOlOM2rg9_DKZ9", "Lip Sync Animation", "This was terrifying."],
    [11, "yt", "6In9RH-AHbM?si=Rsb_3acxyaoV174g", "Walking Animation", "This was even more terrifying."],
    [11, "yt", "7AIAEUSdt2s?si=h36H_eCPRIe6oioH", "Walking Tweening Animation", "Super Cute Animation Starring Kirby!"],
    [11, "yt", "J462BgM44h8?si=LLAiqe_br0xyirn3", "Walking Tweening With Camera", "Cute animation with better camera angles!"],
    [11, "yt", "KiA-qBt2KJ0?si=R58TIIbEgbaImbej", "Shape Tweening Animation", "A cool fireworks display of shape tweens."],
    [11, "yt", "N2Kp7RTBxyU?si=zZ9oZVlN433iKuLz", "Walking with Parenting Animation", "He kinda looks stiff, but it's not bad."],
    [11, "yt", "fv9NE-ZKdHc?si=dWtzEwauIAniY_sy", "Scrolling Background Animation", "Probably the best Grade 11 animation TBH."],
    [11, "pp", "2PACX-1vR7HNXPxhyjPqjJbceEQwA2DqtfA0N3yZ5xiQzEnQJrCEVzIZoHnFIWg6tgg8vCvQ", "Conceptualizing a Robot Character", "Creating a robot character."],
    [11, "yt", "LSablD1tyO0?si=mGGh2xr64VZxmisE", "Modelling the Robot Character", "I went kinda overboard with it, but I still like it regardless."],
    [11, "yt", "CrzVRcjARPM?si=0FKoO7xXWtpmCwAx", "Grade 11 Culminating", "Who's speed is greater?"],
    [12, "yt", "hCRvYGd11XI?si=PKTOrdSA71GMZfu9", "Flour Sack Animation", "A simple animation that took much longer than it should have."],
    [12, "yt", "6-B-PwO0Y58?si=8G9nf4x-Siga_isI", "Rotoscope Animation", "A unique style plus my own spinning body."],
    [12, "", "", "Animate/Blender Excercises", "Understanding tools and rigging."],
    [12, "pp", "2PACX-1vSk7bXw85mx7ivRUpYTUQqExb5OBHzZ46hVC9b37ca1S1AZj1sknCUTwDF9rfyr7aMbc1tpJJYcrjm8", "Character Design Proposal", "Properly designing a character."],
    [12, "pp", "2PACX-1vQ_8jqblh_o_JZLMXFrYO_emh1wqpwT3wyBzGcayXs4S54BGN6zp6eQFddoQAb4YXqZsJyZ9zWjFrFu", "Set Design Proposal", "Properly desinging an enviornment."],
    [12, "", "", "Character and Set Animation", "Currently Unfinished."],
    [12, "", "", "This Website!", "Honestly this was a super fun project."]
];
// grade, URL, title, short description

const allButton = document.querySelector('#all-button');
const elevenButton = document.querySelector('#eleven-button');
const twelveButton = document.querySelector('#twelve-button');
const moreButton = document.querySelector('#more-button');

allButton.addEventListener('click', () => {
    document.getElementById("animation-content").innerHTML = "";
    createItems(0);
});

elevenButton.addEventListener('click', () => {
    document.getElementById("animation-content").innerHTML = "";
    createItems(1);
});

twelveButton.addEventListener('click', () => {
    document.getElementById("animation-content").innerHTML = "";
    createItems(2);
});

createItems(0);

function createItems(type)
{
    switch (type)
    {
        // All Items
        case 0:
            for (let i = 0; i < content.length; i++)
            {
                createItem(i);
            }
            break;
        // Grade 11 Items
        case 1:
            for (let i = 0; i < content.length; i++)
            {
                if (content[i][0] == 11) createItem(i);
            }
            break;
        // Grade 12 Items
        case 2:
            for (let i = 0; i < content.length; i++)
            {
                if (content[i][0] == 12) createItem(i);
            }
            break;
    }
}

function createItem(number)
{
    let string = "";
    switch (content[number][1]) 
    {
        case "yt":
            string = `<iframe class="project-video" width="560" height="315" src="https://www.youtube.com/embed/${content[number][2]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
            break;
        case "pp":
            string = `<iframe class="project-video" src="https://docs.google.com/presentation/d/e/${content[number][2]}/pubembed?start=true&loop=true&delayms=60000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;
            break;
        default:
            string = `<p class="project-video"> Content not given proper identifier, yell at the developer for making poor code boooo.`;
            break;
    }

    document.getElementById("animation-content").innerHTML += `
        <div class="project-section" id="grade-${content[number][0]}">
            ${string}
            <div class="project-section-words">
                <p class="title"><Strong>${content[number][3]}</Strong></p> <br>
                <p class="short-description">${content[number][4]}</p>
                <button class="button" id="more-button">Enlarge Description</button>
            </div>
        </div>
    `;;
}