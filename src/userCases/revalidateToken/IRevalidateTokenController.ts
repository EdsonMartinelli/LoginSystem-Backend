interface IRevalidateTokenController {
    execute(token : string) : Promise<string>
}

export {IRevalidateTokenController}