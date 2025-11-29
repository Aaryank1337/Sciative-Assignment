const API_BASE_URL = "https://viaje.ai";

/**
 * Fetches testimonials from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of testimonial objects.
 */
export const fetchTestimonials = async () => {
    const url = `${API_BASE_URL}/testimonial_api/`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data && Array.isArray(data.data)) {
            return data.data;
        } else {
            throw new Error("Invalid testimonial data structure received from API.");
        }
    } catch (error) {
        console.error("Error in fetchTestimonials:", error);
        throw error; 
    }
};

/**
 * Fetches seat information from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of seat objects.
 */
export const fetchSeatInfo = async () => {
    const url = `${API_BASE_URL}/seatinfo_api/`;
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Structure check matches the seat data: nested under 'data'
        if (data && Array.isArray(data.data)) {
            return data.data;
        } else {
            throw new Error("Invalid seat info data structure received from API.");
        }
    } catch (error) {
        console.error("Error in fetchSeatInfo:", error);
        throw error; 
    }
};