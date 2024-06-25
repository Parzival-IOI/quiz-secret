export type userRoleType = {
    value: string,
    label: string
}

export type dataTable = {
    search: string,
    orderBy: string
    order: string,
    page: string,
    size: string
}

export type tableResponse <T> = {
    data: T,
    columns: number
}

export type quizzesResponse = {
    id: string,
    name: string,
    description: string,
    visibility: string,
    createdAt: string,
    updatedAt: string
}[]

export type usersResponse = User[]

export type tokenResponse = {
    accessToken: string,
    refreshToken: string
}

export type JwtPayload = {
    iss: string,
    sub: string,
    role: string,
    exp: string,
    iat: string
}

export type User = {
    id: string,
    name: string,
    email: string,
    role: string,
    createdAt: string,
    updatedAt: string
}

export type quiz = {
    id: string,
    name: string,
    description: string,
    visibility: string,
    questions: {
        id: string,
        question: string,
        type: string,
        answers: {
            id: string,
            answer: string,
            correct: string,
            createdAt: string,
            updatedAt: string
        }[],
        createdAt: string,
        updatedAt: string
    }[]
    createdAt: string,
    updatedAt: string
}

export type playQuizResponse = {
    id: string,
    name: string,
    description: string,
    questions: playQuestionResponse[]
}

export type playQuestionResponse = {
    id: string,
    question: string,
    type: string,
    answers: {
        id: string,
        answer: string
    }[]
}

export type recordResponse = {
    id: string,
    score: number,
    quizId: string,
    quizName: string,
    createdAt: string,
    updatedAt: string
}
