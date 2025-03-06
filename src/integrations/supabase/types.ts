export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ad_campaigns: {
        Row: {
          advertiser: string
          budget: number
          created_at: string | null
          end_date: string
          id: string
          name: string
          start_date: string
          total_clicks: number | null
          total_impressions: number | null
        }
        Insert: {
          advertiser: string
          budget: number
          created_at?: string | null
          end_date: string
          id?: string
          name: string
          start_date: string
          total_clicks?: number | null
          total_impressions?: number | null
        }
        Update: {
          advertiser?: string
          budget?: number
          created_at?: string | null
          end_date?: string
          id?: string
          name?: string
          start_date?: string
          total_clicks?: number | null
          total_impressions?: number | null
        }
        Relationships: []
      }
      ad_spaces: {
        Row: {
          active: boolean | null
          created_at: string | null
          current_ad_id: string | null
          id: string
          location: string
          name: string
          size: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          current_ad_id?: string | null
          id?: string
          location: string
          name: string
          size: string
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          current_ad_id?: string | null
          id?: string
          location?: string
          name?: string
          size?: string
        }
        Relationships: []
      }
      ads: {
        Row: {
          active: boolean | null
          alt_text: string | null
          campaign_id: string | null
          clicks: number | null
          created_at: string | null
          destination_url: string
          id: string
          image_url: string
          impressions: number | null
        }
        Insert: {
          active?: boolean | null
          alt_text?: string | null
          campaign_id?: string | null
          clicks?: number | null
          created_at?: string | null
          destination_url: string
          id?: string
          image_url: string
          impressions?: number | null
        }
        Update: {
          active?: boolean | null
          alt_text?: string | null
          campaign_id?: string | null
          clicks?: number | null
          created_at?: string | null
          destination_url?: string
          id?: string
          image_url?: string
          impressions?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ads_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "ad_campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          content: string
          created_at: string | null
          featured_image: string | null
          id: string
          meta_description: string | null
          published: boolean | null
          slug: string
          title: string
          updated_at: string | null
          views: number | null
        }
        Insert: {
          content: string
          created_at?: string | null
          featured_image?: string | null
          id?: string
          meta_description?: string | null
          published?: boolean | null
          slug: string
          title: string
          updated_at?: string | null
          views?: number | null
        }
        Update: {
          content?: string
          created_at?: string | null
          featured_image?: string | null
          id?: string
          meta_description?: string | null
          published?: boolean | null
          slug?: string
          title?: string
          updated_at?: string | null
          views?: number | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          description: string | null
          id: string
          name: string
          slug: string
        }
        Insert: {
          description?: string | null
          id?: string
          name: string
          slug: string
        }
        Update: {
          description?: string | null
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      Contact: {
        Row: {
          created_at: string
          Email: string | null
          First_name: string | null
          id: number
          Last_name: string | null
          Phone: number | null
        }
        Insert: {
          created_at?: string
          Email?: string | null
          First_name?: string | null
          id?: number
          Last_name?: string | null
          Phone?: number | null
        }
        Update: {
          created_at?: string
          Email?: string | null
          First_name?: string | null
          id?: number
          Last_name?: string | null
          Phone?: number | null
        }
        Relationships: []
      }
      post_categories: {
        Row: {
          category_id: string
          post_id: string
        }
        Insert: {
          category_id: string
          post_id: string
        }
        Update: {
          category_id?: string
          post_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_categories_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      track_ad_click: {
        Args: {
          ad_id: string
        }
        Returns: undefined
      }
      track_ad_impression: {
        Args: {
          ad_id: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
