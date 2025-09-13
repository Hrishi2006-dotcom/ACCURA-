const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001'

let token: string | null = null
export const setToken = (t: string) => { token = t }
export const getToken = () => token

async function apiFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    ...options,
  })
  return res.json()
}

export const login = async (email: string, password: string) => {
  const data = await apiFetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  })
  setToken(data.token)
  return data
}

export const signup = async (email: string, password: string) => {
  const data = await apiFetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  })
  setToken(data.token)
  return data
}

export const getKpis = () => apiFetch('/api/kpis/summary')
export const getWidgets = () => apiFetch('/api/widgets/list')
export const getUploads = () => apiFetch('/api/uploads/requested', { method: 'POST' })
export const markUploadReceived = (name: string) =>
  apiFetch('/api/uploads/mark-received', {
    method: 'POST',
    body: JSON.stringify({ name })
  })
