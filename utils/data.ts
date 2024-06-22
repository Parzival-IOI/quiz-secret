
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
    ASC: "ASC",
    DESC: "DESC"
}

export const orderByQuiz = {
    NAME: "NAME",
    DATE: "DATE"
}

export const quizDataTable = "api/quiz/findAll"
export const userDataTable = "api/user/findAll"


export const member = [
    {
        name: "Hor KimHouy",
        position: "Team Leader",
        image: "/HorKimHouy.jpg",
    },
    {
        name: "Hout Rithy",
        position: "Backup Leader",
        image: "/defaultProfile.bmp",
    },
    {
        name: "Vorn Navatra",
        position: "Team Member",
        image: "/defaultProfile.bmp",
    },
    {
        name: "Oem YongSinh",
        position: "Team Member",
        image: "/defaultProfile.bmp",
    },
    {
        name: "Heng KeaHak",
        position: "Team Member",
        image: "/defaultProfile.bmp",
    },
    {
        name: "Um Sethey",
        position: "Team Member",
        image: "/defaultProfile.bmp",
    },{
        name: "Ol Eevin",
        position: "Team Member",
        image: "/defaultProfile.bmp",
    }
]

export const roleMember = [
    {
        title: "Backend Development",
        team : [
            {
                name: "Hor KimHouy",
                position: "Backend Developer",
                image: "/HorKimHouy.jpg",
            },
            {
                name: "Hout Rithy",
                position: "Backend Support",
                image: "/defaultProfile.bmp",
            },
        ]
    },
    {
        title: "Frontend Development",
        team : [
            {
                name: "Hout Rithy",
                position: "Frontend Developer",
                image: "/defaultProfile.bmp",
            },
            {
                name: "Hor KimHouy",
                position: "Frontend Support",
                image: "/HorKimHouy.jpg",
            },
        ]
    },
    {
        title: "Testing",
        team : [
            {
                name: "Vorn Navatra",
                position: "API Tester",
                image: "/defaultProfile.bmp",
            },
            {
                name: "Ol Eevin",
                position: "API Tester",
                image: "/defaultProfile.bmp",
            },
            {
                name: "Oem YongSinh",
                position: "Documentation Specialist",
                image: "/defaultProfile.bmp",
            },
        ]
    },
    {
        title: "Presentation",
        team : [
            {
                name: "Heng KeaHak",
                position: "PowerPoint Designer",
                image: "/defaultProfile.bmp",
            },
            {
                name: "Um Sethey",
                position: "PowerPoint Designer",
                image: "/defaultProfile.bmp",
            },
        ]
    },

]