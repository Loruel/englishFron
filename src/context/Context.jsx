import { useMutation } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, updateUser } from "../api/user.Api"
import { allLessons, getLessonById } from "../api/lesson.Api";
import { allUserLesson } from "../api/userLesson.Api"
import { allIncidents, getIncidentById, createIncident, deletIncident } from "../api/incident.Api"
import { allExamsQuestions, allExams } from "../api/exam.Api";

const englishContext = createContext()

export function EnglishProvider({ children }) {
    const [user, setUser] = useState(null)

    const [lesson, setLesson] = useState([])
    const [lessons, setLessons] = useState([])

    const [userLessons, setUserLessons] = useState([])

    const [incident, setIncident] = useState(null)
    const [incidents, setIncidents] = useState([])

    const [exams, setExams] = useState(null)
    const [questions, setQuestions] = useState(null)

    const [openModal, setOpenModal] = useState(false)
    const setLocation = useNavigate()

    /////////////////////////////OTROS

    const toggleModal = () => {
        setOpenModal(!openModal)
    } //ABRE Y CIERRA EL MODAL

    /////////////////////////////USUARIOS

    const setUserData = data => {
        setUser(data)
    } //ALMACENA EL USUARIO


    const loginMutation = useMutation({
        mutationKey: ['login'],
        mutationFn: login,
        onError: error => {

        },
        onSuccess: data => {

            localStorage.setItem('authToken', data.token)
            setUserData(data.user)
            setLocation('/home')
        }
    }) //INICIAR SESION

    const updateProfileMutation = useMutation({
        mutationKey: ['updateUser'],
        mutationFn: updateUser,
        onError: error => {

        },
        onSuccess: data => {

            alert('Perfil actualizado correctamente')
            setUser(data.user)
            setLesson('/home')
        }
    }) //EDITAR PERFIL

    /////////////////////////////USER LECCIONES

    useEffect(() => {
        const fetchUserLessons = async () => {
            try {
                const res = await allUserLesson()
                setUserLessons(res.data)
            } catch (error) {
                console.error('Error fetching user lessons:', error)
            }
        }
        fetchUserLessons()
    }, [])

    /////////////////////////////LECCIONES

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const res = await allLessons()
                setLessons(res.data)
            } catch (error) {
                console.error('Error fetching lessons:', error)
            }
        }
        fetchLessons()
    }, []) //TODAS LAS LECCIONES

    const fetchLessonById = async (id) => {
        try {
            const response = await getLessonById(id)
            setLesson(response.data)
        } catch (error) {
            onsole.error('Error fetching lesson by ID:', error)
        }
    } //UNA LECCION

    const getLessonOfTheDay = () => {
        const today = new Date();
        const startDate = new Date("2025-01-15"); // Cambia esta fecha según el inicio del programa
        let dayCounter = 0;

        // Iterar desde el inicio hasta hoy, excluyendo fines de semana
        for (
            let currentDate = new Date(startDate);
            currentDate <= today;
            currentDate.setDate(currentDate.getDate() + 1)
        ) {
            const dayOfWeek = currentDate.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                dayCounter++;
            }
        }

        // Obtener la lección correspondiente
        const lessonIndex = dayCounter - 1; // Ajustar al índice del array
        return lessons[lessonIndex] || null; // Devuelve null si no hay lección
    };

    /////////////////////////////INCIDENTES

    useEffect(() => {
        const fetchIncidents = async () => {
            try {
                const response = await allIncidents()
                setIncidents(response.data)

            } catch (error) {
                console.error('Error fetching incidents:', error)
            }
        };

        fetchIncidents()
    }, []) //TODOS LOS INCIDENTES

    const fetchIncidentById = async (id) => {
        try {
            const response = await getIncidentById(id)
            setIncident(response.data)
        } catch (error) {
            console.error('Error fetching incident by ID:', error)
        }
    } //UN INCIDENTE

    const createIncidentMutation = useMutation({
        mutationKey: ['createIncident'],
        mutationFn: createIncident,
        onError: error => {
            const errorMessage = error.response?.data?.message || 'Error al crear el incidente.'
            alert(errorMessage)
        },
        onSuccess: data => {
            /* alert(data.message) */
            setIncidents(prevIncidents => [...prevIncidents, data.incident])
            setLocation('/incident')
        }
    }) //CREAR UN INCIDENTE

    const deleteIncidentMutation = useMutation({
        mutationKey: ['deletIncident'],
        mutationFn: deletIncident,
        onError: error => {
            alert(error.response.data.message)
        },
        onSuccess: data => {
            alert(data.message)
        }
    }) //ELIMINAR UN INCIDENTE

    /////////////////////////////EXAMS AND QUESTIONS

    useEffect(() => {
        const fetchExams = async () => {
            try {
                const res = await allExams()
                setExams(res.data)
            } catch (error) {
                console.error('Error fetching exams:', error)
            }
        }

        fetchExams()
    }, [])

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const res = await allExamsQuestions()
                setQuestions(res.data)
            } catch (error) {
                console.error('Error fetching questions:', error)
            }
        }

        fetchQuestions()
    }, [])

    return (

        <englishContext.Provider value={{
            openModal,
            setOpenModal,
            toggleModal,
            //user
            user,
            setUserData,
            loginMutation,
            updateProfileMutation,
            //userlesson
            userLessons,
            //lesson
            lessons,
            lesson,
            fetchLessonById,
            getLessonOfTheDay,
            //incidents
            incident,
            incidents,
            fetchIncidentById,
            createIncidentMutation,
            deleteIncidentMutation,
            //exam
            exams,
            questions
        }}>
            {children}
        </englishContext.Provider>

    )
}

export function englishFunction() {
    return useContext(englishContext)
}