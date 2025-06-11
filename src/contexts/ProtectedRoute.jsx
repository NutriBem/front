import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children, requiredType }) => {
    const typeUser = localStorage.getItem('user-type')

    if (!typeUser) {
        return <Navigate to="/login" replace/>
    }

    if (requiredType && parseInt(typeUser) !== requiredType) {
        return <Navigate to="/" replace/>
    }

    return children
}