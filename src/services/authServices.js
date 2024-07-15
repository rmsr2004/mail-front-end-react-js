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
    return data;
}   

export const logout = async (token) => {
    const response = await fetch(`${API_URL}/logout`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    return await response.json();
}

export const register = async (name, email, password) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    if(!response.ok){
        throw new Error('Invalid credentials');
    }
    
    return await response.json();
}