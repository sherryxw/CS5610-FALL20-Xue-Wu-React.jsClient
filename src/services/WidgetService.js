const WIDGET_URL = "http://localhost:8080/api/widgets"
const TOPIC_URL  = "http://localhost:8080/api/topics" //base url

const findAllWidgets = () =>
    fetch(WIDGET_URL)
        .then(response => response.json())

const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
        .then(response => response.json())

//should accept an object in ()
const createWidget = () =>
    fetch(WIDGET_URL, {
        method: "POST",
        body: JSON.stringify({name: "NEW HEADING", type: "HEADING"}),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export default {
    findAllWidgets, createWidget, findWidgetsForTopic
}