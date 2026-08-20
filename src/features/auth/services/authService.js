import { supabase } from '../../../config/supabaseClient'

export const signInWithPassword = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

export const signInWithOAuth = async (provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: window.location.origin },
  })
  if (error) throw error
  return data
}

export const signUp = async ({ email, password, fullName, rol }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { nombre_completo: fullName, rol },
      emailRedirectTo: window.location.origin,
    },
  })
  if (error) throw error
  return data
}

export const getRolUsuario = async (userId) => {
  const { data, error } = await supabase.from('perfiles').select('rol').eq('id', userId).single()
  if (error) throw error
  return data?.rol
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export const resetPasswordForEmail = async (email) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/login`,
  })
  if (error) throw error
  return data
}
