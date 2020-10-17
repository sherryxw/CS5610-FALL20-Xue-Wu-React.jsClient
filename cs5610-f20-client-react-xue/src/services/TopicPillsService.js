const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/10394858392/lessons"
const topicPillUrl = "https://wbdv-generic-server.herokuapp.com/api/10394858392/pills"


const findTopicPillsForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/pills`)
        .then(response => response.json())

const createTopic = (lessonId, topic) =>
    fetch(`${lessonUrl}/${lessonId}/pills`, {
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
