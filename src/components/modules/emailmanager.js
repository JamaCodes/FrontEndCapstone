
export const getAllEmails= () => {
    return fetch(`http://localhost:8088/emails?_expand=campaign`)
    .then(res => res.json())
}