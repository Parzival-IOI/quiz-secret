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

export type tableResponse = {
    data: quizzesResponse,
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

export type tokenResponse = {
    accessToken: string,
    refreshToken: string
}