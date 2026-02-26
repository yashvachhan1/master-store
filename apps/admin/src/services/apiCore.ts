const API_URL = import.meta.env.VITE_API_URL;

export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
    const token = localStorage.getItem('admin_token');

    const headers = new Headers(options.headers || {});
    headers.append('Content-Type', 'application/json');
    if (token) {
        headers.append('Authorization', `Bearer ${token}`);
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || `API request failed: ${response.statusText}`);
    }

    return response.json();
};

export const CategoryService = {
    getAll: () => apiFetch('/api/v1/categories'),
    create: (data: any) => apiFetch('/api/v1/categories', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
};

export const ProductService = {
    getAll: () => apiFetch('/api/v1/products'),
    create: (data: any) => apiFetch('/api/v1/products', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
};
