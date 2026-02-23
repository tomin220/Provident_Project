import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ipqmdthrhtwezqlxdbyr.supabase.co';
const supabaseAnonKey = 'sb_publishable_gAYWgRj3HdKouz3ZaxRwSw_e7n7mRn2';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
