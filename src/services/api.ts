const API_URL = "https://67b6dcd02bddacfb270c969e.mockapi.io/travelplanner/v1"; 

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/viaje`);
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
    }
};