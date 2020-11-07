const WIDGET_URL = "https://mighty-beyond-40135.herokuapp.com/api/widgets"
const TOPIC_URL  = "https://mighty-beyond-40135.herokuapp.com/api/topics"
// const WIDGET_URL="https://radiant-sands-60442.herokuapp.com/api/widgets"
// const TOPIC_URL="https://radiant-sands-60442.herokuapp.com/api/topics"


const findAllWidgets = () =>
    fetch(WIDGET_URL)
        .then(response => response.json())

const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
        .then(response => response.json())

//should accept an object in ()
const createWidgetForTopic = (topicId, widget) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`,
        {
            method: "POST",
            body: JSON.stringify(widget),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(response => response.json())

const updateWidget = (widget) =>
    fetch(`${WIDGET_URL}/${widget.id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

const deleteWidget = (wid) =>
    fetch(`${WIDGET_URL}/${wid}`, {
        method: "DELETE"})
    .then(response => response.json())

const updateWidgetForTopic = (topicId, widgets) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: "PUT",
        body: JSON.stringify(widgets),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export default {
    findAllWidgets, createWidgetForTopic, findWidgetsForTopic, updateWidget, deleteWidget, updateWidgetForTopic
}
