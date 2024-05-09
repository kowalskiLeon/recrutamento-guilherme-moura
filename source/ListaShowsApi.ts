export const getShows = async (text: string) => {
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${text.toLowerCase()}`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };