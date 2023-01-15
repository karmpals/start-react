import axios from "axios";

const MoviesService = {
    getMovieById: async function(value) {
        try {
            const res = await axios.get(`http://localhost:8800/client/movies/find/${value}`,
            {
             headers:{
               token:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBkZTNkNWQ0ODAxZGVmODk5MTUyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzYwMzY1MiwiZXhwIjoxNjc0MDM1NjUyfQ.VB6TS1Iwh4Fl51MVxwaWSMVtE4F47aC8JJ_tEdqPszs"
             }
            });
            return res.data;
         } catch (err) {
           console.log(err)
         }
    },

    
};

export default MoviesService;