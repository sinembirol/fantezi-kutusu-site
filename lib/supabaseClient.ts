import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dzidefhirlxofvmnsxyi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBoYWJhc2Uta2V5IiwiaWF0IjoxNjkyODg2MDI3LCJleHAiOjE5MDU0NDIwMjcsInN1YiI6ImY2NjY1ZGNkLTkzN2ItNDM3ZC1iNWE3LWQ0MmJmYTAxNjUwZSJ9.79k0DhJyaIzChZbhIhxR5nQG93aS4_Rf6iOR9M0bWSo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

