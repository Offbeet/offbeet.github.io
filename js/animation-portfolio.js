// This code sucks, sorry.

let content = [
    [11, "yt", "zaLEhOlRQgk?si=b5oqcuTnqAmfFzji", "Ball Bounce Animation", "A simple ball bouncing animation that I did on paper.", "", false],
    [11, "yt", "tEef2yYtqBA?si=RQ_Ff-PXo8vV6f91", "GIF Animation", "A way above expectations GIF.", "", false],
    [11, "yt", "ZBcTkaCUSnc?si=VZYLwEQFc2JdL349", "Digital Ball Bounce Animation", "A simple ball bouncing animation that I did digitally.", "", false],
    [11, "yt", "KWkJ2_JbfJg?si=TvxOlOM2rg9_DKZ9", "Lip Sync Animation", "This was terrifying.", "", false],
    [11, "yt", "6In9RH-AHbM?si=Rsb_3acxyaoV174g", "Walking Animation", "This was even more terrifying.", "", false],
    [11, "yt", "7AIAEUSdt2s?si=h36H_eCPRIe6oioH", "Walking Tweening Animation", "Super Cute Animation Starring Kirby!", "", false],
    [11, "yt", "J462BgM44h8?si=LLAiqe_br0xyirn3", "Walking Tweening With Camera", "Cute animation with better camera angles!", "", false],
    [11, "yt", "KiA-qBt2KJ0?si=R58TIIbEgbaImbej", "Shape Tweening Animation", "A cool fireworks display of shape tweens.", "", false],
    [11, "yt", "N2Kp7RTBxyU?si=zZ9oZVlN433iKuLz", "Walking with Parenting Animation", "He kinda looks stiff, but it's not bad.", "", false],
    [11, "yt", "fv9NE-ZKdHc?si=dWtzEwauIAniY_sy", "Scrolling Background Animation", "Probably the best Grade 11 animation TBH.", "", false],
    [11, "pp", "2PACX-1vR7HNXPxhyjPqjJbceEQwA2DqtfA0N3yZ5xiQzEnQJrCEVzIZoHnFIWg6tgg8vCvQ", "Conceptualizing a Robot Character", "Creating a robot character.", "", false],
    [11, "yt", "LSablD1tyO0?si=mGGh2xr64VZxmisE", "Modelling the Robot Character", "I went kinda overboard with it, but I still like it regardless.", "", false],
    [11, "yt", "CrzVRcjARPM?si=0FKoO7xXWtpmCwAx", "Grade 11 Culminating", "Who's speed is greater?", "", false],
    [12, "yt", "hCRvYGd11XI?si=PKTOrdSA71GMZfu9", "Flour Sack Animation", "A simple animation that took much longer than it should have.", "This is the first animation I did in the grade 12 class. Though, it actually took me until after the rotoscope animation to complete it. That's mainly because I didn't narrow the scope for the animation enough and ended up creating something that was, in my opinion, far greater than things my peers made. This was a simple introductory animation to get me and the rest of the class famililar with using Animate again. Something I was very greatful of.", false],
    [12, "yt", "6-B-PwO0Y58?si=8G9nf4x-Siga_isI", "Rotoscope Animation", "A unique style plus my own spinning body.", "This is the second animation I did in the grade 12 class. Originally, I wanted to make this in Krita, however that program is not at a good state for 2D animation currently. Otherwise, I'm fairly okay with the result of this animation, it's not really up to my standards personally, but I had fun creating a lot of the frames. Just don't look too closely at any individual one to spare your eyes from horrors beyond comprehension. The total time for this animation took a few weeks to accomplish. I'd like to say around 3 or so.", false],
    [12, "yt", "nkyaUMdf0OY?si=QPo_SC_YffgrGI_h", "Animate/Blender Excercises", "Understanding tools and rigging.", "These weren't nessacerily in depth animations, however they taught some SUPER useful tools for animation. Some which I think my other peers used. Though, I'm not entirely sure. None of these took super long, and were spread out through the next two projects.", false],
    [12, "pp", "2PACX-1vSk7bXw85mx7ivRUpYTUQqExb5OBHzZ46hVC9b37ca1S1AZj1sknCUTwDF9rfyr7aMbc1tpJJYcrjm8", "Character Design Proposal", "Properly designing a character.", "This was the planning phase for a character I had originally created many years ago, though I decided it'd be cool to go more in-depth with him and elaborate and expand on his character into something far better. This took a little longer than it should have, mainly due to how much detail and thought I was putting into his design, however I'm nonetheless proud of it. He's definitely a character I'll return to using after this semester. The total time for completion being approximately 3-4 weeks?", false],
    [12, "pp", "2PACX-1vQ_8jqblh_o_JZLMXFrYO_emh1wqpwT3wyBzGcayXs4S54BGN6zp6eQFddoQAb4YXqZsJyZ9zWjFrFu", "Set Design Proposal", "Properly desinging an enviornment.", "Much like the character design project, this was also a super in-depth presentation going over my design process for the room. While I didn't enjoy this one AS MUCH, it gave me useful experience I didn't have previously. There's a lot of factors I never thought about when designing a set that will be useful for me to keep in mind when doing animations in the future. This project took less time then the character set design in total time, however there was lost of procrastination mixed between it even still.", false],
    [12, "", "", "Character and Set Animation", "Currently Unfinished.", "", false],
    [12, "ig", "/assets/BeetHeadPFPSquare.jpg", "This Webpage!", "Honestly this was a super fun project.", "This was a super fun project to do in passing. There were tons of little problems to solve that I never thought would become a problem at all. Something I would go into more if I had the time or space to write it all. Otherwise, it was DEFINITELY useful to get my hands dirty and used to coding with HTML, CSS, and Javascript. This project came as a suprise for an animation class, that's for sure. In total this page took a few weeks to build, approximately 3-4 weeks total. (I didn't make the entire site for the portfolio project, only this webpage in particular.)", false]
];
// grade, URL, title, short description, long description, longDesc?

createItems(0);

const allButton = document.querySelector('#all-button');
const elevenButton = document.querySelector('#eleven-button');
const twelveButton = document.querySelector('#twelve-button');

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

function bindDescriptionButtons()
{
let moreButton = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
for (let i = 0; i < content.length; i++)
{
    moreButton[i] = document.querySelector(`#more-button-${i}`);
    moreButton[i].addEventListener('click', () => {
    console.log("click");
    let listNumber = i;
    if(content[listNumber][6] == false) {
        if (content[listNumber][5] == "") content[listNumber][5] = "Content not given.";
        document.getElementById(`grade-${content[listNumber][0]}-${listNumber}`).innerHTML = document.getElementById(`grade-${content[listNumber][0]}-${listNumber}`).innerHTML.replace(content[listNumber][4], content[listNumber][5]);
        document.getElementById(`grade-${content[listNumber][0]}-${listNumber}`).innerHTML = document.getElementById(`grade-${content[listNumber][0]}-${listNumber}`).innerHTML.replace("Enlarge Description", "Shrink Description");
        content[listNumber][6] = true;
        bindDescriptionButtons();
    }
    else if (content[listNumber][6] == true) {
        document.getElementById(`grade-${content[listNumber][0]}-${listNumber}`).innerHTML = document.getElementById(`grade-${content[listNumber][0]}-${listNumber}`).innerHTML.replace(content[listNumber][5], content[listNumber][4]);
        document.getElementById(`grade-${content[listNumber][0]}-${listNumber}`).innerHTML = document.getElementById(`grade-${content[listNumber][0]}-${listNumber}`).innerHTML.replace("Shrink Description", "Enlarge Description");
        content[listNumber][6] = false;
        bindDescriptionButtons();
    }
})
}
}

function createItems(type)
{
    switch (type)
    {
        // All Items
        case 0:
            for (let i = 0; i < content.length; i++)
            {
                document.getElementById("animation-content").innerHTML += createItem(i);
            }
            break;
        // Grade 11 Items
        case 1:
            for (let i = 0; i < content.length; i++)
            {
                if (content[i][0] == 11) document.getElementById("animation-content").innerHTML += createItem(i);
            }
            break;
        // Grade 12 Items
        case 2:
            for (let i = 0; i < content.length; i++)
            {
                if (content[i][0] == 12) document.getElementById("animation-content").innerHTML += createItem(i);
            }
            break;
    }

    bindDescriptionButtons();
}

function createItem(number)
{
    let contentString = "";
    switch (content[number][1]) 
    {
        case "yt":
            contentString = `<iframe class="project-video" width="560" height="315" src="https://www.youtube.com/embed/${content[number][2]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
            break;
        case "pp":
            contentString = `<iframe class="project-video" src="https://docs.google.com/presentation/d/e/${content[number][2]}/pubembed?start=true&loop=true&delayms=60000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;
            break;
        case "ig":
            contentString = `<img class="project-video" src="${content[number][2]}">`;
            break;
        default:
            contentString = `<p class="project-video"> Content not given proper identifier, yell at the developer for making poor code boooo.`;
            break;
    }

    return `
        <div class="project-section" id="grade-${content[number][0]}-${number}">
            ${contentString}
            <div class="project-section-words">
                <p class="title"><Strong>${content[number][3]}</Strong></p> <br>
                <p class="short-description">${content[number][4]}</p>
                <button class="button-${number}" id="more-button-${number}" style="padding: 1rem; border-radius: 25px; margin-bottom: auto; background-color: white; color: black; font-size: ((2/7) * var(--nameSize));">Enlarge Description</button>
            </div>
        </div>
    `;;
}

function stringRemove(string, from, to) {
    return string.slice(0, from) + string.slice(to);
}