// Re-export the supabase client from the integrations module
// to avoid duplicate clients and ensure consistent configuration
import { supabase } from '@/integrations/supabase/client'
export { supabase }

import type { Database } from '@/integrations/supabase/types'

// Helper functions for common operations
export const getPost = async (slug: string) => {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:author_id (
        id,
        email,
        user_metadata
      ),
      categories:post_categories (
        category:categories (
          id,
          name,
          slug
        )
      ),
      tags:post_tags (
        tag:tags (
          id,
          name,
          slug
        )
      ),
      locations:post_locations (
        location:locations (
          id,
          name,
          slug,
          latitude,
          longitude,
          country,
          city
        )
      )
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) throw error
  return data
}

export const getPosts = async (options: {
  page?: number
  limit?: number
  category?: string
  tag?: string
  type?: Database['public']['Enums']['post_type']
} = {}) => {
  const { page = 1, limit = 10, category, tag, type } = options
  const from = (page - 1) * limit
  const to = from + limit - 1

  let query = supabase
    .from('posts')
    .select(`
      *,
      author:author_id (
        id,
        email,
        user_metadata
      ),
      categories:post_categories (
        category:categories (
          id,
          name,
          slug
        )
      ),
      tags:post_tags (
        tag:tags (
          id,
          name,
          slug
        )
      )
    `, { count: 'exact' })
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .range(from, to)

  if (category) {
    query = query.eq('post_categories.categories.slug', category)
  }

  if (tag) {
    query = query.eq('post_tags.tags.slug', tag)
  }

  if (type) {
    query = query.eq('type', type)
  }

  const { data, error, count } = await query

  if (error) throw error
  return { data, count }
}

// Post management functions
export const createPost = async (post: Database['public']['Tables']['posts']['Insert']) => {
  const { data, error } = await supabase
    .from('posts')
    .insert(post)
    .select()
    .single()

  if (error) throw error
  return data
}

export const updatePost = async (
  id: string,
  post: Database['public']['Tables']['posts']['Update']
) => {
  const { data, error } = await supabase
    .from('posts')
    .update(post)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export const deletePost = async (id: string) => {
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// Category management functions
export const getCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  if (error) throw error
  return data
}

export const createCategory = async (
  category: Database['public']['Tables']['categories']['Insert']
) => {
  const { data, error } = await supabase
    .from('categories')
    .insert(category)
    .select()
    .single()

  if (error) throw error
  return data
}

// Tag management functions
export const getTags = async () => {
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .order('name')

  if (error) throw error
  return data
}

export const createTag = async (tag: Database['public']['Tables']['tags']['Insert']) => {
  const { data, error } = await supabase
    .from('tags')
    .insert(tag)
    .select()
    .single()

  if (error) throw error
  return data
}

// Comment management functions
export const createComment = async (comment: Database['public']['Tables']['comments']['Insert']) => {
  const { data, error } = await supabase
    .from('comments')
    .insert(comment)
    .select()
    .single()

  if (error) throw error
  return data
}

export const getComments = async (postId: string) => {
  const { data, error } = await supabase
    .from('comments')
    .select(`
      *,
      author:author_id (
        id,
        email,
        user_metadata
      )
    `)
    .eq('post_id', postId)
    .order('created_at', { ascending: true })

  if (error) throw error
  return data
}

// Location management functions
export const searchLocations = async (query: string) => {
  const { data, error } = await supabase
    .from('locations')
    .select('*')
    .or(`name.ilike.%${query}%,city.ilike.%${query}%,country.ilike.%${query}%`)
    .limit(10)

  if (error) throw error
  return data
}

export const createLocation = async (
  location: Database['public']['Tables']['locations']['Insert']
) => {
  const { data, error } = await supabase
    .from('locations')
    .insert(location)
    .select()
    .single()

  if (error) throw error
  return data
}

// Image upload helper
export const uploadImage = async (file: File, bucket: string = 'blog-images') => {
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random()}.${fileExt}`
  const filePath = `${fileName}`

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(filePath, file)

  if (uploadError) throw uploadError

  const { data: { publicUrl } } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath)

  return publicUrl
}
