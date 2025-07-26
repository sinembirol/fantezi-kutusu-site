import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://<https://dzidefhirlxofvmnsxyi.supabase.co>.supabase.co'
const supabaseAnonKey = '<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6aWRlZmhpcmx4b2Z2bW5zeHlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MzgzMTYsImV4cCI6MjA2OTExNDMxNn0.ExHePdB21T7uCug9teLpoR1y66k11W21Pf4MblYr2jI>'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

