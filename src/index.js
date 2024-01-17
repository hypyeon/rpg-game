import './css/styles.scss';

/*
howl: 
intelligence: 0
strength: 5
charm: 0

luna: 
intelligence: 0
strength: 0
charm: 5

thorn: 
intelligence: 5
strength: 0
charm: 0
*/

const createCharacter = function(name, strengthVal = 0, charmVal = 0, intelligenceVal = 0) {
    const obj = {
        name: name,
        strength: strengthVal,
        charm: charmVal,
        intelligence: intelligenceVal,
        levelUp: function(skill) {
            this[skill] += 1;
        }
    };
    return obj;
};


// const luna = createCharacter("Luna", 0, 5, 0);
// const thorn = createCharacter("Thorn", 0, 0, 5);

function operator() {
    document.getElementById("howl").onclick = function() {
        const howl = createCharacter("Howl", 5, 0, 0);
        document.getElementById("character").classList.add("hidden");
        document.getElementById("game").classList.remove("hidden");
        document.getElementById("user-name").innerText = howl.name;
        document.getElementById("strength").innerText = howl.strength;
        document.getElementById("charm").innerText = howl.charm;
        document.getElementById("intelligence").innerText = howl.intelligence;
    };
}

window.onload = () => {
    operator();
};