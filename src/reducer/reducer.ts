import { GameValue } from "../types/gameType";

const classicState:GameValue = {
    tasc:
        [
            { id: 1, choice: 'rock', color: 'red', image: 'icon-rock.svg', variant: 'classic' },
            { id: 2, choice: 'paper', color: 'blue', image: 'icon-paper.svg', variant: 'classic' },
            { id: 3, choice: 'scissors', color: 'yellow', image: 'icon-scissors.svg', variant: 'classic' },
            
        ],
    type: "classic",
    logo:'logo.svg'
};
const BonusState:GameValue = {
    tasc:
        [
            { id: 1, choice: 'rock', color: 'red', image: 'icon-rock.svg', variant: 'bonus' },
            { id: 2, choice: 'paper', color: 'blue', image: 'icon-paper.svg', variant: 'bonus' },
            { id: 3, choice: 'scissors', color: 'yellow', image: 'icon-scissors.svg', variant: 'bonus' },
            { id: 4, choice: 'lizard', color: 'orange', image: 'icon-lizard.svg', variant: 'bonus' },
            { id: 5, choice: 'spock', color: 'green', image: 'icon-spock.svg', variant: 'bonus' },
            
        ],
    type: "bonus",
    logo:'logo.svg'
};

export { classicState,BonusState};

