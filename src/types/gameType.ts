type VariantGame = {
    id: number
    choice: string
    color: string
    image: string
    variant: string
};


type GameValue = {
    logo: string
    tasc: VariantGame[]
    type: string
}
type FullGameValue = {
    item: GameValue
}

export type { VariantGame, GameValue, FullGameValue };