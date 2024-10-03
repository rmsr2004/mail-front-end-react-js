const API_URL = 'http://127.0.0.1:8080/mail';

export const login = async (email, password) => {    
    console.log(`[LOGIN] email: ${email}, password: ${password}`);

    const response = await fetch(`${API_URL}/login`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    console.log(`[LOGIN] data: ${JSON.stringify(data)}`);

    if(data.status != '200'){
        throw new Error('Invalid credentials');
    }

    localStorage.setItem('token', data.results);
    console.log(`[LOGIN] token: ${localStorage.getItem('token')}`);
    return data;
}   

export const logout = async () => {
    const response = await fetch(`${API_URL}/logout`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });

    const data = await response.json();

    console.log(`[LOGOUT] data: ${JSON.stringify(data)}`);

    localStorage.removeItem('token');
    return data;
}

export const register = async (name, email, password) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();

    console.log(`[REGISTER] data: ${JSON.stringify(data)}`);

    if(data.status != '200'){
        throw new Error('Invalid credentials');
    }

    return data;
}