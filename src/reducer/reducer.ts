
const initialState:any = [
    { id: 1, choice: 'rock',color:'red',image:'icon-rock.svg' },
    { id: 2, choice: 'paper',color:'blue',image:'icon-paper.svg'  },
    { id: 3, choice: 'scissors',color:'yellow',image:'icon-scissors.svg'  },
    { id: 4, choice: 'lizard',color:'orange',image:'icon-lizard.svg' },
    { id: 5, choice: 'spock',color:'green',image:'icon-spock.svg' },
]

const changeGameType = (state: any, action: any) => {
    switch (action.type) {
        case 'CLASSIC':
            return initialState
        case 'BONUS':
            return [
                { id: 1, choice: 'rock',color:'red',image:'icon-rock.svg' },
                { id: 2, choice: 'paper',color:'blue',image:'icon-paper.svg'  },
                { id: 3, choice: 'scissors',color:'yellow',image:'icon-scissors.svg'  },
                { id: 4, choice: 'lizard',color:'orange',image:'icon-lizard.svg' },
                { id: 5, choice: 'spock',color:'green',image:'icon-spock.svg' },
            ];
        default:
            return initialState
    }
}

export { changeGameType, initialState };