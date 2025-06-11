import { useEffect } from "react";

export function clearLocalStorage() {
    localStorage.removeItem("user-token");
    localStorage.removeItem("user-type");
    localStorage.removeItem("user-name");
}