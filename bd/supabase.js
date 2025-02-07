import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://slaxkgaucoeensqfccqu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsYXhrZ2F1Y29lZW5zcWZjY3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzNDY2MzgsImV4cCI6MjA1MzkyMjYzOH0.O5Dtg35y25JNK6hb6cMOymvBdZNqHbzhGLohrjM_oHU'; 
const supabase = createClient(supabaseUrl, supabaseKey);