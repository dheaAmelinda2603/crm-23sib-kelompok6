import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eezakkgpbkptlbouccyy.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlemFra2dwYmtwdGxib3VjY3l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MzM0NjgsImV4cCI6MjA2NjQwOTQ2OH0.4WRLkpww_BvnhqzLTrz3g9I7bKeDG15VDeNLEv1MmoA'

export const supabase = createClient(supabaseUrl, supabaseKey)