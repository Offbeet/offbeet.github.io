const content = [
    [11, "zaLEhOlRQgk?si=b5oqcuTnqAmfFzji", "Ball Bounce Animation", "A simple ball bouncing animation that I did on paper."],
    [11, "tEef2yYtqBA?si=RQ_Ff-PXo8vV6f91", "GIF Animation", "A way above expectations GIF."],
    // Digital Ball Bounce Animation
    [11, "KWkJ2_JbfJg?si=TvxOlOM2rg9_DKZ9", "Lip Sync Animation", "This was terrifying."],
    // Walking Animation
    // Walking Tweening Animation
    [11, "7AIAEUSdt2s?si=h36H_eCPRIe6oioH", "Walking Tweening Animation", "Super Cute Animation Starring Kirby!"],
    // Walking with Parenting Animation
    // Scrolling Background Animation
    // Conceptualizing a Robot Character
    // Modelling a Robot Character
    [11, "CrzVRcjARPM?si=0FKoO7xXWtpmCwAx", "Grade 11 Culminating", "Who's speed is greater?"],
    [12, "hCRvYGd11XI?si=PKTOrdSA71GMZfu9", "Flour Sack Animation", "A simple animation that took much longer than it should have."],
    // Rotoscope Turnaround
    // Animate/Blender Excercises
    // Character Proposal
    // Set Design Proposal
    // Character and Set Design Animation
    [12, "", "This Website!", "Honestly this was a super fun project."]
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
    let string = `
        <div class="project-section" id="grade-${content[number][0]}">
            <iframe class="project-video" width="560" height="315" src="https://www.youtube.com/embed/${content[number][1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div class="project-section-words">
                <p class="title"><Strong>${content[number][2]}</Strong></p> <br>
                <p class="short-description">${content[number][3]}</p>
                <button class="button" id="more-button">Enlarge Description</button>
            </div>
        </div>
    `;
    document.getElementById("animation-content").innerHTML += string;
}