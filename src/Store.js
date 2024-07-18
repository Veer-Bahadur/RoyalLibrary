import React, { createContext, useContext, useReducer } from 'react'
const Provider = createContext()

const Store = (props) => {
    let initialData = {
        AppName: "Royal Library",
        student: ['Udit']
    }
    const reducer = (state = initialData, action) => {
        switch (action.type) {
            case 'APPNAME':
                return { ...state, AppName: action.payload }
            case 'STUDENT':
                return { ...state, student: [...state.student, action.payload] }
            case 'PULL_STUDENT':
                return { ...state, student: state.student.filter((el) =>  el !== action.payload ) }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialData)
    return (
        <Provider.Provider value={{ state, dispatch }}>
            {props.children}
        </Provider.Provider>
    )
}
export const useStore = () => {
    const context = useContext(Provider)
    if (context === null) {
        throw Error("USING CONTEXT OUT OF SCOPE")
    }
    return context
}

export default Store