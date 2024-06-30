
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
    },
    {
        name: "Play",
        path: "/play/allRecord"
    }
]

export const otherPath = [
    { 
        name: "My Quiz",
        path: "/myquiz"
    },
    {
        name: "Record",
        path: "/play/record"
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

export const visibility = [
    {
        value: "PUBLIC",
        label: "Public"
    },
    {
        value: "PRIVATE",
        label: "Private"
    }
]

export const isCorrect = [
    {
        value: "true",
        label: "True"
    },
    {
        value: "false",
        label: "False"
    }
]

export const pageSize = {
    TEN: "TEN",
    FIFTEEN: "FIFTEEN",
    TWENTY: " TWENTY"
}

export const order = {
    DESC: "DESC",
    ASC: "ASC"
}

export const orderByQuiz = {
    DATE: "DATE",
    NAME: "NAME",
}

export const orderByPlay = {
    DATE: "DATE",
    NAME: "NAME",
}

export const orderByUser = {
    DATE: "DATE",
    NAME: "NAME",
    ROLE: "ROLE",
}

export const quizDataTable = "api/quiz/findAll"
export const userDataTable = "api/user/findAll"
export const recordDataTable = "api/play/findAll"
export const recordAllDataTable = "api/play/findAllAdmin"
export const myQuizDataTable = "api/quiz/v2/myQuiz"
export const quizPlayerDataTable = "api/quiz/myQuiz/player"


export const member = [
    {
        name: "Hor KimHouy",
        position: "Team Leader",
        image: "/kimhouy.jpg",
    },
    {
        name: "Hout Rithy",
        position: "Backup Leader",
        image: "/rithy.jpg",
    },
    {
        name: "Vorn Navatra",
        position: "Team Member",
        image: "/navatra.jpg",
    },
    {
        name: "Oem YongSinh",
        position: "Team Member",
        image: "/sinh.jpg",
    },
    {
        name: "Heng KeaHak",
        position: "Team Member",
        image: "/keahak.jpg",
    },
    {
        name: "Um Sethey",
        position: "Team Member",
        image: "/sethey.jpg",
    },{
        name: "Ol Eevin",
        position: "Team Member",
        image: "/eevin.jpg",
    }
]

export const roleMember = [
    {
        title: "Backend Development",
        team : [
            {
                name: "Hor KimHouy",
                position: "Backend Developer",
                image: "/kimhouy.jpg",
            },
            {
                name: "Hout Rithy",
                position: "Backend Support",
                image: "/rithy.jpg",
            },
        ]
    },
    {
        title: "Frontend Development",
        team : [
            {
                name: "Hout Rithy",
                position: "Frontend Developer",
                image: "/rithy.jpg",
            },
            {
                name: "Hor KimHouy",
                position: "Frontend Support",
                image: "/kimhouy.jpg",
            },
        ]
    },
    {
        title: "Testing",
        team : [
            {
                name: "Vorn Navatra",
                position: "API Tester",
                image: "/navatra.jpg",
            },
            {
                name: "Ol Eevin",
                position: "API Tester",
                image: "/eevin.jpg",
            },
            {
                name: "Oem YongSinh",
                position: "Documentation Specialist",
                image: "/sinh.jpg",
            },
        ]
    },
    {
        title: "Presentation",
        team : [
            {
                name: "Heng KeaHak",
                position: "PowerPoint Designer",
                image: "/keahak.jpg",
            },
            {
                name: "Um Sethey",
                position: "PowerPoint Designer",
                image: "/sethey.jpg",
            },
        ]
    },
]
