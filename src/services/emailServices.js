const API_URL = 'http://127.0.0.1:8080/mail';

export const getEmails = async () => {
    const token = localStorage.getItem('token');
    console.log(`[GET EMAILS] token: ${token}`);
    
    const response = await fetch(`${API_URL}/home`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });

    const data = await response.json();
    console.log(`[EMAILS] data: ${JSON.stringify(data)}`);

    if(data.status != '200'){
        throw new Error('Error fetching emails');
    }
    return data;
}

export const sendEmail = async (token, subject, receivers, content) => {
    const response = await fetch(`${API_URL}/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
        body: JSON.stringify({ subject, receivers, content })
    });

    return await response.json();
}

export const deleteEmail = async (token, id) => {
    const response = await fetch(`{API_URL}/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });

    return await response.json();
};

export const updateDetail = async (token, id, details) => {
    const response = await fetch(`${API_URL}/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
        body: JSON.stringify({ details })
    });

    return await response.json();
};

export const getEmailsByDetail = async (token, detail) => {
    const response = await fetch(`${API_URL}/filter/${detail}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
    });

    return await response.json();
};