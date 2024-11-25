// Interface to represent grouped publications by user and research group
export interface GroupedPublicationByUserAndResearchGroupI {
    user_id: number; // User's unique identifier
    user_first_name: string; // User's first name
    user_last_name: string; // User's last name
    research_group_id: number; // Research group's unique identifier
    research_group_name: string; // Research group's name
    total: number; // Total number of publications by the user in this research group
}
