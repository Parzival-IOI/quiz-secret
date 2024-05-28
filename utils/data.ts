import { userRoleType } from "./definition"

export const NavPath = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Contact",
        path: "/contact",
    }
]

export const userRole : userRoleType[] = [
    {
        value: "TEACHER",
        label: "Teacher"
    },
    {
        value: "STUDENT",
        label: "Student"
    }
]
