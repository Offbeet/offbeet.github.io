let content = [
    [12, "hCRvYGd11XI?si=PKTOrdSA71GMZfu9", "Flour Sack Animation", "A simple animation that took much longer than it should have."],
    [11, "zaLEhOlRQgk?si=b5oqcuTnqAmfFzji", "Ball Bounce Animation", "A simple ball bouncing animation that I did on paper."]
];
// grade, URL, title, short description

createItem(content, 0);
createItem(content, 1);

function createItem(stuff, number)
{
    let string = `
        <div class="project-section" id="grade-${stuff[number][0]}">
            <iframe class="project-video" width="560" height="315" src="https://www.youtube.com/embed/${stuff[number][1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div class="project-section-words">
                <p class="title"><Strong>${stuff[number][2]}</Strong></p> <br>
                <p class="short-description">${stuff[number][3]}</p>
                <button class="button">Enlarge Description</button>
            </div>
        </div>
    `;
    document.getElementById("animation-content").innerHTML += string;
}