//Your Code here
let userClass = window.prompt('Welcome to the Adventurers Guild.  Please, choose a class. fighter, rogue or mage')
    chooseClass:if (userClass.toLowerCase() === 'fighter'){
                    let weaponChoice = window.prompt("Ahh yes, a strong and able fighter!  Surely you can take down the strongest of \
                    foes! Will you be needing a sword or an axe?")
                    chooseWeapon: if (weaponChoice.toLowerCase() === 'sword'){
                        window.alert('The quick and deadly blade looks natural in your apt hands! Great choice!')
                        weaponChoice = 'sword'
                        if (userClass === 'fighter'){
                            break chooseClass;
                        }
                        
                    }if (weaponChoice.toLowerCase() === 'axe'){
                        window.alert('You look quite menacing wielding that might axe!  May your foes tremble before you!')
                        
                                        
                    }else weaponChoice = 'fists'
                        window.alert("No weapon then?  Just the ol' fistycuffs eh? I suppose you look like you can handle yourself.")
                        
                                    
                }if (userClass.toLowerCase() === 'rogue'){
                    window.prompt("Rogue")

                }if (userClass.toLowerCase()=== 'mage'){
                    window.prompt("Mage")

                }else userClass = "Commoner"
                    window.prompt("Commoner")

            
let firstAnswer = window.prompt('Do you head left or right?')
if (firstAnswer === 'left'){
    let secondAnswer = window.prompt('You come across a stray cat. \
    It scampers off down a small hole, just large enough for you to craw through. \
    Do you follow it, or continue on your path?')
    if (secondAnswer === "follow"){
        let thirdAnswer = window.prompt('You follow the cat to a colony of cats, \
        nestled in a fort of warm blankets and subsisting off of inexplicably warm soup \
        They are content with you staying, but you wonder if you should aler the world \
        to this magical safe haven.  Do you stay or do you spread the word?')
        if (thirdAnswer === "stay"){
            window.alert('You live happily amongst the cats for the rest of your days')
        }
        if(thirdAnswer === "spread the word"){
            window.alert('After leaving the cat colony, you are never able to find \
            it again; without proof, no one believes your story, which passes into \
            legend nonetheless')
        }
    }if (secondAnswer === "continue"){
        let thirdAnswer2 = window.prompt('You come across a chamber that reaches upward \
        to a shining light above. There is a long, winding staircase, and a much quicker, \
        but rickety-looking ladder that leads up toward the light. Which do you take?')
        if (thirdAnswer2 === 'ladder'){
            window.alert("After ascending a few feet up the ladder, one of its rungs \
            snaps, and you comedically fall through each of the rungs below. Sheepishly, \
            you return home")
        }
        if (thirdAnswer2 === 'staircase'){
            window.alert('After ascending the staircase, you discover a shiny blue stone, \
            which you take home and cherish forevery')
        }
    }
} else if(firstAnswer === 'right'){
    let secondAnswer2 = window.prompt('You come across a snoring dragon. \
    On the other side of him, you see a shiny chest of treasure.  Another path would \
    lead you away from the dragon altogether. Which path do you take, past the dragon, \
    or away from the dragon?')
    if (secondAnswer2 === "past the dragon"){
        let thirdAnswer3 = window.prompt("The dragon wakes up and sits upright. You only \
        have a moment to respond, to stay or run")
        if (thirdAnswer3 === 'stay'){
            window.alert("You and the dragon have an uplifting conversation about local \
            politics and become lifelong friends")
        }
        if (thirdAnswer3 === 'run'){
            window.alert("Quickly, you run back to the cave's entrance.  Sheepishly, \
            you return home")
        }
    }if (secondAnswer2 === "away from the dragon"){
        let thirdAnswer4 = window.prompt("After walking a while longer, you come across \
        a shiny blue flower. It is so beautiful that you decide you must either draw it \
        or pick it. Which do you do?")
        if (thirdAnswer4 = "draw it"){
            window.alert("You draw the flower, capturing only a fraction of it's beauty \
            with your quill. You bring the drawing home, somewhat dissapointed, but over \
            time, discover joy in sharing it with your friends and family, recounting \
            the story of your days as a sorcerer with the aid of the sketch.")
        }
        if (thirdAnswer4 = "pick it"){
            window.alert("You pick the flower and bring it home, and all marvel at \
            its brilliance. However, over time it fades and eventually crumbles to dust.")
        }
    }
}