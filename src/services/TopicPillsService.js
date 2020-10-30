const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/10394858392/lessons"
const topicPillUrl = "https://wbdv-generic-server.herokuapp.com/api/10394858392/topics"


const findTopicPillsForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`)
        .then(response => response.json())

const createTopic = (lessonId, topic) =>
    fetch(`${lessonUrl}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())


const deleteTopic = (topicPillId) =>
    fetch(`${topicPillUrl}/${topicPillId}`, {
        method: "DELETE"
    }).then(response => response.json())


const updateTopic = (topicPill) =>
    fetch(`${topicPillUrl}/${topicPill._id}`, {
        method: "PUT",
        body: JSON.stringify(topicPill),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export default {
    findTopicPillsForLesson,
    createTopic,
    updateTopic,
    deleteTopic}
