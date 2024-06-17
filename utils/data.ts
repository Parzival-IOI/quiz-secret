
export const NavPath = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    }
]

export const adminPath = [
    {
        name: "User",
        path: "/user"
    },
    {
        name: "Quiz",
        path: "/quiz"
    }
]

export const otherPath = [
    { 
        name: "My Quiz",
        path: "/myquiz"
    },
    {
        name: "play",
        path: "/play"
    }
]

export const userRole = [
    {
        value: "TEACHER",
        label: "Teacher"
    },
    {
        value: "STUDENT",
        label: "Student"
    }
]

export const adminRole = [
    {
        value: "ADMIN",
        label: "Admin"
    },
    {
        value: "TEACHER",
        label: "Teacher"
    },
    {
        value: "STUDENT",
        label: "Student"
    }
]

export const pageSize = {
    TEN: "TEN",
    FIFTEEN: "FIFTEEN",
    TWENTY: " TWENTY"
}

export const order = {
    ASC: "ASC",
    DESC: "DESC"
}

export const orderByQuiz = {
    NAME: "NAME",
    DATE: "DATE"
}

export const quizDataTable = "api/quiz/findAll"
export const userDataTable = "api/user/findAll"
