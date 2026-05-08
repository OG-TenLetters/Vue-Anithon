// For Carousel
query {
  
  Page(perPage: 10, page: 1) {
    media(type: ANIME, sort: [POPULARITY]) {
      id
      idMal
      title {
        romaji
        english
        native
      }
      format
      status
      description
      episodes
      genres
      isAdult
      bannerImage 
      startDate {
        year
      }
      endDate {
        year
      }
    }
  }
}



// For AnimeCard | TrendCard
query {
  
  Page(perPage: 12, page: 3) {
    media(type: ANIME, sort: [POPULARITY]) { // sort dynamically swapped with TRENDING or null
      id
      idMal
      title {
        romaji
        english
        native
      }
      format
      status
      description
      episodes
      genres
      isAdult
      coverImage {
        large
        medium
        extraLarge
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }


    }
  }
}



// For InfoCard
query {
    Media(type: ANIME, idMal: 20) {
      id
      idMal
      title {
        romaji
      }
      format
      status
      description
      season
      episodes
      duration
      genres
      isAdult
      coverImage {
        large
        medium
        extraLarge
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      streamingEpisodes {
        url
        site
      }
      characters (sort: RELEVANCE, perPage: 27 ) {
        nodes {
          name {
            native
            full
          }
          image {
            medium
          }
        }
      }
      staff (sort: [RELEVANCE]) {
        nodes {
          name {
            full
            native
          }
          image {
            medium
          }
          gender
          characters (sort: [ID]) {
            nodes {
              name {
                full
                native
              }
              image {
                medium
              }
            }
          }
        }
      }


    }
}


