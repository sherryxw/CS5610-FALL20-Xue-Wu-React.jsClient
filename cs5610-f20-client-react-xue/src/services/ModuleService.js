const moduleUrl = "https://wbdv-generic-server.herokuapp.com/api/10394858392/modules"
const courseUrl = "https://wbdv-generic-server.herokuapp.com/api/10394858392/courses"

export const createModule = (courseId, module) =>
    fetch(`${courseUrl}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const updateModule = (moduleId, module) =>
    fetch(`${moduleUrl}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(module),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const findModulesForCourse = (courseId) =>
    fetch(`${courseUrl}/${courseId}/modules`)
        .then(response => response.json())

export default {
    updateModule, findModulesForCourse, createModule, deleteModule
}