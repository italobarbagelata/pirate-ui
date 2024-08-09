export interface ChatResponse {
    paragraphs: string[];
    message_id: string;
    user_id: string;
    fields_updated: {
      project_id?: string;
      organization_name?: string;
      response_tone?: string;
      target_audience?: string;
      purpose?: string;
      mission?: string;
      benefits?: string;
      greeting_word?: string;
      personality_traits?: string;
      max_word_count?: string;
      max_paragraph_count?: string;
      prompt?: string;
    };
  }
  