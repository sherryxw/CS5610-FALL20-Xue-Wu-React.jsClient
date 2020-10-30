const WIDGET_URL = "http://localhost:8080/api/widgets"
const TOPIC_URL  = "http://localhost:8080/api/topics"

const findAllWidgets = () =>
    fetch(WIDGET_URL)
        .then(response => response.json())

const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
        .then(response => response.json())

//should accept an object in ()
export const createWidgetForTopic = (topicId, widget) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`,
        {
            method: "POST",
            body: JSON.stringify({
                ...widget,
                topicId
            }),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(response => response.json())

export default {
    findAllWidgets, createWidgetForTopic, findWidgetsForTopic
}